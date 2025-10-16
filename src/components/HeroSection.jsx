import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  ChevronDown,
  MapPin,
  GraduationCap,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Zap,
  Code2,
  Sparkles
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

const OrangeBlackBackground = () => (
  <>
    {/* Orange Gradient Orbs */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-full blur-3xl animate-pulse-gentle" />
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-orange-400/25 to-amber-500/15 rounded-full blur-3xl animate-pulse-gentle-delayed" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-orange-300/20 to-orange-500/15 rounded-full blur-2xl animate-float-minimal" />
    
    {/* Organic flowing shapes */}
    <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-orange-400/15 to-orange-600/12 rounded-full blur-xl animate-morph-slow" style={{ borderRadius: '60% 40% 70% 30%' }} />
    <div className="absolute bottom-32 left-32 w-32 h-32 bg-gradient-to-br from-orange-300/18 to-amber-500/10 rounded-full blur-lg animate-morph-reverse" style={{ borderRadius: '40% 60% 30% 70%' }} />
    
    {/* Subtle Grid Pattern */}
    <div 
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `
          linear-gradient(${ACCENT_ORANGE} 1px, transparent 1px),
          linear-gradient(90deg, ${ACCENT_ORANGE} 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}
    />
  </>
);

const FloatingElements = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate elements only on client side to avoid hydration mismatch
    const clientElements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
      duration: Math.random() * 4 + 5,
    }));
    setElements(clientElements);
  }, []);

  // Don't render anything on server or during initial hydration
  if (elements.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map(el => (
        <div
          key={el.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-25 animate-float-up"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            width: `${el.size}px`,
            height: `${el.size}px`,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

const InfoCard = ({ icon: Icon, title, subtitle, delay = 0 }) => (
  <div 
    className="group relative p-6 backdrop-blur-xl rounded-3xl border transition-all duration-500 hover:-translate-y-1 animate-slide-in-up"
    style={{ 
      animationDelay: `${delay}ms`,
      background: `${BG_CARD}99`,
      borderColor: `${ACCENT_ORANGE}4D`
    }}
  >
    <div className="flex items-start gap-4">
      <div 
        className="relative p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
          boxShadow: `0 10px 30px ${ACCENT_ORANGE}4D`
        }}
      >
        <Icon className="w-5 h-5 text-white drop-shadow-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl transform -skew-x-12" />
      </div>
      <div>
        <h3 className="font-semibold text-white mb-1 group-hover:text-orange-50 transition-colors duration-300">{title}</h3>
        <p className="text-sm text-zinc-300/90 group-hover:text-white transition-colors duration-300">{subtitle}</p>
      </div>
    </div>
    
    <div 
      className="absolute inset-0 rounded-3xl transition-all duration-500 pointer-events-none"
      style={{
        background: `linear-gradient(90deg, ${ACCENT_ORANGE}00, ${ACCENT_ORANGE}00, ${ACCENT_ORANGE}00)`,
      }}
    />
  </div>
);

const ModernButton = ({ children, variant = 'primary', icon: Icon, className = '', ...props }) => {
  const baseClasses = "group relative px-10 py-5 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 overflow-hidden";
  
  const isPrimary = variant === 'primary';
  const buttonStyle = isPrimary ? {
    background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT}, ${ACCENT_ORANGE})`,
    boxShadow: `0 20px 40px ${ACCENT_ORANGE}66`,
  } : {
    background: `${BG_CARD}99`,
    border: `2px solid ${ACCENT_ORANGE}66`,
  };

  return (
    <button 
      className={`${baseClasses} ${className} hover:scale-105 hover:-translate-y-2`}
      style={buttonStyle}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-white/0 group-hover:from-white/10 group-hover:via-white/15 group-hover:to-white/10 transition-all duration-300 rounded-2xl" />
      
      <span className="relative z-10 text-white">{children}</span>
      {Icon && (
        <Icon className="relative z-10 w-6 h-6 group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-300 text-white" />
      )}
      
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
    </button>
  );
};

const SocialLinks = () => {
  const links = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Vishwaskarma' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/himanshu-vishwakarma' },
    { icon: Mail, label: 'Email', href: 'mailto:himanshuvishwakarma383@gmail.com' }
  ];

  return (
    <div className="flex gap-4">
      {links.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-4 backdrop-blur-xl rounded-2xl border transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-slide-in-up"
          style={{ 
            animationDelay: `${1000 + index * 100}ms`,
            background: `${BG_CARD}99`,
            borderColor: `${ACCENT_ORANGE}4D`
          }}
          aria-label={link.label}
        >
          <link.icon className="w-5 h-5 text-zinc-300 group-hover:text-orange-400 transition-colors duration-300" />
          
          <div 
            className="absolute inset-0 rounded-2xl transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${ACCENT_ORANGE}00, ${ACCENT_LIGHT}00)`,
            }}
          />
        </a>
      ))}
    </div>
  );
};

