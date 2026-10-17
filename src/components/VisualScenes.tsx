import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

export const VisualScenes: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        backgroundColor: '#070a0f',
        overflow: 'hidden',
      }}
    >
      {/* ===================== المشهد 1: العنوان (0 -> 98) ===================== */}
      {frame < 98 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: interpolate(frame, [0, 20, 80, 97], [0, 1, 1, 0]),
            background: 'radial-gradient(circle at 50% 50%, #101622 0%, #06090e 100%)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: 580,
              height: 280,
              border: '1px solid rgba(212, 175, 55, 0.25)',
              transform: 'rotate(-2deg)',
              background: 'rgba(255, 255, 255, 0.02)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
            }}
          />
          <div
            style={{
              fontSize: 90,
              fontFamily: "'Amiri', serif",
              color: '#F4E8C1',
              letterSpacing: '6px',
              textShadow: '0 0 35px rgba(212, 175, 55, 0.5)',
              transform: `scale(${interpolate(frame, [0, 90], [0.94, 1.04])})`,
              zIndex: 2,
            }}
          >
            مسافة وطن
          </div>
        </div>
      )}

      {/* ===================== المشهد 2: الوطن، المسافة، الجدار (98 -> 436) ===================== */}
      {frame >= 98 && frame < 436 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [98, 115, 415, 436], [0, 1, 1, 0]),
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [98, 436], [1.02, 1.12])}) translateY(${interpolate(
                frame,
                [98, 436],
                [0, -40]
              )}px)`,
            }}
          >
            <img
              src="/assets/abstract_map_wall.jpg"
              alt="Map and Wall"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.72) contrast(1.15)',
              }}
            />
          </div>
        </div>
      )}

      {/* ===================== المشهد 3: تباعد الأنساب والأقدار (436 -> 532) ===================== */}
      {frame >= 436 && frame < 532 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [436, 450, 515, 532], [0, 1, 1, 0]),
            background: 'radial-gradient(circle at 50% 50%, #0d141e 0%, #05080c 100%)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '38%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 820,
              height: 620,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 330,
                height: 480,
                background: 'linear-gradient(135deg, rgba(20, 28, 40, 0.95) 0%, rgba(10, 14, 20, 0.95) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                padding: 30,
                transform: `translateX(${-interpolate(frame, [436, 530], [0, 80])}px) rotate(-3deg)`,
                boxShadow: '0 25px 50px rgba(0,0,0,0.8)',
              }}
            >
              <div
                style={{
                  color: '#D4AF37',
                  fontSize: 26,
                  fontFamily: "'Amiri', serif",
                  borderBottom: '2px solid rgba(212, 175, 55, 0.3)',
                  paddingBottom: 10,
                }}
              >
                تباعد الأنساب
              </div>
              <div
                style={{
                  color: '#8A9BA8',
                  fontSize: 18,
                  marginTop: 20,
                  lineHeight: 1.8,
                  fontFamily: "'Lemonada', sans-serif",
                }}
              >
                جذور الشجرة تتباعد في الأرض، ومسارات لا تلتقي...
              </div>
            </div>

            <div
              style={{
                width: 330,
                height: 480,
                background: 'linear-gradient(135deg, rgba(20, 28, 40, 0.95) 0%, rgba(10, 14, 20, 0.95) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                padding: 30,
                transform: `translateX(${interpolate(frame, [436, 530], [0, 80])}px) rotate(3deg)`,
                boxShadow: '0 25px 50px rgba(0,0,0,0.8)',
              }}
            >
              <div
                style={{
                  color: '#F4E8C1',
                  fontSize: 26,
                  fontFamily: "'Amiri', serif",
                  borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
                  paddingBottom: 10,
                }}
              >
                وتصريف الأقدار
              </div>
              <div
                style={{
                  color: '#8A9BA8',
                  fontSize: 18,
                  marginTop: 20,
                  lineHeight: 1.8,
                  fontFamily: "'Lemonada', sans-serif",
                }}
              >
                أقدار تتجه صوب المجهول، لا تملك خطوتها...
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================== المشهد 4: المرأة، اللغز، رقة وحذار (532 -> 762) ===================== */}
      {frame >= 532 && frame < 762 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [532, 550, 745, 762], [0, 1, 1, 0]),
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [532, 762], [1, 1.09])})`,
            }}
          >
            <img
              src="/assets/woman_reflection.jpg"
              alt="Woman Reflection"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.7) contrast(1.1)',
              }}
            />
          </div>
        </div>
      )}

      {/* ===================== المشهد 5: الصمت وغدر الهوى المدرار (762 -> 966) ===================== */}
      {frame >= 762 && frame < 966 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [762, 780, 945, 966], [0, 1, 1, 0]),
            background: 'radial-gradient(circle at 50% 50%, #0a0f16 0%, #040608 100%)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 820,
              height: 520,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 160,
                height: 290,
                background: 'linear-gradient(180deg, rgba(20,28,40,0.9) 0%, rgba(10,14,20,0.9) 100%)',
                border: '1.5px solid rgba(212, 175, 55, 0.45)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                padding: 15,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ color: '#D4AF37', fontSize: 16, fontFamily: 'monospace' }}>A // الشاعر</span>
              <div style={{ height: 2, background: 'rgba(212,175,55,0.3)' }} />
            </div>

            <div
              style={{
                width: 200,
                height: 200,
                borderRadius: '50%',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `scale(${interpolate(frame, [880, 960], [0.8, 1.45], {
                  extrapolateLeft: 'clamp',
                })})`,
                opacity: frame > 880 ? 0.8 : 0.2,
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)',
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: '#FFF2A3',
                  boxShadow: '0 0 10px #D4AF37',
                }}
              />
            </div>

            <div
              style={{
                width: 160,
                height: 290,
                background: 'linear-gradient(180deg, rgba(20,28,40,0.9) 0%, rgba(10,14,20,0.9) 100%)',
                border: '1.5px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                padding: 15,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ color: '#8A9BA8', fontSize: 16, fontFamily: 'monospace' }}>B // صمتنا</span>
              <div style={{ height: 2, background: 'rgba(255,255,255,0.2)' }} />
            </div>
          </div>
        </div>
      )}

      {/* ===================== المشهد 6: الشاعر، الدفتر، والأشعار (966 -> 1197) ===================== */}
      {frame >= 966 && frame < 1197 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [966, 985, 1180, 1197], [0, 1, 1, 0]),
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [966, 1197], [1, 1.08])}) translateY(${interpolate(
                frame,
                [966, 1197],
                [0, -25]
              )}px)`,
            }}
          >
            <img
              src="/assets/poet_study.jpg"
              alt="Poet Study"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.72) contrast(1.1)',
              }}
            />
          </div>
        </div>
      )}

      {/* ===================== المشهد 7: الأشواق والإعصار والبوصلة والوقار (1197 -> 1607) ===================== */}
      {frame >= 1197 && frame < 1607 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [1197, 1215, 1585, 1607], [0, 1, 1, 0]),
            background: 'radial-gradient(circle at 50% 50%, #0d1522 0%, #05080d 100%)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${interpolate(
                frame,
                [1197, 1607],
                [0, frame < 1383 ? 60 : 15]
              )}deg)`,
              width: 750,
              height: 750,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                style={{
                  position: 'absolute',
                  width: n * 135,
                  height: n * 135,
                  border: `${n % 2 === 0 ? '1.5px dashed' : '1px solid'} rgba(212, 175, 55, ${0.15 + n * 0.05})`,
                  borderRadius: '50%',
                  transform: `rotate(${n * 35}deg)`,
                }}
              />
            ))}
          </div>

          {frame >= 1383 && (
            <div
              style={{
                position: 'absolute',
                top: '42%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 520,
                padding: '24px 30px',
                background: 'rgba(12, 18, 26, 0.88)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.85)',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  fontFamily: "'Amiri', serif",
                  color: '#FFDF73',
                  marginBottom: 8,
                }}
              >
                وقار الشاعر
              </div>
              <div
                style={{
                  fontSize: 16,
                  color: '#8A9BA8',
                  fontFamily: "'Lemonada', sans-serif",
                }}
              >
                «رجلاً يخبيء خوفه بوقار»
              </div>
            </div>
          )}
        </div>
      )}

      {/* ===================== المشهد 8: الضباب والإبحار (1607 -> 1842) ===================== */}
      {frame >= 1607 && frame < 1842 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [1607, 1625, 1820, 1842], [0, 1, 1, 0]),
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [1607, 1842], [1.02, 1.1])})`,
            }}
          >
            <img
              src="/assets/fog_sea_boat.jpg"
              alt="Fog Sea Boat"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.75) contrast(1.15)',
              }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              top: '45%',
              left: 0,
              right: 0,
              height: 220,
              background:
                'radial-gradient(ellipse at 50% 50%, rgba(200, 220, 240, 0.18) 0%, transparent 80%)',
              filter: 'blur(35px)',
              transform: `translateX(${Math.sin(frame * 0.04) * 35}px)`,
            }}
          />
        </div>
      )}

      {/* ===================== المشهد 9: الخاتمة في الأفق الهادئ (1842 -> 1930) ===================== */}
      {frame >= 1842 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 50% 50%, #0d141e 0%, #05080c 100%)',
            opacity: interpolate(frame, [1842, 1860], [0, 1]),
          }}
        />
      )}
    </div>
  );
};
