import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

export const CentralGuidingLine: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        pointerEvents: 'none',
        zIndex: 90,
      }}
    >
      <defs>
        <filter id="gold-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2A3" />
          <stop offset="50%" stopColor="#FFE169" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>

      {/* 0 -> 98 (العنوان): قياس المسافة بين نقطتين مع مؤشر كيلومترات متحرك بأسلوب Vox */}
      {frame < 98 && (
        <g filter="url(#gold-glow)">
          {(() => {
            const p = interpolate(frame, [10, 85], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            const x1 = 180;
            const x2 = 180 + p * 720;
            return (
              <>
                <line
                  x1={x1}
                  y1={1200}
                  x2={x2}
                  y2={1200}
                  stroke="url(#gold-grad)"
                  strokeWidth="3.5"
                  strokeDasharray="8 6"
                />
                <circle cx={x1} cy={1200} r="7" fill="#D4AF37" />
                {p > 0.05 && <circle cx={x2} cy={1200} r="7" fill="#FFF2A3" />}
                <text
                  x={x1 + (x2 - x1) / 2}
                  y={1175}
                  fill="#FFE169"
                  fontSize="28"
                  fontFamily="'Amiri', serif"
                  textAnchor="middle"
                  opacity={p}
                >
                  {(p * 2450).toFixed(0)} كم
                </text>
              </>
            );
          })()}
        </g>
      )}

      {/* 98 -> 436 (الوطن والأسوار والجدار): مسار حدودي يرسم بين المدن */}
      {frame >= 98 && frame < 436 && (
        <g filter="url(#gold-glow)">
          {(() => {
            const progress = interpolate(frame, [98, 250], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            return (
              <path
                d="M 120 1050 Q 340 980 540 1050 T 960 1050"
                fill="none"
                stroke="url(#gold-grad)"
                strokeWidth="4"
                strokeDasharray="800"
                strokeDashoffset={800 * (1 - progress)}
              />
            );
          })()}
        </g>
      )}

      {/* 436 -> 532 (الأنساب والأقدار): تفرع شجرة النسب لمسارين */}
      {frame >= 436 && frame < 532 && (
        <g filter="url(#gold-glow)">
          {(() => {
            const spread = interpolate(frame, [436, 520], [0, 200], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            return (
              <>
                <line x1={540} y1={1300} x2={540} y2={1080} stroke="url(#gold-grad)" strokeWidth="4" />
                <path
                  d={`M 540 1080 Q ${540 - spread} 950 ${540 - spread * 1.5} 750`}
                  fill="none"
                  stroke="url(#gold-grad)"
                  strokeWidth="3"
                />
                <path
                  d={`M 540 1080 Q ${540 + spread} 950 ${540 + spread * 1.5} 750`}
                  fill="none"
                  stroke="url(#gold-grad)"
                  strokeWidth="3"
                />
              </>
            );
          })()}
        </g>
      )}

      {/* 532 -> 762 (المرأة واللغز): خيط ذهبي يلتف حول الإطار */}
      {frame >= 532 && frame < 762 && (
        <g filter="url(#gold-glow)">
          {(() => {
            const rot = (frame - 532) * 1.2;
            return (
              <g transform={`translate(540, 780) rotate(${rot})`}>
                <ellipse
                  cx={0}
                  cy={0}
                  rx={240}
                  ry={160}
                  fill="none"
                  stroke="url(#gold-grad)"
                  strokeWidth="2.5"
                  strokeDasharray="10 8"
                />
                <circle cx={240} cy={0} r="6" fill="#FFF2A3" />
              </g>
            );
          })()}
        </g>
      )}

      {/* 762 -> 966 (الصمت وغدر الهوى): خط صوتي متجمد ثم سقوط قطرة */}
      {frame >= 762 && frame < 966 && (
        <g filter="url(#gold-glow)">
          {(() => {
            const isFrozen = frame > 810;
            const dropY = interpolate(frame, [880, 960], [920, 1280], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            return (
              <>
                <path
                  d={
                    isFrozen
                      ? 'M 220 920 L 860 920'
                      : `M 220 920 Q 380 ${920 + Math.sin(frame * 0.4) * 40} 540 920 T 860 920`
                  }
                  fill="none"
                  stroke="url(#gold-grad)"
                  strokeWidth="3.5"
                />
                {frame > 880 && (
                  <circle cx={540} cy={dropY} r="7" fill="#FFF2A3" opacity={1 - (dropY - 920) / 450} />
                )}
              </>
            );
          })()}
        </g>
      )}

      {/* 966 -> 1197 (الشاعر والأشعار): سيلان خط الحبر الذهبي من القلم */}
      {frame >= 966 && frame < 1197 && (
        <g filter="url(#gold-glow)">
          {(() => {
            const penProgress = interpolate(frame, [966, 1160], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            const currentX = 860 - penProgress * 640;
            return (
              <>
                <line
                  x1={860}
                  y1={1120}
                  x2={currentX}
                  y2={1120}
                  stroke="url(#gold-grad)"
                  strokeWidth="4"
                />
                <circle cx={currentX} cy={1120} r="6" fill="#FFF2A3" />
              </>
            );
          })()}
        </g>
      )}

      {/* 1197 -> 1383 (الأشواق والإعصار): دوامة إعصار تدور للداخل */}
      {frame >= 1197 && frame < 1383 && (
        <g filter="url(#gold-glow)">
          {(() => {
            const spin = (frame - 1197) * 3.5;
            const radius = interpolate(frame, [1197, 1383], [340, 40], {
              extrapolateRight: 'clamp',
            });
            return (
              <g transform="translate(540, 850)">
                <circle
                  cx={0}
                  cy={0}
                  r={radius}
                  fill="none"
                  stroke="url(#gold-grad)"
                  strokeWidth="3"
                  strokeDasharray="16 10"
                  transform={`rotate(${spin})`}
                />
              </g>
            );
          })()}
        </g>
      )}

      {/* 1607 -> 1924 (الضباب والإبحار والخاتمة): خط الأفق البحري والوصول */}
      {frame >= 1607 && (
        <g filter="url(#gold-glow)">
          {(() => {
            const horizonProgress = interpolate(frame, [1607, 1780], [0.3, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            const fadeFinal = interpolate(frame, [1860, 1920], [1, 0.4], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            return (
              <g opacity={fadeFinal}>
                <line
                  x1={540 - 500 * horizonProgress}
                  y1={980}
                  x2={540 + 500 * horizonProgress}
                  y2={980}
                  stroke="url(#gold-grad)"
                  strokeWidth="4"
                />
                <circle
                  cx={540}
                  cy={980}
                  r={interpolate(frame % 36, [0, 18, 36], [5, 9, 5])}
                  fill="#FFF2A3"
                />
              </g>
            );
          })()}
        </g>
      )}
    </svg>
  );
};
