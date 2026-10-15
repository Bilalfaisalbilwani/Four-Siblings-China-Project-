import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import QuoteModal from './components/QuoteModal.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Contact from './pages/Contact.jsx';
import { PRODUCTS } from './data/products.js';
import { C } from './theme.js';

// ─── FONT INJECTION (EXACT SAME FONT STYLES PRESERVED) ────────────────────────
function useFonts() {
  useEffect(() => {
    const id = 'af-fonts';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Tinos:wght@700&family=Tahoma&display=swap';
      document.head.appendChild(link);
    }

    if (!document.getElementById('af-font-style')) {
      const style = document.createElement('style');
      style.id = 'af-font-style';
      style.textContent = `
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: #F4F7FB;
          color: #0B1B2D;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
        .af { font-family: Tahoma, sans-serif; letter-spacing: 0.01em; }
        .af-d { font-family: Cambria, serif; letter-spacing: 0.02em; line-height: 1.2; }
        p { line-height: 1.75; }
        button, input, textarea, select { font-family: 'Inter', sans-serif; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #E2E8F0; }
        ::-webkit-scrollbar-thumb { background: #0F766E; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #115E59; }
        @keyframes whatsappPulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
          70% { box-shadow: 0 0 0 18px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        @media (max-width: 1024px) {
          .af-hmbg { display: flex !important; }
          .af-dnav, .af-dcta { display: none !important; }
        }
        @media (min-width: 1025px) {
          .af-hmbg { display: none !important; }
          .af-dnav, .af-dcta { display: flex !important; }
          .af-mmenu { display: none !important; }
        }
        @media (max-width: 768px) {
          html, body { overflow-x: hidden; }
          section { padding-left: 16px !important; padding-right: 16px !important; }
          h1 { font-size: 38px !important; line-height: 1.1 !important; }
          h2 { font-size: 28px !important; }
          p { font-size: 14px !important; }
          .af-d { line-height: 1.05 !important; }
          .af-fl, .af-fl2 { display: none; }
          h1 { word-break: break-word; }
          form { gap: 12px; }
          input, textarea { font-size: 13px !important; padding: 12px !important; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);
}

export default function App() {
  const [status, setStatus] = useState('');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteModalProduct, setQuoteModalProduct] = useState(null);

  useFonts();

  const handleRequestQuote = (prod) => {
    setQuoteModalProduct(prod || PRODUCTS[0]);
    setQuoteModalOpen(true);
  };

  const handleSuccess = () => {
    setStatus('success');
    setTimeout(() => setStatus(''), 4000);
  };

  return (
    <BrowserRouter>
      <div className="af" style={{ background: C.coolWhite, color: C.navy, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <ScrollToTop />
        <Navbar onRequestQuote={() => handleRequestQuote(PRODUCTS[0])} />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products onRequestQuote={handleRequestQuote} />} />
            <Route path="/products/:id" element={<ProductDetail onRequestQuote={handleRequestQuote} />} />
            <Route path="/contact" element={<Contact onSuccess={handleSuccess} />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />

        {/* ══ QUOTATION POPUP MODAL ═════════════════════════════════ */}
        <QuoteModal
          product={quoteModalProduct}
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          onSuccess={() => {
            setQuoteModalOpen(false);
            handleSuccess();
          }}
        />

        {/* ══ SUCCESS STATUS MODAL ══════════════════════════════════ */}
        {status === 'success' && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(6, 16, 27, 0.75)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 99999,
            }}
          >
            <div
              style={{
                width: '90%',
                maxWidth: 420,
                background: 'linear-gradient(145deg, #0B1B2D, #081524)',
                border: '1px solid rgba(94, 234, 212, 0.28)',
                borderRadius: 22,
                padding: '36px 30px',
                textAlign: 'center',
                boxShadow: '0 30px 90px rgba(0,0,0,0.6)',
                animation: 'popIn .35s ease',
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  margin: '0 auto 20px',
                  borderRadius: '50%',
                  background: 'rgba(15, 118, 110, 0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(94, 234, 212, 0.40)',
                }}
              >
                <CheckCircle size={36} color={C.mint} />
              </div>

              <h2 className="af-d" style={{ color: '#FFFFFF', fontSize: 22, marginBottom: 10, fontWeight: 700 }}>
                Message Sent Successfully
              </h2>

              <p
                style={{
                  color: 'rgba(244, 247, 251, 0.75)',
                  fontSize: 14,
                  lineHeight: 1.6,
                  marginBottom: 24,
                }}
              >
                Thank you for reaching out.
              </p>

              <button
                onClick={() => setStatus('')}
                style={{
                  background: 'linear-gradient(135deg, #0F766E, #115E59)',
                  color: '#FFFFFF',
                  border: `1px solid ${C.mintDim}`,
                  padding: '13px 26px',
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(15, 118, 110, 0.35)',
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* ══ STICKY WHATSAPP BUTTON ═══════════════════════════ */}
        <a
          href="https://wa.me/+8619868505216"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#25D366',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textDecoration: 'none',
            zIndex: 9999,
            boxShadow: '0 10px 30px rgba(37,211,102,0.45)',
            transition: 'all .3s ease',
            animation: 'whatsappPulse 2s infinite',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <FaWhatsapp size={34} />
        </a>
      </div>
    </BrowserRouter>
  );
}