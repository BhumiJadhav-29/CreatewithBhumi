import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

function generateResume() {
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 40, bottom: 40, left: 45, right: 45 },
  });

  const publicPath = path.resolve(process.cwd(), 'public/resume/Bhumi-Jadhav-resume.pdf');
  const distPath = path.resolve(process.cwd(), 'dist/resume/Bhumi-Jadhav-resume.pdf');

  fs.mkdirSync(path.dirname(publicPath), { recursive: true });
  try {
    fs.mkdirSync(path.dirname(distPath), { recursive: true });
  } catch (e) {}

  const writeStream = fs.createWriteStream(publicPath);
  doc.pipe(writeStream);

  const primaryColor = '#111827';
  const secondaryColor = '#374151';
  const lightGray = '#4b5563';
  const dividerColor = '#9ca3af';

  function sectionHeader(title) {
    doc.moveDown(0.6);
    doc.fontSize(11).font('Helvetica-Bold').fillColor(primaryColor).text(title);
    const y = doc.y + 2;
    doc.strokeColor(dividerColor).lineWidth(0.75).moveTo(45, y).lineTo(550, y).stroke();
    doc.y = y + 5;
  }

  // --- HEADER ---
  doc.fontSize(20).font('Helvetica-Bold').fillColor(primaryColor).text('BHUMI JADHAV', { align: 'left' });
  doc.moveDown(0.25);
  doc.fontSize(9).font('Helvetica').fillColor(secondaryColor).text(
    'jadhavbhumi02@gmail.com     7875742032     Mumbai     createwithbhumi.netlify.app/',
    { align: 'left' }
  );

  // --- CAREER OBJECTIVE ---
  sectionHeader('Career Objective');
  doc.fontSize(9).font('Helvetica').fillColor(secondaryColor).text(
    'Motivated and curious BSc IT graduate with a strong interest in web development and application development. Seeking an entry-level opportunity to apply Java, Python, React, SQL, HTML and CSS skills, learn from real-world projects, and contribute to building reliable, user-friendly digital solutions.',
    { lineGap: 2.5, align: 'justify' }
  );

  // --- EDUCATION ---
  sectionHeader('Education');

  // College 1
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primaryColor).text('BSc IT, Dnyansadhana College', { continued: true });
  doc.font('Helvetica').fillColor(lightGray).text('2026', { align: 'right' });
  doc.font('Helvetica').fillColor(secondaryColor).text('University of Mumbai CGPA: 8.60', { continued: true });
  doc.fillColor(lightGray).text('Thane', { align: 'right' });
  doc.moveDown(0.4);

  // College 2
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primaryColor).text('Higher Secondary, Thirani College', { continued: true });
  doc.font('Helvetica').fillColor(lightGray).text('2023', { align: 'right' });
  doc.font('Helvetica').fillColor(lightGray).text('Thane', { align: 'right' });
  doc.moveDown(0.4);

  // School
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primaryColor).text('Secondary Education, Little Flower High School', { continued: true });
  doc.font('Helvetica').fillColor(lightGray).text('2021', { align: 'right' });
  doc.font('Helvetica').fillColor(lightGray).text('Thane (W)', { align: 'right' });

  // --- TECHNICAL SKILLS ---
  sectionHeader('Technical Skills');
  const leftColX = 45;
  const rightColX = 300;
  let skillsY = doc.y;

  doc.text('', leftColX, skillsY);
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('Languages');
  doc.font('Helvetica').fontSize(9).fillColor(secondaryColor).text('C, C++, Java, Python');
  doc.moveDown(0.3);
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('Web');
  doc.font('Helvetica').fontSize(9).fillColor(secondaryColor).text('HTML, CSS, JavaScript');

  let nextY = doc.y;
  doc.text('', rightColX, skillsY);
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('Database');
  doc.font('Helvetica').fontSize(9).fillColor(secondaryColor).text('MySQL');
  doc.moveDown(0.3);
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('Concepts');
  doc.font('Helvetica').fontSize(9).fillColor(secondaryColor).text('OOP, JDBC, Advanced Java');

  doc.x = 45;
  doc.y = Math.max(nextY, doc.y) + 5;

  // --- PROJECTS ---
  sectionHeader('Projects');

  // Project 1: Smart Traffic System
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primaryColor).text('Smart Traffic System');
  doc.fontSize(8.5).font('Helvetica').fillColor(secondaryColor).text(
    'Designed an intelligent traffic-management concept to monitor and optimize vehicle flow using sensors and data analytics. Proposed dynamic traffic-signal adjustment based on road conditions to reduce congestion and intersection waiting time. Focused on improving road safety and enabling smoother, more efficient urban transportation.',
    { lineGap: 2 }
  );
  doc.moveDown(0.5);

  // Project 2: AI Resume Analyzer
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primaryColor).text('AI Resume Analyzer, ', { continued: true });
  doc.font('Helvetica-Oblique').fillColor(lightGray).text('Python, Flask, Gemini AI, HTML, CSS, JavaScript');
  doc.fontSize(8.5).font('Helvetica').fillColor(secondaryColor).text(
    'Developed an AI-powered web application that evaluates resumes against specific job roles. Implemented ATS-style scoring, technical-skill extraction, missing-keyword identification, and personalized improvement recommendations. Built a responsive interface for resume upload and analysis, and deployed the application on Render.',
    { lineGap: 2 }
  );
  doc.moveDown(0.5);

  // Project 3: JavaQuest
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primaryColor).text('JavaQuest – Gamified Learning Platform, ', { continued: true });
  doc.font('Helvetica-Oblique').fillColor(lightGray).text('Java, Web Development, AI');
  doc.fontSize(8.5).font('Helvetica').fillColor(secondaryColor);
  doc.list([
    'Developed a Duolingo-inspired platform for learning Java and other programming technologies through interactive lessons and quizzes.',
    'Designed structured learning paths to make programming education engaging and beginner-friendly.',
    'Deployed a user-friendly web application with an interactive learning experience.',
  ], { bulletRadius: 1.5, textIndent: 12, lineGap: 2 });

  // --- SOFT SKILLS ---
  sectionHeader('Soft Skills');
  const softY = doc.y;
  doc.fontSize(8.5).font('Helvetica').fillColor(secondaryColor);
  doc.text('•  Problem Solving', 45, softY);
  doc.text('•  Decision Making', 45, softY + 12);
  doc.text('•  Teamwork', 300, softY);
  doc.text('•  Communication', 300, softY + 12);

  doc.y = softY + 30;

  // --- LANGUAGES ---
  sectionHeader('Languages');
  const langY = doc.y;
  doc.fontSize(8.5).font('Helvetica').fillColor(secondaryColor);
  doc.text('•  English', 45, langY);
  doc.text('•  French', 180, langY);
  doc.text('•  Hindi', 315, langY);
  doc.text('•  Marathi', 450, langY);

  doc.end();

  writeStream.on('finish', () => {
    console.log('Resume PDF generated successfully at:', publicPath);
    try {
      if (fs.existsSync(path.dirname(distPath))) {
        fs.copyFileSync(publicPath, distPath);
        console.log('Copied to distPath:', distPath);
      }
    } catch (e) {
      console.warn('Could not copy to dist:', e.message);
    }
  });
}

generateResume();
