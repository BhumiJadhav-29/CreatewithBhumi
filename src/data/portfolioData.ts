import { ProjectItem, SkillItem, ServiceItem, PricingPlan } from '../types';

export const PERSONAL_INFO = {
  name: 'Bhumi Jadhav',
  studioName: 'BuildWithBhumi',
  tagline: 'We Build Digital Solutions & Academic Projects',
  roles: ['Full Stack Developer', 'Academic Project Specialist', 'Java Specialist', 'AI Prompt Engineer', 'UI/UX Designer'],
  summary: 'Motivated BSc IT graduate from Mumbai (CGPA: 8.60) specializing in modern web applications, academic capstone & final-year projects, intelligent Gemini AI software, and Java enterprise systems.',
  email: 'jadhavbhumi02@gmail.com',
  phone: '+91 7875742032',
  location: 'Mumbai, Maharashtra, India',
  website: 'https://createwithbhumi.netlify.app/',
  whatsappUrl: 'https://wa.me/917875742032?text=Hi%20Bhumi,%20I%20am%20interested%20in%20discussing%20a%20project!',
  github: 'https://github.com/BhumiJadhav-29',
  linkedin: 'https://www.linkedin.com/in/bhumi-jadhav-229658418/',
  resumeUrl: '/resume/Bhumi-Jadhav-resume.pdf',
  profileImage: '/bhumi.jpg',
  stats: [
    { label: 'Projects Built', value: '12+' },
    { label: 'Academic & Client Builds', value: '15+' },
    { label: 'Degree CGPA', value: '8.60' },
    { label: 'Student Support & Viva Prep', value: '100%' },
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    category: 'ai',
    type: 'Python • Flask • Gemini AI • HTML • CSS • JS',
    status: 'Completed',
    description: 'Developed an AI-powered web application that evaluates resumes against specific job roles. Implemented ATS-style scoring, technical-skill extraction, missing-keyword identification, and personalized improvement recommendations. Built a responsive interface for resume upload and analysis, and deployed the application on Render.',
    image: '/images/AI-Resume-Analyzer.png',
    technologies: ['Python', 'Flask', 'Gemini AI', 'JavaScript', 'HTML5', 'CSS3', 'Render'],
    features: [
      'Automated resume parsing and ATS score calculation against job descriptions',
      'Google Gemini AI technical-skill extraction and missing-keyword identification',
      'Personalized suggestions for resume formatting and keyword density',
      'Deployed on Render with responsive drag-and-drop resume upload'
    ],
    liveLink: 'https://ai-resume-analyzer-20h6.onrender.com/',
    githubLink: 'https://github.com/BhumiJadhav-29/Ai-Resume-Analyzer_',
    highlights: 'Featured on official resume & deployed in production on Render.'
  },
  {
    id: 'javaquest',
    title: 'JavaQuest – Gamified Learning Platform',
    category: 'java',
    type: 'Java • Web Development • Gamification • AI',
    status: 'Completed',
    description: 'A Duolingo-inspired platform for learning Java and other programming technologies through interactive lessons and quizzes. Designed structured learning paths to make programming education engaging and beginner-friendly, deployed as a user-friendly web application with an interactive learning experience.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&auto=format&fit=crop&q=80',
    technologies: ['Java', 'Web Development', 'AI', 'JavaScript', 'CSS3', 'Gamified UX'],
    features: [
      'Duolingo-inspired interactive quizzes and progressive difficulty stages',
      'Structured learning paths covering OOP, syntax, loops, and data structures',
      'Instant feedback loops and visual score badges to motivate learners',
      'Deployed responsive web app with beginner-friendly accessibility'
    ],
    highlights: 'Duolingo-inspired gamified programming platform featured in Bhumi\'s resume.'
  },
  {
    id: 'smart-traffic-system',
    title: 'Smart Traffic System',
    category: 'iot',
    type: 'Smart Sensors • Data Analytics • Traffic Flow',
    status: 'Completed',
    description: 'Designed an intelligent traffic-management concept to monitor and optimize vehicle flow using sensors and data analytics. Proposed dynamic traffic-signal adjustment based on road conditions to reduce congestion and intersection waiting time. Focused on improving road safety and enabling smoother, more efficient urban transportation.',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&auto=format&fit=crop&q=80',
    technologies: ['Sensors', 'Data Analytics', 'Microcontroller', 'Embedded C', 'Traffic Engineering'],
    features: [
      'Dynamic traffic-signal adjustment based on real-time vehicle density',
      'Sensor-guided queue length detection and bottleneck prediction',
      'Emergency vehicle corridor prioritization logic',
      'Simulated urban intersection layout reducing waiting times significantly'
    ],
    highlights: 'Key conceptual engineering research project from Bhumi\'s resume.'
  },
  {
    id: 'smart-blind-stick',
    title: 'Smart Blind Stick',
    category: 'iot',
    type: 'IoT Hardware • Assistive Tech • Research Award',
    status: 'Research Award',
    description: 'An assistive IoT device created to empower visually impaired individuals with spatial awareness, obstacle detection, and audible warning cues. Competed and recognized at the Avishkar Research Convention.',
    image: '/images/blindstick.jpg',
    technologies: ['Arduino', 'Ultrasonic Sensors', 'Embedded C', 'Buzzer Alerts', 'IoT'],
    features: [
      'Multi-angle ultrasonic detection up to 3 meters',
      'Dynamic frequency haptic and audio feedback based on proximity',
      'Compact, lightweight ergonomic enclosure with battery management',
      'Puddle/water detection sensor integration'
    ],
    highlights: '🏆 Official Research Project at Avishkar Research Convention.'
  },
  {
    id: 'air-drawing-system',
    title: 'Air Drawing & Touchless Presentation System',
    category: 'ai',
    type: 'Computer Vision • OpenCV • MediaPipe',
    status: 'Completed',
    description: 'Developed an interactive Touchless Presentation and Air Drawing tool using computer vision. Tracks real-time hand gestures via webcam for seamless, keyboard-free slide control and virtual canvas drawing.',
    image: '/images/air-drawing.png',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'Computer Vision'],
    features: [
      'Real-time 21-landmark hand gesture recognition',
      'Color-picker and adjustable brush thickness for air-drawing',
      'Slide advance / rewind gesture controls for presentations',
      'Zero specialized hardware needed — runs with standard webcams'
    ],
    githubLink: 'https://github.com/BhumiJadhav-29/Touchless-Presentation-Tool',
    highlights: 'Praised for intuitive HCI (Human Computer Interaction) and touchless presentation control.'
  },
  {
    id: 'chopstix-restaurant',
    title: 'Chopstix Chinese Restaurant',
    category: 'web',
    type: 'Restaurant Platform • React & Tailwind',
    status: 'Completed',
    description: 'A modern, responsive restaurant storefront designed for Chopstix. Highlights culinary specialties, interactive food categories, customer testimonials, and direct ordering inquiries.',
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=900&auto=format&fit=crop&q=80',
    technologies: ['React.js', 'Tailwind CSS', 'Vite', 'Responsive Design'],
    features: [
      'Interactive culinary menu categorized by cuisine & dietary preferences',
      'High-resolution visual dish gallery with instant detail inspection',
      'Direct WhatsApp and phone order routing',
      'Mobile-first performance with sub-second page loads'
    ],
    liveLink: 'https://chopstix-chinese.lovable.app/',
    highlights: 'Live production client website driving genuine customer inquiries.'
  },
  {
    id: 'raju-sandwich',
    title: 'Raju Sandwich',
    category: 'web',
    type: 'Food Business Website • E-Menu',
    status: 'Completed',
    description: 'Branded web presence for a popular food venture. Designed with appetizing visuals, fast-loading digital menu cards, price transparency, and seamless customer touchpoints.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=900&auto=format&fit=crop&q=80',
    technologies: ['React.js', 'CSS Modules', 'Mobile Optimization'],
    features: [
      'Category-based snack and sandwich showcase',
      'Price lists and combo deals with clear nutritional callouts',
      'One-tap call and directions integration',
      'Optimized for fast mobile ordering'
    ],
    liveLink: 'https://raju-sandwich.lovable.app/',
    highlights: 'Client loved the crisp UI that matched their fast-food service speed.'
  },
  {
    id: 'ecommerce-platform',
    title: 'Modern E-Commerce Platform',
    category: 'web',
    type: 'E-Commerce • React • State Management',
    status: 'Completed',
    description: 'A scalable eCommerce application offering a seamless, secure, and intuitive shopping experience with real-time product filtering, dynamic cart calculations, and responsive checkout flows.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Context API'],
    features: [
      'Product catalog with sorting by price, popularity, and categories',
      'Persistent shopping cart with quantity adjustment and coupon discounts',
      'Checkout validation with instant visual feedback',
      'Fully responsive for desktop, tablet, and mobile'
    ],
    githubLink: 'https://github.com/BhumiJadhav-29/ecomerce-website',
    highlights: 'Demonstrates complete front-to-back state management and cart flow.'
  },
];

