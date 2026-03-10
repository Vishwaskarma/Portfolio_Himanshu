import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowRight,
  Download,
  Globe,
  X,
  Send,
  User,
  MessageSquare,
  Sparkles
} from 'lucide-react';

const ACCENT_ORANGE = '#F97316';
const ACCENT_LIGHT = '#FB923C';
const BG_BLACK = '#09090B';
const BG_CARD = '#18181B';
const BORDER = '#27272A';
const TEXT_WHITE = '#FFFFFF';
const TEXT_GRAY = '#A1A1AA';

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

  @keyframes morph {
    0%,100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%; }
    50%     { border-radius: 40% 60% 30% 70% / 60% 40% 60% 40%; }
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

  /* Button ripple effect */
  .btn-ripple {
    position: relative; overflow: hidden;
    transition: transform .25s cubic-bezier(.34,1.56,.64,1),
                box-shadow .25s ease,
                filter .25s ease;
  }
  .btn-ripple:hover  { transform: translateY(-3px) scale(1.035); filter: brightness(1.08); }
  .btn-ripple:active { transform: translateY(0px)  scale(.97);   transition-duration: .1s; }
  .btn-ripple::after {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(circle, rgba(255,255,255,.18) 0%, transparent 70%);
    opacity: 0; transition: opacity .3s;
    pointer-events: none;
  }
  .btn-ripple:hover::after { opacity: 1; }

  /* Input focus ring */
  .modal-input {
    transition: border-color .2s, box-shadow .2s;
  }
  .modal-input:focus {
    outline: none;
    border-color: rgba(249,115,22,.7) !important;
    box-shadow: 0 0 0 3px rgba(249,115,22,.15);
  }

  /* Modal fade */
  @keyframes modal-in {
    from { opacity: 0; transform: scale(.93) translateY(16px); }
    to   { opacity: 1; transform: scale(1)   translateY(0); }
  }
  .modal-box { animation: modal-in .35s cubic-bezier(.16,1,.3,1) forwards; }
