import React from 'react';
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
    role: 'Assistant Manager Sr Dev And Engineer',
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

const Pill = ({ color, glow = false }) => (
  <div className="relative">
    <div 
      style={{ background: color }} 
      className="w-2 h-2 rounded-full"
    />
    {glow && (
      <div 
        style={{ background: color }} 
        className="absolute inset-0 w-2 h-2 rounded-full blur-sm opacity-60"
      />
    )}
  </div>
);

const Card = ({ children, className = '' }) => (
  <div
    className={`backdrop-blur-sm border rounded-2xl p-6 shadow-lg transition-all duration-300
               hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 ${className}`}
    style={{ 
      background: `linear-gradient(135deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
      borderColor: BORDER 
    }}
  >
    {children}
  </div>
);

const ExperienceCard = ({ company, role, period, location, projects }) => (
  <Card className="group">
    <div className="mb-6">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className="text-2xl font-bold mb-2" style={{ color: TEXT_WHITE }}>
            {company}
          </h4>
          <p className="text-lg font-semibold mb-1" style={{ color: ACCENT_ORANGE }}>
            {role}
          </p>
        </div>
        <Briefcase className="w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: ACCENT_ORANGE }} />
      </div>
      <div className="flex flex-wrap gap-3 text-sm" style={{ color: TEXT_GRAY }}>
        <span className="flex items-center gap-1">
          📅 {period}
        </span>
        <span className="flex items-center gap-1">
          📍 {location}
        </span>
      </div>
    </div>

    <div className="space-y-6">
      {projects.map((project, idx) => (
        <div key={idx} className="border-t pt-4" style={{ borderColor: BORDER }}>
          <h5 className="text-xl font-semibold mb-2" style={{ color: TEXT_WHITE }}>
            {project.name}
          </h5>
          <p className="text-sm mb-3" style={{ color: TEXT_GRAY }}>
            {project.description}
          </p>
          
          <ul className="space-y-2 mb-4">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: TEXT_GRAY }}>
                <Pill color={ACCENT_ORANGE} glow />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{ 
                  color: ACCENT_LIGHT,
                  borderColor: ACCENT_ORANGE + '40',
                  background: ACCENT_ORANGE + '10'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Card>
);

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="py-32 px-6"
      style={{ background: BG_BLACK }}
    >
      <div className="mx-auto max-w-7xl">
        {/* ----- Heading ----- */}
        <div className="text-center mb-20">
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background: `linear-gradient(90deg, ${ACCENT_ORANGE} 0%, ${ACCENT_LIGHT} 100%)`,
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            About Me
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: TEXT_GRAY }}>
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
                className="text-3xl font-semibold mb-6"
                style={{ color: TEXT_WHITE }}
              >
                My Journey
              </h3>
              <p
                className="leading-relaxed mb-4 text-lg"
                style={{ color: TEXT_GRAY }}
              >
                With a Master's in Computer Science from Mumbai University and over 2 years of professional experience, 
                I specialize in building robust, scalable applications using modern technologies. My expertise spans 
                full-stack development, cloud architecture, and real-time systems.
              </p>
              <p className="leading-relaxed text-lg" style={{ color: TEXT_GRAY }}>
                I've successfully delivered 15+ projects, from e-commerce platforms handling 1000+ daily transactions 
                to real-time analytics systems supporting 500+ concurrent users. Currently based in Mumbai, I thrive 
                in agile environments and continuously explore emerging technologies to stay at the cutting edge.
              </p>
            </div>

            {/* Education & Experience summary cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <GraduationCap className="w-8 h-8 mb-4" style={{ color: ACCENT_ORANGE }} />
                <h4
                  className="text-xl font-semibold mb-2"
                  style={{ color: TEXT_WHITE }}
                >
                  Education
                </h4>
                <p className="mb-1" style={{ color: TEXT_GRAY }}>MS Computer Science</p>
                <p className="text-sm mb-2" style={{ color: TEXT_GRAY }}>Mumbai University (2021-2023)</p>
                <p className="text-xs" style={{ color: TEXT_GRAY }}>
                  AI, ML, Deep Learning, Robotics
                </p>
              </Card>

              <Card>
                <Briefcase className="w-8 h-8 mb-4" style={{ color: ACCENT_ORANGE }} />
                <h4
                  className="text-xl font-semibold mb-2"
                  style={{ color: TEXT_WHITE }}
                >
                  Experience
                </h4>
                <p className="mb-1" style={{ color: TEXT_GRAY }}>2+ Years Professional</p>
                <p className="text-sm mb-2" style={{ color: TEXT_GRAY }}>15+ Projects Delivered</p>
                <p className="text-xs" style={{ color: TEXT_GRAY }}>
                  MAIDC, Design Accent
                </p>
              </Card>
            </div>
          </div>

          {/* ---- Right column - Technical Stack ---- */}
          <Card>
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ color: TEXT_WHITE }}
            >
              Technical Stack
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-5 h-5" style={{ color: ACCENT_ORANGE }} />
                  <h4 className="font-semibold" style={{ color: TEXT_WHITE }}>Languages</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['C#', 'JavaScript', 'Python', 'C++'].map(lang => (
                    <span key={lang} className="px-3 py-1 rounded-lg text-sm border" 
                      style={{ 
                        color: TEXT_WHITE, 
                        borderColor: BORDER,
                        background: BG_CARD 
                      }}>
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5" style={{ color: ACCENT_ORANGE }} />
                  <h4 className="font-semibold" style={{ color: TEXT_WHITE }}>Frameworks</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['.NET Core 8', 'ASP.NET Core', 'React.js', 'Next.js 15', 'AngularJS 17', 'Node.js'].map(fw => (
                    <span key={fw} className="px-3 py-1 rounded-lg text-sm border" 
                      style={{ 
                        color: TEXT_WHITE, 
                        borderColor: BORDER,
                        background: BG_CARD 
                      }}>
                      {fw}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Database className="w-5 h-5" style={{ color: ACCENT_ORANGE }} />
                  <h4 className="font-semibold" style={{ color: TEXT_WHITE }}>Databases</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['SQL Server', 'MongoDB', 'PostgreSQL'].map(db => (
                    <span key={db} className="px-3 py-1 rounded-lg text-sm border" 
                      style={{ 
                        color: TEXT_WHITE, 
                        borderColor: BORDER,
                        background: BG_CARD 
                      }}>
                      {db}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Cloud className="w-5 h-5" style={{ color: ACCENT_ORANGE }} />
                  <h4 className="font-semibold" style={{ color: TEXT_WHITE }}>Cloud & DevOps</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['AWS EC2', 'Docker', 'Jenkins', 'CI/CD', 'nginx', 'Git'].map(tool => (
                    <span key={tool} className="px-3 py-1 rounded-lg text-sm border" 
                      style={{ 
                        color: TEXT_WHITE, 
                        borderColor: BORDER,
                        background: BG_CARD 
                      }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <GitBranch className="w-5 h-5" style={{ color: ACCENT_ORANGE }} />
                  <h4 className="font-semibold" style={{ color: TEXT_WHITE }}>Methodologies</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Agile/Scrum', 'Microservices', 'REST APIs', 'Real-time Systems'].map(method => (
                    <span key={method} className="px-3 py-1 rounded-lg text-sm border" 
                      style={{ 
                        color: TEXT_WHITE, 
                        borderColor: BORDER,
                        background: BG_CARD 
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
            className="text-4xl font-semibold mb-12 text-center"
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
            className="text-4xl font-semibold mb-12 text-center"
            style={{ color: TEXT_WHITE }}
          >
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map(({ icon: Icon, title, description, year }) => (
              <Card key={title}>
                <div className="relative">
                  <Icon
                    className="w-10 h-10 mb-4 transition-transform hover:scale-110"
                    style={{ color: ACCENT_ORANGE }}
                  />
                  <div 
                    className="absolute top-0 left-0 w-10 h-10 rounded-full blur-lg opacity-40"
                    style={{ background: ACCENT_ORANGE }}
                  />
                </div>
                <h4
                  className="font-semibold mb-2 text-lg"
                  style={{ color: TEXT_WHITE }}
                >
                  {title}
                </h4>
                <p className="text-sm mb-2" style={{ color: TEXT_GRAY }}>
                  {description}
                </p>
                <p className="text-xs font-semibold" style={{ color: ACCENT_LIGHT }}>
                  {year}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
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