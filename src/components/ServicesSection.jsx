'use client';

import React, { useState, useEffect } from 'react';
import {
  Globe, Cloud, Database, Server, Sparkles,
  ArrowRight, X, Send, Mail, User, MessageSquare,
  Zap, Shield, Cpu, Gauge
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

// Fallback email (your personal email)
const FALLBACK_EMAIL = 'himanshuvishwakarma383@gmail.com';

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serviceStatus, setServiceStatus] = useState('checking'); // 'checking', 'online', 'offline', 'degraded'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Initialize EmailJS and check service status
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Initialize EmailJS
    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      console.log('✅ EmailJS initialized');
      
      // Check if service is responding
      checkServiceStatus();
    } catch (error) {
      console.error('❌ EmailJS initialization failed:', error);
      setServiceStatus('offline');
    }
    
    return () => clearTimeout(timer);
  }, []);

  // Check if EmailJS service is available
  const checkServiceStatus = async () => {
    try {
      // Try a simple test to see if service is responding
      const testResult = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: 'System Test',
          from_email: 'test@example.com',
          message: 'Testing service availability',
          to_name: 'Himanshu',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      ).catch(() => null);

      if (testResult) {
        setServiceStatus('online');
      } else {
        // Service is responding but might be degraded
        setServiceStatus('degraded');
      }
    } catch (error) {
      // Service is completely offline
      console.log('⚠️ EmailJS service appears to be offline');
      setServiceStatus('offline');
    }
  };

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Full-stack applications with modern frameworks and industry best practices for scalable solutions',
      features: ['React / Next.js', 'ASP.NET Core', 'Responsive UI', 'PWA builds'],
      metrics: ['15+ Projects', '99.9% Uptime', '2s Load Time'],
      color: ACCENT_ORANGE,
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud-native applications and infrastructure management for enterprise-grade systems',
      features: ['AWS services', 'Serverless', 'Auto-scaling', 'Cost optimization'],
      metrics: ['6+ Deployments', 'High Availability', '40% Cost Save'],
      color: '#3b82f6',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Efficient database architecture and performance tuning for high-throughput data systems',
      features: ['SQL Server', 'NoSQL', 'Data modeling', 'Perf tuning'],
      metrics: ['10+ Schemas', '50% Faster', 'Zero Downtime'],
      color: '#10b981',
    },
    {
      icon: Server,
      title: 'DevOps & Deployment',
      description: 'CI/CD pipelines, containerization, and infrastructure automation for seamless delivery',
      features: ['Docker / K8s', 'CI/CD pipelines', 'Monitoring', 'Load balancing'],
      metrics: ['24/7 Monitoring', 'Auto-scaling', '99.9% Uptime'],
      color: '#8b5cf6',
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fallback: Create a mailto link
  const createMailtoLink = () => {
    const subject = `Project Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    return `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
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

    // If service is offline, use fallback
    if (serviceStatus === 'offline') {
      window.location.href = createMailtoLink();
      toast.success('Opening your email client...', {
        duration: 3000,
        style: {
          background: BG_CARD,
          color: TEXT_WHITE,
          border: `1px solid ${ACCENT_ORANGE}`,
        },
      });
      setShowModal(false);
      setFormData({ name: '', email: '', message: '' });
      return;
    }

    setLoading(true);
    
    try {
      console.log('🚀 Sending email via EmailJS...');

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
      console.error('❌ EmailJS error:', error);
      
      // Show fallback option
      toast((t) => (
        <div className="flex flex-col gap-3">
          <p className="font-bold" style={{ color: TEXT_WHITE }}>Email service temporarily unavailable</p>
          <p className="text-sm" style={{ color: TEXT_GRAY }}>You can still reach me directly:</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => {
                window.location.href = createMailtoLink();
                toast.dismiss(t.id);
                setShowModal(false);
              }}
              className="px-4 py-2 rounded-lg text-sm font-bold transition-all hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                color: '#fff',
              }}
            >
              Open Email Client
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(FALLBACK_EMAIL);
                toast.success('Email copied!', { duration: 2000 });
              }}
              className="px-4 py-2 rounded-lg text-sm font-bold transition-all hover:scale-105"
              style={{
                background: BG_BLACK,
                border: `1px solid ${ACCENT_ORANGE}`,
                color: ACCENT_ORANGE,
              }}
            >
              Copy Email
            </button>
          </div>
        </div>
      ), {
        duration: 10000,
        position: 'top-center',
        style: {
          background: BG_CARD,
          border: `1px solid ${ACCENT_ORANGE}`,
          borderRadius: '1rem',
          padding: '1rem',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <section
        id="services"
        className="relative py-24 px-6 overflow-hidden"
        style={{ background: BG_BLACK }}
      >
        {/* Service Status Banner - Only show if offline */}
        {serviceStatus === 'offline' && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
            <div
              className="px-6 py-3 rounded-full shadow-lg backdrop-blur-sm"
              style={{
                background: `linear-gradient(135deg, ${ACCENT_ORANGE}20, ${ACCENT_LIGHT}10)`,
                border: `1px solid ${ACCENT_ORANGE}`,
              }}
            >
              <p className="text-sm font-medium" style={{ color: ACCENT_LIGHT }}>
                ⚡ Email service temporarily unavailable - Using fallback contact method
              </p>
            </div>
          </div>
        )}

        {/* ── Background ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-3"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, ${BORDER} 1.5px, transparent 0)`,
              backgroundSize: '48px 48px',
            }}
          />
          <div
            className="absolute top-20 right-20 w-[28rem] h-[28rem] rounded-full opacity-12 animate-elegant-float"
            style={{
              background: `radial-gradient(circle, ${ACCENT_ORANGE}, transparent)`,
              filter: 'blur(90px)',
            }}
          />
          <div
            className="absolute bottom-20 left-20 w-[24rem] h-[24rem] rounded-full opacity-8 animate-elegant-float-reverse"
            style={{
              background: `radial-gradient(circle, ${ACCENT_LIGHT}, transparent)`,
              filter: 'blur(80px)',
              animationDelay: '2s',
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          {/* ── Header ── */}
          <div
            className={`text-center mb-20 transition-all duration-1200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8"
              style={{
                background: `linear-gradient(135deg, ${ACCENT_ORANGE}12, ${ACCENT_LIGHT}08)`,
                border: `1px solid ${ACCENT_ORANGE}30`,
                boxShadow: `0 8px 32px ${ACCENT_ORANGE}20, inset 0 1px 0 0 rgba(255,255,255,0.1)`,
                backdropFilter: 'blur(20px)',
              }}
            >
              <Sparkles className="w-5 h-5" style={{ color: ACCENT_ORANGE }} />
              <span
                className="text-sm font-black tracking-[0.15em] uppercase"
                style={{ color: ACCENT_LIGHT }}
              >
                Services & Expertise
              </span>
            </div>

            <h2
              className="text-6xl md:text-7xl font-black mb-6 leading-[0.95]"
              style={{
                background: `linear-gradient(135deg, ${TEXT_WHITE} 0%, ${ACCENT_LIGHT} 50%, ${ACCENT_ORANGE} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.03em',
              }}
            >
              What I
              <br />
              Deliver
            </h2>

            <p className="text-lg max-w-2xl mx-auto" style={{ color: TEXT_GRAY }}>
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          {/* ── Cards Grid ── */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20 items-stretch">
            {services.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div
                    className="relative rounded-[2rem] overflow-hidden h-full"
                    style={{
                      background: `linear-gradient(135deg, ${BG_CARD}98 0%, ${BG_BLACK}99 100%)`,
                      border: `1px solid ${isActive ? item.color : BORDER}`,
                      boxShadow: isActive
                        ? `0 32px 64px -12px ${item.color}40, 0 0 0 1px ${item.color}30, inset 0 2px 0 0 rgba(255,255,255,0.06)`
                        : `0 16px 40px -10px rgba(0,0,0,0.7), inset 0 1px 0 0 rgba(255,255,255,0.03)`,
                      backdropFilter: 'blur(30px)',
                      transform: isActive ? 'translateY(-12px)' : 'translateY(0)',
                      transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
                      willChange: 'transform',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    {/* Gradient overlay on hover */}
                    <div
                      className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                      style={{
                        opacity: isActive ? 0.08 : 0,
                        background: `radial-gradient(ellipse at top, ${item.color}, transparent 60%)`,
                        pointerEvents: 'none',
                      }}
                    />

                    <div className="p-8 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${item.color}18, ${item.color}08)`,
                            border: `1px solid ${item.color}30`,
                            transform: isActive ? 'scale(1.15) rotate(8deg)' : 'scale(1) rotate(0deg)',
                            transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                          }}
                        >
                          <item.icon className="w-7 h-7" style={{ color: item.color }} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3
                            className="text-xl font-black mb-1 leading-tight"
                            style={{
                              color: isActive ? item.color : TEXT_WHITE,
                              letterSpacing: '-0.01em',
                              transition: 'color 0.5s ease',
                            }}
                          >
                            {item.title}
                          </h3>
                          
                          {/* Metrics pills */}
                          <div className="flex flex-wrap gap-2 mt-2">
                            {item.metrics.map((metric, idx) => (
                              <div
                                key={idx}
                                className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold"
                                style={{
                                  background: `${item.color}12`,
                                  border: `1px solid ${item.color}25`,
                                  color: item.color,
                                }}
                              >
                                <Gauge className="w-2.5 h-2.5" />
                                {metric}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm leading-relaxed mb-6" style={{ color: TEXT_GRAY }}>
                        {item.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6 flex-grow">
                        <div className="flex items-center gap-2 mb-4">
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center"
                            style={{
                              background: `${item.color}15`,
                              border: `1px solid ${item.color}25`,
                            }}
                          >
                            <Zap className="w-3.5 h-3.5" style={{ color: item.color }} />
                          </div>
                          <h5
                            className="text-xs font-black tracking-wider uppercase"
                            style={{ color: TEXT_WHITE }}
                          >
                            Key Features
                          </h5>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {item.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 p-2.5 rounded-lg"
                              style={{
                                background: `${BG_BLACK}40`,
                                border: `1px solid ${BORDER}`,
                                transform: isActive ? 'translateX(2px)' : 'translateX(0)',
                                transition: `all 0.4s cubic-bezier(0.23, 1, 0.32, 1) ${idx * 40}ms`,
                              }}
                            >
                              <div
                                className="mt-1 w-1 h-1 rounded-full flex-shrink-0"
                                style={{
                                  background: item.color,
                                  boxShadow: `0 0 6px ${item.color}`,
                                }}
                              />
                              <span className="text-xs leading-relaxed" style={{ color: TEXT_GRAY }}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-auto pt-4">
                        <button
                          onClick={() => setShowModal(true)}
                          className="w-full flex items-center justify-between px-6 py-4 rounded-xl font-bold text-sm group/btn"
                          style={{
                            background: `linear-gradient(135deg, ${item.color}, ${ACCENT_LIGHT})`,
                            color: '#fff',
                            boxShadow: `0 8px 20px ${item.color}35`,
                            transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                          }}
                        >
                          <span>Discuss Your Project</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </button>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div
                      className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                      style={{
                        opacity: isActive ? 0.15 : 0,
                        background: `radial-gradient(circle at top right, ${item.color}, transparent 70%)`,
                        filter: 'blur(50px)',
                        transition: 'opacity 1s ease-in-out',
                      }}
                    />
                  </div>

                  {/* Number badge */}
                  <div
                    className="absolute -top-3 -left-3 w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black z-20"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}, ${ACCENT_LIGHT})`,
                      boxShadow: `0 8px 24px ${item.color}50`,
                      color: TEXT_WHITE,
                      transform: isActive ? 'scale(1.2) rotate(8deg)' : 'scale(1) rotate(0deg)',
                      transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                    }}
                  >
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div
            className={`text-center transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: '800ms' }}
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
                className="px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                  color: '#fff',
                  boxShadow: `0 12px 32px ${ACCENT_ORANGE}40, inset 0 1px 0 0 rgba(255, 255, 0.2)`,
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT MODAL */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)' }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl p-8 transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${BG_CARD}98 0%, ${BG_BLACK}99 100%)`,
              border: `1px solid ${BORDER}`,
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-110"
              style={{ background: `${BG_BLACK}80`, border: `1px solid ${BORDER}`, color: TEXT_GRAY }}
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-3xl font-black mb-2" style={{ color: TEXT_WHITE }}>
              Let's Work Together
            </h3>
            <p className="text-sm mb-8" style={{ color: TEXT_GRAY }}>
              Fill out the form below and I'll get back to you within 24 hours
            </p>

            {/* Service Status Notice */}
            {serviceStatus === 'offline' && (
              <div
                className="mb-6 p-4 rounded-xl"
                style={{
                  background: `${ACCENT_ORANGE}10`,
                  border: `1px solid ${ACCENT_ORANGE}`,
                }}
              >
                <p className="text-sm font-medium" style={{ color: ACCENT_LIGHT }}>
                  ⚡ Email service temporarily unavailable
                </p>
                <p className="text-xs mt-1" style={{ color: TEXT_GRAY }}>
                  Your message will be sent via your email client instead
                </p>
              </div>
            )}

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
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:border-orange-500 focus:scale-[1.01]"
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
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:border-orange-500 focus:scale-[1.01]"
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
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl text-sm resize-none transition-all duration-300 focus:border-orange-500 focus:scale-[1.01]"
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
                ) : serviceStatus === 'offline' ? (
                  <>
                    <Mail className="w-5 h-5" />
                    Send via Email Client
                  </>
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

      {/* ── Animations ── */}
      <style jsx>{`
        @keyframes elegant-float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, -40px); }
        }
        @keyframes elegant-float-reverse {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 40px); }
        }
        .animate-elegant-float { animation: elegant-float 30s ease-in-out infinite; }
        .animate-elegant-float-reverse { animation: elegant-float-reverse 25s ease-in-out infinite; }
        
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .group, .tech-chip {
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
    </>
  );
}