`;

export default function ContactSection() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const cards = [
    {
      Icon: Mail,
      title: 'Email',
      value: 'himanshuvishwakarma383@gmail.com',
      note: 'I usually reply within 24 hours',
    },
    {
      Icon: Phone,
      title: 'Phone',
      value: '+91 8766740176',
      note: 'Mon–Fri · 9 AM–6 PM IST',
    },
    {
      Icon: MapPin,
      title: 'Location',
      value: 'Vasai, Mumbai',
      note: 'Open to remote work',
    },
  ];

  const socialLinks = [
    {
      Icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Vishwaskarma',
      username: '@Vishwaskarma'
    },
    {
      Icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/himanshu-vishwakarma-856773239/',
      username: 'Himanshu Vishwakarma'
    },
    {
      Icon: Globe,
      label: 'Portfolio',
      href: '#',
      username: 'Portfolio Site'
    },
  ];

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
      alert('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setShowModal(false);
      setLoading(false);
    }, 1500);
  };

  const InfoCard = ({ c }) => (
    <div className="text-center transition-all duration-300 hover:scale-105">
      <div
        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl relative group"
        style={{ background: ACCENT_ORANGE + '20' }}
      >
        <c.Icon className="h-8 w-8 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ color: ACCENT_ORANGE }} />
        <div 
          className="absolute inset-0 rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300"
          style={{ background: ACCENT_ORANGE }}
        />
      </div>
      <h3 className="text-xl font-bold mb-2 transition-colors duration-300 hover:text-orange-500" style={{ color: TEXT_WHITE }}>
        {c.title}
      </h3>
      <p className="font-medium mb-1 text-sm transition-all duration-300 hover:scale-105" style={{ color: ACCENT_LIGHT }}>{c.value}</p>
      <p className="text-sm transition-colors duration-300 hover:text-white" style={{ color: TEXT_GRAY }}>
        {c.note}
      </p>
    </div>
  );

  return (
    <>
      <style>{css}</style>
      <section id="contact" className="relative py-32 px-6 overflow-hidden" style={{ background: BG_BLACK }}>
        {/* Background orbs - same as hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-20 right-20 w-[28rem] h-[28rem] rounded-full opacity-10"
            style={{
              background: `radial-gradient(circle, ${ACCENT_ORANGE}, transparent)`,
              filter: 'blur(90px)',
              animation: 'float-orb 13s ease-in-out infinite',
            }}
          />
          <div 
            className="absolute bottom-20 left-20 w-[24rem] h-[24rem] rounded-full opacity-8"
            style={{
              background: `radial-gradient(circle, ${ACCENT_LIGHT}, transparent)`,
              filter: 'blur(80px)',
              animation: 'float-orb 15s ease-in-out infinite reverse',
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5"
            style={{
              background: `radial-gradient(circle, ${ACCENT_ORANGE}, transparent)`,
              filter: 'blur(60px)',
              animation: 'morph 22s ease-in-out infinite',
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
        </div>

        <div className="mx-auto max-w-6xl relative z-10">
          {/* Header with badge */}
          <div className="text-center mb-20">
            <div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 hover-card"
              style={{
                background: `linear-gradient(135deg, ${ACCENT_ORANGE}12, ${ACCENT_LIGHT}08)`,
                border: `1px solid ${ACCENT_ORANGE}30`,
                boxShadow: `0 8px 32px ${ACCENT_ORANGE}20`,
              }}
            >
              <Sparkles className="w-5 h-5" style={{ color: ACCENT_ORANGE }} />
              <span className="text-sm font-black tracking-widest uppercase" style={{ color: ACCENT_LIGHT }}>
                Get In Touch
              </span>
            </div>

            <h2
              className="text-6xl md:text-7xl font-black mb-6 leading-tight"
              style={{
                background: `linear-gradient(135deg, ${TEXT_WHITE} 0%, ${ACCENT_LIGHT} 50%, ${ACCENT_ORANGE} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Let's Build Something
              <br />
              Amazing Together
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: TEXT_GRAY }}>
              Ready to turn ideas into reality? Let's discuss your next project and create something extraordinary together.
            </p>
          </div>

          {/* Info Cards with hover-card class */}
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {cards.map((c) => (
              <div
                key={c.title}
                className="rounded-3xl p-8 shadow-lg backdrop-blur-sm hover-card"
                style={{ 
                  background: `linear-gradient(135deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
                  border: `1px solid ${BORDER}` 
                }}
              >
                <InfoCard c={c} />
              </div>
            ))}
          </div>

          {/* Main CTA Card */}
          <div
            className="rounded-3xl p-12 text-center shadow-2xl backdrop-blur-sm relative overflow-hidden hover-card"
            style={{ 
              background: `linear-gradient(135deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
              border: `1px solid ${BORDER}` 
            }}
          >
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
              style={{ background: ACCENT_ORANGE }}
            />
            
            <div className="relative z-10">
              <h3
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: TEXT_WHITE }}
              >
                Ready to Get Started?
              </h3>
              <p
                className="text-xl leading-relaxed mb-10 mx-auto max-w-3xl"
                style={{ color: TEXT_GRAY }}
              >
                Whether you need a full-stack web application, cloud architecture, microservices implementation, 
                or technical consultation, I'll help you achieve your goals with cutting-edge solutions and 2+ years 
                of proven expertise.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <button
                  onClick={() => setShowModal(true)}
                  className="group btn-ripple flex items-center gap-3 px-10 py-5 rounded-2xl font-bold"
                  style={{
                    background: `linear-gradient(110deg, ${ACCENT_ORANGE} 0%, ${ACCENT_LIGHT} 50%, ${ACCENT_ORANGE} 100%)`,
                    backgroundSize: '200% 100%',
                    color: TEXT_WHITE,
                    boxShadow: `0 16px 36px rgba(249,115,22,.4)`,
                  }}
                >
                  <span>Start a Project</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/HimanshuVishwakarma.pdf';
                    link.download = 'Himanshu_Vishwakarma_Resume.pdf';
                    link.click();
                  }}
                  className="group btn-ripple flex items-center gap-3 px-10 py-5 rounded-2xl font-bold"
                  style={{
                    background: `rgba(24,24,27,.7)`,
                    border: `1.5px solid rgba(249,115,22,.45)`,
                    color: TEXT_WHITE,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Download className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  <span>Download Resume</span>
                </button>
              </div>

              <div>
                <p className="text-sm font-semibold mb-6 tracking-wider" style={{ color: TEXT_GRAY }}>
                  CONNECT WITH ME
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn flex items-center gap-3 p-4 rounded-xl"
                      style={{
                        background: `${BG_CARD}CC`,
                        border: `1px solid rgba(249,115,22,.2)`,
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <div className="relative">
                        <social.Icon 
                          className="h-6 w-6 transition-colors" 
                          style={{ color: TEXT_GRAY }} 
                        />
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-semibold" style={{ color: TEXT_GRAY }}>
                          {social.label}
                        </p>
                        <p className="text-sm font-medium" style={{ color: TEXT_WHITE }}>
                          {social.username}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16">
            <p className="text-sm" style={{ color: TEXT_GRAY }}>
              Based in Mumbai, Maharashtra · Available for remote opportunities worldwide
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ 
                background: ACCENT_ORANGE,
                boxShadow: `0 0 8px ${ACCENT_ORANGE}`,
                animation: 'pulse-glow 2s infinite'
              }} />
              <p className="text-sm font-semibold" style={{ color: ACCENT_LIGHT }}>
                Currently open to new opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal with hero styling */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(12px)',
          }}
          onClick={() => setShowModal(false)}
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
              onClick={() => setShowModal(false)}
              className="btn-ripple absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-lg"
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
                onClick={handleSubmit}
                disabled={loading}
                className="btn-ripple w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold"
                style={{
                  background: loading 
                    ? `rgba(249,115,22,.4)`
                    : `linear-gradient(110deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                  color: '#fff',
                  boxShadow: loading ? 'none' : `0 12px 30px rgba(249,115,22,.35)`,
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer',
                }}
              >
                {loading ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                      <path d="M21 12a9 9 0 11-6.219-8.56" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}