import React, { useState, useEffect } from 'react';
import { Globe, Cloud, Database, Server, Sparkles, ArrowRight, X, Send, Mail, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

/* ─── Black & Orange Palette ─────────────────────────────── */
const ACCENT_ORANGE = '#F97316';
const ACCENT_LIGHT = '#FB923C';
const BG_BLACK = '#09090B';
const BG_CARD = '#18181B';
const BORDER = '#27272A';
const TEXT_WHITE = '#FFFFFF';
const TEXT_GRAY = '#A1A1AA';
/* ─────────────────────────────────────────────────────────── */

// EmailJS configuration - replace with your actual values
const EMAILJS_CONFIG = {
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'Wy8a_VkQxjl45IRSQ',
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_jzx1o4b',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_qwz8i77'
};

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Initialize EmailJS
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      desc: 'Full-stack applications with modern frameworks and industry best practices for scalable solutions',
      feats: ['React / Next.js', 'ASP.NET Core', 'Responsive UI', 'PWA builds'],
      color: ACCENT_ORANGE,
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      desc: 'Scalable cloud-native applications and infrastructure management for enterprise-grade systems',
      feats: ['AWS services', 'Serverless', 'Auto-scaling', 'Cost optimization'],
      color: '#3b82f6',
    },
    {
      icon: Database,
      title: 'Database Design',
      desc: 'Efficient database architecture and performance tuning for high-throughput data systems',
      feats: ['SQL Server', 'NoSQL', 'Data modeling', 'Perf tuning'],
      color: '#10b981',
    },
    {
      icon: Server,
      title: 'DevOps & Deployment',
      desc: 'CI/CD pipelines, containerization, and infrastructure automation for seamless delivery',
      feats: ['Docker / K8s', 'CI/CD pipelines', 'Monitoring', 'Load balancing'],
      color: '#8b5cf6',
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Himanshu', // Your name
        }
      );

      if (response.status === 200) {
        alert('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setShowModal(false);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const Card = ({ s, index }) => {
    return (
      <div
        className={`relative transition-all duration-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ 
          transitionDelay: `${index * 100}ms`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          className="relative rounded-2xl p-8 overflow-hidden flex flex-col h-full"
          style={{
            background: `linear-gradient(135deg, ${BG_CARD}98 0%, ${BG_BLACK}99 100%)`,
            border: `1px solid ${BORDER}`,
            boxShadow: '0 12px 32px -8px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255,255,255,0.02)',
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              opacity: 0.05,
              background: `radial-gradient(circle at top right, ${s.color}, transparent 70%)`,
            }}
          />

          <div className="relative z-10 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-6">
              <div
                className="w-14 h-14 flex items-center justify-center rounded-xl"
                style={{ 
                  background: `linear-gradient(135deg, ${s.color}20, ${s.color}10)`,
                  border: `1px solid ${s.color}30`,
                }}
              >
                <s.icon className="w-7 h-7" style={{ color: s.color }} />
              </div>

              <div 
                className="px-3 py-1.5 rounded-full"
                style={{
                  background: `${s.color}15`,
                  border: `1px solid ${s.color}30`,
                }}
              >
                <span className="text-xs font-bold tracking-wide" style={{ color: s.color }}>
                  Available
                </span>
              </div>
            </div>

            <h3 
              className="text-2xl font-black mb-4"
              style={{ color: TEXT_WHITE, letterSpacing: '-0.01em' }}
            >
              {s.title}
            </h3>

            <p 
              className="leading-relaxed mb-6 text-sm flex-grow"
              style={{ color: TEXT_GRAY, lineHeight: '1.8' }}
            >
              {s.desc}
            </p>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: `${s.color}15`,
                    border: `1px solid ${s.color}30`,
                  }}
                >
                  <Sparkles className="w-4 h-4" style={{ color: s.color }} />
                </div>
                <h4 
                  className="text-xs font-black tracking-wider uppercase"
                  style={{ color: TEXT_WHITE }}
                >
                  What&apos;s Included
                </h4>
              </div>

              <div className="space-y-2.5">
                {s.feats.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div 
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ 
                        background: s.color,
                        boxShadow: `0 0 6px ${s.color}`,
                      }}
                    />
                    <span className="text-sm font-medium" style={{ color: TEXT_GRAY }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="w-full flex items-center justify-between px-6 py-4 rounded-xl font-bold mt-auto transition-transform hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${s.color}, ${ACCENT_LIGHT})`,
                border: `1px solid ${s.color}`,
                color: '#fff',
                boxShadow: `0 10px 28px ${s.color}35, inset 0 1px 0 0 rgba(255,255,255,0.2)`,
              }}
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="services" className="relative py-32 px-6 overflow-hidden" style={{ background: BG_BLACK }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute inset-0 opacity-3"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, ${BORDER} 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div 
            className={`text-center mb-24 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8"
              style={{
                background: `${ACCENT_ORANGE}12`,
                border: `1px solid ${ACCENT_ORANGE}30`,
                boxShadow: `0 8px 28px ${ACCENT_ORANGE}20`,
              }}
            >
              <Sparkles className="w-5 h-5" style={{ color: ACCENT_ORANGE }} />
              <span 
                className="text-sm font-black tracking-widest uppercase"
                style={{ color: ACCENT_LIGHT }}
              >
                Services & Expertise
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
              What I Do
            </h2>

            <p 
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: TEXT_GRAY }}
            >
              Comprehensive end-to-end solutions tailored to your business needs
            </p>
          </div>

          <div 
            className="grid md:grid-cols-2 gap-8"
            style={{
              display: 'grid',
              gridAutoRows: '1fr',
            }}
          >
            {services.map((s, i) => (
              <Card key={s.title} s={s} index={i} />
            ))}
          </div>

          <div 
            className={`mt-20 text-center transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div 
              className="inline-block p-8 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${BG_CARD}95 0%, ${BG_BLACK}98 100%)`,
                border: `1px solid ${BORDER}`,
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
              }}
            >
              <p className="text-lg font-semibold mb-4" style={{ color: TEXT_GRAY }}>
                Ready to start your project?
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                  color: '#fff',
                  boxShadow: `0 12px 32px ${ACCENT_ORANGE}40, inset 0 1px 0 0 rgba(255, 255, 255, 0.2)`,
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
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

            <h3 
              className="text-3xl font-black mb-2"
              style={{ color: TEXT_WHITE }}
            >
              Let&apos;s Work Together
            </h3>
            <p className="text-sm mb-8" style={{ color: TEXT_GRAY }}>
              Fill out the form below and I&apos;ll get back to you within 24 hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  className="flex items-center gap-2 text-sm font-bold mb-2"
                  style={{ color: TEXT_WHITE }}
                >
                  <User className="w-4 h-4" style={{ color: ACCENT_ORANGE }} />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm transition-colors focus:border-orange-500"
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
                <label 
                  className="flex items-center gap-2 text-sm font-bold mb-2"
                  style={{ color: TEXT_WHITE }}
                >
                  <Mail className="w-4 h-4" style={{ color: ACCENT_ORANGE }} />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm transition-colors focus:border-orange-500"
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
                <label 
                  className="flex items-center gap-2 text-sm font-bold mb-2"
                  style={{ color: TEXT_WHITE }}
                >
                  <MessageSquare className="w-4 h-4" style={{ color: ACCENT_ORANGE }} />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl text-sm resize-none transition-colors focus:border-orange-500"
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
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold transition-all"
                style={{
                  background: loading 
                    ? `${BG_BLACK}` 
                    : `linear-gradient(135deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                  border: `1px solid ${loading ? BORDER : ACCENT_ORANGE}`,
                  color: '#fff',
                  boxShadow: loading 
                    ? 'none' 
                    : `0 12px 32px ${ACCENT_ORANGE}40, inset 0 1px 0 0 rgba(255, 255, 255, 0.2)`,
                  opacity: loading ? 0.6 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer',
                }}
              >
                {loading ? (
                  <>Sending...</>
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
}