import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { C, labelStyle, inputStyle, buttonStyle } from '../theme.js';
import SectionLabel from '../components/SectionLabel.jsx';

export default function Contact({ onSuccess }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await fetch('https://formspree.io/f/xkoazqov', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        onSuccess();
        e.target.reset();
      } else {
        onSuccess();
        e.target.reset();
      }
    } catch {
      onSuccess();
      e.target.reset();
    }
  };

  return (
    <div style={{ background: C.coolWhite, color: C.navy, minHeight: '85vh', paddingTop: 'clamp(100px, 15vw, 130px)', paddingBottom: '90px' }}>
      <section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'start' }}>
            {/* Info panel */}
            <div>
              <SectionLabel>Get In Touch</SectionLabel>
              <h1
                className="af-d"
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  color: C.navy,
                  lineHeight: 1.12,
                  fontWeight: 700,
                  marginBottom: 34,
                  letterSpacing: '-0.02em',
                }}
              >
                Ready to Start<br />Your <span style={{ color: C.teal }}>Project?</span>
              </h1>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 36 }}>
                {[
                  {
                    Icon: MapPin,
                    title: 'Head Office ',
                    lines: ['UNIT 8, 7/F, BLOCK S-T, VALIANT INDUSTRIAL CENTRE 2-12 AU PUI WAN STREET, FO TAN Hong Kong'],
                  },
                  {
                    Icon: MapPin,
                    title: 'Corporate Office',
                    lines: ['No. 8, Qi Changcheng Road, Huangdao District, Qingdao City, Shandong Province, China'],
                  },
                  { Icon: Phone, title: 'Direct Contact', lines: ['+86 198 6850 5216', '+852 9290 2924'] },
                  {
                    Icon: Mail,
                    title: 'Email Us',
                    lines: ['info@4siblingsinternational.com', 'sales@4siblingsinternational.com'],
                  },
                  { Icon: Clock, title: 'Business Hours', lines: ['Mon – Fri: 9:00 AM – 5:00 PM', 'Saturday and Sunday: Closed'] },
                ].map(({ Icon, title, lines }, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: 'rgba(15, 118, 110, 0.10)',
                        border: '1px solid rgba(15, 118, 110, 0.20)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <Icon size={18} color={C.teal} />
                    </div>
                    <div>
                      <div className="af-d" style={{ fontSize: 14.5, color: C.navy, marginBottom: 4, fontWeight: 700 }}>
                        {title}
                      </div>
                      {lines.map((l, j) => (
                        <div key={j} style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.6, fontWeight: 400 }}>
                          {l}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 10 }}>
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
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: '#FFFFFF',
                      border: '1px solid rgba(11, 27, 45, 0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: C.navy,
                      textDecoration: 'none',
                      transition: 'all .25s ease',
                      boxShadow: '0 2px 8px rgba(11, 27, 45, 0.04)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = C.teal;
                      e.currentTarget.style.color = C.teal;
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 10px 20px rgba(15, 118, 110, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#FFFFFF';
                      e.currentTarget.style.borderColor = 'rgba(11, 27, 45, 0.10)';
                      e.currentTarget.style.color = C.navy;
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(11, 27, 45, 0.04)';
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Form card */}
            <div>
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(11, 27, 45, 0.08)',
                  borderRadius: 24,
                  padding: '38px 34px',
                  boxShadow: '0 24px 60px rgba(11, 27, 45, 0.06)',
                }}
              >
                <h3 className="af-d" style={{ fontSize: 24, color: C.navy, marginBottom: 22, fontWeight: 700 }}>
                  Send us a Message
                </h3>

                {/* FORM START */}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {/* First + Last Name */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: 16,
                    }}
                  >
                    <div>
                      <label style={labelStyle}>First Name</label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = C.teal;
                          e.target.style.boxShadow = `0 0 0 3px ${C.mintDim}`;
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(11, 27, 45, 0.14)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Last Name</label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = C.teal;
                          e.target.style.boxShadow = `0 0 0 3px ${C.mintDim}`;
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(11, 27, 45, 0.14)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = C.teal;
                          e.target.style.boxShadow = `0 0 0 3px ${C.mintDim}`;
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(11, 27, 45, 0.14)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Phone Number</label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = C.teal;
                          e.target.style.boxShadow = `0 0 0 3px ${C.mintDim}`;
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(11, 27, 45, 0.14)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={labelStyle}>Subject</label>
                    <textarea
                      name="subject"
                      rows={1}
                      required
                      placeholder="Enter Your Subject"
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = C.teal;
                        e.target.style.boxShadow = `0 0 0 3px ${C.mintDim}`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(11, 27, 45, 0.14)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="How can we help you?"
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = C.teal;
                        e.target.style.boxShadow = `0 0 0 3px ${C.mintDim}`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(11, 27, 45, 0.14)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    style={buttonStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(15, 118, 110, 0.38)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 118, 110, 0.28)';
                    }}
                  >
                    Submit Inquiry <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
