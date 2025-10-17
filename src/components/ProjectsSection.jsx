import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Sparkles, Code2, Rocket, Award, Users, Zap, Star } from 'lucide-react';

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

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: 'MahaaGromart',
      company: 'MAIDC',
      tech: ['.NET 8', 'Next.js', 'AWS', 'Razorpay'],
      description: 'Agricultural e-commerce platform revolutionizing farm-to-consumer supply chain.',
      features: ['Payment Gateway', 'Logistics API', 'Analytics', 'Cloud Infra'],
      metrics: { transactions: '1000+', growth: '20%' },
      gradient: 'from-orange-600 via-amber-500 to-yellow-500',
      icon: Rocket,
      period: 'Dec 2024',
      color: ACCENT_ORANGE,
      projectUrl: 'https://new.mahaagromart.com',
      githubUrl: null,
    },
    {
      title: 'IRMR Institute Portal',
      company: 'Design Accent',
      tech: ['ASP.NET', 'AngularJS', 'SQL Server'],
      description: 'Enterprise research data management with advanced security features.',
      features: ['RBAC', 'Dashboards', 'Secure Storage', 'SQL Optimization'],
      metrics: { performance: '50%', security: 'A+' },
      gradient: 'from-blue-600 via-indigo-500 to-purple-600',
      icon: Award,
      period: 'Nov 2023',
      color: '#6366f1',
      projectUrl: 'https://irmri.org',
      githubUrl: null,
    },
    {
      title: 'Events Genie',
      company: 'Design Accent',
      tech: ['ASP.NET', 'WebSocket', 'Real-time'],
      description: 'Virtual event platform with real-time communication architecture.',
      features: ['Real-time Chat', 'WebSocket', 'Multi-user', 'Analytics'],
      metrics: { users: '500+', engagement: '40%' },
      gradient: 'from-emerald-600 via-green-500 to-teal-500',
      icon: Users,
      period: 'Nov 2023',
      color: '#10b981',
      projectUrl: 'https://www.eventsgenie.in',
      githubUrl: null,
    },
  ];

  const Card = ({ p, index }) => {
    return (
      <div
        className={`relative transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
        style={{ 
          transitionDelay: `${index * 150}ms`,
        }}
      >
        {/* FIXED: Card with proper z-index */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${BG_CARD}98 0%, ${BG_BLACK}99 100%)`,
            border: `1px solid ${BORDER}`,
            boxShadow: '0 12px 32px -10px rgba(0, 0, 0, 0.7)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* FIXED: Background overlay with lower z-index */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.04,
              background: `radial-gradient(circle at top right, ${p.color}, transparent 70%)`,
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />

          {/* Header */}
          <div 
            style={{
              position: 'relative',
              height: '180px',
              background: `linear-gradient(135deg, ${p.gradient})`,
              zIndex: 1,
            }}
          >
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(at 30% 40%, ${p.color}25 0px, transparent 50%)`,
                opacity: 0.6,
                pointerEvents: 'none',
              }}
            />

            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.75) 100%)',
                pointerEvents: 'none',
              }}
            />

            <div className="absolute top-4 right-4" style={{ zIndex: 10 }}>
              <div 
                className="p-3 rounded-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <p.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
            </div>

            <div className="absolute top-4 left-4" style={{ zIndex: 10 }}>
              <div 
                className="px-3 py-1 rounded-full flex items-center gap-1.5"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Star className="w-2.5 h-2.5 text-emerald-400 fill-emerald-400" />
                <span className="text-xs font-bold text-white">Live</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4" style={{ zIndex: 10 }}>
              <div 
                className="inline-flex items-center gap-1.5 mb-2 px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                }}
              >
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span className="text-xs font-bold text-amber-100">{p.company}</span>
              </div>
              
              <h3 
                className="text-2xl font-black mb-1 leading-tight text-white"
                style={{
                  textShadow: '0 3px 12px rgba(0,0,0,0.5)',
                  letterSpacing: '-0.015em',
                }}
              >
                {p.title}
              </h3>
              
              <div className="text-xs text-white/60 font-medium">{p.period}</div>
            </div>
          </div>

          {/* FIXED: Body with proper z-index */}
          <div className="p-6" style={{ position: 'relative', zIndex: 10 }}>
            <p 
              className="text-xs leading-relaxed mb-6"
              style={{ color: TEXT_GRAY, lineHeight: '1.7' }}
            >
              {p.description}
            </p>

            <div 
              className="flex gap-3 mb-6 p-4 rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${BG_BLACK}85, ${BG_CARD}65)`,
                border: `1px solid ${BORDER}`,
              }}
            >
              {Object.entries(p.metrics).map(([key, value]) => (
                <div key={key} className="flex-1 text-center">
                  <div 
                    className="text-xl font-black mb-0.5"
                    style={{
                      background: `linear-gradient(135deg, ${TEXT_WHITE}, ${p.color})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {value}
                  </div>
                  <div 
                    className="text-[10px] uppercase tracking-wider font-bold"
                    style={{ color: TEXT_GRAY }}
                  >
                    {key}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-3.5 h-3.5" style={{ color: p.color }} />
                <h4 
                  className="text-xs font-black tracking-wide uppercase"
                  style={{ color: TEXT_WHITE }}
                >
                  Features
                </h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <div 
                    key={f}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg"
                    style={{
                      background: `${BG_BLACK}40`,
                      border: `1px solid ${BORDER}`,
                    }}
                  >
                    <div 
                      className="w-1 h-1 rounded-full"
                      style={{ background: p.color, boxShadow: `0 0 4px ${p.color}` }}
                    />
                    <span className="text-xs font-medium" style={{ color: TEXT_GRAY }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-3.5 h-3.5" style={{ color: p.color }} />
                <h4 
                  className="text-xs font-black tracking-wide uppercase"
                  style={{ color: TEXT_WHITE }}
                >
                  Tech Stack
                </h4>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-xs font-bold rounded-lg"
                    style={{
                      background: `${BG_BLACK}`,
                      border: `1px solid ${BORDER}`,
                      color: TEXT_WHITE,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* FIXED: Buttons with proper cursor and z-index */}
            <div className="flex gap-3" style={{ position: 'relative', zIndex: 20 }}>
              <a
                href={p.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg font-bold text-sm"
                style={{
                  background: `linear-gradient(135deg, ${p.color}, ${ACCENT_LIGHT})`,
                  color: '#fff',
                  boxShadow: `0 8px 20px ${p.color}35`,
                  textDecoration: 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  // zIndex: 30,
                }}
                onClick={(e) => {
                  console.log('onclick:', p.projectUrl);
                  e.stopPropagation();
                }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View Live
              </a>
              
              {p.githubUrl ? (
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg font-bold text-sm"
                  style={{
                    background: `${BG_BLACK}`,
                    border: `1px solid ${BORDER}`,
                    color: TEXT_WHITE,
                    textDecoration: 'none',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 30,
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
                    cursor: 'not-allowed',
                  }}
                  title="Private Repository"
                >
                  <Github className="w-3.5 h-3.5" />
                  Private
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="relative py-20 px-6 overflow-hidden" style={{ background: BG_BLACK }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${BORDER} 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div 
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{
              background: `${ACCENT_ORANGE}12`,
              border: `1px solid ${ACCENT_ORANGE}30`,
              boxShadow: `0 6px 20px ${ACCENT_ORANGE}20`,
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: ACCENT_ORANGE }} />
            <span 
              className="text-xs font-black tracking-widest uppercase"
              style={{ color: ACCENT_LIGHT }}
            >
              Featured Work
            </span>
          </div>

          <h2
            className="text-5xl md:text-6xl font-black mb-4 leading-tight"
            style={{
              background: `linear-gradient(135deg, ${TEXT_WHITE} 0%, ${ACCENT_LIGHT} 50%, ${ACCENT_ORANGE} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.03em',
            }}
          >
            Signature Projects
          </h2>

          <p 
            className="text-base max-w-2xl mx-auto"
            style={{ color: TEXT_GRAY }}
          >
            Real-world solutions delivering measurable impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} index={i} />
          ))}
        </div>

        <div 
          className={`text-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div 
            className="inline-flex items-center gap-8 p-6 rounded-xl"
            style={{
              background: `linear-gradient(135deg, ${BG_CARD}96 0%, ${BG_BLACK}98 100%)`,
              border: `1px solid ${BORDER}`,
              boxShadow: '0 16px 48px rgba(0, 0, 0, 0.5)',
            }}
          >
            {[
              { value: '15+', label: 'Projects', icon: '🚀' },
              { value: '2+', label: 'Years', icon: '⚡' },
              { value: '1000+', label: 'Users', icon: '👥' },
            ].map((stat, idx) => (
              <React.Fragment key={stat.label}>
                {idx > 0 && (
                  <div 
                    className="w-px h-12"
                    style={{
                      background: `linear-gradient(to bottom, transparent, ${BORDER}, transparent)`,
                    }}
                  />
                )}
                <div className="text-center">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div 
                    className="text-3xl font-black mb-0.5"
                    style={{
                      background: `linear-gradient(135deg, ${TEXT_WHITE}, ${ACCENT_LIGHT})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-xs font-bold"
                    style={{ color: TEXT_GRAY }}
                  >
                    {stat.label}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        a {
          cursor: pointer !important;
        }
      `}</style>
    </section>
  );
}