export const SKILLS: SkillItem[] = [
  // Frontend
  { name: 'React.js', level: 92, category: 'Frontend', description: 'Component architecture, hooks, state management, SPA routing' },
  { name: 'JavaScript (ES6+)', level: 88, category: 'Frontend', description: 'Async/await, DOM, closures, modern ES standards' },
  { name: 'HTML5 & CSS3', level: 95, category: 'Frontend', description: 'Semantic markup, Flexbox, CSS Grid, animations' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend', description: 'Utility-first rapid prototyping, responsive systems' },
  { name: 'TypeScript', level: 82, category: 'Frontend', description: 'Type safety, interfaces, strict compiler configuration' },

  // Backend & Languages
  { name: 'Java', level: 90, category: 'Backend & Languages', description: 'OOP, Collections, JDBC, Desktop Swing/AWT, Exception handling' },
  { name: 'Python', level: 85, category: 'Backend & Languages', description: 'Flask, OpenCV, MediaPipe, scripting, data manipulation' },
  { name: 'C / C++', level: 85, category: 'Backend & Languages', description: 'Data structures, memory management, embedded logic' },
  { name: 'Node.js & Express', level: 84, category: 'Backend & Languages', description: 'REST APIs, middleware, server-side logic' },

  // AI & IoT
  { name: 'AI Prompt Engineering', level: 88, category: 'AI & IoT', description: 'System prompting, few-shot tuning, Gemini AI integration' },
  { name: 'Gemini AI Integration', level: 86, category: 'AI & IoT', description: 'Google Gen AI SDK, ATS scoring, conversational agents' },
  { name: 'OpenCV & MediaPipe', level: 82, category: 'AI & IoT', description: 'Computer vision, real-time gesture tracking' },
  { name: 'IoT & Microcontrollers', level: 85, category: 'AI & IoT', description: 'Ultrasonic sensors, Arduino, hardware prototyping' },

  // Database & Tools
  { name: 'MySQL / SQL', level: 88, category: 'Database & Tools', description: 'Relational schemas, queries, joins, transactions' },
  { name: 'UI/UX Design', level: 92, category: 'Database & Tools', description: 'Wireframing, visual hierarchy, Figma prototyping' },
  { name: 'Git & GitHub', level: 88, category: 'Database & Tools', description: 'Version control, branching, collaboration' },
  { name: 'Linux & Postman', level: 80, category: 'Database & Tools', description: 'Shell workflows, API testing, deployment environments' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'academic-projects',
    title: 'Academic & Final Year Projects',
    icon: 'GraduationCap',
    description: 'Custom academic project development for BSc IT, BCA, MCA, B.E./B.Tech, and Diploma students. Includes complete working source code, IEEE-format Black Book documentation, UML diagrams, and 1-on-1 viva guidance.',
    highlights: ['Complete working source code (Web, Java, Python, AI, IoT)', 'IEEE-standard project documentation & Black Book', 'Full UML diagrams, ERD, DFD, & architecture charts', '1-on-1 external viva coaching & presentation slides'],
    popular: true,
  },
  {
    id: 'web-development',
    title: 'Website Development',
    icon: 'Code2',
    description: 'Affordable, blazing-fast websites crafted with React, modern CSS, and clean code. From business landing pages to full-featured web applications.',
    highlights: ['Modern responsive design', 'Fast loading & SEO optimized', 'Clean, maintainable codebase', 'Cross-browser tested'],
    popular: true,
  },
  {
    id: 'app-development',
    title: 'Mobile & Desktop Apps',
    icon: 'Smartphone',
    description: 'Android applications and Java desktop software engineered for stability, intuitive UX, and seamless user interaction.',
    highlights: ['Java desktop CRUD software', 'Android safety & utility tools', 'Offline-friendly workflows', 'Database integration'],
  },
  {
    id: 'iot-solutions',
    title: 'IoT & Smart Automation',
    icon: 'Cpu',
    description: 'Hardware-software embedded projects integrating microcontrollers, ultrasonic sensors, and smart automation triggers.',
    highlights: ['Sensor integration & calibration', 'Microcontroller programming', 'Smart safety devices', 'Custom prototype fabrication'],
  },
  {
    id: 'ai-prompt-engineering',
    title: 'AI & Gemini Integration',
    icon: 'Sparkles',
    description: 'Supercharge your applications with Google Gemini AI, ATS resume analysis, intelligent chatbots, and custom prompt workflows.',
    highlights: ['Gemini API SDK implementation', 'ATS analyzer algorithms', 'Context-aware conversational bots', 'Intelligent data extraction'],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Prototyping',
    icon: 'Palette',
    description: 'Modern, high-converting digital interfaces with deliberate typography, high-contrast layouts, and responsive design systems.',
    highlights: ['Wireframes & high-fidelity mockups', 'Mobile-first layout precision', 'Interactive prototypes', 'Design system setup'],
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Website',
    price: '₹999',
    usdPrice: '$12',
    tagline: 'Affordable single-page business presence or personal portfolio.',
    features: [
      '1 Clean Responsive Landing Page',
      'Mobile-First Layout & Fast Loading',
      'Contact Form & Direct WhatsApp Button',
      'Free Cloud Hosting Deployment & Basic SEO',
      '7 Days Free Post-Launch Support',
    ],
    suitableFor: 'Local Shops, Freelancers, Personal Portfolios',
  },
  {
    id: 'academic',
    name: 'Academic Project',
    price: '₹1,499',
    usdPrice: '$18',
    tagline: 'Complete BSc IT, BCA, MCA, or Engineering capstone project with code & report.',
    popular: true,
    features: [
      'Complete Working Source Code (Web / Java / Python / AI / IoT)',
      'IEEE-Standard Black Book Documentation & Report (Chapters 1–8)',
      'Full UML Diagrams (Use Case, Class, Sequence, DFD, ERD)',
      'Project Synopsis & Topic Approval Assistance',
      '1-on-1 Code Walkthrough & External Viva Exam Prep',
      'Local Setup + Live Working Cloud/Render Deployment',
    ],
    suitableFor: 'BSc IT, BCA, MCA, B.E., & Diploma Students',
  },
  {
    id: 'business',
    name: 'Business Website',
    price: '₹2,499',
    usdPrice: '$30',
    tagline: 'Multi-page website with menus, product catalogs, and client inquiry forms.',
    features: [
      'Multi-Page Website (Up to 5 Pages)',
      'Custom UI/UX Design System',
      'Interactive Product/Menu Catalogs',
      'Contact Forms, Google Maps & Social Integrations',
      'SEO Optimization & 30 Days Dedicated Support',
    ],
    suitableFor: 'Restaurants, Cafes, Retail Brands, Agencies',
  },
  {
    id: 'premium',
    name: 'Full Stack & AI',
    price: '₹4,499',
    usdPrice: '$55',
    tagline: 'Database-driven web application, Gemini AI integration, or Java desktop software.',
    features: [
      'Full Stack Web Application (React / Node / Python / Java)',
      'AI Integration (Gemini / Smart ATS / Chatbots)',
      'Database Architecture (MySQL / MongoDB)',
      'Admin Control Panel & User Auth',
      'Priority Support & Deployment Assistance',
    ],
    suitableFor: 'Startups, SaaS MVPs, Smart AI Prototypes',
  },
];
