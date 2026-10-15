import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { C } from '../theme.js';

const modalInputStyle = {
  width: '100%',
  background: 'rgba(255, 255, 255, 0.06)',
  border: '1px solid rgba(255, 255, 255, 0.14)',
  borderRadius: 12,
  padding: '14px 16px',
  color: '#FFFFFF',
  fontSize: 14,
  fontWeight: 500,
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'all .25s ease',
};

const modalLabelStyle = {
  display: 'block',
  fontSize: 10,
  fontWeight: 700,
  color: 'rgba(244, 247, 251, 0.70)',
  textTransform: 'uppercase',
  letterSpacing: '0.16em',
  marginBottom: 8,
};

export default function QuoteModal({ product: _product, isOpen, onClose, onSuccess }) {
  const [subject, setSubject] = useState('');

  useEffect(() => {
    if (isOpen) {
      setSubject('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await fetch('https://formspree.io/f/xkoazqov', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        onSuccess();
        onClose();
      } else {
        onSuccess();
        onClose();
      }
    } catch {
      onSuccess();
      onClose();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'rgba(6, 16, 27, 0.75)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        style={{
          width: '100%',
          maxWidth: 580,
          maxHeight: '92vh',
          overflowY: 'auto',
          background: 'linear-gradient(145deg, #0B1B2D, #081524)',
          border: '1px solid rgba(94, 234, 212, 0.20)',
          borderRadius: 22,
          padding: '38px 34px',
          boxShadow: '0 32px 90px rgba(0, 0, 0, 0.7)',
          position: 'relative',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            width: 38,
            height: 38,
            borderRadius: 10,
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all .2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = C.mint;
            e.currentTarget.style.color = C.mint;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          <X size={18} />
        </button>

        <h3 className="af-d" style={{ fontSize: 24, color: '#FFFFFF', marginBottom: 22, fontWeight: 700 }}>
          Send us a Message
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* First + Last Name */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 16,
            }}
          >
            <div>
              <label style={modalLabelStyle}>First Name</label>
              <input
                type="text"
                name="first_name"
                required
                style={modalInputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = C.mint;
                  e.target.style.boxShadow = `0 0 0 3px ${C.mintDim}`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label style={modalLabelStyle}>Last Name</label>
              <input
                type="text"
                name="last_name"
                required
                style={modalInputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = C.mint;
                  e.target.style.boxShadow = `0 0 0 3px ${C.mintDim}`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            <div>
              <label style={modalLabelStyle}>Email Address</label>
              <input
                type="email"
                name="email"
                required
                style={modalInputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = C.mint;
                  e.target.style.boxShadow = `0 0 0 3px ${C.mintDim}`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label style={modalLabelStyle}>Phone Number</label>
              <input
                type="tel"
                required
                name="phone"
                style={modalInputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = C.mint;
                  e.target.style.boxShadow = `0 0 0 3px ${C.mintDim}`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          {/* Subject - empty by default */}
          <div>
            <label style={modalLabelStyle}>Subject</label>
            <input
              type="text"
              name="subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter Your Subject"
              style={modalInputStyle}
              onFocus={(e) => {
                e.target.style.borderColor = C.mint;
                e.target.style.boxShadow = `0 0 0 3px ${C.mintDim}`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          {/* Message */}
          <div>
            <label style={modalLabelStyle}>Message</label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="How can we help you?"
              style={{ ...modalInputStyle, resize: 'vertical' }}
              onFocus={(e) => {
                e.target.style.borderColor = C.mint;
                e.target.style.boxShadow = `0 0 0 3px ${C.mintDim}`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          {/* Submit Button in Teal */}
          <button
            type="submit"
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #0F766E, #115E59)',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: 14.5,
              padding: '15px',
              borderRadius: 12,
              border: `1px solid ${C.mintDim}`,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              boxShadow: '0 8px 24px rgba(15, 118, 110, 0.35)',
              transition: 'all .25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(15, 118, 110, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 118, 110, 0.35)';
            }}
          >
            Submit Inquiry <ArrowRight size={16} />
          </button>
        </form>
      </motion.div>
    </div>
  );
}
