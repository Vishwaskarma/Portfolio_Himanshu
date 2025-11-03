import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Github,
  Sparkles,
  Code2,
  Rocket,
  Award,
  Users,
  Building2,
  Calendar,
  MapPin,
} from 'lucide-react';

/* ─── Black & Orange Palette ─────────────────────────────── */
const ACCENT_ORANGE = '#F97316';
const ACCENT_LIGHT = '#FB923C';
const BG_BLACK = '#09090B';
const BG_CARD = '#18181B';
const BORDER = '#27272A';
const TEXT_WHITE = '#FFFFFF';
const TEXT_GRAY = '#A1A1AA';
/* ─────────────────────────────────────────────────────────── */

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // Appear animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Project data
  const projects = [
    {
      title: 'MahaaGromart',
      company: 'MAIDC',
      period: 'Dec 2024 – Present',
      location: 'Mumbai',
      description:
        'Agricultural e-commerce platform revolutionizing farm-to-consumer supply chain.',
      achievements: [
        '1000+ daily transactions',
        '20% user growth via eKart logistics',
        'Razorpay payment gateway',
        'AWS cloud infra',
      ],
      tech: ['.NET 8', 'Next.js', 'AWS', 'Razorpay'],
      icon: Rocket,
      color: ACCENT_ORANGE,
      projectUrl: 'https://new.mahaagromart.com',
      githubUrl: null,
    },
    {
      title: 'IRMR Institute Portal',
      company: 'Design Accent',
      period: 'Nov 2023 – Dec 2024',
      location: 'Mumbai',
      description:
        'Enterprise research data management with advanced security features.',
      achievements: [
        '50% faster report generation',
        'RBAC & secure storage',
        'Real-time dashboards',
        'SQL optimisation',
      ],
      tech: ['ASP.NET', 'AngularJS', 'SQL Server'],
      icon: Award,
      color: '#6366f1',
      projectUrl: 'https://irmri.org',
      githubUrl: null,
    },
    {
      title: 'Events Genie',
      company: 'Design Accent',
      period: 'Nov 2023 – Dec 2024',
      location: 'Mumbai',
      description:
        'Virtual event platform with real-time communication architecture.',
      achievements: [
        '500+ concurrent users',
        'WebSocket real-time chat',
        '40% engagement boost',
        'Analytics suite',
      ],
      tech: ['ASP.NET', 'WebSocket', 'Real-time'],
      icon: Users,
      color: '#10b981',
      projectUrl: 'https://www.eventsgenie.in',
      githubUrl: null,
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: BG_BLACK }}
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${BORDER} 1.5px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
        <div
          className="absolute top-20 left-20 w-[28rem] h-[28rem] rounded-full opacity-12 animate-elegant-float"
          style={{
            background: `radial-gradient(circle, ${ACCENT_ORANGE}, transparent)`,
            filter: 'blur(90px)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* ── Header ── */}
        <div
          className={`text-center mb-20 transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8"
            style={{
              background: `linear-gradient(135deg, ${ACCENT_ORANGE}12, ${ACCENT_LIGHT}08)`,
              border: `1px solid ${ACCENT_ORANGE}30`,
              boxShadow: `0 8px 32px ${ACCENT_ORANGE}20, inset 0 1px 0 0 rgba(255,255,255,0.1)`,
              backdropFilter: 'blur(20px)',
            }}
          >
            <Sparkles className="w-5 h-5" style={{ color: ACCENT_ORANGE }} />
            <span
              className="text-sm font-black tracking-[0.15em] uppercase"
              style={{ color: ACCENT_LIGHT }}
            >
              Featured Work
            </span>
          </div>

          <h2
            className="text-6xl md:text-7xl font-black mb-6 leading-[0.95]"
            style={{
              background: `linear-gradient(135deg, ${TEXT_WHITE} 0%, ${ACCENT_LIGHT} 50%, ${ACCENT_ORANGE} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.03em',
            }}
          >
            Signature
            <br />
            Projects
          </h2>

          <p className="text-lg max-w-2xl mx-auto" style={{ color: TEXT_GRAY }}>
            Real-world solutions delivering measurable impact
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projects.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Card */}
                <div
                  className="relative rounded-[2rem] overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${BG_CARD}98 0%, ${BG_BLACK}99 100%)`,
                    border: `1px solid ${isActive ? item.color : BORDER}`,
                    boxShadow: isActive
                      ? `0 32px 64px -12px ${item.color}40, 0 0 0 1px ${item.color}30, inset 0 2px 0 0 rgba(255,255,255,0.06)`
                      : `0 16px 40px -10px rgba(0,0,0,0.7), inset 0 1px 0 0 rgba(255,255,255,0.03)`,
                    backdropFilter: 'blur(30px)',
                    transform: isActive ? 'translateY(-12px)' : 'translateY(0)',
                    transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  {/* Gradient overlay on hover (do not intercept clicks) */}
                  <div
                    className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                    style={{
                      opacity: isActive ? 0.08 : 0,
                      background: `radial-gradient(ellipse at top, ${item.color}, transparent 60%)`,
                      pointerEvents: 'none',
                    }}
                  />

                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${item.color}18, ${item.color}08)`,
                          border: `1px solid ${item.color}30`,
                          transform: isActive ? 'scale(1.15) rotate(8deg)' : 'scale(1) rotate(0deg)',
                          transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                        }}
                      >
                        <item.icon className="w-7 h-7" style={{ color: item.color }} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-xl font-black mb-1 leading-tight"
                          style={{
                            color: isActive ? item.color : TEXT_WHITE,
                            letterSpacing: '-0.01em',
                            transition: 'color 0.5s ease',
                          }}
                        >
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="w-3.5 h-3.5" style={{ color: item.color }} />
                          <h4 className="text-sm font-bold" style={{ color: item.color }}>
                            {item.company}
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Meta pills */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      <div
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold"
                        style={{
                          background: `${item.color}12`,
                          border: `1px solid ${item.color}25`,
                          color: item.color,
                        }}
                      >
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </div>
                      <div
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                        style={{
                          background: `${BG_BLACK}60`,
                          border: `1px solid ${BORDER}`,
                          color: TEXT_GRAY,
                        }}
                      >
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed mb-5" style={{ color: TEXT_GRAY }}>
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center"
                          style={{
                            background: `${item.color}15`,
                            border: `1px solid ${item.color}25`,
                          }}
                        >
                          <Award className="w-3.5 h-3.5" style={{ color: item.color }} />
                        </div>
                        <h5
                          className="text-xs font-black tracking-wider uppercase"
                          style={{ color: TEXT_WHITE }}
                        >
                          Key Highlights
                        </h5>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {item.achievements.map((ach, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 p-2.5 rounded-lg"
                            style={{
                              background: `${BG_BLACK}40`,
                              border: `1px solid ${BORDER}`,
                              transform: isActive ? 'translateX(2px)' : 'translateX(0)',
                              transition: `all 0.4s cubic-bezier(0.23, 1, 0.32, 1) ${idx * 40}ms`,
                            }}
                          >
                            <div
                              className="mt-1 w-1 h-1 rounded-full flex-shrink-0"
                              style={{
                                background: item.color,
                                boxShadow: `0 0 6px ${item.color}`,
                              }}
                            />
                            <span className="text-xs leading-relaxed" style={{ color: TEXT_GRAY }}>
                              {ach}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center"
                          style={{
                            background: `${item.color}15`,
                            border: `1px solid ${item.color}25`,
                          }}
                        >
                          <Code2 className="w-3.5 h-3.5" style={{ color: item.color }} />
                        </div>
                        <h5
                          className="text-xs font-black tracking-wider uppercase"
                          style={{ color: TEXT_WHITE }}
                        >
                          Tech Stack
                        </h5>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-bold rounded-lg tech-chip"
                            style={{
                              background: `linear-gradient(135deg, ${BG_BLACK}, ${BG_CARD})`,
                              border: `1px solid ${BORDER}`,
                              color: TEXT_WHITE,
                              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ── Buttons (anchors) ── */}
                    <div className="flex gap-3 mt-6 relative z-20">
                      {/* View Live */}
                      <a
                        href={item.projectUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg font-bold text-sm"
                        style={{
                          background: `linear-gradient(135deg, ${item.color}, ${ACCENT_LIGHT})`,
                          color: '#fff',
                          boxShadow: `0 8px 20px ${item.color}35`,
                          transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                          pointerEvents: item.projectUrl ? 'auto' : 'none',
                          opacity: item.projectUrl ? 1 : 0.5,
                        }}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        View Live
                      </a>

                      {/* GitHub / Private */}
                      {item.githubUrl ? (
                        <a
                          href={item.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg font-bold text-sm"
                          style={{
                            background: `${BG_BLACK}`,
                            border: `1px solid ${BORDER}`,
                            color: TEXT_WHITE,
                            transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                          }}
                        >
                          <Github className="w-3.5 h-3.5" />
                          Code
                        </a>
                      ) : (
                        <div
                          className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg font-bold text-sm"
                          style={{
                            background: `${BG_BLACK}80`,
                            border: `1px solid ${BORDER}`,
                            color: TEXT_GRAY,
                            opacity: 0.5,
                            pointerEvents: 'none',
                          }}
                        >
                          <Github className="w-3.5 h-3.5" />
                          Private
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Corner accent (no clicks) */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                    style={{
                      opacity: isActive ? 0.15 : 0,
                      background: `radial-gradient(circle at top right, ${item.color}, transparent 70%)`,
                      filter: 'blur(50px)',
                      transition: 'opacity 1s ease-in-out',
                      pointerEvents: 'none',
                    }}
                  />
                </div>

                {/* Number badge */}
                <div
                  className="absolute -top-3 -left-3 w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black z-20"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}, ${ACCENT_LIGHT})`,
                    boxShadow: `0 8px 24px ${item.color}50`,
                    color: TEXT_WHITE,
                    transform: isActive ? 'scale(1.2) rotate(8deg)' : 'scale(1) rotate(0deg)',
                    transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                  }}
                >
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Animations & GPU hints ── */}
      <style jsx>{`
        @keyframes elegant-float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, -40px); }
        }
        .animate-elegant-float { animation: elegant-float 30s ease-in-out infinite; }
        .tech-chip:hover {
          border-color: ${ACCENT_ORANGE};
          box-shadow: 0 8px 24px ${ACCENT_ORANGE}30;
          transform: translateY(-3px);
        }
        .group, .tech-chip {
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
