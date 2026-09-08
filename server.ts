import 'dotenv/config';
import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory + file persistence for feedback
const DATA_DIR = path.join(__dirname, 'data');
const FEEDBACK_FILE = path.join(DATA_DIR, 'feedback.json');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

interface FeedbackItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  message: string;
  createdAt: string;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
}

const initialFeedback: FeedbackItem[] = [
  {
    id: '1',
    name: 'Aarav Sharma',
    role: 'Chopstix Restaurant Owner',
    rating: 5,
    message: 'Bhumi delivered an outstanding website for Chopstix. The UI is sleek, super fast, and our customers love the online menu experience! Highly recommend BuildWithBhumi.',
    createdAt: '2026-08-14T10:00:00Z',
  },
  {
    id: '2',
    name: 'Pooja Patil',
    role: 'BSc IT Project Colleague',
    rating: 5,
    message: 'Worked with Bhumi on the Avishkar Research Convention IoT project. Her problem-solving skills in both hardware integration and Java/Python backend are exceptional.',
    createdAt: '2026-08-20T14:30:00Z',
  },
  {
    id: '3',
    name: 'Rajesh Gupta',
    role: 'Founder, Food Ventures',
    rating: 5,
    message: 'The website for Raju Sandwich exceeded expectations! Clean design, great mobile performance, and fast delivery within timeline.',
    createdAt: '2026-09-01T09:15:00Z',
  },
];

function getStoredFeedback(): FeedbackItem[] {
  try {
    if (fs.existsSync(FEEDBACK_FILE)) {
      const data = fs.readFileSync(FEEDBACK_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading feedback file:', err);
  }
  return initialFeedback;
}

function saveFeedback(items: FeedbackItem[]) {
  try {
    fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(items, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing feedback file:', err);
  }
}

// Initial seed
if (!fs.existsSync(FEEDBACK_FILE)) {
  saveFeedback(initialFeedback);
}

// Lazy Gemini AI client
let genAiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  if (!genAiClient) {
    genAiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return genAiClient;
}

// --- API Routes ---

app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    app: 'BuildWithBhumi',
    developer: 'Bhumi Jadhav',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/feedback', (req: Request, res: Response) => {
  const feedback = getStoredFeedback();
  res.json(feedback);
});

app.post('/api/feedback', (req: Request, res: Response) => {
  const { name, role, rating, message } = req.body;
  if (!name || !role || !message) {
    return res.status(400).json({ error: 'Name, role, and message are required.' });
  }

  const numericRating = Math.min(5, Math.max(1, Number(rating) || 5));
  const newItem: FeedbackItem = {
    id: Date.now().toString(),
    name: String(name).trim(),
    role: String(role).trim(),
    rating: numericRating,
    message: String(message).trim(),
    createdAt: new Date().toISOString(),
  };

  const currentFeedback = getStoredFeedback();
  currentFeedback.unshift(newItem);
  saveFeedback(currentFeedback);

  res.status(201).json({ success: true, item: newItem });
});

app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, phone, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const newMessage: ContactMessage = {
    id: Date.now().toString(),
    name: String(name).trim(),
    email: String(email).trim(),
    phone: phone ? String(phone).trim() : undefined,
    subject: subject ? String(subject).trim() : 'General Inquiry',
    message: String(message).trim(),
    createdAt: new Date().toISOString(),
  };

  try {
    let list: ContactMessage[] = [];
    if (fs.existsSync(MESSAGES_FILE)) {
      list = JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf-8'));
    }
    list.unshift(newMessage);
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(list, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving contact message:', err);
  }

  res.status(201).json({
    success: true,
    message: 'Thank you! Your message has been received. Bhumi will get back to you shortly.',
  });
});

