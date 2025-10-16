import React, { useState, useEffect } from 'react';
import {
  Code,
  Database,
  Server,
  Cloud,
  Monitor,
  Globe,
  Zap,
  Sparkles,
  TrendingUp,
  Award,
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

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      category: 'Languages',
      icon: Code,
      color: ACCENT_ORANGE,
      gradient: 'from-orange-600/20 via-orange-500/10 to-transparent',
      skills: [
        { name: 'C#', level: 95, experience: '2+ Years', projects: 8 },
        { name: 'JavaScript', level: 92, experience: '2+ Years', projects: 12 },
        { name: 'Python', level: 85, experience: '2+ Years', projects: 6 },
        { name: 'C++', level: 80, experience: '3+ Years', projects: 5 },
      ],
    },
    {
      category: 'Frameworks',
      icon: Server,
      color: '#3b82f6',
      gradient: 'from-blue-600/20 via-blue-500/10 to-transparent',
      skills: [
        { name: '.NET Core 8', level: 95, experience: '2+ Years', projects: 8 },
        { name: 'ASP.NET Core', level: 93, experience: '2+ Years', projects: 7 },
        { name: 'React.js', level: 92, experience: '2+ Years', projects: 10 },
        { name: 'Next.js 15', level: 90, experience: '2+ Years', projects: 8 },
        { name: 'AngularJS 17', level: 88, experience: '1+ Years', projects: 4 },
        { name: 'Node.js', level: 87, experience: '2+ Years', projects: 9 },
      ],
    },
    {
      category: 'Databases',
      icon: Database,
      color: '#10b981',
      gradient: 'from-green-600/20 via-green-500/10 to-transparent',
      skills: [
        { name: 'SQL Server', level: 90, experience: '2+ Years', projects: 8 },
        { name: 'MongoDB', level: 85, experience: '1.5+ Years', projects: 6 },
        { name: 'PostgreSQL', level: 82, experience: '1+ Years', projects: 4 },
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: '#8b5cf6',
      gradient: 'from-purple-600/20 via-purple-500/10 to-transparent',
      skills: [
        { name: 'AWS EC2', level: 88, experience: '1.5+ Years', projects: 6 },
        { name: 'Docker', level: 85, experience: '1.5+ Years', projects: 7 },
        { name: 'Jenkins CI/CD', level: 83, experience: '1+ Years', projects: 5 },
        { name: 'nginx', level: 80, experience: '1+ Years', projects: 4 },
        { name: 'Git', level: 92, experience: '2+ Years', projects: 15 },
        { name: 'PM2', level: 85, experience: '1+ Years', projects: 5 },
      ],
    },
    {
      category: 'Tools & APIs',
      icon: Monitor,
      color: '#f59e0b',
      gradient: 'from-amber-600/20 via-amber-500/10 to-transparent',
      skills: [
        { name: 'Razorpay', level: 88, experience: '1+ Years', projects: 3 },
        { name: 'REST APIs', level: 93, experience: '2+ Years', projects: 12 },
        { name: 'Microservices', level: 87, experience: '1.5+ Years', projects: 5 },
      ],
    },
  ];

  const SkillCard = ({ skill, categoryColor, categoryGradient, index }) => {
    const isHovered = hoveredSkill === `${skill.name}-${index}`;

    return (
      <div
        className={`group relative transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ 
          transitionDelay: `${index * 80}ms`,
        }}
        onMouseEnter={() => setHoveredSkill(`${skill.name}-${index}`)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        {/* Premium Skill Card */}
        <div
          className="relative rounded-2xl p-6 overflow-hidden h-full flex flex-col"
          style={{
            background: `linear-gradient(135deg, ${BG_CARD}98 0%, ${BG_BLACK}99 100%)`,
            border: `1px solid ${isHovered ? categoryColor : BORDER}`,
            boxShadow: isHovered
              ? `0 24px 48px -12px ${categoryColor}30, 0 0 0 1px ${categoryColor}20, inset 0 1px 0 0 rgba(255,255,255,0.05)`
              : `0 8px 24px -8px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255,255,255,0.02)`,
            transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
            transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Gradient Overlay */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${categoryGradient} transition-opacity duration-700 ease-in-out`}
            style={{
              opacity: isHovered ? 1 : 0,
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 
                  className="text-lg font-black mb-1 transition-colors duration-500"
                  style={{ 
                    color: isHovered ? categoryColor : TEXT_WHITE,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {skill.name}
                </h3>
                <p className="text-xs font-medium" style={{ color: TEXT_GRAY }}>
                  {skill.experience}
                </p>
              </div>

              {/* Badge */}
              <div 
                className="px-3 py-1 rounded-full text-xs font-bold transition-all duration-500"
                style={{
                  background: `${categoryColor}20`,
                  border: `1px solid ${categoryColor}40`,
                  color: categoryColor,
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'scale(1)' : 'scale(0.8)',
                }}
              >
                {skill.projects}+ Projects
              </div>
            </div>

            {/* Premium Progress Bar */}
            <div className="space-y-3 mt-auto">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold" style={{ color: TEXT_GRAY }}>
                  Proficiency
                </span>
                <span 
                  className="text-lg font-black transition-all duration-500"
                  style={{ 
                    color: isHovered ? categoryColor : ACCENT_LIGHT,
                    transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                  }}
                >
                  {skill.level}%
                </span>
              </div>

              {/* Enhanced Progress Bar */}
              <div 
                className="w-full h-2.5 rounded-full relative overflow-hidden"
                style={{ 
                  background: `${BG_BLACK}`,
                  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)',
                }}
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    background: `linear-gradient(90deg, ${categoryColor}20, transparent)`,
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                {/* Progress fill */}
                <div
                  className="h-full rounded-full relative transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    background: `linear-gradient(90deg, ${categoryColor}, ${ACCENT_LIGHT})`,
                    boxShadow: `0 0 12px ${categoryColor}60`,
                  }}
                >
                  {/* Shimmer effect */}
                  <div 
                    className="absolute inset-0 rounded-full overflow-hidden"
                    style={{
                      animation: isHovered ? 'shimmer 2s ease-in-out infinite' : 'none',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Corner accent */}
          <div 
            className="absolute bottom-0 right-0 w-24 h-24 transition-opacity duration-700 ease-in-out pointer-events-none"
            style={{
              opacity: isHovered ? 0.2 : 0,
              background: `radial-gradient(circle at bottom right, ${categoryColor}, transparent 70%)`,
              filter: 'blur(30px)',
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden" style={{ background: BG_BLACK }}>
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${BORDER} 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        <div 
          className="absolute top-40 left-40 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
          style={{ background: `radial-gradient(circle, ${ACCENT_ORANGE}, transparent)` }}
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Premium Header */}
        <div 
          className={`text-center mb-24 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 backdrop-blur-xl"
            style={{
              background: `linear-gradient(135deg, ${ACCENT_ORANGE}15, ${ACCENT_LIGHT}10)`,
              border: `1px solid ${ACCENT_ORANGE}30`,
              boxShadow: `0 8px 32px ${ACCENT_ORANGE}20, inset 0 1px 0 0 rgba(255, 255, 255, 0.1)`,
            }}
          >
            <Sparkles className="w-5 h-5" style={{ color: ACCENT_ORANGE }} />
            <span 
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: ACCENT_LIGHT }}
            >
              Skills & Technologies
            </span>
          </div>

          <h2
            className="text-6xl md:text-7xl font-black mb-6 leading-tight"
            style={{
              background: `linear-gradient(135deg, ${TEXT_WHITE} 0%, ${ACCENT_LIGHT} 50%, ${ACCENT_ORANGE} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em',
            }}
          >
            Technical
            <br />
            Arsenal
          </h2>

          <p 
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: TEXT_GRAY }}
          >
            Mastering cutting-edge technologies to craft exceptional digital experiences
          </p>
        </div>

        {/* Categories with Tabs */}
        <div 
          className={`flex flex-wrap gap-3 justify-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {skillCategories.map((cat, idx) => {
            const isActive = activeCategory === idx;
            const CategoryIcon = cat.icon;

            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(idx)}
                className="group/tab transition-all duration-500 ease-out"
                style={{
                  padding: '12px 24px',
                  borderRadius: '16px',
                  background: isActive 
                    ? `linear-gradient(135deg, ${cat.color}20, ${cat.color}10)`
                    : `linear-gradient(135deg, ${BG_CARD}, ${BG_BLACK})`,
                  border: `1px solid ${isActive ? cat.color : BORDER}`,
                  color: isActive ? cat.color : TEXT_GRAY,
                  boxShadow: isActive 
                    ? `0 12px 32px ${cat.color}30, inset 0 1px 0 0 rgba(255,255,255,0.1)`
                    : '0 4px 12px rgba(0, 0, 0, 0.4)',
                  transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                }}
              >
                <div className="flex items-center gap-2">
                  <CategoryIcon className="w-5 h-5" />
                  <span className="font-bold text-sm">{cat.category}</span>
                  <span 
                    className="px-2 py-0.5 rounded-full text-xs font-bold"
                    style={{
                      background: isActive ? `${cat.color}30` : `${BG_BLACK}`,
                      color: isActive ? cat.color : TEXT_GRAY,
                    }}
                  >
                    {cat.skills.length}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Skills Grid with Smooth Transitions */}
        {skillCategories.map((category, catIdx) => (
          <div
            key={category.category}
            className="transition-all duration-700 ease-out"
            style={{
              display: activeCategory === catIdx ? 'block' : 'none',
              opacity: activeCategory === catIdx ? 1 : 0,
            }}
          >
            {/* Category Header */}
            <div 
              className="flex items-center gap-4 mb-10"
              style={{
                opacity: activeCategory === catIdx ? 1 : 0,
                transform: activeCategory === catIdx ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'all 0.7s ease-out',
              }}
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
                  border: `1px solid ${category.color}40`,
                }}
              >
                <category.icon className="w-7 h-7" style={{ color: category.color }} />
              </div>
              <div>
                <h3 
                  className="text-3xl font-black"
                  style={{ color: TEXT_WHITE, letterSpacing: '-0.01em' }}
                >
                  {category.category}
                </h3>
                <p className="text-sm font-medium" style={{ color: TEXT_GRAY }}>
                  {category.skills.length} technologies mastered
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.skills.map((skill, idx) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  categoryColor={category.color}
                  categoryGradient={category.gradient}
                  index={idx}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Premium Stats & Methodologies */}
        <div 
          className={`mt-24 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div 
            className="p-10 rounded-3xl backdrop-blur-xl relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${BG_CARD}95 0%, ${BG_BLACK}98 100%)`,
              border: `1px solid ${BORDER}`,
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Background effect */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${ACCENT_ORANGE}, transparent 70%)`,
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Award className="w-6 h-6" style={{ color: ACCENT_ORANGE }} />
                <h3 
                  className="text-2xl font-black"
                  style={{ color: TEXT_WHITE }}
                >
                  Methodologies & Best Practices
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-4 justify-center">
                {[
                  'Agile/Scrum',
                  'Microservices Architecture',
                  'CI/CD Automation',
                  'Test-Driven Development',
                  'RESTful API Design',
                  'Clean Code Principles',
                ].map((method, idx) => (
                  <div
                    key={method}
                    className="group/method transition-all duration-500 ease-out hover:translate-y-[-2px]"
                    style={{
                      padding: '12px 20px',
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${ACCENT_ORANGE}15, ${ACCENT_LIGHT}10)`,
                      border: `1px solid ${ACCENT_ORANGE}30`,
                      cursor: 'default',
                    }}
                  >
                    <span 
                      className="text-sm font-bold"
                      style={{ color: ACCENT_LIGHT }}
                    >
                      {method}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8" style={{ borderTop: `1px solid ${BORDER}` }}>
                {[
                  { value: '25+', label: 'Technologies', icon: TrendingUp },
                  { value: '2+', label: 'Years Experience', icon: Award },
                  { value: '15+', label: 'Projects Delivered', icon: Sparkles },
                ].map((stat, idx) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon 
                      className="w-8 h-8 mx-auto mb-3"
                      style={{ color: ACCENT_ORANGE }}
                    />
                    <div 
                      className="text-4xl font-black mb-2"
                      style={{
                        background: `linear-gradient(135deg, ${TEXT_WHITE}, ${ACCENT_LIGHT})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div 
                      className="text-sm font-bold"
                      style={{ color: TEXT_GRAY }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance-Optimized Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0%, 100% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            transform: translateX(0%);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        /* GPU Acceleration */
        .group, button {
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
