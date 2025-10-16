import React from 'react';
import { Calendar, Briefcase, Users, Zap } from 'lucide-react';

/* ─── Black & Orange Palette ─────────────────────────────── */
const ACCENT_ORANGE = '#F97316';
const ACCENT_LIGHT = '#FB923C';
const BG_BLACK = '#09090B';
const BG_CARD = '#18181B';
const BORDER = '#27272A';
const TEXT_WHITE = '#FFFFFF';
const TEXT_GRAY = '#A1A1AA';
/* ─────────────────────────────────────────────────────────── */

const StatsSection = ({ isVisible = true }) => {
  const stats = [
    { 
      number: "2+", 
      label: "Years Experience", 
      icon: Calendar,
      description: "Full Stack Development"
    },
    { 
      number: "15+", 
      label: "Projects Delivered", 
      icon: Briefcase,
      description: "Enterprise & E-commerce"
    },
    { 
      number: "1000+", 
      label: "Daily Transactions", 
      icon: Users,
      description: "Active Users Served"
    },
    { 
      number: "99.9%", 
      label: "Uptime Achieved", 
      icon: Zap,
      description: "Production Systems"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden" style={{ background: BG_BLACK }}>
      {/* Background gradient effects */}
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: ACCENT_ORANGE }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: ACCENT_LIGHT }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`text-center group hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div 
                  className="p-8 rounded-2xl backdrop-blur-sm group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full flex flex-col justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
                    border: `1px solid ${BORDER}`,
                  }}
                >
                  {/* Hover glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{ background: `radial-gradient(circle at center, ${ACCENT_ORANGE}20, transparent)` }}
                  />

                  {/* Icon */}
                  <div 
                    className="mb-4 flex justify-center relative"
                    style={{ color: ACCENT_ORANGE }}
                  >
                    <div
                      className="p-3 rounded-xl relative"
                      style={{ background: ACCENT_ORANGE + '20' }}
                    >
                      <Icon className="w-6 h-6" />
                      <div 
                        className="absolute inset-0 rounded-xl blur-md opacity-40"
                        style={{ background: ACCENT_ORANGE }}
                      />
                    </div>
                  </div>

                  {/* Number */}
                  <div 
                    className="text-5xl md:text-6xl font-bold mb-2 relative"
                    style={{
                      background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div 
                    className="font-bold text-lg mb-2"
                    style={{ color: TEXT_WHITE }}
                  >
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div 
                    className="text-sm"
                    style={{ color: TEXT_GRAY }}
                  >
                    {stat.description}
                  </div>

                  {/* Animated border on hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      border: `1px solid ${ACCENT_ORANGE}40`,
                      boxShadow: `0 0 20px ${ACCENT_ORANGE}20`
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
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
};

export default StatsSection;