// Bhumi Knowledge Base for Smart AI Chatbot
const BHUMI_SYSTEM_PROMPT = `
You are Bhumi AI, the intelligent virtual assistant for Bhumi Jadhav and BuildWithBhumi studio.
Profile Details:
- Name: Bhumi Jadhav
- Title: Web Developer | UI/UX Designer | Java Developer | AI Prompt Engineer
- Education: BSc in Information Technology (BSc IT) Graduate
- Location: Mumbai, Maharashtra, India
- Email: jadhavbhumi02@gmail.com
- Phone / WhatsApp: +91 7875742032
- GitHub: https://github.com/BhumiJadhav-29
- LinkedIn: https://www.linkedin.com/in/bhumi-jadhav-229658418/
- Studio: BuildWithBhumi (Digital Solution Studio)

Key Projects:
1. AI Resume Analyzer: Python, Flask, Gemini AI, ATS scoring and smart optimization feedback. Live demo: https://ai-resume-analyzer-20h6.onrender.com/
2. JavaQuest: Gamified learning platform for Java and programming technologies with interactive quizzes and lessons (Duolingo-inspired).
3. Air Drawing & Touchless Presentation System: Python, OpenCV, MediaPipe for gesture-based slide control and air writing.
4. Smart Blind Stick: IoT Ultrasonic sensors, awarded in the Avishkar Research Convention.
5. Smart Traffic System: Intelligent sensor & data analytics concept for vehicle flow optimization.
6. Client Web Projects: Chopstix Restaurant Website (https://chopstix-chinese.lovable.app/), Raju Sandwich (https://raju-sandwich.lovable.app/).

Pricing Packages (Affordable & Transparent):
- Starter Website: ₹999 ($12) - Clean responsive landing page, basic SEO, 7 days support
- Academic / Final Year Project: ₹1,499 ($18) - Complete working code, IEEE Black Book report, UML diagrams, viva prep
- Business Website: ₹2,499 ($30) - Multi-page website, catalogs, forms, 30 days support
- Full Stack & AI: ₹4,499 ($55) - Full-stack web app, Gemini AI tools, database architecture

Personality & Instructions:
- Answer visitors warmly, professionally, and concisely.
- Highlight Bhumi's technical strengths (React, Java, Python, AI integration, IoT, UI/UX).
- If they want to hire Bhumi or discuss pricing, invite them to use the Contact form, email jadhavbhumi02@gmail.com, or WhatsApp at +91 7875742032.
`;

app.post('/api/chat', async (req: Request, res: Response) => {
  const { message } = req.body;
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ reply: 'Please provide a message.' });
  }

  const userQuery = message.trim();

  // Try Gemini AI if API key is present
  const ai = getGenAI();
  if (ai) {
    try {
      console.log('[Chat] Querying Gemini model gemini-3.8-flash for:', userQuery);
      // Timeout promise to avoid hanging if network is slow
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('Gemini API timeout')), 12000)
      );

      const generatePromise = ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: userQuery,
        config: {
          systemInstruction: BHUMI_SYSTEM_PROMPT,
        },
      });

      const response = await Promise.race([generatePromise, timeoutPromise]);

      if (response && response.text) {
        console.log('[Chat] Gemini replied successfully');
        return res.json({ reply: response.text.trim() });
      }
    } catch (err: any) {
      console.warn('Gemini API call failed or timed out, falling back to smart local response:', err?.message || err);
    }
  }

  // Smart local fallback responses if offline or Gemini API is not configured
  const q = userQuery.toLowerCase();
  let reply = '';

  if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
    reply = "Hello! 👋 I'm Bhumi AI Assistant. Welcome to BuildWithBhumi! How can I help you today? You can ask about Bhumi's projects, services, tech stack, pricing, or how to get in touch.";
  } else if (q.includes('service') || q.includes('what do you do') || q.includes('offer')) {
    reply = "Bhumi offers Website Development (React/Tailwind), Android App Development, Academic & Research Projects (BSc IT/Final Year/Avishkar), IoT & Automation, AI Prompt Engineering & Gemini Integration, and UI/UX Design!";
  } else if (q.includes('project') || q.includes('work') || q.includes('portfolio')) {
    reply = "Some of Bhumi's top projects include the AI Resume Analyzer (ATS scoring with Gemini AI), JavaQuest (gamified Java learning platform), Touchless Air Drawing Presentation Tool (OpenCV/MediaPipe), the award-winning Smart Blind Stick (IoT), Smart Traffic System, and client restaurant websites like Chopstix and Raju Sandwich!";
  } else if (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('package')) {
    reply = "BuildWithBhumi offers low & transparent packages: Starter Website at ₹999 ($12), Academic / Final Year Project at ₹1,499 ($18) including full code and Black Book documentation, Business Website at ₹2,499 ($30), and Full Stack & AI at ₹4,499 ($55)!";
  } else if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('phone') || q.includes('reach')) {
    reply = "You can reach Bhumi directly via email at jadhavbhumi02@gmail.com, call or WhatsApp at +91 7875742032, or fill out the contact form below!";
  } else if (q.includes('resume') || q.includes('cv')) {
    reply = "You can view and download Bhumi's resume directly using the 'Hire Me' or 'Download Resume' buttons on this site, or via /resume/Bhumi-Jadhav-resume.pdf.";
  } else if (q.includes('education') || q.includes('college') || q.includes('degree')) {
    reply = "Bhumi Jadhav is a BSc IT graduate from Mumbai, specializing in Full Stack Web Development, Java software architecture, and AI-assisted applications.";
  } else {
    reply = `Thank you for asking! Bhumi is a full stack developer & UI/UX designer specializing in React, Java, Python, and AI integration. For specific project discussions or custom quotes, feel free to send a message through the contact form or WhatsApp (+91 7875742032)!`;
  }

  return res.json({ reply });
});

// --- Server & Vite Setup ---
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 BuildWithBhumi server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
