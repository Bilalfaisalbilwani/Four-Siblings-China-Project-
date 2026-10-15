import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products.js';
import { C } from '../theme.js';

export default function ProductDetail({ onRequestQuote }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div style={{ background: C.coolWhite, color: C.navy, minHeight: '80vh', paddingTop: '160px', textAlign: 'center', paddingBottom: '80px' }}>
        <h2 className="af-d" style={{ fontSize: 28, marginBottom: 16, color: C.navy }}>Product Not Found</h2>
        <button
          onClick={() => navigate('/products')}
          style={{
            background: 'linear-gradient(135deg, #0F766E, #115E59)',
            color: '#FFFFFF',
            border: 'none',
            padding: '12px 26px',
            borderRadius: 12,
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(15, 118, 110, 0.28)',
          }}
        >
          Back to Products
        </button>
      </div>
    );
  }

  const otherProducts = PRODUCTS.filter((p) => p.id !== product.id);

  return (
    <div style={{ background: C.coolWhite, color: C.navy, minHeight: '85vh', paddingTop: 'clamp(100px, 14vw, 130px)', paddingBottom: '90px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px, 4vw, 28px)' }}>

        {/* Back button */}
        <div style={{ marginBottom: 32 }}>
          <button
            onClick={() => navigate('/products')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#FFFFFF',
              border: '1px solid rgba(11, 27, 45, 0.10)',
              color: C.navy,
              padding: '10px 22px',
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(11, 27, 45, 0.04)',
              transition: 'all .25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = C.teal;
              e.currentTarget.style.color = C.teal;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(11, 27, 45, 0.10)';
              e.currentTarget.style.color = C.navy;
            }}
          >
            <ArrowLeft size={16} /> Back
          </button>
        </div>

        {/* Product Details Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(28px, 5vw, 60px)',
            alignItems: 'center',
            marginBottom: 80,
          }}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              width: '100%',
              height: 'clamp(300px, 40vw, 440px)',
              background: '#FFFFFF',
              borderRadius: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(11, 27, 45, 0.08)',
              boxShadow: '0 16px 45px rgba(11, 27, 45, 0.07)',
            }}
          >
            <img
              src={product.img}
              alt={product.title}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </motion.div>

          {/* Text & Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1
              className="af-d"
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.1,
                color: C.navy,
                fontWeight: 700,
                marginBottom: 20,
                letterSpacing: '-0.02em',
              }}
            >
              {product.title}
            </h1>

            <p
              style={{
                fontSize: 16.5,
                color: '#334155',
                lineHeight: 1.85,
                marginBottom: 34,
                fontWeight: 400,
              }}
            >
              {product.desc}
            </p>

            <button
              onClick={() => onRequestQuote(product)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: 'linear-gradient(135deg, #0F766E, #115E59)',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: 15,
                padding: '16px 34px',
                borderRadius: 14,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 28px rgba(15, 118, 110, 0.32)',
                transition: 'all .25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 14px 34px rgba(15, 118, 110, 0.42)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(15, 118, 110, 0.32)';
              }}
            >
              Request a Quotation <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Other Products Section */}
        <section style={{ borderTop: '1px solid rgba(11, 27, 45, 0.08)', paddingTop: 60 }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2
              className="af-d"
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                color: C.navy,
                fontWeight: 700,
                marginBottom: 10,
              }}
            >
              Other <span style={{ color: C.teal }}>Products</span>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 20,
              alignItems: 'stretch',
            }}
          >
            {otherProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => navigate(`/products/${prod.id}`)}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(11, 27, 45, 0.08)',
                  borderRadius: 20,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(11, 27, 45, 0.04)',
                  transition: 'all .35s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.teal;
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(15, 118, 110, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(11, 27, 45, 0.08)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(11, 27, 45, 0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    height: 220,
                    overflow: 'hidden',
                    background: '#FAFCFE',
                    borderBottom: '1px solid rgba(11, 27, 45, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px',
                  }}
                >
                  <img
                    src={prod.img}
                    alt={prod.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>

                <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="af-d" style={{ fontSize: 18, color: C.navy, marginBottom: 10, fontWeight: 700 }}>
                    {prod.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      color: '#475569',
                      lineHeight: 1.7,
                      flexGrow: 1,
                      marginBottom: 18,
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {prod.desc}
                  </p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      color: C.teal,
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      marginTop: 'auto',
                    }}
                  >
                    Request Quote <ChevronRight size={13} color={C.teal} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
