import { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  MapPin,
  GraduationCap,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Code2,
  X,
  Send,
  User,
  MessageSquare
} from 'lucide-react';

const ACCENT_ORANGE = '#F97316';
const ACCENT_LIGHT = '#FB923C';
const BG_BLACK = '#09090B';
const BG_CARD = '#18181B';
const BORDER = '#27272A';
const TEXT_WHITE = '#FFFFFF';
const TEXT_GRAY = '#A1A1AA';

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  * { box-sizing: border-box; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes blink {
    0%,49%  { opacity: 1; }
    50%,100%{ opacity: 0; }
  }
  @keyframes pulse-glow {
    0%,100% { opacity: .28; }
    50%     { opacity: .48; }
  }
  @keyframes float-orb {
    0%,100% { transform: translateY(0px) scale(1); }
    50%     { transform: translateY(-18px) scale(1.04); }
  }
  @keyframes float-particle {
    0%   { transform: translateY(100vh); opacity: 0; }
    8%   { opacity: .6; }
    92%  { opacity: .6; }
    100% { transform: translateY(-120px); opacity: 0; }
  }
  @keyframes morph {
    0%,100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%; }
    50%     { border-radius: 40% 60% 30% 70% / 60% 40% 60% 40%; }
  }
  @keyframes grid-drift {
    from { background-position: 0 0; }
    to   { background-position: 40px 40px; }
  }

  /* Role text – slides in from below, slides out upward */
  @keyframes role-in {
    from { opacity: 0; transform: translateY(22px) skewY(1deg); }
    to   { opacity: 1; transform: translateY(0)    skewY(0deg); }
  }
  @keyframes role-out {
    from { opacity: 1; transform: translateY(0)     skewY(0deg); }
    to   { opacity: 0; transform: translateY(-22px) skewY(-1deg); }
  }
  .role-enter { animation: role-in  .45s cubic-bezier(.16,1,.3,1) forwards; }
  .role-exit  { animation: role-out .35s cubic-bezier(.4,0,1,1)   forwards; }

  .animate-fade-up { animation: fadeUp .8s cubic-bezier(.16,1,.3,1) forwards; opacity: 0; }
  .animate-blink   { animation: blink 1.2s infinite; }

  /* Button ripple on click */
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

  /* Social icon hover lift */
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

  /* Info card */
  .info-card {
    transition: transform .3s cubic-bezier(.34,1.56,.64,1),
                box-shadow .3s ease,
                border-color .3s ease;
  }
  .info-card:hover {
    transform: translateY(-5px);
    border-color: rgba(249,115,22,.5) !important;
    box-shadow: 0 16px 40px rgba(249,115,22,.15);
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

  /* Modal fade */
  @keyframes modal-in {
    from { opacity: 0; transform: scale(.93) translateY(16px); }
    to   { opacity: 1; transform: scale(1)   translateY(0); }
  }
  .modal-box { animation: modal-in .35s cubic-bezier(.16,1,.3,1) forwards; }

  /* Scroll hint bounce */
  @keyframes bounce-hint {
    0%,100% { transform: translateY(0); opacity: .5; }
    50%     { transform: translateY(6px); opacity: 1; }
  }
  .scroll-hint { animation: bounce-hint 2.2s ease-in-out infinite; }
`;

/* ─── Particles ─── */
const Particles = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(Array.from({ length: 10 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1.5,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      dur: Math.random() * 6 + 7,
    })));
  }, []);
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {items.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          left: `${p.x}%`, bottom: 0,
          width: p.size, height: p.size,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
          animation: `float-particle ${p.dur}s ${p.delay}s linear infinite`,
          opacity: 0,
        }} />
      ))}
    </div>
  );
};

/* ─── Background ─── */
const Background = () => (
  <>
    {/* Orbs */}
    {[
      { top: '-5%', left: '-5%', size: 420, dur: '10s', delay: '0s' },
      { bottom: '-5%', right: '-5%', size: 360, dur: '13s', delay: '5s' },
      { top: '40%', left: '45%', size: 260, dur: '9s', delay: '2s' },
    ].map((o, i) => (
      <div key={i} style={{
        position: 'absolute',
        top: o.top, bottom: o.bottom, left: o.left, right: o.right,
        width: o.size, height: o.size,
        background: `radial-gradient(circle, rgba(249,115,22,.22), transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: `float-orb ${o.dur} ${o.delay} ease-in-out infinite`,
        pointerEvents: 'none',
      }} />
    ))}
    {/* Morphing blob */}
    <div style={{
      position: 'absolute', top: '15%', right: '8%',
      width: 200, height: 200,
      background: `radial-gradient(circle, rgba(251,146,60,.16), transparent 70%)`,
      filter: 'blur(20px)',
      animation: 'morph 22s ease-in-out infinite',
      pointerEvents: 'none',
    }} />
    {/* Grid */}
    <div style={{
      position: 'absolute', inset: 0, opacity: .025,
      backgroundImage: `linear-gradient(${ACCENT_ORANGE} 1px, transparent 1px), linear-gradient(90deg, ${ACCENT_ORANGE} 1px, transparent 1px)`,
      backgroundSize: '40px 40px',
      animation: 'grid-drift 20s linear infinite',
      pointerEvents: 'none',
    }} />
  </>
);

