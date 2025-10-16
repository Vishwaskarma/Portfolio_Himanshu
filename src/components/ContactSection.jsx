import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowRight,
  Download,
  Globe,
} from 'lucide-react';

const ACCENT_ORANGE = '#F97316';
const ACCENT_LIGHT = '#FB923C';
const BG_BLACK = '#09090B';
const BG_CARD = '#18181B';
const BORDER = '#27272A';
const TEXT_WHITE = '#FFFFFF';
const TEXT_GRAY = '#A1A1AA';

export default function ContactSection() {
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
      href: '#',
      username: '@Vishwaskarma'
    },
    {
      Icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      username: 'Himanshu Vishwakarma'
    },
    {
      Icon: Globe,
      label: 'Portfolio',
      href: '#',
      username: 'Portfolio Site'
    },
  ];

  const InfoCard = ({ c }) => (
    <div className="text-center transition-all duration-300 hover:scale-105">
      <div
        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl relative"
        style={{ background: ACCENT_ORANGE + '20' }}
      >
        <c.Icon className="h-8 w-8 relative z-10" style={{ color: ACCENT_ORANGE }} />
        <div 
          className="absolute inset-0 rounded-2xl blur-md opacity-30"
          style={{ background: ACCENT_ORANGE }}
        />
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ color: TEXT_WHITE }}>
        {c.title}
      </h3>
      <p className="font-medium mb-1 text-sm" style={{ color: ACCENT_LIGHT }}>{c.value}</p>
      <p className="text-sm" style={{ color: TEXT_GRAY }}>
        {c.note}
      </p>
    </div>
  );

  return (
    <section id="contact" className="py-32 px-6" style={{ background: BG_BLACK }}>
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background: `linear-gradient(90deg, ${ACCENT_ORANGE} 0%, ${ACCENT_LIGHT} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Let's Build Something Amazing
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: TEXT_GRAY }}>
            Ready to turn ideas into reality? Let's discuss your next project and create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{ 
                background: `linear-gradient(135deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
                border: `1px solid ${BORDER}` 
              }}
            >
              <InfoCard c={c} />
            </div>
          ))}
        </div>

        <div
          className="rounded-3xl p-12 text-center shadow-2xl backdrop-blur-sm relative overflow-hidden"
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
                className="group flex items-center gap-3 px-10 py-5 rounded-2xl font-bold transition-all duration-300
                           hover:shadow-2xl hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
                style={{
                  background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                  color: TEXT_WHITE,
                }}
              >
                <span className="relative z-10">Start a Project</span>
                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              </button>
              
              <button
                className="group flex items-center gap-3 px-10 py-5 rounded-2xl font-bold transition-all duration-300
                           hover:shadow-2xl hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
                style={{
                  background: BG_CARD,
                  border: `2px solid ${ACCENT_ORANGE}40`,
                  color: TEXT_WHITE,
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
                    className="group flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    style={{
                      background: ACCENT_ORANGE + '15',
                      border: `1px solid ${ACCENT_ORANGE}30`,
                    }}
                  >
                    <div className="relative">
                      <social.Icon 
                        className="h-6 w-6 transition-colors" 
                        style={{ color: ACCENT_ORANGE }} 
                      />
                      <div 
                        className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity"
                        style={{ background: ACCENT_ORANGE }}
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

        <div className="text-center mt-16">
          <p className="text-sm" style={{ color: TEXT_GRAY }}>
            Based in Mumbai, Maharashtra · Available for remote opportunities worldwide
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT_ORANGE }} />
            <p className="text-sm font-semibold" style={{ color: ACCENT_LIGHT }}>
              Currently open to new opportunities
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}