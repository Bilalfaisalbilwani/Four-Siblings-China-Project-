export const C = {
  // Brand Palette
  navy: '#0B1B2D',        // Deep Navy
  navyDark: '#06101B',    // Darker Navy for shadows/footers
  navyLight: '#13273D',   // Lighter Navy card surface
  teal: '#0F766E',        // Primary Corporate Teal
  tealDark: '#115E59',    // Deep Teal
  tealLight: '#14B8A6',   // Bright Teal
  mint: '#5EEAD4',        // Mint Accent
  mintDim: 'rgba(94, 234, 212, 0.12)',
  coolWhite: '#F4F7FB',   // Clean Cool White background
  white: '#FFFFFF',       // Crisp White surface
  gold: '#D4AF37',        // Champagne Gold
  goldDark: '#B8972E',    // Deep Gold
  goldLight: '#E6C665',   // Light Gold
  goldDim: 'rgba(212, 175, 55, 0.12)',
  goldBorder: 'rgba(212, 175, 55, 0.35)',

  // Legacy theme mapping with the new palette
  bg0: '#F4F7FB',         // Clean Cool White section base
  bg1: '#FFFFFF',         // Crisp White card/content surface
  bgNavy: '#0B1B2D',      // Deep Navy for cinematic sections
  card: '#FFFFFF',
  border: 'rgba(11, 27, 45, 0.08)',
  borderNavy: 'rgba(255, 255, 255, 0.10)',

  // Text Colors
  textNavy: '#0B1B2D',
  textMuted: '#475569',
  textSub: '#64748B',
  g1: '#1E293B',
  g2: '#475569',
  g3: '#64748B',
};

export const noiseStyle = {
  position: 'absolute',
  inset: 0,
  zIndex: 1,
  pointerEvents: 'none',
  opacity: 0.015,
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
  backgroundSize: '180px',
};

export const labelStyle = {
  display: 'block',
  fontSize: 10,
  fontWeight: 700,
  color: '#475569',
  textTransform: 'uppercase',
  letterSpacing: '0.16em',
  marginBottom: 8,
};

export const buttonStyle = {
  width: '100%',
  background: 'linear-gradient(135deg, #0F766E, #115E59)',
  color: '#FFFFFF',
  fontWeight: 700,
  fontSize: 14,
  padding: '15px',
  borderRadius: 12,
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  boxShadow: '0 8px 24px rgba(15, 118, 110, 0.28)',
  transition: 'all .25s ease',
};

export const inputStyle = {
  width: '100%',
  background: '#F8FAFC',
  border: '1px solid rgba(11, 27, 45, 0.14)',
  borderRadius: 12,
  padding: '14px 16px',
  color: '#0B1B2D',
  fontSize: 14,
  fontWeight: 500,
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'all .25s ease',
};
