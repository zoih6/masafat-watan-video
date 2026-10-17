import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

export const CentralGuidingLine: React.FC = () => {
  const frame = useCurrentFrame();

  // الخط البصري الرئيسي الموحد:
  // 0-98: قياس مسافة بين نقطتين
  // 98-303: حدود وخريطة وأسوار
  // 303-436: جدار رأسي
  // 436-532: تفرع شجرة وأنساب
  // 532-762: خيط يلتف حول انعكاس المرأة ولغز
  // 762-966: موجة صوتية متوقفة (صمت) ثم قطرة
  // 966-1197: سطر حبر وقلم
  // 1197-1383: طريق إعصار حلزوني
  // 1383-1607: بوصلة وخوف مخفي بوقار
  // 1607-1726: خط داخل ضباب
  // 1726-1842: أفق البحر
  // 1842+: تلاشي نحو نقطة الأفق مع الشكر

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        pointerEvents: 'none',
        zIndex: 30,
      }}
    >
      <defs>
        <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2A3" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8C6E1E" />
        </linearGradient>
      </defs>

      {/* 0 -> 98 (العنوان): قياس مسافة بين نقطتين */}
      {frame < 98 && (
        <g filter="url(#gold-glow)">
          {(() => {
            const p = interpolate(frame, [10, 85], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            const x1 = 200;
            const x2 = 200 + p * 680;
            return (
              <>
                <line
                  x1={x1}
                  y1={1100}
                  x2={x2}
                  y2={1100}
                  stroke="url(#gold-grad)"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />
                <circle cx={x1} cy={1100} r="6" fill="#D4AF37" />
                {p > 0.05 && <circle cx={x2} cy={1100} r="6" fill="#FFF2A3" />}
                {/* مؤشر القياس Vox Style */}
                <text
                  x={x1 + (x2 - x1) / 2}
                  y={1080}
                  fill="#D4AF37"
                  fontSize="24"
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

      {/* 98 -> 303 (الوطن والأسوار): خط الحدود الممتد مع الأسوار */}
      {frame >= 98 && frame < 303 && (
        <g filter="url(#gold-glow)">
          {(() => {
            const progress = interpolate(frame, [98, 280], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            const wallH = interpolate(frame, [198, 290], [20, 240], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            return (
              <>
                <path
                  d={`M 140 1000 Q 350 ${920 + Math.sin(frame * 0.05) * 20} 540 1000 T 940 1000`}
                  fill="none"
                  stroke="url(#gold-grad)"
                  strokeWidth="3.5"
                  strokeDasharray="800"
                  strokeDashoffset={800 * (1 - progress)}
                />
                {/* أسوار قائمة تتكاثر عمودياً */}
                {[200, 320, 440, 560, 680, 800, 900].map((x, i) => {
                  const h = Math.min(wallH, (i + 1) * 35);
                  return (
                    <line
                      key={i}
                      x1={x}
                      y1={1000}
                      x2={x}
                      y2={1000 - h}
                      stroke="url(#gold-grad)"
                      strokeWidth="2.5"
                      opacity={progress > (i / 7) ? 0.85 : 0}
                    />
                  );
                })}
              </>
            );
          })()}
        </g>
      )}

      {/* 303 -> 436 (الجدار): خط رأسي يعبر حاجز الجدار الشاهق */}
      {frame >= 303 && frame < 436 && (
        <g filter="url(#gold-glow)">
          {(() => {
            const h = interpolate(frame, [303, 380], [0, 700], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            return (
              <>
                <line
                  x1={540}
                  y1={1400}
                  x2={540}
                  y2={1400 - h}
                  stroke="url(#gold-grad)"
                  strokeWidth="4"
                />
                {/* حاجز الجدار العلوي */}
                <line
                  x1={240}
                  y1={700}
                  x2={840}
                  y2={700}
                  stroke="#FFF2A3"
                  strokeWidth="3"
                  strokeDasharray="10 5"
                />
                <circle cx={540} cy={1400 - h} r="7" fill="#FFF2A3" />
              </>
            );
          })()}
        </g>
      )}

      {/* 436 -> 532 (الأنساب والأقدار): تفرع شجرة النسب وانقطاع الخطوط */}
      {frame >= 436 && frame < 532 && (
        <g filter="url(#gold-glow)">
          {(() => {
            const spread = interpolate(frame, [436, 520], [0, 220], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            return (
              <>
                {/* الجذع المشترك */}
                <line x1={540} y1={1250} x2={540} y2={1050} stroke="url(#gold-grad)" strokeWidth="3.5" />
                {/* الفروع المتشعبة التي تنحرف وتبتعد */}
                <path
                  d={`M 540 1050 Q ${540 - spread} 950 ${540 - spread * 1.5} 800`}
                  fill="none"
                  stroke="url(#gold-grad)"
                  strokeWidth="2.5"
                />
                <path
                  d={`M 540 1050 Q ${540 + spread} 950 ${540 + spread * 1.5} 800`}
                  fill="none"
                  stroke="url(#gold-grad)"
                  strokeWidth="2.5"
                />
                <circle cx={540 - spread * 1.5} cy={800} r="5" fill="#D4AF37" />
                <circle cx={540 + spread * 1.5} cy={800} r="5" fill="#D4AF37" />
              </>
            );
          })()}
        </g>
      )}

      {/* 532 -> 762 (المرأة واللغز): خيط يلتف بانسيابية حول الكادر */}
      {frame >= 532 && frame < 762 && (
        <g filter="url(#gold-glow)">
          {(() => {
            const rot = (frame - 532) * 1.2;
            return (
              <g transform={`translate(540, 850) rotate(${rot})`}>
                <ellipse
                  cx={0}
                  cy={0}
                  rx={260}
                  ry={160}
                  fill="none"
                  stroke="url(#gold-grad)"
                  strokeWidth="2"
                  strokeDasharray="12 8"
                  opacity={0.8}
                />
                <circle cx={260} cy={0} r="5" fill="#FFF2A3" />
              </g>
            );
          })()}
        </g>
      )}

      {/* 762 -> 966 (الصمت وغدر الهوى): موجة صوتية تتجمد ثم تتلاشى لقطرة */}
      {frame >= 762 && frame < 966 && (
        <g filter="url(#gold-glow)">
          {(() => {
            const isFrozen = frame > 810;
            const dropY = interpolate(frame, [880, 960], [900, 1300], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            return (
              <>
                {/* خط الموجة الصوتية بين الكرسيين */}
                <path
                  d={
                    isFrozen
                      ? 'M 200 900 L 880 900' // صمت مسطح
                      : `M 200 900 Q 370 ${900 + Math.sin(frame * 0.4) * 45} 540 900 T 880 900`
                  }
                  fill="none"
                  stroke="url(#gold-grad)"
                  strokeWidth="3"
                />
                {frame > 880 && (
                  <circle cx={540} cy={dropY} r="6" fill="#FFF2A3" opacity={1 - (dropY - 900) / 500} />
                )}
              </>
            );
          })()}
        </g>
      )}

      {/* 966 -> 1197 (الشاعر والأشعار): سطر الحبر وقلم الشاعر */}
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
                  y1={1050}
                  x2={currentX}
                  y2={1050}
                  stroke="url(#gold-grad)"
                  strokeWidth="3.5"
                />
                {/* رأس القلم المضيء */}
                <circle cx={currentX} cy={1050} r="5" fill="#FFF2A3" />
              </>
            );
          })()}
        </g>
      )}

      {/* 1197 -> 1383 (الأشواق والإعصار): التواء حلزوني يدور نحو المركز */}
      {frame >= 1197 && frame < 1383 && (
        <g filter="url(#gold-glow)">
          {(() => {
            const spin = (frame - 1197) * 3;
            const radius = interpolate(frame, [1197, 1383], [350, 40], {
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
                  strokeWidth="2.5"
                  strokeDasharray="15 10"
                  transform={`rotate(${spin})`}
                />
                <circle
                  cx={0}
                  cy={0}
                  r={radius * 0.6}
                  fill="none"
                  stroke="url(#gold-grad)"
                  strokeWidth="1.5"
                  strokeDasharray="8 6"
                  transform={`rotate(${-spin * 1.5})`}
                />
              </g>
            );
          })()}
        </g>
      )}

      {/* 1383 -> 1607 (البوصلة والوقار): بوصلة وخط الأفق المتزن */}
      {frame >= 1383 && frame < 1607 && (
        <g filter="url(#gold-glow)">
          {(() => {
            // إبرة بوصلة تدور ببطء وتستقر
            const angle = interpolate(frame, [1383, 1490, 1580], [0, 160, 45], {
              extrapolateRight: 'clamp',
            });
            return (
              <g transform="translate(540, 800)">
                <circle cx={0} cy={0} r={160} fill="none" stroke="url(#gold-grad)" strokeWidth="2" />
                <circle cx={0} cy={0} r={150} fill="none" stroke="rgba(212, 175, 55, 0.3)" strokeDasharray="4 8" />
                <line
                  x1={0}
                  y1={-120}
                  x2={0}
                  y2={120}
                  stroke="#FFF2A3"
                  strokeWidth="3"
                  transform={`rotate(${angle})`}
                />
              </g>
            );
          })()}
        </g>
      )}

      {/* 1607 -> 1924 (الضباب والإبحار والخاتمة): خط الأفق البحري والوصول للنهاية */}
      {frame >= 1607 && (
        <g filter="url(#gold-glow)">
          {(() => {
            const horizonProgress = interpolate(frame, [1607, 1780], [0.2, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            const fadeFinal = interpolate(frame, [1860, 1920], [1, 0.3], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            return (
              <g opacity={fadeFinal}>
                {/* خط أفق ممتد بهدوء */}
                <line
                  x1={540 - 500 * horizonProgress}
                  y1={1020}
                  x2={540 + 500 * horizonProgress}
                  y2={1020}
                  stroke="url(#gold-grad)"
                  strokeWidth="3.5"
                />
                {/* نقطة ضوئية أفقية بعيدة تومض */}
                <circle
                  cx={540}
                  cy={1020}
                  r={interpolate(frame % 40, [0, 20, 40], [4, 7, 4])}
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
