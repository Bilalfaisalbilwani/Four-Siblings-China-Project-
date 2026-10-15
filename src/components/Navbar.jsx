import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { C } from '../theme.js';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar({ onRequestQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [screen, setScreen] = useState({
    mobile: false,
    tablet: false,
  });

  const location = useLocation();

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setScreen({
        mobile: w < 768,
        tablet: w <= 1024,
      });
      if (w > 1024) {
        setMobileOpen(false);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 9999,
        padding: screen.mobile ? '10px 12px' : '16px 24px',
      }}
    >
      <div
        style={{
          maxWidth: 1380,
          margin: '0 auto',
          height: screen.mobile ? 72 : 86,
          background: scrolled
            ? 'rgba(255, 255, 255, 0.98)'
            : 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(11, 27, 45, 0.08)',
          borderRadius: 20,
          padding: screen.mobile ? '0 14px' : '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: scrolled
            ? '0 16px 40px rgba(11, 27, 45, 0.12)'
            : '0 8px 30px rgba(11, 27, 45, 0.06)',
          transition: 'all .35s ease',
          position: 'relative',
        }}
      >
        {/* LOGO */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: screen.mobile ? 8 : 14,
            textDecoration: 'none',
            minWidth: 0,
          }}
        >
          <img
            src={logo}
            alt="FourSiblings logo"
            style={{
              width: screen.mobile ? 55 : 90,
              height: screen.mobile ? 55 : 90,
              objectFit: 'contain',
              transition: 'all .3s ease',
            }}
          />
          <div style={{ minWidth: 0 }}>
            <div
              className="af-d"
              style={{
                fontSize: screen.mobile ? 12 : screen.tablet ? 15 : 19,
                color: C.navy,
                lineHeight: 1.2,
                fontWeight: 700,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: screen.mobile ? 160 : screen.tablet ? 300 : '100%',
                letterSpacing: '-0.01em',
              }}
            >
              FourSiblings International Ltd. Hong Kong
            </div>
            <div
              style={{
                fontSize: screen.mobile ? 8 : 11,
                color: C.teal,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginTop: 2,
              }}
            >
              Importer & Exporter
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className="af-dnav"
          style={{
            display: screen.tablet ? 'none' : 'flex',
            alignItems: 'center',
            gap: 36,
          }}
        >
          {NAV_LINKS.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  color: isActive ? C.teal : C.navy,
                  textDecoration: 'none',
                  fontSize: 14.5,
                  fontWeight: isActive ? 700 : 600,
                  transition: 'all .25s',
                  position: 'relative',
                  padding: '8px 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.teal)}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = C.navy;
                }}
              >
                {item.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: 2.5,
                      background: `linear-gradient(90deg, ${C.teal}, ${C.mint})`,
                      borderRadius: 2,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT CTA */}
        <div
          className="af-dcta"
          style={{
            display: screen.tablet ? 'none' : 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <a
            href="tel:+8619868505216"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              color: C.navy,
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 600,
              padding: '8px 12px',
              borderRadius: 10,
              transition: 'all .25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(15, 118, 110, 0.08)';
              e.currentTarget.style.color = C.teal;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = C.navy;
            }}
          >
            <Phone size={15} color={C.teal} />
            +8619868505216
          </a>

          <button
            onClick={() => onRequestQuote()}
            style={{
              background: 'linear-gradient(135deg, #0F766E, #115E59)',
              color: '#FFFFFF',
              padding: '12px 22px',
              borderRadius: 12,
              border: `1px solid ${C.mintDim}`,
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: 13.5,
              boxShadow: '0 8px 24px rgba(15, 118, 110, 0.28)',
              transition: 'all .3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(15, 118, 110, 0.38)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 118, 110, 0.28)';
            }}
          >
            Get Quote
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          className="af-hmbg"
          style={{
            display: screen.tablet ? 'flex' : 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: C.navy,
            padding: 8,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10001,
          }}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBILE MENU */}
        <div
          className="af-mmenu"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: '#FFFFFF',
            borderRadius: 18,
            marginTop: 10,
            overflow: 'hidden',
            maxHeight: mobileOpen ? 500 : 0,
            opacity: mobileOpen ? 1 : 0,
            pointerEvents: mobileOpen ? 'auto' : 'none',
            transition: 'all .35s ease',
            boxShadow: '0 25px 60px rgba(11, 27, 45, 0.18)',
            border: '1px solid rgba(11, 27, 45, 0.08)',
          }}
        >
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {NAV_LINKS.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: C.navy,
                  textDecoration: 'none',
                  fontSize: 15,
                  fontWeight: 600,
                  borderBottom: '1px solid rgba(11, 27, 45, 0.06)',
                  paddingBottom: 12,
                }}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="tel:+8619868505216"
              style={{
                color: C.teal,
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 700,
                marginTop: 4,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <Phone size={14} color={C.teal} /> +8619868505216
            </a>

            <button
              onClick={() => {
                setMobileOpen(false);
                onRequestQuote();
              }}
              style={{
                background: 'linear-gradient(135deg, #0F766E, #115E59)',
                color: '#FFFFFF',
                padding: '14px',
                borderRadius: 12,
                border: 'none',
                cursor: 'pointer',
                textAlign: 'center',
                fontWeight: 700,
                marginTop: 6,
                boxShadow: '0 8px 24px rgba(15, 118, 110, 0.28)',
              }}
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
