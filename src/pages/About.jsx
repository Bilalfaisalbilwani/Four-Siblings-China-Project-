import { motion } from 'framer-motion';
import bgimg2 from '../assets/bgimg2.jpeg';
import { C } from '../theme.js';
import SectionLabel from '../components/SectionLabel.jsx';

export default function About() {
  return (
    <div style={{ background: C.coolWhite, color: C.navy, minHeight: '85vh', paddingTop: 'clamp(100px, 15vw, 140px)', paddingBottom: '100px' }}>
      <section id="about" style={{ padding: '40px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
          <div
            style={{
              background: '#FFFFFF',
              border: `1px solid ${C.border}`,
              borderRadius: 24,
              padding: 'clamp(32px, 6vw, 64px)',
              boxShadow: '0 20px 60px rgba(11, 27, 45, 0.06)',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(36px, 5vw, 64px)', alignItems: 'center' }}>
              {/* Image Column */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div
                  style={{
                    position: 'relative',
                    borderRadius: 18,
                    overflow: 'hidden',
                    aspectRatio: '4/3',
                    boxShadow: '0 20px 50px rgba(11, 27, 45, 0.12)',
                    border: '1px solid rgba(11, 27, 45, 0.08)',
                  }}
                >
                  <img
                    src={bgimg2}
                    alt="facility"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform .7s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(11, 27, 45, 0.35), transparent)',
                    }}
                  />
                </div>
              </motion.div>

              {/* Text Column */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }}>
                <SectionLabel>About Us</SectionLabel>

                <h1
                  className="af-d"
                  style={{
                    fontSize: 'clamp(36px, 5vw, 56px)',
                    lineHeight: 1.1,
                    color: C.navy,
                    marginBottom: 24,
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                  }}
                >
                  About<br />Our <br /><span style={{ color: C.teal }}>Company.</span>
                </h1>
                <p style={{ fontSize: 16, color: '#334155', lineHeight: 1.85, marginBottom: 16, fontWeight: 400 }}>
                  We are a Hong Kong-based trading company focused on the global import and export of industrial raw materials. with a focus on products export from China, the Middle East, and South Asia. Since 2026, we have been providing reliable sourcing and international trade solutions to businesses worldwide.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
