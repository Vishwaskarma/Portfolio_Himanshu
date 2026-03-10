import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  Award,
  Star,
  Target,
  Code2,
  Zap,
  Database,
  Cloud,
  GitBranch,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

/* -------------------------------------------------- */
/* Black & Orange Color Palette */
const ACCENT_ORANGE = '#F97316';
const ACCENT_LIGHT = '#FB923C';
const BG_BLACK = '#09090B';
const BG_CARD = '#18181B';
const BORDER = '#27272A';
const TEXT_WHITE = '#FFFFFF';
const TEXT_GRAY = '#A1A1AA';
/* -------------------------------------------------- */

/* Add the same CSS animations from hero */
const css = `
  @keyframes pulse-glow {
    0%,100% { opacity: .28; }
    50%     { opacity: .48; }
  }

  /* Social icon hover lift - same as hero */
  .social-btn {
    transition: transform .28s cubic-bezier(.34,1.56,.64,1),
                border-color .28s ease,
                box-shadow .28s ease;
  }
  .social-btn:hover {
    transform: translateY(-4px) scale(1.12);
    border-color: rgba(249,115,22,.7) !important;
    box-shadow: 0 8px 24px rgba(249,115,22,.25);
  }
  .social-btn:active {
    transform: translateY(0) scale(.96);
    transition-duration: .1s;
  }

  /* Card hover effects */
  .hover-card {
    transition: transform .3s cubic-bezier(.34,1.56,.64,1),
                box-shadow .3s ease,
                border-color .3s ease;
  }
  .hover-card:hover {
    transform: translateY(-5px);
    border-color: rgba(249,115,22,.5) !important;
    box-shadow: 0 16px 40px rgba(249,115,22,.15);
  }

  /* Tech tag hover */
  .tech-tag {
    transition: transform .28s cubic-bezier(.34,1.56,.64,1),
                border-color .28s ease,
                box-shadow .28s ease,
                background-color .28s ease;
  }
  .tech-tag:hover {
    transform: translateY(-3px) scale(1.08);
    border-color: ${ACCENT_ORANGE} !important;
    box-shadow: 0 6px 16px rgba(249,115,22,.25);
    background-color: rgba(249,115,22,0.15) !important;
  }

  /* Achievement icon hover */
  .achievement-icon {
    transition: transform .28s cubic-bezier(.34,1.56,.64,1);
  }
  .achievement-icon:hover {
    transform: scale(1.15) rotate(3deg);
  }
`;

const achievements = [
  { 
    icon: Award, 
    title: 'AWS EC2 & Cloud Solutions', 
    description: 'Production deployment experience',
    year: '2024' 
  },
  { 
    icon: Star, 
    title: 'Real-time Analytics', 
    description: 'WebSocket & live chat systems',
    year: '2024' 
  },
  { 
    icon: Target, 
    title: '1000+ Daily Transactions', 
    description: 'Scalable e-commerce platform',
    year: '2024' 
  },
  { 
    icon: Zap, 
    title: '50% Performance Boost', 
    description: 'SQL query optimization',
    year: '2023' 
  },
];

const experience = [
  {
    company: 'MAIDC',
    role: 'Senior Dev And Engineer',
    period: 'Dec 2024 - Present',
    location: 'Goregaon East, Mumbai',
    projects: [
      {
        name: 'MahaaGromart',
        description: 'Agricultural e-commerce platform',
        highlights: [
          'Built with ASP.NET Core 8 and Next.js',
          'Razorpay payment integration',
          '20% user growth via eKart logistics',
          'Handles 1000+ daily transactions'
        ],
        tech: ['.NET 8', 'Next.js', 'AWS', 'Razorpay', 'Jenkins', 'CI/CD']
      }
    ]
  },
  {
    company: 'Design Accent',
    role: 'Jr Software Developer And Engineer',
    period: 'Nov 2023 - Dec 2024',
    location: 'Goregaon, Mumbai',
    projects: [
      {
        name: 'Indian Rubber Materials Research Institute',
        description: 'Research data management portal',
        highlights: [
          'ASP.NET + AngularJS with SQL Server',
          'Role-based access control',
          '50% faster report generation',
          'Compliance-ready dashboards'
        ],
        tech: ['ASP.NET MVC', 'AngularJS', 'SQL Server']
      },
      {
        name: 'Events Genie',
        description: 'Virtual event platform',
        highlights: [
          'Real-time chat with WebSockets',
          '40% increase in user engagement',
          'Supports 500+ concurrent users'
        ],
        tech: ['ASP.NET MVC', 'AngularJS', 'MS SQL Server']
      }
    ]
  }
];

