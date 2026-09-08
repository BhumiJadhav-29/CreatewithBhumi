import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Copy, Check, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  initialSubject?: string;
  initialMessage?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject = '', initialMessage = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Web Development');
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState(initialMessage);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (initialSubject) setSubject(initialSubject);
  }, [initialSubject]);

  useEffect(() => {
    if (initialMessage) setMessage(initialMessage);
  }, [initialMessage]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please provide your name, email address, and a message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          subject: `[${projectType}] ${subject.trim() || 'Project Inquiry'}`,
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    } catch (err: any) {
      setErrorMsg(err.message || 'Could not send message. You can reach out directly via WhatsApp or email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0e1017]/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let's Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Get in Touch with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Bhumi</span>
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Have a project in mind, need academic capstone development, or looking to hire a full-stack engineer? Drop a message below or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#13151f] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Let's Build Something Amazing 🚀
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                I am currently open to freelance client builds, full-time engineering roles, and academic project development.
              </p>

              <div className="space-y-4">
                {/* Email Card */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Email Address</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-semibold text-white hover:text-amber-400 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone & WhatsApp Card */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Phone / WhatsApp</div>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-sm font-semibold text-white hover:text-amber-400 transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Location</div>
                    <div className="text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Prompt */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-black bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 shadow-md shadow-emerald-500/20 transition-all text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-[#13151f] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                <p className="text-zinc-400 text-sm max-w-md mb-6 leading-relaxed">
                  Thank you for reaching out! Bhumi has received your message and will reply to your email shortly.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors"
                  >
                    Connect on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
                  <span className="text-xs text-zinc-500">* Required fields</span>
                </div>

                {errorMsg && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Shah"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. priya@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Phone or WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Project Domain
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Web Development" className="bg-zinc-900 text-white">Web Development</option>
                      <option value="Mobile App" className="bg-zinc-900 text-white">Mobile Application</option>
                      <option value="Academic Capstone" className="bg-zinc-900 text-white">Academic Project / Final Year</option>
                      <option value="IoT Prototype" className="bg-zinc-900 text-white">IoT / Hardware Prototype</option>
                      <option value="AI Integration" className="bg-zinc-900 text-white">AI & Gemini Integration</option>
                      <option value="Full-Time Hiring" className="bg-zinc-900 text-white">Full-Time / Contract Hiring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Brief headline of your requirements..."
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell Bhumi about your timeline, tech requirements, target outcomes, or questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-black bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-500/25 transition-all disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting Message...' : 'Send Message 🚀'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
