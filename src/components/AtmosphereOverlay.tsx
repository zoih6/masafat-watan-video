import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

export const AtmosphereOverlay: React.FC = () => {
  const frame = useCurrentFrame();

  // تأثير حركة خفيفة للفيلم والضوء
  const grainSeed = Math.sin(frame * 12.345) * 5;
  const lightShift = Math.sin(frame * 0.05) * 10;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 40,
        overflow: 'hidden',
      }}
    >
      {/* تسرب ضوئي شاعري دافئ ونعومة سينمائية */}
      <div
        style={{
          position: 'absolute',
          top: -100 + lightShift,
          left: -100 + lightShift * 0.5,
          width: '70%',
          height: '45%',
          background:
            'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0) 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* حواف مظللة سينمائية Vignette */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 55%, rgba(6, 10, 16, 0.75) 100%)',
        }}
      />

      {/* شبكة سينمائية ناعمة تحاكي وثائقيات Vox والكولاج */}
      <svg width="100%" height="100%" style={{ position: 'absolute', opacity: 0.07 }}>
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
            <circle cx="60" cy="60" r="1.5" fill="#D4AF37" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};
