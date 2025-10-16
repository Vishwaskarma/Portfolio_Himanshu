import React, { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
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
  Sparkles,
  X,
  Send,
  User,
  MessageSquare
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
    <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-full blur-3xl animate-pulse-gentle" />
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-orange-400/25 to-amber-500/15 rounded-full blur-3xl animate-pulse-gentle-delayed" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-orange-300/20 to-orange-500/15 rounded-full blur-2xl animate-float-minimal" />
    <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-orange-400/15 to-orange-600/12 rounded-full blur-xl animate-morph-slow" style={{ borderRadius: '60% 40% 70% 30%' }} />
    <div className="absolute bottom-32 left-32 w-32 h-32 bg-gradient-to-br from-orange-300/18 to-amber-500/10 rounded-full blur-lg animate-morph-reverse" style={{ borderRadius: '40% 60% 30% 70%' }} />
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `linear-gradient(${ACCENT_ORANGE} 1px, transparent 1px), linear-gradient(90deg, ${ACCENT_ORANGE} 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    />
  </>
);

const FloatingElements = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
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

  if (elements.length === 0) return null;

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
      </div>
      <div>
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-zinc-300/90">{subtitle}</p>
      </div>
    </div>
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
      {Icon && <Icon className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-all duration-300 text-white" />}
    </button>
  );
};

const SocialLinks = ({ onMailClick }) => {
  const links = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Vishwaskarma', type: 'link' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/himanshu-vishwakarma-856773239/', type: 'link' },
    { icon: Mail, label: 'Email', onClick: onMailClick, type: 'button' }
  ];

  return (
    <div className="flex gap-4" style={{ position: 'relative', zIndex: 50 }}>
      {links.map((link, index) => {
        if (link.type === 'button') {
          return (
            <button
              key={link.label}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                link.onClick();
              }}
              className="group p-4 backdrop-blur-xl rounded-2xl border transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-slide-in-up"
              style={{
                animationDelay: `${1000 + index * 100}ms`,
                background: `${BG_CARD}99`,
                borderColor: `${ACCENT_ORANGE}4D`,
                cursor: 'pointer',
                position: 'relative',
                zIndex: 100,
              }}
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5 text-zinc-300 group-hover:text-orange-400 transition-colors duration-300" />
            </button>
          );
        }

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 backdrop-blur-xl rounded-2xl border transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-slide-in-up"
            style={{
              animationDelay: `${1000 + index * 100}ms`,
              background: `${BG_CARD}99`,
              borderColor: `${ACCENT_ORANGE}4D`,
              cursor: 'pointer',
              position: 'relative',
              zIndex: 100,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label={link.label}
          >
            <link.icon className="w-5 h-5 text-zinc-300 group-hover:text-orange-400 transition-colors duration-300" />
          </a>
        );
      })}
    </div>
  );
};

export default function BlackOrangeHero() {
  const [mounted, setMounted] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const heroRef = useRef(null);

  const roles = [
    'Full Stack Developer',
    '.NET Core Expert',
    'React Specialist'
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
        toast.success('Message sent successfully! I will get back to you soon.')
  
      setFormData({ name: '', email: '', message: '' });
      setShowModal(false);
      setLoading(false);
    }, 1500);
  };

  return (
    <>
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
          <div className="mb-4">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              style={{
                background: `linear-gradient(90deg, ${TEXT_WHITE}, ${ACCENT_LIGHT}, ${TEXT_WHITE})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {typedText}
              {isTyping && <span className="animate-blink ml-2" style={{ color: ACCENT_ORANGE }}>|</span>}
            </h1>
          </div>

          <div className="mb-6 h-12 flex items-center justify-center">
            <p
              className="text-xl md:text-2xl lg:text-3xl font-medium animate-role-fade-warm tracking-wide"
              style={{ color: ACCENT_LIGHT }}
            >
              {roles[currentRole]}
            </p>
          </div>

          <div className="mb-8 max-w-3xl animate-slide-in-up" style={{ animationDelay: '800ms' }}>
            <p className="text-lg md:text-xl text-zinc-200 leading-relaxed font-light">
              Crafting exceptional digital experiences with <span
                className="font-semibold"
                style={{
                  background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >.NET Core, React.js & Next.js</span>.
              Specializing in scalable cloud solutions and modern web platforms.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-6 max-w-4xl">
            <InfoCard icon={MapPin} title="Mumbai, Maharashtra" subtitle="India • Remote Available" delay={600} />
            <InfoCard icon={GraduationCap} title="MS Computer Science" subtitle="Mumbai University" delay={700} />
            <InfoCard icon={Code2} title="2+ Years Experience" subtitle="Full Stack Mastery" delay={800} />
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-6 animate-slide-in-up" style={{ animationDelay: '900ms' }}>
            <ModernButton variant="primary" icon={ArrowRight}>
              Explore My Portfolio
            </ModernButton>
            <ModernButton
              variant="secondary"
              icon={Download}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/HimanshuVishwakarma.pdf';
                link.download = 'Himanshu_Vishwakarma_Resume.pdf';
                link.click();
              }}
            >
              Download Resume
            </ModernButton>
          </div>

          <div className="mb-4">
            <SocialLinks onMailClick={() => setShowModal(true)} />
          </div>
        </div>

        <style>{`
          @keyframes fade-in { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
          .animate-fade-in { animation: fade-in 1s ease-out forwards; }
          @keyframes slide-in-up { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
          .animate-slide-in-up { animation: slide-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
          @keyframes role-fade-warm { 0%, 75% { opacity: 1; } 85%, 100% { opacity: 0; transform: translateY(-15px); } }
          .animate-role-fade-warm { animation: role-fade-warm 3.5s ease-in-out infinite; }
          @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
          .animate-blink { animation: blink 1.2s infinite; }
          @keyframes pulse-gentle { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.5; } }
          .animate-pulse-gentle { animation: pulse-gentle 6s ease-in-out infinite; }
          .animate-pulse-gentle-delayed { animation: pulse-gentle 6s ease-in-out infinite 3s; }
          @keyframes float-minimal { 0%, 100% { transform: translate(-50%, -50%) translateY(0px); } 50% { transform: translate(-50%, -50%) translateY(-15px); } }
          .animate-float-minimal { animation: float-minimal 8s ease-in-out infinite; }
          @keyframes morph-slow { 0%, 100% { border-radius: 60% 40% 70% 30%; } 50% { border-radius: 40% 60% 30% 70%; } }
          .animate-morph-slow { animation: morph-slow 20s ease-in-out infinite; }
          .animate-morph-reverse { animation: morph-slow 25s ease-in-out infinite reverse; }
          @keyframes float-up { 0% { transform: translateY(100vh); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-100px); opacity: 0; } }
          .animate-float-up { animation: float-up linear infinite; }
          @keyframes bounce-subtle { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
          .animate-bounce-subtle { animation: bounce-subtle 3s ease-in-out infinite; }
          .animate-fade-in-delayed { animation: fade-in 1s ease-out 1.4s forwards; opacity: 0; }
        `}</style>
      </div>

      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl p-8"
            style={{
              background: `linear-gradient(135deg, ${BG_CARD}98 0%, ${BG_BLACK}99 100%)`,
              border: `1px solid ${BORDER}`,
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-lg transition-colors hover:bg-gray-800"
              style={{
                background: `${BG_BLACK}80`,
                border: `1px solid ${BORDER}`,
                color: TEXT_GRAY,
              }}
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-3xl font-black mb-2" style={{ color: TEXT_WHITE }}>
              Let's Work Together
            </h3>
            <p className="text-sm mb-8" style={{ color: TEXT_GRAY }}>
              Fill out the form below and I'll get back to you within 24 hours
            </p>

            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-bold mb-2" style={{ color: TEXT_WHITE }}>
                  <User className="w-4 h-4" style={{ color: ACCENT_ORANGE }} />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-sm"
                  style={{
                    background: `${BG_BLACK}80`,
                    border: `1px solid ${BORDER}`,
                    color: TEXT_WHITE,
                    outline: 'none',
                  }}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold mb-2" style={{ color: TEXT_WHITE }}>
                  <Mail className="w-4 h-4" style={{ color: ACCENT_ORANGE }} />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-sm"
                  style={{
                    background: `${BG_BLACK}80`,
                    border: `1px solid ${BORDER}`,
                    color: TEXT_WHITE,
                    outline: 'none',
                  }}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold mb-2" style={{ color: TEXT_WHITE }}>
                  <MessageSquare className="w-4 h-4" style={{ color: ACCENT_ORANGE }} />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl text-sm resize-none"
                  style={{
                    background: `${BG_BLACK}80`,
                    border: `1px solid ${BORDER}`,
                    color: TEXT_WHITE,
                    outline: 'none',
                  }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold"
                style={{
                  background: loading ? `${BG_BLACK}` : `linear-gradient(135deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                  border: `1px solid ${loading ? BORDER : ACCENT_ORANGE}`,
                  color: '#fff',
                  boxShadow: loading ? 'none' : `0 12px 32px ${ACCENT_ORANGE}40`,
                  opacity: loading ? 0.6 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer',
                }}
              >
                {loading ? 'Sending...' : <><Send className="w-5 h-5" />Send Message</>}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}