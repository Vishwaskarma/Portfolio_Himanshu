import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Heart } from 'lucide-react';

/* ─── Black & Orange Palette ─────────────────────────────── */
const ACCENT_ORANGE = '#F97316';
const ACCENT_LIGHT = '#FB923C';
const BG_BLACK = '#09090B';
const BG_CARD = '#18181B';
const BORDER = '#27272A';
const TEXT_WHITE = '#FFFFFF';
const TEXT_GRAY = '#A1A1AA';
/* ─────────────────────────────────────────────────────────── */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Vishwaskarma',
      username: '@Vishwaskarma'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/himanshu-vishwakarma',
      username: 'Himanshu Vishwakarma'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:himanshuvishwakarma383@gmail.com',
      username: 'himanshuvishwakarma383@gmail.com'
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

  return (
    <footer 
      className="py-12 px-6 backdrop-blur-sm relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${BG_BLACK} 0%, ${BG_CARD} 100%)`,
        borderTop: `1px solid ${BORDER}`,
      }}
    >
      {/* Background gradient effects */}
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: ACCENT_ORANGE }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: ACCENT_LIGHT }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div 
              className="text-3xl font-bold mb-4"
              style={{
                background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Himanshu Vishwakarma
            </div>
            <p className="mb-4" style={{ color: TEXT_GRAY }}>
              Full Stack Developer specializing in .NET Core, React.js, and Cloud Solutions
            </p>
            <div className="flex items-center gap-2 mb-2" style={{ color: TEXT_GRAY }}>
              <MapPin className="w-4 h-4" style={{ color: ACCENT_ORANGE }} />
              <span>Vasai, Mumbai, India</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: TEXT_GRAY }}>
              <Phone className="w-4 h-4" style={{ color: ACCENT_ORANGE }} />
              <span>+91 8766740176</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="text-lg font-bold mb-4"
              style={{ color: TEXT_WHITE }}
            >
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 transition-all duration-300"
                  style={{ color: TEXT_GRAY }}
                >
                  <div 
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-150"
                    style={{ background: ACCENT_ORANGE }}
                  />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {link.name}
                  </span>
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
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 transition-all duration-300"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 relative"
                      style={{
                        background: BG_BLACK,
                        border: `1px solid ${BORDER}`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: ACCENT_ORANGE }} />
                      <div 
                        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ 
                          background: `linear-gradient(135deg, ${ACCENT_ORANGE}20, ${ACCENT_LIGHT}20)`,
                          border: `1px solid ${ACCENT_ORANGE}60`,
                        }}
                      />
                    </div>
                    <div>
                      <div 
                        className="text-sm font-semibold transition-colors duration-300"
                        style={{ color: TEXT_WHITE }}
                      >
                        {social.name}
                      </div>
                      <div className="text-xs" style={{ color: TEXT_GRAY }}>
                        {social.username}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="h-px w-full mb-8"
          style={{
            background: `linear-gradient(90deg, transparent, ${BORDER}, transparent)`,
          }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2" style={{ color: TEXT_GRAY }}>
            <span>© {currentYear} Himanshu Vishwakarma. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-2" style={{ color: TEXT_GRAY }}>
            <span>Crafted with</span>
            <Heart 
              className="w-4 h-4 fill-current animate-pulse" 
              style={{ color: ACCENT_ORANGE }} 
            />
            <span>using React & modern web technologies</span>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <div className="mt-8 flex justify-center">
          <div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-sm"
            style={{
              background: BG_BLACK,
              border: `1px solid ${BORDER}`,
            }}
          >
            <span className="text-sm" style={{ color: TEXT_GRAY }}>
              Built with
            </span>
            <div className="flex items-center gap-2">
              {['React', 'Next.js', '.NET Core', 'AWS'].map((tech, index) => (
                <React.Fragment key={tech}>
                  {index > 0 && (
                    <div 
                      className="w-1 h-1 rounded-full"
                      style={{ background: ACCENT_ORANGE }}
                    />
                  )}
                  <span 
                    className="text-sm font-semibold"
                    style={{ color: ACCENT_LIGHT }}
                  >
                    {tech}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;