/* Social Icon Component - Same as hero */
const SocialIcon = ({ icon: Icon, href, onClick }) => {
  const el = (
    <div className="social-btn" style={{
      padding: 14, borderRadius: 16, cursor: 'pointer',
      background: `${BG_CARD}CC`,
      border: `1px solid rgba(249,115,22,.2)`,
      backdropFilter: 'blur(10px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <Icon size={20} color={TEXT_GRAY} style={{ transition: 'color .2s' }} />
    </div>
  );
  if (onClick) return <button onClick={onClick} style={{ background: 'none', border: 'none', padding: 0 }}>{el}</button>;
  return <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{el}</a>;
};

const Pill = ({ color, glow = false }) => (
  <div className="relative">
    <div 
      style={{ backgroundColor: color }} 
      className="w-2 h-2 rounded-full"
    />
    {glow && (
      <div 
        style={{ backgroundColor: color }} 
        className="absolute inset-0 w-2 h-2 rounded-full blur-sm opacity-60"
      />
    )}
  </div>
);

const Card = ({ children, className = '' }) => (
  <div
    className={`hover-card backdrop-blur-sm border rounded-2xl p-6 shadow-lg ${className}`}
    style={{ 
      background: `linear-gradient(135deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
      borderColor: BORDER,
    }}
  >
    {children}
  </div>
);

const SummaryCard = ({ icon: Icon, title, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="hover-card backdrop-blur-sm border rounded-2xl p-6 shadow-lg cursor-pointer"
      style={{ 
        background: `linear-gradient(135deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
        borderColor: isHovered ? ACCENT_ORANGE + '80' : BORDER,
      }}
    >
      <div className="relative">
        <Icon 
          className="w-8 h-8 mb-4 transition-all duration-300"
          style={{ 
            color: isHovered ? ACCENT_ORANGE : ACCENT_LIGHT,
            transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
          }} 
        />
        <div 
          className="absolute top-0 left-0 w-8 h-8 rounded-full blur-lg transition-all duration-300"
          style={{ 
            backgroundColor: ACCENT_ORANGE,
            opacity: isHovered ? 0.4 : 0.1,
            transform: isHovered ? 'scale(1.5)' : 'scale(1)',
          }}
        />
      </div>
      <h4
        className="text-xl font-semibold mb-2 font-heading transition-all duration-300"
        style={{ 
          color: isHovered ? TEXT_WHITE : TEXT_GRAY,
          transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
        }}
      >
        {title}
      </h4>
      <div className="space-y-1 transition-all duration-300" style={{ opacity: isHovered ? 1 : 0.9 }}>
        {children}
      </div>
    </div>
  );
};

const ExperienceCard = ({ company, role, period, location, projects }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="hover-card backdrop-blur-sm border rounded-2xl p-6 shadow-lg"
      style={{ 
        background: `linear-gradient(135deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
        borderColor: isHovered ? ACCENT_ORANGE + '40' : BORDER,
      }}
    >
      <div className="mb-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 
              className="text-2xl font-bold mb-2 font-heading transition-all duration-300"
              style={{ 
                color: TEXT_WHITE,
                transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
              }}
            >
              {company}
            </h4>
            <p 
              className="text-lg font-semibold mb-1 font-heading transition-all duration-300"
              style={{ 
                color: isHovered ? ACCENT_ORANGE : ACCENT_LIGHT,
                transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
              }}
            >
              {role}
            </p>
          </div>
          <Briefcase 
            className="w-8 h-8 transition-all duration-300 achievement-icon" 
            style={{ 
              color: isHovered ? ACCENT_ORANGE : ACCENT_LIGHT,
              opacity: isHovered ? 1 : 0.5,
            }} 
          />
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-body" style={{ color: TEXT_GRAY }}>
          <span className="flex items-center gap-1 transition-all duration-300" style={{ transform: isHovered ? 'translateY(-2px)' : 'translateY(0)' }}>
            📅 {period}
          </span>
          <span className="flex items-center gap-1 transition-all duration-300" style={{ transform: isHovered ? 'translateY(-2px)' : 'translateY(0)' }}>
            📍 {location}
          </span>
        </div>
      </div>

      {/* Project Tabs */}
      {projects.length > 1 && (
        <div className="flex gap-2 mb-6 border-b" style={{ borderColor: BORDER }}>
          {projects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className="relative px-4 py-2 text-sm font-medium transition-all duration-300"
              style={{ 
                color: activeTab === idx ? ACCENT_ORANGE : TEXT_GRAY,
              }}
            >
              {project.name}
              <span 
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-out"
                style={{ 
                  width: activeTab === idx ? '100%' : '0%',
                  background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Animated content */}
      <div className="relative">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="transition-all duration-500 ease-in-out"
            style={{
              opacity: activeTab === idx ? 1 : 0,
              transform: activeTab === idx 
                ? 'translateX(0) scale(1)' 
                : idx < activeTab 
                  ? 'translateX(-20px) scale(0.98)' 
                  : 'translateX(20px) scale(0.98)',
              position: activeTab === idx ? 'relative' : 'absolute',
              pointerEvents: activeTab === idx ? 'auto' : 'none',
              width: '100%',
            }}
          >
            <div className="border-t pt-4" style={{ borderColor: BORDER }}>
              <h5 className="text-xl font-semibold mb-2 font-heading" style={{ color: TEXT_WHITE }}>
                {project.name}
              </h5>
              <p className="text-sm mb-3 font-body" style={{ color: TEXT_GRAY }}>
                {project.description}
              </p>
              
              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, i) => (
                  <li 
                    key={i} 
                    className="flex items-start gap-2 text-sm font-body transition-all duration-300"
                    style={{ 
                      color: TEXT_GRAY,
                      opacity: activeTab === idx ? 1 : 0,
                      transform: activeTab === idx ? 'translateX(0)' : 'translateX(-10px)',
                      transitionDelay: activeTab === idx ? `${i * 50}ms` : '0ms',
                    }}
                  >
                    <Pill color={ACCENT_ORANGE} glow />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="tech-tag px-3 py-1 rounded-full text-xs font-medium border font-body"
                    style={{ 
                      color: ACCENT_LIGHT,
                      borderColor: ACCENT_ORANGE + '40',
                      backgroundColor: ACCENT_ORANGE + '10',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Maintain height with placeholder when no tabs */}
      {projects.length === 1 && (
        <div className="border-t pt-4" style={{ borderColor: BORDER }}>
          <h5 className="text-xl font-semibold mb-2 font-heading" style={{ color: TEXT_WHITE }}>
            {projects[0].name}
          </h5>
          <p className="text-sm mb-3 font-body" style={{ color: TEXT_GRAY }}>
            {projects[0].description}
          </p>
          
          <ul className="space-y-2 mb-4">
            {projects[0].highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm font-body" style={{ color: TEXT_GRAY }}>
                <Pill color={ACCENT_ORANGE} glow />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {projects[0].tech.map((tech, i) => (
              <span 
                key={i}
                className="tech-tag px-3 py-1 rounded-full text-xs font-medium border font-body"
                style={{ 
                  color: ACCENT_LIGHT,
                  borderColor: ACCENT_ORANGE + '40',
                  backgroundColor: ACCENT_ORANGE + '10'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="py-32 px-6"
      style={{ backgroundColor: BG_BLACK }}
    >
      <style>{css}</style>
      
      <div className="mx-auto max-w-7xl">
        {/* ----- Heading ----- */}
        <div className="text-center mb-20">
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 font-heading"
            style={{
              background: `linear-gradient(90deg, ${ACCENT_ORANGE} 0%, ${ACCENT_LIGHT} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-body" style={{ color: TEXT_GRAY }}>
            Full Stack Developer with 2+ years of experience specializing in .NET Core, React.js, Next.js, and cloud solutions. 
            Passionate about building scalable, modern applications that deliver exceptional user experiences.
          </p>
        </div>

        {/* ----- Two-column layout ----- */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* ---- Left column ---- */}
          <div className="space-y-12">
            {/* Journey */}
            <div>
              <h3
                className="text-3xl font-semibold mb-6 font-heading"
                style={{ color: TEXT_WHITE }}
              >
                My Journey
              </h3>
              <p
                className="leading-relaxed mb-4 text-lg font-body"
                style={{ color: TEXT_GRAY }}
              >
                With a Master's in Computer Science from Mumbai University and over 2 years of professional experience, 
                I specialize in building robust, scalable applications using modern technologies. My expertise spans 
                full-stack development, cloud architecture, and real-time systems.
              </p>
              <p className="leading-relaxed text-lg font-body" style={{ color: TEXT_GRAY }}>
                I've successfully delivered 15+ projects, from e-commerce platforms handling 1000+ daily transactions 
                to real-time analytics systems supporting 500+ concurrent users. Currently based in Mumbai, I thrive 
                in agile environments and continuously explore emerging technologies to stay at the cutting edge.
              </p>
            </div>

            {/* Education & Experience summary cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <SummaryCard icon={GraduationCap} title="Education">
                <p className="mb-1 font-body" style={{ color: TEXT_GRAY }}>MS Computer Science</p>
                <p className="text-sm mb-2 font-body" style={{ color: TEXT_GRAY }}>Mumbai University (2021-2023)</p>
                <p className="text-xs font-body" style={{ color: TEXT_GRAY }}>
                  AI, ML, Deep Learning, Robotics
                </p>
              </SummaryCard>

              <SummaryCard icon={Briefcase} title="Experience">
                <p className="mb-1 font-body" style={{ color: TEXT_GRAY }}>2+ Years Professional</p>
                <p className="text-sm mb-2 font-body" style={{ color: TEXT_GRAY }}>15+ Projects Delivered</p>
                <p className="text-xs font-body" style={{ color: TEXT_GRAY }}>
                  MAIDC, Design Accent
                </p>
              </SummaryCard>
            </div>

            {/* Social Links - Added here with same effect as hero */}
            <div>
              <h3
                className="text-xl font-semibold mb-4 font-heading"
                style={{ color: TEXT_WHITE }}
              >
                Connect With Me
              </h3>
              <div className="flex gap-3">
                <SocialIcon 
                  icon={Github} 
                  href="https://github.com/Vishwaskarma" 
                />
                <SocialIcon 
                  icon={Linkedin} 
                  href="https://www.linkedin.com/in/himanshu-vishwakarma-856773239/" 
                />
                <SocialIcon 
                  icon={Mail} 
                  onClick={() => {/* Add your contact modal logic here */}} 
                />
              </div>
            </div>
          </div>

          {/* ---- Right column - Technical Stack ---- */}
          <Card>
            <h3
              className="text-2xl font-semibold mb-6 font-heading"
              style={{ color: TEXT_WHITE }}
            >
              Technical Stack
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-5 h-5 achievement-icon" style={{ color: ACCENT_ORANGE }} />
                  <h4 className="font-semibold font-heading" style={{ color: TEXT_WHITE }}>Languages</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['C#', 'JavaScript', 'Python', 'C++'].map(lang => (
                    <span key={lang} className="tech-tag px-3 py-1 rounded-lg text-sm border font-body" 
                      style={{ 
                        color: TEXT_WHITE, 
                        borderColor: BORDER,
                        backgroundColor: BG_CARD
                      }}>
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 achievement-icon" style={{ color: ACCENT_ORANGE }} />
                  <h4 className="font-semibold font-heading" style={{ color: TEXT_WHITE }}>Frameworks</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['.NET Core 8', 'ASP.NET Core', 'React.js', 'Next.js 15', 'AngularJS 17', 'Node.js'].map(fw => (
                    <span key={fw} className="tech-tag px-3 py-1 rounded-lg text-sm border font-body" 
                      style={{ 
                        color: TEXT_WHITE, 
                        borderColor: BORDER,
                        backgroundColor: BG_CARD
                      }}>
                      {fw}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Database className="w-5 h-5 achievement-icon" style={{ color: ACCENT_ORANGE }} />
                  <h4 className="font-semibold font-heading" style={{ color: TEXT_WHITE }}>Databases</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['SQL Server', 'MongoDB', 'PostgreSQL'].map(db => (
                    <span key={db} className="tech-tag px-3 py-1 rounded-lg text-sm border font-body" 
                      style={{ 
                        color: TEXT_WHITE, 
                        borderColor: BORDER,
                        backgroundColor: BG_CARD
                      }}>
                      {db}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Cloud className="w-5 h-5 achievement-icon" style={{ color: ACCENT_ORANGE }} />
                  <h4 className="font-semibold font-heading" style={{ color: TEXT_WHITE }}>Cloud & DevOps</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['AWS EC2', 'Docker', 'Jenkins', 'CI/CD', 'nginx', 'Git'].map(tool => (
                    <span key={tool} className="tech-tag px-3 py-1 rounded-lg text-sm border font-body" 
                      style={{ 
                        color: TEXT_WHITE, 
                        borderColor: BORDER,
                        backgroundColor: BG_CARD
                      }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <GitBranch className="w-5 h-5 achievement-icon" style={{ color: ACCENT_ORANGE }} />
                  <h4 className="font-semibold font-heading" style={{ color: TEXT_WHITE }}>Methodologies</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Agile/Scrum', 'Microservices', 'REST APIs', 'Real-time Systems'].map(method => (
                    <span key={method} className="tech-tag px-3 py-1 rounded-lg text-sm border font-body" 
                      style={{ 
                        color: TEXT_WHITE, 
                        borderColor: BORDER,
                        backgroundColor: BG_CARD
                      }}>
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* ----- Professional Experience ----- */}
        <div className="mb-24">
          <h3
            className="text-4xl font-semibold mb-12 text-center font-heading"
            style={{ color: TEXT_WHITE }}
          >
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <ExperienceCard key={idx} {...exp} />
            ))}
          </div>
        </div>

        {/* ----- Achievements grid ----- */}
        <div>
          <h3
            className="text-4xl font-semibold mb-12 text-center font-heading"
            style={{ color: TEXT_WHITE }}
          >
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map(({ icon: Icon, title, description, year }) => (
              <Card key={title}>
                <div className="relative">
                  <Icon
                    className="w-10 h-10 mb-4 achievement-icon"
                    style={{ color: ACCENT_ORANGE }}
                  />
                  <div 
                    className="absolute top-0 left-0 w-10 h-10 rounded-full blur-lg opacity-40"
                    style={{ backgroundColor: ACCENT_ORANGE }}
                  />
                </div>
                <h4
                  className="font-semibold mb-2 text-lg font-heading"
                  style={{ color: TEXT_WHITE }}
                >
                  {title}
                </h4>
                <p className="text-sm mb-2 font-body" style={{ color: TEXT_GRAY }}>
                  {description}
                </p>
                <p className="text-xs font-semibold font-body" style={{ color: ACCENT_LIGHT }}>
                  {year}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}