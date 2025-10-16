import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/* ─── Black & Orange Palette ─────────────────────────────── */
const ACCENT_ORANGE = '#F97316';
const ACCENT_LIGHT = '#FB923C';
const BG_BLACK = '#09090B';
const BG_CARD = '#18181B';
const BORDER = '#27272A';
const TEXT_WHITE = '#FFFFFF';
const TEXT_GRAY = '#A1A1AA';
/* ─────────────────────────────────────────────────────────── */

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    'Home', 
    'About', 
    'Skills', 
    'Experience', 
    'Projects', 
    'Services', 
    'Testimonials', 
    'Contact'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    setIsMobileMenuOpen(false);
    setActiveSection(item.toLowerCase());
  };

  return (
    <>
      <nav 
        className="fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-300"
        style={{
          background: isScrolled ? BG_BLACK + 'E6' : BG_BLACK + 'B3',
          borderBottom: `1px solid ${isScrolled ? BORDER : 'transparent'}`,
          boxShadow: isScrolled ? `0 4px 20px ${BG_BLACK}80` : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a 
              href="#home"
              className="text-3xl font-bold relative group cursor-pointer"
              style={{
                background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Portfolio.
              <div 
                className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                style={{ background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})` }}
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => handleNavClick(item)}
                  className="relative group transition-all duration-300"
                  style={{ 
                    color: activeSection === item.toLowerCase() ? ACCENT_ORANGE : TEXT_GRAY 
                  }}
                >
                  {item}
                  <span 
                    className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300"
                    style={{
                      width: activeSection === item.toLowerCase() ? '100%' : '0',
                      background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                    }}
                  />
                  <span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{
                      background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                    }}
                  />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-all duration-300"
              style={{
                background: isMobileMenuOpen ? ACCENT_ORANGE + '20' : 'transparent',
                color: ACCENT_ORANGE,
                border: `1px solid ${isMobileMenuOpen ? ACCENT_ORANGE : BORDER}`,
              }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: isMobileMenuOpen ? '400px' : '0',
            background: BG_CARD,
            borderTop: isMobileMenuOpen ? `1px solid ${BORDER}` : 'none',
          }}
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => handleNavClick(item)}
                className="block py-2 transition-all duration-300 relative group"
                style={{
                  color: activeSection === item.toLowerCase() ? ACCENT_ORANGE : TEXT_GRAY,
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                    style={{
                      background: activeSection === item.toLowerCase() 
                        ? `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`
                        : TEXT_GRAY,
                      transform: activeSection === item.toLowerCase() ? 'scale(1.5)' : 'scale(1)',
                    }}
                  />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {item}
                  </span>
                </div>
                {activeSection === item.toLowerCase() && (
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
                    style={{
                      background: `linear-gradient(180deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                    }}
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div style={{ height: '72px' }} />
    </>
  );
};

export default Navigation;