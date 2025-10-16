import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Award, Code } from 'lucide-react';

/* ---------- Black & Orange Palette ---------- */
const ACCENT_ORANGE = '#F97316';
const ACCENT_LIGHT = '#FB923C';
const BG_BLACK = '#09090B';
const BG_CARD = '#18181B';
const BORDER = '#27272A';
const TEXT_WHITE = '#FFFFFF';
const TEXT_GRAY = '#A1A1AA';
/* -------------------------------------------- */

export default function ExperienceSection() {
  // Fixed: Start with true to eliminate initial flash
  const [isVisible, setIsVisible] = useState(true);
  
  // Removed useEffect - no longer needed

  const experience = [
    {
      title: 'Assistant Manager Sr Dev And Engineer',
      company: 'MAIDC (Maharashtra Agro Industries Development Corporation)',
      duration: 'Dec 2024 – Present',
      location: 'Goregaon East, Mumbai',
      website: 'https://maidcmumbai.com/',
      description:
        'Leading development of agricultural e-commerce platform with advanced payment integration and logistics solutions.',
      achievements: [
        'Built MahaaGromart platform using ASP.NET Core 8 and Next.js',
        'Streamlined payment processing via Razorpay integration',
        'Drove 20% user growth by integrating eKart logistics',
        'Architected scalable solutions handling 1000+ daily transactions',
      ],
      tech: ['.NET 8', 'Next.js', 'AWS', 'Razorpay', 'Jenkins', 'CI/CD', 'eKart Logistics'],
    },
    {
      title: 'Jr Software Developer And Engineer',
      company: 'Design Accent',
      duration: 'Nov 2023 – Dec 2024',
      location: 'Goregaon, Mumbai',
      website: 'https://www.design-accent.com/',
      description:
        'Developed enterprise-grade applications with focus on security, real-time features, and optimal performance.',
      achievements: [
        'Built ASP.NET + AngularJS portal for Indian Rubber Materials Research Institute',
        'Delivered compliance-ready dashboards with role-based access control',
        'Reduced report generation time by 50% through optimized SQL queries',
        'Developed Events Genie virtual event platform with real-time chat',
        'Implemented WebSocket-based communication supporting 500+ concurrent users',
        'Boosted user engagement by 40% with real-time features',
      ],
      tech: [
        'ASP.NET MVC',
        'AngularJS',
        'SQL Server',
        'MS SQL Server',
        'WebSocket',
        'Real-time Chat',
        'Security & Compliance',
      ],
    },
  ];

  const Block = ({ item, delay, index }) => (
    <div
      className={`relative transform transition-all duration-600 ease-out ${
        isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'
      }`}
      style={{ 
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Timeline dot (desktop) */}
      <div
        className="hidden md:block absolute -left-2 top-8 w-5 h-5 rounded-full relative z-10"
        style={{
          background: ACCENT_ORANGE,
          border: `4px solid ${BG_BLACK}`,
          boxShadow: `0 0 20px ${ACCENT_ORANGE}80`,
        }}
      />

      <div
        className="md:ml-16 p-8 rounded-3xl shadow-2xl transition-all duration-300 ease-out hover:shadow-orange-500/20 hover:scale-[1.01] backdrop-blur-sm relative overflow-hidden group"
        style={{
          background: `linear-gradient(135deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
          border: `1px solid ${BORDER}`,
        }}
      >
        {/* Simplified hover glow effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-in-out"
          style={{
            background: `radial-gradient(circle at top right, ${ACCENT_ORANGE}, transparent 70%)`,
          }}
        />

        <header className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="p-2 rounded-xl"
                style={{ background: ACCENT_ORANGE + '20' }}
              >
                <Briefcase className="w-5 h-5" style={{ color: ACCENT_ORANGE }} />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: TEXT_WHITE }}>
                {item.title}
              </h3>
            </div>
            <h4 className="text-xl font-semibold mb-2" style={{ color: ACCENT_ORANGE }}>
              {item.company}
            </h4>
            <p className="leading-relaxed" style={{ color: TEXT_GRAY }}>
              {item.description}
            </p>
          </div>

          <div className="lg:text-right mt-4 lg:mt-0 lg:ml-6 flex-shrink-0">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-2"
              style={{
                background: ACCENT_ORANGE + '15',
                border: `1px solid ${ACCENT_ORANGE}30`,
              }}
            >
              <Calendar className="w-4 h-4" style={{ color: ACCENT_ORANGE }} />
              <span className="font-semibold text-sm" style={{ color: ACCENT_LIGHT }}>
                {item.duration}
              </span>
            </div>
            <div className="flex items-center gap-2 justify-end text-sm" style={{ color: TEXT_GRAY }}>
              <MapPin className="w-4 h-4" />
              <span>{item.location}</span>
            </div>
          </div>
        </header>

        {/* Achievements */}
        <section className="mb-6 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5" style={{ color: ACCENT_ORANGE }} />
            <h5 className="text-lg font-semibold" style={{ color: TEXT_WHITE }}>
              Key Achievements
            </h5>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {item.achievements.map((a, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="relative mt-1.5 flex-shrink-0">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: ACCENT_ORANGE }}
                  />
                </div>
                <span className="text-sm leading-relaxed" style={{ color: TEXT_GRAY }}>
                  {a}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Tech chips */}
        <section className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Code className="w-5 h-5" style={{ color: ACCENT_ORANGE }} />
            <h5 className="text-lg font-semibold" style={{ color: TEXT_WHITE }}>
              Technologies
            </h5>
          </div>
          <div className="flex flex-wrap gap-2">
            {item.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-lg text-sm font-medium transition-transform duration-200 hover:scale-105"
                style={{
                  background: BG_BLACK,
                  border: `1px solid ${BORDER}`,
                  color: TEXT_WHITE,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-32 px-6" style={{ background: BG_BLACK }}>
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background: `linear-gradient(90deg, ${ACCENT_ORANGE} 0%, ${ACCENT_LIGHT} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Professional Experience
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: TEXT_GRAY }}>
            A journey of growth, innovation, and measurable impact across enterprise applications
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Timeline line (desktop) */}
          <div
            className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5"
            style={{
              background: `linear-gradient(180deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT}, ${ACCENT_ORANGE}66)`,
              boxShadow: `0 0 10px ${ACCENT_ORANGE}40`,
            }}
          />
          <div className="space-y-16">
            {experience.map((item, i) => (
              <Block key={item.company} item={item} delay={i * 200} index={i} />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            { label: 'Years Experience', value: '2+' },
            { label: 'Projects Delivered', value: '15+' },
            { label: 'Daily Transactions', value: '1000+' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
                border: `1px solid ${BORDER}`,
              }}
            >
              <div
                className="text-5xl font-bold mb-2"
                style={{
                  background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-semibold tracking-wider" style={{ color: TEXT_GRAY }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optimized CSS keyframes */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
}
