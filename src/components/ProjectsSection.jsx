import React from 'react';
import { ExternalLink, Github, TrendingUp, Users, Zap, Award } from 'lucide-react';

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
  const projects = [
    {
      title: 'MahaaGromart',
      company: 'MAIDC',
      tech: ['.NET 8', 'ASP.NET Core', 'Next.js', 'AWS', 'Razorpay', 'Jenkins', 'CI/CD'],
      description:
        'Agricultural e-commerce platform revolutionizing farm-to-consumer supply chain with integrated payment processing and smart logistics.',
      features: [
        'Razorpay Payment Integration',
        'eKart Logistics Integration',
        'Real-time Analytics Dashboard',
        'Scalable Cloud Architecture',
      ],
      metrics: {
        transactions: '1000+ Daily',
        growth: '20% User Growth',
        status: 'Production',
      },
      gradient: 'from-orange-600 via-amber-600 to-yellow-600',
      icon: TrendingUp,
      period: 'Dec 2024 - Present',
    },
    {
      title: 'Indian Rubber Materials Research Institute Portal',
      company: 'Design Accent',
      tech: ['ASP.NET MVC', 'AngularJS', 'SQL Server', 'RBAC', 'Security'],
      description:
        'Enterprise research data management system with advanced security features and compliance-ready dashboards for rubber industry research.',
      features: [
        'Role-Based Access Control',
        'Compliance Dashboards',
        'Secure Data Management',
        'Optimized SQL Queries',
      ],
      metrics: {
        performance: '50% Faster Reports',
        security: 'Enterprise-Grade',
        status: 'Production',
      },
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      icon: Award,
      period: 'Nov 2023 - Dec 2024',
    },
    {
      title: 'Events Genie',
      company: 'Design Accent',
      tech: ['ASP.NET MVC', 'AngularJS', 'MS SQL Server', 'WebSocket', 'Real-time Chat'],
      description:
        'Virtual event platform enabling seamless online conferences and meetings with real-time communication and high-performance architecture.',
      features: [
        'Real-time Chat System',
        'WebSocket Communication',
        'Multi-user Support',
        'Engagement Analytics',
      ],
      metrics: {
        users: '500+ Concurrent',
        engagement: '40% Increase',
        status: 'Production',
      },
      gradient: 'from-emerald-600 via-green-600 to-teal-600',
      icon: Users,
      period: 'Nov 2023 - Dec 2024',
    },
  ];

  /* ─── Single Project Card ──────────────────────────── */
  const Card = ({ p, delay }) => (
    <div
      className="group transition-all duration-600 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-orange-500/20
                   hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm relative"
        style={{
          background: `linear-gradient(135deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
          border: `1px solid ${BORDER}`,
        }}
      >
        {/* Cover with gradient */}
        <div className={`relative h-64 bg-gradient-to-br ${p.gradient}`}>
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Status badge */}
          <span
            className="absolute top-5 left-5 px-4 py-1.5 text-sm font-semibold rounded-full backdrop-blur-sm"
            style={{ 
              background: ACCENT_ORANGE + 'E6', 
              color: '#fff',
              boxShadow: `0 4px 12px ${ACCENT_ORANGE}40`
            }}
          >
            {p.metrics.status}
          </span>

          {/* Icon */}
          <div className="absolute top-5 right-5 p-3 rounded-xl backdrop-blur-md bg-white/10">
            <p.icon className="w-6 h-6 text-white" />
          </div>

          {/* Title section */}
          <div className="absolute bottom-5 left-5 right-5">
            <div className="mb-2">
              <span className="text-orange-300 text-sm font-semibold">{p.company}</span>
            </div>
            <h3 className="text-white text-2xl font-bold mb-2">{p.title}</h3>
            <div className="flex items-center gap-2 text-sm text-slate-200">
              <span>📅 {p.period}</span>
            </div>
          </div>

          {/* Animated shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shine" />
          </div>
        </div>

        {/* Body */}
        <div className="p-8">
          <p className="leading-relaxed mb-6 text-base" style={{ color: TEXT_GRAY }}>
            {p.description}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl" style={{ background: BG_BLACK }}>
            {Object.entries(p.metrics).filter(([key]) => key !== 'status').map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-lg font-bold mb-1" style={{ color: ACCENT_LIGHT }}>
                  {value}
                </div>
                <div className="text-xs uppercase tracking-wide" style={{ color: TEXT_GRAY }}>
                  {key}
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: TEXT_WHITE }}>
            <Zap className="w-4 h-4" style={{ color: ACCENT_ORANGE }} />
            Key Features
          </h4>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {p.features.map((f) => (
              <div key={f} className="flex items-center gap-2">
                <div 
                  className="w-1.5 h-1.5 rounded-full relative" 
                  style={{ background: ACCENT_ORANGE }}
                >
                  <div 
                    className="absolute inset-0 w-1.5 h-1.5 rounded-full blur-sm opacity-60"
                    style={{ background: ACCENT_ORANGE }}
                  />
                </div>
                <span className="text-sm" style={{ color: TEXT_GRAY }}>
                  {f}
                </span>
              </div>
            ))}
          </div>

          {/* Tech */}
          <h4 className="font-semibold mb-3" style={{ color: TEXT_WHITE }}>
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2 mb-8">
            {p.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-medium rounded-lg transition-all hover:scale-105"
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

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all hover:scale-105 hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                color: '#fff',
                boxShadow: `0 4px 12px ${ACCENT_ORANGE}40`,
              }}
            >
              <ExternalLink className="w-4 h-4" /> View Project
            </button>
            <button
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all hover:scale-105 hover:-translate-y-0.5"
              style={{
                background: BG_BLACK,
                border: `1px solid ${BORDER}`,
                color: TEXT_WHITE,
              }}
            >
              <Github className="w-4 h-4" /> Source
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  /* ─── Section Layout ───────────────────────────────── */
  return (
    <section id="projects" className="py-32 px-6" style={{ background: BG_BLACK }}>
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
            Featured Projects
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: TEXT_GRAY }}>
            Real-world solutions delivering measurable impact across e-commerce, enterprise systems, and real-time platforms
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} delay={i * 200} />
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-20 text-center">
          <div 
            className="inline-block p-8 rounded-2xl backdrop-blur-sm"
            style={{
              background: `linear-gradient(135deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
              border: `1px solid ${BORDER}`,
            }}
          >
            <p className="text-lg mb-2" style={{ color: TEXT_GRAY }}>
              Trusted by leading organizations
            </p>
            <div className="flex items-center gap-6 justify-center">
              <div className="text-center">
                <div 
                  className="text-3xl font-bold"
                  style={{
                    background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  15+
                </div>
                <div className="text-sm" style={{ color: TEXT_GRAY }}>Projects</div>
              </div>
              <div className="w-px h-12" style={{ background: BORDER }} />
              <div className="text-center">
                <div 
                  className="text-3xl font-bold"
                  style={{
                    background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  2+
                </div>
                <div className="text-sm" style={{ color: TEXT_GRAY }}>Years</div>
              </div>
              <div className="w-px h-12" style={{ background: BORDER }} />
              <div className="text-center">
                <div 
                  className="text-3xl font-bold"
                  style={{
                    background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  1000+
                </div>
                <div className="text-sm" style={{ color: TEXT_GRAY }}>Daily Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Motion keyframes */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        @keyframes shine {
          from {
            transform: translateX(-100%) skewX(-12deg);
          }
          to {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}