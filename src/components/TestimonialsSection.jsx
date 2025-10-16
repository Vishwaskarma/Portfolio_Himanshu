import React, { useState, useEffect } from 'react';
import { Star, Play, Pause, Quote } from 'lucide-react';

/* ─── Black & Orange Palette ─────────────────────────────── */
const ACCENT_ORANGE = '#F97316';
const ACCENT_LIGHT = '#FB923C';
const BG_BLACK = '#09090B';
const BG_CARD = '#18181B';
const BORDER = '#27272A';
const TEXT_WHITE = '#FFFFFF';
const TEXT_GRAY = '#A1A1AA';
/* ─────────────────────────────────────────────────────────── */

export default function TestimonialsSection({ isVisible = true }) {
  const testimonials = [
    {
      name: 'MAIDC Leadership',
      role: 'Assistant Manager, MAIDC Mumbai',
      avatar: 'MA',
      rating: 5,
      content:
        'Himanshu architected our MahaaGromart platform with exceptional skill, delivering a scalable solution that handles 1000+ daily transactions seamlessly. His expertise in .NET 8 and Next.js drove 20% user growth.',
      project: 'MahaaGromart E-commerce',
      period: 'Dec 2024 - Present',
    },
    {
      name: 'Design Accent Team',
      role: 'Software Engineering Manager',
      avatar: 'DA',
      rating: 5,
      content:
        'Outstanding work on the Indian Rubber Materials Research Institute portal. Himanshu reduced report generation time by 50% through optimized SQL queries and delivered enterprise-grade security features.',
      project: 'IRMRI Research Portal',
      period: 'Nov 2023 - Dec 2024',
    },
    {
      name: 'Events Genie Project Lead',
      role: 'Product Manager, Design Accent',
      avatar: 'EG',
      rating: 5,
      content:
        'Himanshu built our virtual event platform supporting 500+ concurrent users with real-time chat functionality. His WebSocket implementation boosted user engagement by 40%. A true problem-solver.',
      project: 'Events Genie Platform',
      period: 'Nov 2023 - Dec 2024',
    },
  ];

  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);

  /* auto-rotate */
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(
      () => setIdx((p) => (p + 1) % testimonials.length),
      6_000,
    );
    return () => clearInterval(id);
  }, [playing, testimonials.length]);

  /* reusable star row */
  const Stars = ({ n }) => (
    <div className="flex justify-center gap-1 mb-6">
      {Array.from({ length: n }).map((_, i) => (
        <Star 
          key={i} 
          className="w-5 h-5 fill-current" 
          style={{ color: ACCENT_ORANGE }} 
        />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-32 px-6 relative overflow-hidden" style={{ background: BG_BLACK }}>
      {/* Background gradient effects */}
      <div 
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: ACCENT_ORANGE }}
      />
      <div 
        className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: ACCENT_LIGHT }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* heading */}
        <div className="text-center mb-20">
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background: `linear-gradient(90deg, ${ACCENT_ORANGE} 0%, ${ACCENT_LIGHT} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Client Testimonials
          </h2>
          <p className="text-xl" style={{ color: TEXT_GRAY }}>
            What colleagues and clients say about working with me
          </p>
        </div>

        {/* card */}
        <div
          className="relative mx-auto max-w-4xl transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <div
            className="rounded-3xl p-12 shadow-2xl transition backdrop-blur-sm relative overflow-hidden"
            style={{ 
              background: `linear-gradient(135deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
              border: `1px solid ${BORDER}` 
            }}
          >
            {/* Quote icon decoration */}
            <div 
              className="absolute top-8 left-8 opacity-10"
              style={{ color: ACCENT_ORANGE }}
            >
              <Quote className="w-16 h-16" />
            </div>

            {/* Stars */}
            <Stars n={testimonials[idx].rating} />

            {/* Content */}
            <blockquote
              className="text-xl md:text-2xl leading-relaxed mb-8 text-center relative z-10"
              style={{ color: TEXT_GRAY }}
            >
              "{testimonials[idx].content}"
            </blockquote>

            {/* Project badge */}
            <div className="flex justify-center mb-8">
              <span
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  background: ACCENT_ORANGE + '20',
                  color: ACCENT_LIGHT,
                  border: `1px solid ${ACCENT_ORANGE}40`,
                }}
              >
                {testimonials[idx].project} • {testimonials[idx].period}
              </span>
            </div>

            {/* Author info */}
            <div className="flex items-center justify-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold relative"
                style={{ 
                  background: `linear-gradient(135deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                  color: '#fff' 
                }}
              >
                {testimonials[idx].avatar}
                <div 
                  className="absolute inset-0 rounded-full blur-md opacity-50"
                  style={{ background: ACCENT_ORANGE }}
                />
              </div>
              <div className="text-left">
                <div
                  className="font-semibold text-lg mb-1"
                  style={{ color: TEXT_WHITE }}
                >
                  {testimonials[idx].name}
                </div>
                <div className="text-sm" style={{ color: ACCENT_LIGHT }}>
                  {testimonials[idx].role}
                </div>
              </div>
            </div>
          </div>

          {/* dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="transition-all duration-300 hover:scale-125"
                style={{
                  width: i === idx ? '32px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  background: i === idx 
                    ? `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`
                    : BORDER,
                  opacity: i === idx ? 1 : 0.5,
                }}
              />
            ))}
          </div>

          {/* play / pause */}
          <button
            onClick={() => setPlaying(!playing)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{
              background: BG_CARD,
              border: `1px solid ${BORDER}`,
            }}
          >
            {playing ? (
              <Pause className="w-5 h-5" style={{ color: ACCENT_ORANGE }} />
            ) : (
              <Play className="w-5 h-5 ml-0.5" style={{ color: ACCENT_ORANGE }} />
            )}
          </button>

          {/* Decorative glow on hover */}
          <div 
            className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ 
              boxShadow: `0 0 60px ${ACCENT_ORANGE}20`
            }}
          />
        </div>

        {/* Bottom summary */}
        <div className="mt-16 text-center">
          <div 
            className="inline-block px-8 py-4 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
              border: `1px solid ${BORDER}`,
            }}
          >
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-current" style={{ color: ACCENT_ORANGE }} />
                <span className="font-bold text-2xl" style={{ color: TEXT_WHITE }}>5.0</span>
              </div>
              <div className="w-px h-8" style={{ background: BORDER }} />
              <div className="text-sm" style={{ color: TEXT_GRAY }}>
                Average client satisfaction rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}