import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

export const VoxOverlayEffects: React.FC = () => {
  const frame = useCurrentFrame();

  // تأثير اهتزاز وتذبذب الفيلم السينمائي (Film Stutter / Flicker)
  const filmFlicker = (Math.sin(frame * 4.3) + Math.cos(frame * 2.7)) * 0.02;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        pointerEvents: 'none',
        zIndex: 110,
        overflow: 'hidden',
      }}
    >
      {/* 1. شبكة كولاج طوبوغرافية دقيقة (Vox Infographic Grid) */}
      <svg width="100%" height="100%" style={{ position: 'absolute', opacity: 0.09 }}>
        <defs>
          <pattern id="vox-grid" width="70" height="70" patternUnits="userSpaceOnUse">
            <path d="M 70 0 L 0 0 0 70" fill="none" stroke="#D4AF37" strokeWidth="0.75" />
            <circle cx="70" cy="70" r="1.5" fill="#D4AF37" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#vox-grid)" />
      </svg>

      {/* 2. تسرب ضوئي دافئ (Warm Editorial Light Leak) */}
      <div
        style={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: '60%',
          height: '40%',
          background:
            'radial-gradient(circle, rgba(255, 225, 120, 0.12) 0%, rgba(212, 175, 55, 0) 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* 3. تظليل حواف سينمائي (Vignette) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 50%, rgba(5, 8, 14, 0.8) 100%)',
          opacity: 0.95 + filmFlicker,
        }}
      />
    </div>
  );
};
