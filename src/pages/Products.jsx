import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products.js';
import { C } from '../theme.js';
import SectionLabel from '../components/SectionLabel.jsx';

export default function Products({ onRequestQuote }) {
  const navigate = useNavigate();

  return (
    <div style={{ background: C.coolWhite, color: C.navy, minHeight: '85vh', paddingTop: 'clamp(100px, 15vw, 130px)', paddingBottom: '90px' }}>
      <section id="products" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
          <div style={{ textAlign: 'center', marginBottom: 54 }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SectionLabel>Products Catalog</SectionLabel>
            </div>
            <h1
              className="af-d"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 54px)',
                color: C.navy,
                marginBottom: 14,
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Our Core <span style={{ color: C.teal }}>Products</span>
            </h1>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(295px, 1fr))',
              gap: 20,
              alignItems: 'stretch',
            }}
          >
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                onClick={() => navigate(`/products/${prod.id}`)}
                style={{
                  background: '#FFFFFF',
                  height: '100%',
                  minHeight: 520,
                  border: '1px solid rgba(11, 27, 45, 0.08)',
                  borderRadius: 20,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(11, 27, 45, 0.04)',
                  transition: 'all .35s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.teal;
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow =
                    '0 22px 50px rgba(15, 118, 110, 0.14), 0 0 0 1px rgba(15, 118, 110, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(11, 27, 45, 0.08)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(11, 27, 45, 0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Image Container */}
                <div
                  style={{
                    position: 'relative',
                    height: 260,
                    overflow: 'hidden',
                    background: '#FAFCFE',
                    borderBottom: '1px solid rgba(11, 27, 45, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                  }}
                >
                  <img
                    src={prod.img}
                    alt={prod.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      transition: 'transform .65s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                  />
                </div>

                {/* Card Content */}
                <div style={{ padding: '24px 24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="af-d" style={{ fontSize: 20, color: C.navy, marginBottom: 12, fontWeight: 700 }}>
                    {prod.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 14,
                      color: '#475569',
                      lineHeight: 1.7,
                      flexGrow: 1,
                      marginBottom: 22,
                      display: '-webkit-box',
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {prod.desc}
                  </p>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRequestQuote(prod);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      color: C.teal,
                      fontSize: 11.5,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      transition: 'all .2s ease',
                      marginTop: 'auto',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.gap = '10px';
                      e.currentTarget.style.color = C.tealDark;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.gap = '6px';
                      e.currentTarget.style.color = C.teal;
                    }}
                  >
                    Request Quote <ChevronRight size={14} color={C.teal} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
