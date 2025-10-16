import React from 'react';
import { Globe, Cloud, Database, Server } from 'lucide-react';

/* ─── Black & Orange Palette ─────────────────────────────── */
const ACCENT_ORANGE = '#F97316';
const ACCENT_LIGHT = '#FB923C';
const BG_BLACK = '#09090B';
const BG_CARD = '#18181B';
const BORDER = '#27272A';
const TEXT_WHITE = '#FFFFFF';
const TEXT_GRAY = '#A1A1AA';
/* ─────────────────────────────────────────────────────────── */

export default function ServicesSection({ isVisible = true }) {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      desc: 'Full-stack apps with modern frameworks and best practices',
      feats: ['React / Next.js', 'ASP.NET Core', 'Responsive UI', 'PWA builds'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      desc: 'Scalable cloud-native apps and infrastructure management',
      feats: ['AWS services', 'Serverless', 'Auto-scaling', 'Cost optimization'],
    },
    {
      icon: Database,
      title: 'Database Design',
      desc: 'Efficient architecture and tuning for high-performance data',
      feats: ['SQL Server', 'NoSQL', 'Data modeling', 'Perf tuning'],
    },
    {
      icon: Server,
      title: 'DevOps & Deployment',
      desc: 'CI/CD, containerization and infrastructure automation',
      feats: ['Docker / K8s', 'CI/CD pipelines', 'Monitoring', 'Load balancing'],
    },
  ];

  /* card */
  const Card = ({ s, delay }) => (
    <div
      className={`group transition-all duration-600 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/20 hover:scale-[1.03] transition-all duration-300 backdrop-blur-sm"
        style={{ 
          background: `linear-gradient(135deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
          border: `1px solid ${BORDER}` 
        }}
      >
        {/* icon */}
        <div
          className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl relative"
          style={{ background: ACCENT_ORANGE + '20' }}
        >
          <s.icon className="w-8 h-8" style={{ color: ACCENT_ORANGE }} />
          <div 
            className="absolute inset-0 w-16 h-16 rounded-2xl blur-md opacity-40"
            style={{ background: ACCENT_ORANGE }}
          />
        </div>

        {/* text */}
        <h3 className="text-2xl font-bold mb-3" style={{ color: TEXT_WHITE }}>
          {s.title}
        </h3>
        <p className="leading-relaxed mb-6" style={{ color: TEXT_GRAY }}>
          {s.desc}
        </p>

        {/* features list */}
        <h4 className="font-semibold mb-3" style={{ color: TEXT_WHITE }}>
          What's Included
        </h4>
        <div className="space-y-2">
          {s.feats.map((f) => (
            <div key={f} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full relative" style={{ background: ACCENT_ORANGE }}>
                <div 
                  className="absolute inset-0 w-2 h-2 rounded-full blur-sm opacity-60"
                  style={{ background: ACCENT_ORANGE }}
                />
              </div>
              <span style={{ color: TEXT_GRAY }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="services" className="py-32 px-6" style={{ background: BG_BLACK }}>
      <div className="mx-auto max-w-7xl">
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
            Services I Offer
          </h2>
          <p className="text-xl" style={{ color: TEXT_GRAY }}>
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <Card key={s.title} s={s} delay={i * 200} />
          ))}
        </div>
      </div>

      {/* motion */}
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
      `}</style>
    </section>
  );
}