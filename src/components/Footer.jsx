import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Heart, 
  Sparkles,
  X,
  Send,
  User,
  MessageSquare 
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

/* ─── Black & Orange Palette ─────────────────────────────── */
const ACCENT_ORANGE = '#F97316';
const ACCENT_LIGHT = '#FB923C';
const BG_BLACK = '#09090B';
const BG_CARD = '#18181B';
const BORDER = '#27272A';
const TEXT_WHITE = '#FFFFFF';
const TEXT_GRAY = '#A1A1AA';
/* ─────────────────────────────────────────────────────────── */

// EmailJS Configuration
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'Wy8a_VkQxjI45IRSQ',
  SERVICE_ID: 'service_jzx1o4b',
  TEMPLATE_ID: 'template_qwz8177'
};

/* Add the same CSS animations from hero */
const css = `
  @keyframes pulse-glow {
    0%,100% { opacity: .28; }
    50%     { opacity: .48; }
  }

  @keyframes float-orb {
    0%,100% { transform: translateY(0px) scale(1); }
    50%     { transform: translateY(-18px) scale(1.04); }
  }

  @keyframes modal-in {
    from { opacity: 0; transform: scale(.93) translateY(16px); }
    to   { opacity: 1; transform: scale(1)   translateY(0); }
  }
  .modal-box { animation: modal-in .35s cubic-bezier(.16,1,.3,1) forwards; }

  /* Social icon hover lift - same as hero */
  .social-btn {
    transition: transform .28s cubic-bezier(.34,1.56,.64,1),
                border-color .28s ease,
                box-shadow .28s ease;
    cursor: pointer;
    display: block;
    text-decoration: none;
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

  /* Link hover effect */
  .footer-link {
    transition: transform .25s cubic-bezier(.34,1.56,.64,1),
                color .25s ease;
    text-decoration: none;
  }
  .footer-link:hover {
    transform: translateX(6px);
    color: ${ACCENT_ORANGE};
  }

  /* Heart beat animation */
  .heart-beat {
    animation: heartbeat 1.5s ease-in-out infinite;
  }
  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    25% { transform: scale(1.1); }
    50% { transform: scale(1); }
    75% { transform: scale(1.05); }
  }

  /* Tech badge hover */
  .tech-badge {
    transition: transform .28s cubic-bezier(.34,1.56,.64,1),
                border-color .28s ease,
                box-shadow .28s ease;
  }
  .tech-badge:hover {
    transform: translateY(-3px) scale(1.02);
    border-color: ${ACCENT_ORANGE} !important;
    box-shadow: 0 8px 24px rgba(249,115,22,.2);
  }

  /* Input focus ring */
  .modal-input {
    transition: border-color .2s, box-shadow .2s;
  }
  .modal-input:focus {
    outline: none;
    border-color: rgba(249,115,22,.7) !important;
    box-shadow: 0 0 0 3px rgba(249,115,22,.15);
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Prevent body scroll when modal is open */
  body.modal-open {
    overflow: hidden;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  // Handle body scroll when modal opens/closes
  React.useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-open');
      // Store current scroll position
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.classList.remove('modal-open');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [showModal]);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Vishwaskarma',
      username: '@Vishwaskarma',
      type: 'external'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/himanshu-vishwakarma-856773239/',
      username: 'Himanshu Vishwakarma',
      type: 'external'
    },
    {
      name: 'Email',
      icon: Mail,
      username: 'Send a message',
      type: 'email'
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const techStack = ['React', 'Next.js', '.NET Core', 'AWS'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true);
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Himanshu',
        reply_to: formData.email,
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.success('Message sent successfully! I will get back to you soon.', {
          duration: 5000,
          position: 'top-center',
          style: {
            background: BG_CARD,
            color: TEXT_WHITE,
            border: `1px solid ${ACCENT_ORANGE}`,
          },
          icon: '✅',
        });
        
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setShowModal(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Email error:', error);
      
      // Fallback to mailto
      const subject = `Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      window.location.href = `mailto:himanshuvishwakarma383@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      toast.success('Opening your email client...', {
        duration: 3000,
        style: {
          background: BG_CARD,
          color: TEXT_WHITE,
          border: `1px solid ${ACCENT_ORANGE}`,
        },
      });
      
      setShowModal(false);
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowModal(false);
  };

  return (
    <>
      <style>{css}</style>
      <Toaster />
      <footer 
        className="py-12 px-6 backdrop-blur-sm relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${BG_BLACK} 0%, ${BG_CARD} 100%)`,
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        {/* Background gradient effects with hero-style animations */}
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ 
            background: ACCENT_ORANGE,
            animation: 'float-orb 13s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ 
            background: ACCENT_LIGHT,
            animation: 'float-orb 15s ease-in-out infinite reverse',
          }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${BORDER} 1.5px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="group">
              <div 
                className="text-3xl font-bold mb-4 transition-all duration-300 group-hover:scale-105 origin-left"
                style={{
                  background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Himanshu Vishwakarma
              </div>
              <p className="mb-4 transition-all duration-300 group-hover:translate-x-1" style={{ color: TEXT_GRAY }}>
                Full Stack Developer specializing in .NET Core, React.js, and Cloud Solutions
              </p>
              <div className="flex items-center gap-2 mb-2 transition-all duration-300 hover:translate-x-1" style={{ color: TEXT_GRAY }}>
                <MapPin className="w-4 h-4 transition-all duration-300 hover:scale-110" style={{ color: ACCENT_ORANGE }} />
                <span>Vasai, Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1" style={{ color: TEXT_GRAY }}>
                <Phone className="w-4 h-4 transition-all duration-300 hover:scale-110" style={{ color: ACCENT_ORANGE }} />
                <span>+91 8766740176</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 
                className="text-lg font-bold mb-4 relative inline-block"
                style={{ color: TEXT_WHITE }}
              >
                Quick Links
                <div 
                  className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full"
                  style={{ 
                    background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                  }}
                />
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="footer-link group flex items-center gap-2"
                    style={{ color: TEXT_GRAY }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div 
                      className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg"
                      style={{ 
                        background: ACCENT_ORANGE,
                        boxShadow: `0 0 0 ${ACCENT_ORANGE}`,
                      }}
                    />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 
                className="text-lg font-bold mb-4"
                style={{ color: TEXT_WHITE }}
              >
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  
                  // For email, open modal
                  if (social.type === 'email') {
                    return (
                      <button
                        key={social.name}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setShowModal(true);
                        }}
                        className="social-btn group flex items-center gap-3 p-2 rounded-xl w-full text-left"
                        style={{
                          background: 'transparent',
                          border: '1px solid transparent',
                        }}
                      >
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 relative flex-shrink-0"
                          style={{
                            background: BG_BLACK,
                            border: `1px solid ${BORDER}`,
                          }}
                        >
                          <Icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110" style={{ color: ACCENT_ORANGE }} />
                          <div 
                            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ 
                              background: `linear-gradient(135deg, ${ACCENT_ORANGE}20, ${ACCENT_LIGHT}20)`,
                              border: `1px solid ${ACCENT_ORANGE}60`,
                            }}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div 
                            className="text-sm font-semibold transition-colors duration-300 group-hover:text-orange-500"
                            style={{ color: TEXT_WHITE }}
                          >
                            {social.name}
                          </div>
                          <div className="text-xs transition-colors duration-300 group-hover:text-white truncate" style={{ color: TEXT_GRAY }}>
                            {social.username}
                          </div>
                        </div>
                      </button>
                    );
                  }
                  
                  // For regular external links
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn group flex items-center gap-3 p-2 rounded-xl"
                      style={{
                        background: 'transparent',
                        border: '1px solid transparent',
                        textDecoration: 'none',
                      }}
                    >
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 relative flex-shrink-0"
                        style={{
                          background: BG_BLACK,
                          border: `1px solid ${BORDER}`,
                        }}
                      >
                        <Icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110" style={{ color: ACCENT_ORANGE }} />
                        <div 
                          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ 
                            background: `linear-gradient(135deg, ${ACCENT_ORANGE}20, ${ACCENT_LIGHT}20)`,
                            border: `1px solid ${ACCENT_ORANGE}60`,
                          }}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div 
                          className="text-sm font-semibold transition-colors duration-300 group-hover:text-orange-500"
                          style={{ color: TEXT_WHITE }}
                        >
                          {social.name}
                        </div>
                        <div className="text-xs transition-colors duration-300 group-hover:text-white truncate" style={{ color: TEXT_GRAY }}>
                          {social.username}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Divider with gradient */}
          <div 
            className="h-px w-full mb-8"
            style={{
              background: `linear-gradient(90deg, transparent, ${BORDER}, ${ACCENT_ORANGE}, ${BORDER}, transparent)`,
            }}
          />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 group" style={{ color: TEXT_GRAY }}>
              <span>© {currentYear}</span>
              <span 
                className="font-semibold transition-all duration-300 group-hover:text-orange-500 group-hover:scale-105"
                style={{ color: ACCENT_LIGHT }}
              >
                Himanshu Vishwakarma
              </span>
              <span>All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2 group" style={{ color: TEXT_GRAY }}>
              <span>Crafted with</span>
              <Heart 
                className="w-4 h-4 fill-current heart-beat" 
                style={{ color: ACCENT_ORANGE }} 
              />
              <span>using</span>
              <span 
                className="font-semibold transition-all duration-300 group-hover:text-orange-500 group-hover:scale-105"
                style={{ color: ACCENT_LIGHT }}
              >
                React
              </span>
              <span>& modern web technologies</span>
            </div>
          </div>

          {/* Tech Stack Badge */}
          <div className="mt-8 flex justify-center">
            <div 
              className="tech-badge inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-sm"
              style={{
                background: BG_BLACK,
                border: `1px solid ${BORDER}`,
              }}
            >
              <Sparkles className="w-4 h-4 transition-all duration-300 group-hover:rotate-90" style={{ color: ACCENT_ORANGE }} />
              <span className="text-sm" style={{ color: TEXT_GRAY }}>
                Built with
              </span>
              <div className="flex items-center gap-2">
                {techStack.map((tech, index) => (
                  <React.Fragment key={tech}>
                    {index > 0 && (
                      <div 
                        className="w-1 h-1 rounded-full"
                        style={{ background: ACCENT_ORANGE }}
                      />
                    )}
                    <span 
                      className="text-sm font-semibold transition-all duration-300 hover:text-orange-500 hover:scale-105 cursor-default"
                      style={{ color: ACCENT_LIGHT }}
                    >
                      {tech}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Back to top button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-sm transition-all duration-300 hover:translate-y-[-4px] group"
              style={{ color: TEXT_GRAY }}
            >
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: BG_BLACK,
                  border: `1px solid ${BORDER}`,
                }}
              >
                <svg 
                  className="w-4 h-4 transition-all duration-300 group-hover:-translate-y-1" 
                  style={{ color: ACCENT_ORANGE }}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(12px)',
          }}
          onClick={handleModalClose}
        >
          <div
            className="modal-box relative w-full max-w-lg rounded-2xl p-8"
            style={{
              background: `linear-gradient(145deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
              border: `1px solid rgba(249,115,22,.25)`,
              boxShadow: '0 32px 80px rgba(0,0,0,.7), 0 0 60px rgba(249,115,22,.08)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleModalClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110"
              style={{
                background: `rgba(255,255,255,.06)`,
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

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  required
                  className="modal-input w-full px-4 py-3 rounded-xl text-sm"
                  style={{
                    background: `rgba(9,9,11,.6)`,
                    border: `1px solid ${BORDER}`,
                    color: TEXT_WHITE,
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
                  required
                  className="modal-input w-full px-4 py-3 rounded-xl text-sm"
                  style={{
                    background: `rgba(9,9,11,.6)`,
                    border: `1px solid ${BORDER}`,
                    color: TEXT_WHITE,
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
                  required
                  rows={5}
                  className="modal-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                  style={{
                    background: `rgba(9,9,11,.6)`,
                    border: `1px solid ${BORDER}`,
                    color: TEXT_WHITE,
                  }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl disabled:hover:translate-y-0"
                style={{
                  background: loading 
                    ? BG_BLACK 
                    : `linear-gradient(135deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                  border: `1px solid ${loading ? BORDER : ACCENT_ORANGE}`,
                  color: '#fff',
                  boxShadow: loading 
                    ? 'none' 
                    : `0 12px 32px ${ACCENT_ORANGE}40, inset 0 1px 0 0 rgba(255, 255, 0.2)`,
                  opacity: loading ? 0.6 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer',
                }}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;