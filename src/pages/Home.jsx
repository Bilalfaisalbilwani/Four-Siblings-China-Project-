import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Globe } from 'lucide-react';
import bgimg1 from '../assets/bgimg1.png';
import { C } from '../theme.js';

const ease = [0.16, 1, 0.3, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.11 } } };

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 160]);
  const heroOpacity = useTransform(scrollY, [0, 380], [1, 0]);

  return (
    <div style={{ background: C.navy, color: '#FFFFFF', overflowX: 'hidden' }}>
      {/* ══ CINEMATIC DEEP NAVY HERO ══════════════════════════════ */}
      <section
        id="home"
        style={{
          position: 'relative',
          minHeight: '100svh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: C.navy,
        }}
      >
        {/* Parallax background image - clearly visible */}
        <motion.div style={{ position: 'absolute', inset: 0, y: heroY }}>
          <img
            src={bgimg1}
            alt="industrial supply background"
            style={{
              width: '100%',
              height: '115%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
          {/* Subtle balanced gradient so background image is clearly visible while keeping text legible */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(11, 27, 45, 0.60) 0%, rgba(11, 27, 45, 0.35) 55%, rgba(11, 27, 45, 0.18) 100%)',
            }}
          />
          {/* Subtle vertical vignette for smooth top/bottom blending */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(11, 27, 45, 0.35) 0%, transparent 35%, transparent 65%, rgba(11, 27, 45, 0.70) 100%)',
            }}
          />
        </motion.div>

        <motion.div
          style={{
            position: 'relative',
            zIndex: 3,
            maxWidth: 1280,
            margin: '10px auto',
            padding: 'clamp(90px, 14vw, 150px) 24px 70px',
            width: '100%',
            opacity: heroOpacity,
          }}
        >
          <motion.div initial="hidden" animate="show" variants={stagger}>
            {/* Tagline Badge */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(11, 27, 45, 0.75)',
                border: '1px solid rgba(94, 234, 212, 0.40)',
                color: C.mint,
                fontSize: 12.5,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                fontWeight: 700,
                padding: '8px 18px',
                borderRadius: 999,
                marginBottom: 24,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.mint }} />
              International Trading of Industrial Raw Materials
            </span>

            {/* Headline with cinematic Teal and Champagne Gold highlights (NO RED) */}
            <motion.h1
              variants={fadeUp}
              className="af-d"
              style={{
                fontSize: 'clamp(46px, 7.5vw, 98px)',
                lineHeight: 0.98,
                letterSpacing: '-0.035em',
                margin: '0 0 26px',
                maxWidth: 900,
                color: '#FFFFFF',
              }}
            >
              <div
                style={{
                  color: '#FFFFFF',
                  textShadow: '0 6px 30px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.9)',
                  marginBottom: '2px',
                }}
              >
                Worldwide
              </div>

              {/* SUPPLY (Elegant Mint-Teal Gradient) */}
              <span
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #5EEAD4 0%, #0F766E 60%, #14B8A6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 8px 30px rgba(15, 118, 110, 0.3)',
                  filter: 'drop-shadow(0 6px 20px rgba(15, 118, 110, 0.35))',
                }}
              >
                Supply
              </span>{' '}

              {/* SOLUTIONS (Subtle Champagne Gold & Mint Gradient) */}
              <span
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #FFFFFF 20%, #D4AF37 80%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 10px 40px rgba(212, 175, 55, 0.25)',
                }}
              >
                Solutions.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 18,
                color: '#FFFFFF',
                lineHeight: 1.8,
                maxWidth: 600,
                borderLeft: `3px solid ${C.tealLight}`,
                paddingLeft: 22,
                margin: '0 0 38px',
                fontWeight: 400,
                textShadow: '0 2px 12px rgba(0,0,0,0.85)',
              }}
            >
              We are a leading international supplier of high-quality industrial raw materials serving multiple industries across global markets. With a strong supply network, strict quality standards, and efficient logistics, we help businesses secure reliable materials at competitive prices.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link
                to="/products"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'linear-gradient(135deg, #0F766E 0%, #115E59 100%)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: 15,
                  padding: '16px 34px',
                  borderRadius: 14,
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  boxShadow: '0 12px 36px rgba(15, 118, 110, 0.4), 0 0 0 1px rgba(94, 234, 212, 0.25)',
                  transition: 'all .25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 16px 44px rgba(15, 118, 110, 0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 36px rgba(15, 118, 110, 0.4)';
                }}
              >
                Explore Products <ArrowRight size={17} />
              </Link>

              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(244, 247, 251, 0.24)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: 15,
                  padding: '16px 34px',
                  borderRadius: 14,
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  backdropFilter: 'blur(10px)',
                  transition: 'all .25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)';
                  e.currentTarget.style.borderColor = C.mint;
                  e.currentTarget.style.color = C.mint;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(244, 247, 251, 0.24)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                Request Consultation
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
          >
            <div style={{ width: 1.5, height: 38, background: `linear-gradient(to bottom, transparent, ${C.mint})` }} />
            <span style={{ fontSize: 9.5, letterSpacing: '0.22em', color: C.mint, textTransform: 'uppercase', fontWeight: 700 }}>
              Scroll
            </span>
          </motion.div>
        </div>
      </section>

      {/* ══ CTA BANNER (DEEP NAVY & TEAL) ═════════════════════════ */}
      <section style={{ position: 'relative', padding: '112px 0', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
          alt="factory facility"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(11, 27, 45, 0.68) 0%, rgba(11, 27, 45, 0.52) 100%)' }} />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(15, 118, 110, 0.18) 0%, transparent 70%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 840, margin: '0 auto', padding: '0 28px', textAlign: 'center' }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(15, 118, 110, 0.16)',
                border: '1px solid rgba(94, 234, 212, 0.3)',
                borderRadius: 999,
                padding: '7px 18px',
                marginBottom: 22,
              }}
            >
              <Globe size={13} color={C.mint} />
              <span style={{ color: C.mint, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700 }}>
                Custom Solutions Available
              </span>
            </div>
            <h2
              className="af-d"
              style={{
                fontSize: 'clamp(28px, 5vw, 60px)',
                color: '#FFFFFF',
                lineHeight: 1.05,
                marginBottom: 24,
                fontWeight: 700,
                letterSpacing: '-0.025em',
              }}
            >
              Need a Custom<br /><span style={{ color: C.mint }}> Solution?</span>
            </h2>

            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                background: 'linear-gradient(135deg, #0F766E, #115E59)',
                color: '#FFFFFF',
                fontWeight: 700,
                padding: '14px 28px',
                fontSize: 14,
                borderRadius: 12,
                textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(15, 118, 110, 0.38), 0 0 0 1px rgba(94, 234, 212, 0.25)',
                transition: 'all .25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(15, 118, 110, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(15, 118, 110, 0.38)';
              }}
            >
              <Phone size={18} /> Contact Us Today <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
