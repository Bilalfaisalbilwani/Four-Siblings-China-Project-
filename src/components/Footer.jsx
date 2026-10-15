import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { PRODUCTS } from '../data/products.js';
import { C } from '../theme.js';

export default function Footer() {
  return (
    <footer style={{ background: C.navy, borderTop: '1px solid rgba(255, 255, 255, 0.08)', padding: '76px 0 28px', color: '#FFFFFF' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  padding: 4,
                }}
              >
                <img src={logo} alt="logo" style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
              </div>
              <div className="af-d" style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF' }}>
                FourSiblings Intl.
              </div>
            </div>
            <p style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.7, marginBottom: 20, fontWeight: 400 }}>
              Exporter of Indsutrial Raw Material
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { Icon: FaFacebook, link: '#' },
                { Icon: FaInstagram, link: '#' },
                { Icon: FaLinkedin, link: '#' },
                { Icon: FaWhatsapp, link: 'https://wa.me/+8619868505216' },
              ].map(({ Icon, link }, j) => (
                <a
                  key={j}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.10)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94A3B8',
                    textDecoration: 'none',
                    transition: 'all .25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.mint;
                    e.currentTarget.style.color = C.mint;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(15, 118, 110, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.10)';
                    e.currentTarget.style.color = '#94A3B8';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="af-d" style={{ fontSize: 12, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.20em', marginBottom: 18 }}>
              Company
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Product Catalog', path: '/products' },
                { label: 'Contact Us', path: '/contact' },
              ].map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 13,
                    color: '#94A3B8',
                    textDecoration: 'none',
                    fontWeight: 400,
                    transition: 'color .2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.mint)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                >
                  <ChevronRight size={12} color={C.mint} style={{ opacity: 0.6 }} />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="af-d" style={{ fontSize: 12, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.20em', marginBottom: 18 }}>
              Products
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {PRODUCTS.map((prod) => (
                <Link
                  key={prod.title}
                  to={`/products/${prod.id}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 13,
                    color: '#94A3B8',
                    textDecoration: 'none',
                    fontWeight: 400,
                    transition: 'color .2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.mint)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                >
                  <ChevronRight size={12} color={C.mint} style={{ opacity: 0.6 }} />
                  {prod.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="af-d" style={{ fontSize: 12, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.20em', marginBottom: 18 }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { Icon: MapPin, text: 'Room 401 (B), Building 3, Tianyue Building Materials Commercial City, No. 49 Beijing Road, Bonded Port Area, Qingdao Pilot Free Trade Zone, Shandong, China' },
                { Icon: MapPin, text: 'Room 401 (B), Building 3, Tianyue Building Materials Commercial City, No. 49 Beijing Road, Bonded Port Area, Qingdao Pilot Free Trade Zone, Shandong, China' },
                { Icon: Phone, text: '+86 198 6850 5216 \n +852 9290 2924' },
                { Icon: Mail, text: 'info@4siblingsinternational.com \n sales@4siblingsinternational.com' },
              ].map(({ Icon, text }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <Icon size={14} color={C.mint} style={{ marginTop: 3, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.6, fontWeight: 400, whiteSpace: 'pre-line' }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: 26,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 14,
          }}
        >
          <p style={{ fontSize: 12, color: '#64748B', fontWeight: 400, margin: 0 }}>
            © {new Date().getFullYear()} 4Siblings Pvt Ltd. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: 22 }}>
            {['Privacy Policy', 'Terms & Conditions'].map((l) => (
              <span
                key={l}
                style={{ fontSize: 12, color: '#64748B', cursor: 'pointer', transition: 'color .2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.mint)}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
