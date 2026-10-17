import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import {
  scene1_map_wall,
  scene2_genealogy_tree,
  scene3_woman_enigma,
  scene4_empty_room_silence,
  scene5_poet_desk,
  scene6_vortex_storm,
  scene7_compass_dignity,
  scene8_boat_fog_sea,
} from '../assetsData';

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
        backgroundColor: '#06090e',
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
            background: 'radial-gradient(circle at 50% 50%, #101624 0%, #05070a 100%)',
          }}
        >
          {/* كولاج ورقي فخم متحرك للعنوان */}
          <div
            style={{
              position: 'absolute',
              width: 720,
              height: 380,
              border: '2px solid rgba(212, 175, 55, 0.35)',
              transform: `rotate(${interpolate(frame, [0, 98], [-3, -1])}deg) scale(${interpolate(
                frame,
                [0, 98],
                [0.96, 1.04]
              )})`,
              background: 'rgba(255, 255, 255, 0.02)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.8), inset 0 0 40px rgba(0,0,0,0.6)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontSize: 104,
                fontFamily: "'Amiri', serif",
                color: '#FFF2C6',
                letterSpacing: '8px',
                textShadow: '0 0 40px rgba(212, 175, 55, 0.6), 0 4px 10px rgba(0,0,0,0.9)',
              }}
            >
              مسافة وطن
            </div>
            <div
              style={{
                marginTop: 20,
                fontSize: 26,
                color: '#8A9BA8',
                letterSpacing: 6,
                fontFamily: "'Lemonada', sans-serif",
              }}
            >
              تجربة بصرية شعرية • Vox Style
            </div>
          </div>
        </div>
      )}

      {/* ===================== المشهد 2: الوطن، المسافة، والجدار (98 -> 436) ===================== */}
      {frame >= 98 && frame < 436 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [98, 115, 415, 436], [0, 1, 1, 0]),
          }}
        >
          {/* كاميرا سينمائية: Push-in بطيء وتفاصيل تضاريسية */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [98, 436], [1.02, 1.18])}) translateY(${interpolate(
                frame,
                [98, 436],
                [0, -60]
              )}px)`,
            }}
          >
            <img
              src={scene1_map_wall}
              alt="Map & Wall"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.85) contrast(1.15)',
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
          }}
        >
          {/* حركة كاميرا تتبع تشعب الأنساب والأقدار بانفصال تدريجي */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [436, 532], [1.02, 1.15])}) translateY(${interpolate(
                frame,
                [436, 532],
                [20, -30]
              )}px)`,
            }}
          >
            <img
              src={scene2_genealogy_tree}
              alt="Genealogy & Destinies"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.88) contrast(1.15)',
              }}
            />
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
          {/* زووم درامي سينمائي ناعم نحو نظرة العين المستترة في انعكاس الزجاج */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [532, 762], [1.0, 1.16])}) translateY(${interpolate(
                frame,
                [532, 762],
                [0, -45]
              )}px)`,
            }}
          >
            <img
              src={scene3_woman_enigma}
              alt="Mysterious Woman"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.82) contrast(1.2)',
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
          }}
        >
          {/* كولاج الغرفة والكرسيين الفارغين مع تموجات الحبر المتساقط */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [762, 966], [1.0, 1.12])})`,
            }}
          >
            <img
              src={scene4_empty_room_silence}
              alt="Silence & Falling Drops"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.85) contrast(1.15)',
              }}
            />
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
          {/* اقتراب الكاميرا الهادئ نحو دفتر الشاعر المضاء بنور النافذة */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [966, 1197], [1.02, 1.16])}) translateY(${interpolate(
                frame,
                [966, 1197],
                [0, -50]
              )}px)`,
            }}
          >
            <img
              src={scene5_poet_desk}
              alt="Poet Study Desk"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.86) contrast(1.12)',
              }}
            />
          </div>
        </div>
      )}

      {/* ===================== المشهد 7: الأشواق والإعصار (1197 -> 1383) ===================== */}
      {frame >= 1197 && frame < 1383 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [1197, 1215, 1365, 1383], [0, 1, 1, 0]),
          }}
        >
          {/* حركة دوران كاميرا ديناميكية نحو دوامة الإعصار */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [1197, 1383], [1.05, 1.25])}) rotate(${interpolate(
                frame,
                [1197, 1383],
                [0, 5]
              )}deg)`,
            }}
          >
            <img
              src={scene6_vortex_storm}
              alt="Vortex Storm"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.85) contrast(1.2)',
              }}
            />
          </div>
        </div>
      )}

      {/* ===================== المشهد 8: البوصلة، الخوف، والوقار (1383 -> 1607) ===================== */}
      {frame >= 1383 && frame < 1607 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [1383, 1405, 1585, 1607], [0, 1, 1, 0]),
          }}
        >
          {/* بوصلة عتيقة وهدوء الوقار الراسخ */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [1383, 1607], [1.02, 1.14])}) translateY(${interpolate(
                frame,
                [1383, 1607],
                [10, -30]
              )}px)`,
            }}
          >
            <img
              src={scene7_compass_dignity}
              alt="Compass & Dignity"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.85) contrast(1.15)',
              }}
            />
          </div>
        </div>
      )}

      {/* ===================== المشهد 9: الضباب ومصائر الإبحار (1607 -> 1842) ===================== */}
      {frame >= 1607 && frame < 1842 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [1607, 1625, 1820, 1842], [0, 1, 1, 0]),
          }}
        >
          {/* إبحار القارب في الضباب الكثيف نحو نقطة النور في الأفق */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [1607, 1842], [1.02, 1.18])}) translateY(${interpolate(
                frame,
                [1607, 1842],
                [0, -40]
              )}px)`,
            }}
          >
            <img
              src={scene8_boat_fog_sea}
              alt="Boat Fog Sea"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.85) contrast(1.18)',
              }}
            />
          </div>
        </div>
      )}

      {/* ===================== المشهد 10: الخاتمة في الأفق (1842 -> 1930) ===================== */}
      {frame >= 1842 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 50% 50%, #0c1420 0%, #040609 100%)',
            opacity: interpolate(frame, [1842, 1860], [0, 1]),
          }}
        />
      )}
    </div>
  );
};
