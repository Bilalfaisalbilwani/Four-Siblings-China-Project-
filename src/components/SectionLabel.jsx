import { C } from '../theme.js';

export default function SectionLabel({ children, dark = false }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
      <span
        style={{
          display: 'block',
          width: 32,
          height: 2,
          background: dark ? C.mint : C.teal,
          borderRadius: 2,
          flexShrink: 0,
        }}
      />
      <span
        style={{
          color: dark ? C.mint : C.teal,
          fontWeight: 700,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          fontSize: 11,
        }}
      >
        {children}
      </span>
    </div>
  );
}
