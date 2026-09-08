import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, RefreshCw } from 'lucide-react';
import { ChatMessage } from '../types';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hello! 👋 I'm Bhumi AI Assistant. Welcome to BuildWithBhumi! Ask me anything about Bhumi's projects, tech stack, pricing packages, or how to get started on your website.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'What services do you offer?',
    'Tell me about AI Resume Analyzer',
    'What are your pricing packages?',
    'How can I contact or hire Bhumi?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isTyping) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      });

      if (!res.ok) {
        throw new Error('Server error');
      }

      const data = await res.json();
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: data.reply || "I'm here to help! Feel free to ask about projects, pricing, or reach out to Bhumi directly.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: "I'm temporarily having trouble reaching the AI service, but you can reach Bhumi directly via WhatsApp (+91 7875742032) or email (jadhavbhumi02@gmail.com)!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 text-black shadow-xl shadow-amber-500/30 hover:scale-110 active:scale-95 transition-all cursor-pointer"
          aria-label="Open Bhumi AI Chat"
        >
          <Bot className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400"></span>
          </span>
          <div className="absolute right-16 px-3 py-1.5 rounded-xl bg-[#13151f] text-white border border-white/10 text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Ask Bhumi AI ✨
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[380px] md:w-[420px] h-[520px] max-h-[85vh] bg-[#13151f] border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 duration-200">
          
          {/* Header */}
          <div className="px-5 py-4 bg-[#181b28] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold shadow-md">
                <Bot className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#181b28]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Bhumi AI Assistant</span>
                  <Sparkles className="w-3 h-3 text-amber-400" />
                </div>
                <div className="text-[11px] text-zinc-400">Online • BuildWithBhumi</div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-4 py-2 bg-black/20 border-b border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                disabled={isTyping}
                className="shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/5 hover:bg-amber-400/10 text-zinc-300 hover:text-amber-300 border border-white/10 transition-colors disabled:opacity-50 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 text-xs mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-black font-medium rounded-tr-none shadow-md'
                      : 'bg-white/5 border border-white/10 text-zinc-200 rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  <span className={`block text-[10px] mt-1 ${msg.sender === 'user' ? 'text-black/60' : 'text-zinc-500'}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-zinc-400 text-xs pl-2">
                <div className="w-7 h-7 rounded-full bg-amber-400/15 flex items-center justify-center text-amber-400 shrink-0">
                  <Bot className="w-3.5 h-3.5 animate-spin" />
                </div>
                <div className="flex items-center gap-1 bg-white/5 px-3 py-2 rounded-2xl border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-[#181b28] border-t border-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask something about Bhumi..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-40 text-black font-bold transition-colors cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
};