/* ─── Animated Role Text ─── */
const RoleText = ({ roles }) => {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState('enter'); // 'enter' | 'hold' | 'exit'

  useEffect(() => {
    let t;
    if (phase === 'enter') {
      // hold for 2.6s after entering
      t = setTimeout(() => setPhase('hold'), 450);
    } else if (phase === 'hold') {
      t = setTimeout(() => setPhase('exit'), 2600);
    } else {
      // exit → advance
      t = setTimeout(() => {
        setIdx(prev => (prev + 1) % roles.length);
        setPhase('enter');
      }, 350);
    }
    return () => clearTimeout(t);
  }, [phase, roles.length]);

  return (
    <div style={{ position: 'relative', height: 44, overflow: 'hidden', minWidth: 300 }}>
      <span
        key={`${idx}-${phase}`}
        className={phase === 'exit' ? 'role-exit' : 'role-enter'}
        style={{
          position: 'absolute', left: 0, right: 0,
          textAlign: 'center',
          fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
          fontWeight: 600,
          fontFamily: "'Syne', sans-serif",
          background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '.02em',
        }}
      >
        {roles[idx]}
      </span>
    </div>
  );
};

/* ─── Info Card ─── */
const InfoCard = ({ icon: Icon, title, subtitle, delay }) => (
  <div className="info-card" style={{
    animationDelay: `${delay}ms`,
    background: `${BG_CARD}CC`,
    border: `1px solid rgba(249,115,22,.22)`,
    borderRadius: 20,
    padding: '18px 22px',
    backdropFilter: 'blur(12px)',
    display: 'flex', alignItems: 'flex-start', gap: 14,
    opacity: 0,
    animation: `fadeUp .7s ${delay}ms cubic-bezier(.16,1,.3,1) forwards`,
  }}>
    <div style={{
      padding: 10, borderRadius: 14, flexShrink: 0,
      background: `linear-gradient(135deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
      boxShadow: `0 8px 24px rgba(249,115,22,.3)`,
    }}>
      <Icon size={18} color="#fff" />
    </div>
    <div>
      <div style={{ color: TEXT_WHITE, fontWeight: 600, fontFamily: "'Syne', sans-serif", fontSize: 14, marginBottom: 2 }}>{title}</div>
      <div style={{ color: TEXT_GRAY, fontSize: 13 }}>{subtitle}</div>
    </div>
  </div>
);

/* ─── Button ─── */
const Btn = ({ children, icon: Icon, variant = 'primary', onClick }) => {
  const isPrimary = variant === 'primary';
  return (
    <button
      className="btn-ripple"
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '14px 28px',
        borderRadius: 16,
        fontFamily: "'Syne', sans-serif",
        fontWeight: 700,
        fontSize: 15,
        cursor: 'pointer',
        border: isPrimary ? 'none' : `1.5px solid rgba(249,115,22,.45)`,
        background: isPrimary
          ? `linear-gradient(110deg, ${ACCENT_ORANGE} 0%, ${ACCENT_LIGHT} 50%, ${ACCENT_ORANGE} 100%)`
          : `rgba(24,24,27,.7)`,
        backgroundSize: isPrimary ? '200% 100%' : undefined,
        color: '#fff',
        boxShadow: isPrimary ? `0 16px 36px rgba(249,115,22,.4)` : `0 4px 16px rgba(0,0,0,.3)`,
        backdropFilter: 'blur(8px)',
      }}
    >
      {children}
      {Icon && <Icon size={18} style={{ flexShrink: 0 }} />}
    </button>
  );
};

/* ─── Social ─── */
const SocialIcon = ({ icon: Icon, href, onClick }) => {
  const el = (
    <div className="social-btn" style={{
      padding: 14, borderRadius: 16, cursor: 'pointer',
      background: `${BG_CARD}CC`,
      border: `1px solid rgba(249,115,22,.2)`,
      backdropFilter: 'blur(10px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <Icon size={20} color={TEXT_GRAY} style={{ transition: 'color .2s' }} />
    </div>
  );
  if (onClick) return <button onClick={onClick} style={{ background: 'none', border: 'none', padding: 0 }}>{el}</button>;
  return <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{el}</a>;
};

/* ─── Modal ─── */
const ContactModal = ({ onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); setTimeout(onClose, 1800); }, 1400);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'rgba(0,0,0,.75)',
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        className="modal-box"
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 480,
          background: `linear-gradient(145deg, ${BG_CARD} 0%, ${BG_BLACK} 100%)`,
          border: `1px solid rgba(249,115,22,.25)`,
          borderRadius: 24,
          padding: 36,
          boxShadow: '0 32px 80px rgba(0,0,0,.7), 0 0 60px rgba(249,115,22,.08)',
          position: 'relative',
        }}
      >
        <button
          className="btn-ripple"
          onClick={onClose}
          style={{
            position: 'absolute', top: 20, right: 20,
            width: 36, height: 36, borderRadius: 10,
            background: `rgba(255,255,255,.06)`,
            border: `1px solid ${BORDER}`,
            color: TEXT_GRAY, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        ><X size={16} /></button>

        {sent ? (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <div style={{ color: TEXT_WHITE, fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 700 }}>Message Sent!</div>
            <div style={{ color: TEXT_GRAY, marginTop: 8 }}>I'll get back to you within 24 hours.</div>
          </div>
        ) : (
          <>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 26, color: TEXT_WHITE, marginBottom: 6 }}>
              Let's Work Together
            </div>
            <div style={{ color: TEXT_GRAY, fontSize: 14, marginBottom: 28 }}>
              Fill out the form and I'll respond within 24 hours.
            </div>

            {[
              { name: 'name', label: 'Your Name', Icon: User, type: 'text', ph: 'John Doe' },
              { name: 'email', label: 'Email Address', Icon: Mail, type: 'email', ph: 'john@example.com' },
            ].map(f => (
              <div key={f.name} style={{ marginBottom: 18 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 6, color: TEXT_WHITE, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
                  <f.Icon size={14} color={ACCENT_ORANGE} />{f.label}
                </label>
                <input
                  className="modal-input"
                  type={f.type}
                  value={form[f.name]}
                  onChange={e => setForm({ ...form, [f.name]: e.target.value })}
                  placeholder={f.ph}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: 12,
                    background: `rgba(9,9,11,.6)`,
                    border: `1px solid ${BORDER}`,
                    color: TEXT_WHITE, fontSize: 14,
                  }}
                />
              </div>
            ))}

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6, color: TEXT_WHITE, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
                <MessageSquare size={14} color={ACCENT_ORANGE} />Message
              </label>
              <textarea
                className="modal-input"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                rows={4}
                placeholder="Tell me about your project..."
                style={{
                  width: '100%', padding: '12px 16px', borderRadius: 12,
                  background: `rgba(9,9,11,.6)`,
                  border: `1px solid ${BORDER}`,
                  color: TEXT_WHITE, fontSize: 14, resize: 'none',
                }}
              />
            </div>

            <button
              className="btn-ripple"
              onClick={handleSubmit}
              disabled={loading}
              style={{
                width: '100%', padding: '14px 0',
                borderRadius: 14,
                border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 15,
                color: '#fff',
                background: loading
                  ? `rgba(249,115,22,.4)`
                  : `linear-gradient(110deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                boxShadow: loading ? 'none' : `0 12px 30px rgba(249,115,22,.35)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                opacity: loading ? .7 : 1,
                transition: 'all .25s',
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
                <><Send size={16} />Send Message</>
              )}
            </button>
          </>
        )}
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

/* ═══ MAIN COMPONENT ═══════════════════════════════════════════ */
export default function BlackOrangeHero() {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const fullName = 'Himanshu Vishwakarma';
  const roles = ['Full Stack Developer', '.NET Core Expert', 'React Specialist'];

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    let i = 0, t;
    const type = () => {
      if (i <= fullName.length) { setTypedText(fullName.slice(0, i++)); t = setTimeout(type, 110); }
      else setIsTyping(false);
    };
    t = setTimeout(type, 400);
    return () => clearTimeout(t);
  }, [mounted]);

  return (
    <>
      <style>{css}</style>
      <div style={{
        position: 'relative', width: '100%', minHeight: '100vh',
        background: `linear-gradient(145deg, ${BG_BLACK} 0%, #111113 60%, ${BG_BLACK} 100%)`,
        overflow: 'hidden',
        fontFamily: "'DM Sans', sans-serif",
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '60px 24px',
      }}>
        <Background />
        <Particles />

        <div style={{
          position: 'relative', zIndex: 10,
          textAlign: 'center', maxWidth: 900, width: '100%',
          opacity: mounted ? 1 : 0,
          transition: 'opacity .6s ease',
        }}>

          {/* Badge */}
          <div className="animate-fade-up" style={{
            animationDelay: '100ms', display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24,
            padding: '8px 18px', borderRadius: 100, background: `rgba(249,115,22,.1)`,
            border: `1px solid rgba(249,115,22,.3)`
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%', background: ACCENT_ORANGE, display: 'inline-block',
              boxShadow: `0 0 8px ${ACCENT_ORANGE}`, animation: 'pulse-glow 2s infinite'
            }} />
            <span style={{ color: ACCENT_LIGHT, fontSize: 13, fontWeight: 500 }}>Available for new opportunities</span>
          </div>

          {/* Name */}
          {/* <div className="animate-fade-up" style={{ animationDelay: '200ms', marginBottom: 12 }}>
            <h1 style={{
              margin: 0,
              fontSize: 'clamp(2rem, 5.5vw, 4.2rem)',
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-.03em',
              whiteSpace: 'nowrap',
              background: `linear-gradient(120deg, ${TEXT_WHITE} 0%, rgba(255,255,255,.85) 40%, ${ACCENT_LIGHT} 70%, ${ACCENT_ORANGE} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {typedText}
              {isTyping && <span className="animate-blink" style={{ color: ACCENT_ORANGE }}>|</span>}
            </h1>
          </div> */}
          {/* Name */}
          <div className="animate-fade-up" style={{ animationDelay: '200ms', marginBottom: 12 }}>
            <h1 style={{
              margin: 0,
              fontSize: 'clamp(2rem, 5.5vw, 4.2rem)',
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-.03em',
              whiteSpace: 'normal',  // Changed from 'nowrap' to 'normal'
              wordBreak: 'break-word', // Added to handle long words
              maxWidth: '100%',
              background: `linear-gradient(120deg, ${TEXT_WHITE} 0%, rgba(255,255,255,.85) 40%, ${ACCENT_LIGHT} 70%, ${ACCENT_ORANGE} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {typedText}
              {isTyping && <span className="animate-blink" style={{ color: ACCENT_ORANGE }}>|</span>}
            </h1>
          </div>
          {/* Role */}
          <div className="animate-fade-up" style={{ animationDelay: '350ms', display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <RoleText roles={roles} />
          </div>

          {/* Bio */}
          <div className="animate-fade-up" style={{ animationDelay: '450ms', marginBottom: 36 }}>
            <p style={{
              color: 'rgba(161,161,170,.9)', fontSize: 'clamp(.95rem,2vw,1.15rem)',
              lineHeight: 1.7, margin: '0 auto', maxWidth: 600, fontWeight: 300,
            }}>
              Crafting exceptional digital experiences with{' '}
              <strong style={{
                fontWeight: 600,
                background: `linear-gradient(90deg, ${ACCENT_ORANGE}, ${ACCENT_LIGHT})`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>.NET Core, React.js & Next.js</strong>.
              {' '}Specializing in scalable cloud solutions and modern web platforms.
            </p>
          </div>

          {/* Info cards */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14, marginBottom: 36 }}>
            <InfoCard icon={MapPin} title="Mumbai, Maharashtra" subtitle="India · Remote Available" delay={550} />
            <InfoCard icon={GraduationCap} title="MS Computer Science" subtitle="Mumbai University" delay={650} />
            <InfoCard icon={Code2} title="2+ Years Experience" subtitle="Full Stack Mastery" delay={750} />
          </div>

          {/* Buttons */}
          <div className="animate-fade-up" style={{ animationDelay: '850ms', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14, marginBottom: 28 }}>
            <Btn variant="primary" icon={ArrowRight}>Explore My Portfolio</Btn>
            <Btn variant="secondary" icon={Download}
              onClick={() => {
                const a = document.createElement('a');
                a.href = '/HimanshuVishwakarma.pdf';
                a.download = 'Himanshu_Vishwakarma_Resume.pdf';
                a.click();
              }}
            >Download Resume</Btn>
          </div>

          {/* Social */}
          <div className="animate-fade-up" style={{ animationDelay: '950ms', display: 'flex', justifyContent: 'center', gap: 12 }}>
            <SocialIcon icon={Github} href="https://github.com/Vishwaskarma" />
            <SocialIcon icon={Linkedin} href="https://www.linkedin.com/in/himanshu-vishwakarma-856773239/" />
            <SocialIcon icon={Mail} onClick={() => setShowModal(true)} />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint" style={{
          position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
          color: TEXT_GRAY, zIndex: 10,
        }}>
          <ChevronDown size={22} />
        </div>
      </div>

      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </>
  );
}