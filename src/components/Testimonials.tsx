import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, Send, CheckCircle2, User, Sparkles } from 'lucide-react';
import { TestimonialItem } from '../types';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [message, setMessage] = useState('');

  const fetchFeedback = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/feedback');
      if (res.ok) {
        const data = await res.json();
        setTestimonials(data);
      }
    } catch (err) {
      console.error('Failed to load testimonials:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !role.trim() || !message.trim()) {
      setErrorMessage('Please fill in your name, role/project, and your review message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          role: role.trim(),
          rating,
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit feedback');
      }

      const result = await res.json();
      if (result.item) {
        setTestimonials((prev) => [result.item, ...prev]);
      } else {
        await fetchFeedback();
      }

      setSuccessMessage('Thank you so much! Your feedback has been published.');
      setName('');
      setRole('');
      setRating(5);
      setMessage('');

      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    } catch (err: any) {
      setErrorMessage(err.message || 'Unable to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="py-24 relative bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Community & Client Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Feedback & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Client Reviews</span>
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Genuine testimonials from restaurant owners, businesses, academic teammates, and collaborative project partners.
          </p>
        </div>

        {/* 2-Column Layout: Testimonials List + Live Feedback Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Testimonial Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Recent Reviews</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-400/15 text-amber-400 font-semibold">
                  {testimonials.length} Reviews
                </span>
              </h3>
            </div>

            {isLoading && testimonials.length === 0 ? (
              <div className="p-8 text-center text-zinc-500 bg-[#13151f] rounded-2xl border border-white/5 animate-pulse">
                Loading testimonials...
              </div>
            ) : testimonials.length === 0 ? (
              <div className="p-8 text-center text-zinc-400 bg-[#13151f] rounded-2xl border border-white/10">
                Be the first to leave feedback for Bhumi!
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5">
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 rounded-2xl bg-[#13151f] border border-white/10 hover:border-amber-400/30 transition-all shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-500 text-black font-bold flex items-center justify-center text-sm shadow-md">
                          {item.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white">
                            {item.name}
                          </h4>
                          <p className="text-xs text-amber-400/90 font-medium">
                            {item.role}
                          </p>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < item.rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-zinc-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-zinc-300 italic leading-relaxed">
                      "{item.message}"
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Interactive Leave Feedback Form */}
          <div className="lg:col-span-5 bg-[#13151f] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl sticky top-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Leave a Review
                </h3>
                <p className="text-xs text-zinc-400">
                  Worked with Bhumi? Share your experience!
                </p>
              </div>
            </div>

            {successMessage && (
              <div className="p-4 mb-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{successMessage}</span>
              </div>
            )}

            {errorMessage && (
              <div className="p-4 mb-5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Your Role or Project *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Chopstix Owner / BSc IT Peer"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              {/* Star Rating Picker */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Rating: <span className="text-amber-400 font-bold">{hoverRating || rating} / 5 Stars</span>
                </label>
                <div className="flex items-center gap-2 p-3 bg-black/30 rounded-xl border border-white/5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 focus:outline-none cursor-pointer transition-transform hover:scale-125"
                      aria-label={`Rate ${star} star`}
                    >
                      <Star
                        className={`w-6 h-6 transition-colors ${
                          star <= (hoverRating || rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-zinc-600'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Feedback Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your collaboration, project quality, speed, or communication with Bhumi..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md shadow-amber-500/20 transition-all disabled:opacity-50 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Posting Review...' : 'Publish Feedback'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