const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-delayed">
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <div 
          className="w-14 h-14 rounded-full border-2 flex items-center justify-center backdrop-blur-xl group cursor-pointer transition-all duration-300 animate-bounce-subtle"
          style={{
            background: `${BG_CARD}99`,
            borderColor: `${ACCENT_ORANGE}66`
          }}
        >
          <ChevronDown className="w-6 h-6" style={{ color: `${ACCENT_ORANGE}CC` }} />
        </div>
        <div 
          className="absolute inset-0 rounded-full blur-lg animate-pulse-ring"
          style={{
            background: `linear-gradient(135deg, ${ACCENT_ORANGE}33, ${ACCENT_LIGHT}33)`
          }}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-semibold text-zinc-400/90 tracking-wider">EXPLORE</span>
        <div 
          className="h-0.5 rounded-full animate-width-expand"
          style={{
            background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`
          }}
        />
      </div>
    </div>
  </div>
);

export default function BlackOrangeHero() {
  const [mounted, setMounted] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const heroRef = useRef(null);
  
  const roles = [
    'Full Stack Developer',
    '.NET Core Expert', 
    'React Specialist',
    'Cloud Architect'
  ];
  
  const fullName = 'Himanshu Vishwakarma';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let timeout;
    let currentIndex = 0;
    
    const typeText = () => {
      if (currentIndex <= fullName.length) {
        setTypedText(fullName.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeText, 120);
      } else {
        setIsTyping(false);
      }
    };
    
    if (mounted) {
      timeout = setTimeout(typeText, 600);
    }
    
    return () => clearTimeout(timeout);
  }, [mounted]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ 
        height: '100vh',
        background: `linear-gradient(135deg, ${BG_BLACK} 0%, #18181B 50%, ${BG_BLACK} 100%)`
      }}
    >
      <OrangeBlackBackground />
      <FloatingElements />
      
      <div className={`relative z-10 h-full flex flex-col justify-center items-center px-6 md:px-12 text-center transition-all duration-1200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        <div className="mb-10 animate-fade-in">
          <div 
            className="inline-flex items-center gap-4 px-8 py-4 backdrop-blur-xl rounded-full border text-sm font-semibold text-white shadow-lg"
            style={{
              background: `${BG_CARD}99`,
              borderColor: `${ACCENT_ORANGE}66`,
              boxShadow: `0 10px 30px ${ACCENT_ORANGE}33`
            }}
          >
            <div className="relative">
              <Zap className="w-5 h-5" style={{ color: ACCENT_ORANGE }} />
              <div 
                className="absolute inset-0 rounded-full blur-md opacity-60 animate-ping"
                style={{ background: ACCENT_ORANGE }}
              />
            </div>
            <span className="tracking-wide">Open to Premium Opportunities</span>
            <Sparkles className="w-5 h-5" style={{ color: ACCENT_LIGHT }} />
          </div>
        </div>

        <div className="mb-8">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
            style={{
              background: `linear-gradient(90deg, ${TEXT_WHITE}, ${ACCENT_LIGHT}, ${TEXT_WHITE})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {typedText}
            {isTyping && (
              <span className="animate-blink ml-2" style={{ color: ACCENT_ORANGE }}>|</span>
            )}
          </h1>
        </div>

        <div className="mb-10 h-14 flex items-center justify-center">
          <p 
            className="text-2xl md:text-3xl lg:text-4xl font-medium animate-role-fade-warm tracking-wide"
            style={{ color: ACCENT_LIGHT }}
          >
            {roles[currentRole]}
          </p>
        </div>

        <div className="mb-14 max-w-4xl animate-slide-in-up" style={{ animationDelay: '800ms' }}>
          <p className="text-xl md:text-2xl text-zinc-200 leading-relaxed font-light">
            Crafting exceptional digital experiences with <span 
              className="font-semibold"
              style={{
                background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >.NET Core, React.js & Next.js</span>. 
            Specializing in scalable cloud solutions and modern web platforms that transform ideas into powerful realities.
          </p>
        </div>

        <div className="mb-16 flex flex-wrap justify-center gap-8 max-w-4xl">
          <InfoCard 
            icon={MapPin} 
            title="Mumbai, Maharashtra" 
            subtitle="India • Remote Available"
            delay={600}
          />
          <InfoCard 
            icon={GraduationCap} 
            title="MS Computer Science" 
            subtitle="Mumbai University"
            delay={700}
          />
          <InfoCard 
            icon={Code2} 
            title="2+ Years Experience" 
            subtitle="Full Stack Mastery"
            delay={800}
          />
        </div>

        <div className="mb-16 flex flex-wrap justify-center gap-8 animate-slide-in-up" style={{ animationDelay: '900ms' }}>
          <ModernButton variant="primary" icon={ArrowRight}>
            Explore My Portfolio
          </ModernButton>
          <ModernButton variant="secondary" icon={Download}>
            Download Resume
          </ModernButton>
        </div>

        <div className="mb-16">
          <SocialLinks />
        </div>

        <ScrollIndicator />
      </div>

      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(30px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        @keyframes fade-in-delayed {
          0% { opacity: 0; transform: translateY(30px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1s ease-out 1.4s forwards;
          opacity: 0;
        }
        
        @keyframes slide-in-up {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        
        @keyframes role-fade-warm {
          0%, 75% { opacity: 1; transform: translateY(0) scale(1); }
          85%, 100% { opacity: 0; transform: translateY(-15px) scale(0.95); }
        }
        .animate-role-fade-warm {
          animation: role-fade-warm 3.5s ease-in-out infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1.2s infinite;
        }
        
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.5; transform: scale(1.1) rotate(180deg); }
        }
        .animate-pulse-gentle {
          animation: pulse-gentle 6s ease-in-out infinite;
        }
        
        .animate-pulse-gentle-delayed {
          animation: pulse-gentle 6s ease-in-out infinite 3s;
        }
        
        @keyframes float-minimal {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) scale(1); }
          33% { transform: translate(-50%, -50%) translateY(-15px) scale(1.05); }
          66% { transform: translate(-50%, -50%) translateY(10px) scale(0.95); }
        }
        .animate-float-minimal {
          animation: float-minimal 8s ease-in-out infinite;
        }
        
        @keyframes morph-slow {
          0%, 100% { 
            border-radius: 60% 40% 70% 30%;
            transform: rotate(0deg) scale(1);
          }
          25% {
            border-radius: 30% 70% 40% 60%;
            transform: rotate(90deg) scale(1.1);
          }
          50% { 
            border-radius: 70% 30% 60% 40%;
            transform: rotate(180deg) scale(0.9);
          }
          75% {
            border-radius: 40% 60% 30% 70%;
            transform: rotate(270deg) scale(1.05);
          }
        }
        .animate-morph-slow {
          animation: morph-slow 20s ease-in-out infinite;
        }
        
        .animate-morph-reverse {
          animation: morph-slow 25s ease-in-out infinite reverse;
        }
        
        @keyframes float-up {
          0% { transform: translateY(100vh) rotate(0deg) scale(0.8); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) rotate(360deg) scale(1.2); opacity: 0; }
        }
        .animate-float-up {
          animation: float-up linear infinite;
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
        
        @keyframes pulse-ring {
          0% { opacity: 0.6; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.4); }
        }
        .animate-pulse-ring {
          animation: pulse-ring 2.5s ease-out infinite;
        }
        
        @keyframes width-expand {
          0% { width: 0; opacity: 0; transform: scaleX(0); }
          100% { width: 2rem; opacity: 1; transform: scaleX(1); }
        }
        .animate-width-expand {
          animation: width-expand 1.2s ease-out 1.8s forwards;
          width: 0;
          opacity: 0;
          transform-origin: left;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-gentle,
          .animate-pulse-gentle-delayed,
          .animate-float-minimal,
          .animate-morph-slow,
          .animate-morph-reverse,
          .animate-float-up,
          .animate-bounce-subtle,
          .animate-pulse-ring,
          .animate-role-fade-warm {
            animation: none;
          }
          
          .animate-slide-in-up,
          .animate-fade-in,
          .animate-fade-in-delayed {
            animation: fade-in 0.3s ease-out forwards;
            opacity: 1;
          }
        }
        
        @media (max-height: 700px) {
          .text-5xl { font-size: 2.75rem; }
          .text-7xl { font-size: 3.75rem; }
          .text-8xl { font-size: 4.5rem; }
          .mb-8 { margin-bottom: 1.25rem; }
          .mb-10 { margin-bottom: 1.75rem; }
          .mb-14 { margin-bottom: 2rem; }
          .mb-16 { margin-bottom: 2.5rem; }
        }
        
        @media (max-width: 768px) {
          .text-5xl { font-size: 2.5rem; }
          .text-7xl { font-size: 3rem; }
          .text-8xl { font-size: 3.5rem; }
          .text-2xl { font-size: 1.375rem; }
          .text-3xl { font-size: 1.75rem; }
          .text-4xl { font-size: 2rem; }
        }
        
        ::selection {
          background-color: rgba(249, 115, 22, 0.4);
          color: rgba(255, 255, 255, 1);
        }
      `}</style>
    </div>
  );
}