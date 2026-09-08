import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'skills', 'projects', 'pricing', 'testimonials', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHireClick = () => {
    setContactSubject('Hire Inquiry');
    scrollToSection('contact');
  };

  const handleSelectService = (serviceName: string) => {
    setContactSubject(`Inquiry for ${serviceName}`);
    setContactMessage(`Hi Bhumi, I am interested in your ${serviceName} services and would like to discuss specifications and deliverables.`);
    scrollToSection('contact');
  };

  const handleSelectPlan = (planName: string) => {
    setContactSubject(`Interest in ${planName} Plan`);
    if (planName.toLowerCase().includes('academic')) {
      setContactMessage(`Hi Bhumi, I need assistance with my academic/final year project. My stream is (BSc IT / BCA / Engineering), and my topic is: `);
    } else {
      setContactMessage(`Hi Bhumi, I would like to get started with the ${planName} package. Please share details on timeline and onboarding.`);
    }
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e2e8f0] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Navbar */}
      <Navbar
        onHireClick={handleHireClick}
        onResumeClick={() => setIsResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onContactClick={handleHireClick}
          onProjectsClick={() => scrollToSection('projects')}
          onResumeClick={() => setIsResumeOpen(true)}
        />

        <About
          onContactClick={handleHireClick}
        />

        <Services
          onSelectService={handleSelectService}
        />

        <Skills />

        <Projects />

        <Pricing
          onSelectPlan={handleSelectPlan}
        />

        <Testimonials />

        <Contact
          initialSubject={contactSubject}
          initialMessage={contactMessage}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating Action Elements */}
      <FloatingWhatsApp />
      <Chatbot />
    </div>
  );
}
