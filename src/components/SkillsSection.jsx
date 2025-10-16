import React from 'react';
import {
  Code,
  Database,
  Server,
  Cloud,
  Monitor,
  Globe,
  Zap,
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

export default function SkillsSection({ isVisible = true }) {
  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'C#', icon: Code, level: 95, experience: '2+ Years' },
        { name: 'JavaScript', icon: Code, level: 92, experience: '2+ Years' },
        { name: 'Python', icon: Code, level: 85, experience: '2+ Years' },
        { name: 'C++', icon: Code, level: 80, experience: '3+ Years' },
      ],
    },
    {
      category: 'Frameworks',
      skills: [
        { name: '.NET Core 8', icon: Server, level: 95, experience: '2+ Years' },
        { name: 'ASP.NET Core', icon: Server, level: 93, experience: '2+ Years' },
        { name: 'React.js', icon: Globe, level: 92, experience: '2+ Years' },
        { name: 'Next.js 15', icon: Globe, level: 90, experience: '2+ Years' },
        { name: 'AngularJS 17', icon: Globe, level: 88, experience: '1+ Years' },
        { name: 'Node.js', icon: Server, level: 87, experience: '2+ Years' },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'SQL Server', icon: Database, level: 90, experience: '2+ Years' },
        { name: 'MongoDB', icon: Database, level: 85, experience: '1.5+ Years' },
        { name: 'PostgreSQL', icon: Database, level: 82, experience: '1+ Years' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        { name: 'AWS EC2', icon: Cloud, level: 88, experience: '1.5+ Years' },
        { name: 'Docker', icon: Server, level: 85, experience: '1.5+ Years' },
        { name: 'Jenkins CI/CD', icon: Code, level: 83, experience: '1+ Years' },
        { name: 'nginx', icon: Server, level: 80, experience: '1+ Years' },
        { name: 'Git', icon: Code, level: 92, experience: '2+ Years' },
        { name: 'PM2', icon: Zap, level: 85, experience: '1+ Years' },
      ],
    },
    {
      category: 'Tools & APIs',
      skills: [
        { name: 'Razorpay', icon: Monitor, level: 88, experience: '1+ Years' },
        { name: 'REST APIs', icon: Monitor, level: 93, experience: '2+ Years' },
        { name: 'Microservices', icon: Server, level: 87, experience: '1.5+ Years' },
      ],
    },
  ];

  /* single skill card component */
  const SkillCard = ({ Icon, name, level, experience, delay }) => (
    <div
      className={`group transition-all duration-600 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="rounded-2xl p-6 shadow-2xl hover:shadow-orange-500/20 hover:scale-[1.05] transition-all duration-300 backdrop-blur-sm h-full"
        style={{ 
          background: `linear-gradient(135deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
          border: `1px solid ${BORDER}` 
        }}
      >
        {/* icon */}
        <div
          className="w-12 h-12 flex items-center justify-center rounded-xl mb-4 relative"
          style={{ background: ACCENT_ORANGE + '20' }}
        >
          <Icon className="w-6 h-6" style={{ color: ACCENT_ORANGE }} />
          <div 
            className="absolute inset-0 w-12 h-12 rounded-xl blur-md opacity-40"
            style={{ background: ACCENT_ORANGE }}
          />
        </div>

        {/* text */}
        <h3 className="text-base font-bold mb-1" style={{ color: TEXT_WHITE }}>
          {name}
        </h3>
        <p className="text-xs mb-4" style={{ color: TEXT_GRAY }}>
          {experience}
        </p>

        {/* progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span style={{ color: TEXT_GRAY }}>Proficiency</span>
            <span className="font-semibold" style={{ color: ACCENT_LIGHT }}>
              {level}%
            </span>
          </div>
          <div className="w-full h-2 rounded-full relative overflow-hidden" style={{ background: BG_BLACK }}>
            <div
              className="h-2 rounded-full transition-all duration-1000 origin-left relative"
              style={{
                width: isVisible ? `${level}%` : 0,
                background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
              }}
            >
              <div 
                className="absolute inset-0 animate-shimmer"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-32 px-6" style={{ background: BG_BLACK }}>
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
            Technical Expertise
          </h2>
          <p className="text-xl" style={{ color: TEXT_GRAY }}>
            Mastering modern technologies to build outstanding digital experiences
          </p>
        </div>

        {/* skill categories */}
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={category.category}>
              {/* category title */}
              <div className="mb-8">
                <h3 
                  className="text-3xl font-bold inline-block pb-3"
                  style={{
                    color: TEXT_WHITE,
                    borderBottom: `3px solid ${ACCENT_ORANGE}`,
                  }}
                >
                  {category.category}
                </h3>
              </div>

              {/* skills grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.skills.map((skill, i) => (
                  <SkillCard
                    key={skill.name}
                    {...skill}
                    Icon={skill.icon}
                    delay={catIndex * 200 + i * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* summary stats */}
        <div className="mt-20 text-center">
          <div 
            className="inline-block p-8 rounded-2xl backdrop-blur-sm"
            style={{
              background: `linear-gradient(135deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
              border: `1px solid ${BORDER}`,
            }}
          >
            <p className="text-lg mb-4" style={{ color: TEXT_GRAY }}>
              Methodologies & Practices
            </p>
            <div className="flex flex-wrap items-center gap-4 justify-center">
              <span 
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{
                  background: ACCENT_ORANGE + '20',
                  color: ACCENT_LIGHT,
                  border: `1px solid ${ACCENT_ORANGE}40`,
                }}
              >
                Agile/Scrum
              </span>
              <span 
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{
                  background: ACCENT_ORANGE + '20',
                  color: ACCENT_LIGHT,
                  border: `1px solid ${ACCENT_ORANGE}40`,
                }}
              >
                Microservices Architecture
              </span>
              <span 
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{
                  background: ACCENT_ORANGE + '20',
                  color: ACCENT_LIGHT,
                  border: `1px solid ${ACCENT_ORANGE}40`,
                }}
              >
                CI/CD Automation
              </span>
              <span 
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{
                  background: ACCENT_ORANGE + '20',
                  color: ACCENT_LIGHT,
                  border: `1px solid ${ACCENT_ORANGE}40`,
                }}
              >
                Test-Driven Development
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* motion keyframes */}
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

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}