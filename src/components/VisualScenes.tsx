import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
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
import {
  stone_wall_cutout,
  open_journal_quill,
  brass_compass_cutout,
  wooden_rowboat_cutout,
  map_vintage_layer,
} from '../elementsData';

export const VisualScenes: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

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
      {/* ==============================================================
          المشهد 0: العنوان الافتتاحي (0 -> 98) | 0:00 – 0:03
          ============================================================== */}
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
            background: 'radial-gradient(circle at 50% 50%, #121a28 0%, #05070a 100%)',
          }}
        >
          {/* كولاج ورقي ذو حواف ممزقة وخلفية متحركة */}
          <div
            style={{
              position: 'relative',
              padding: '60px 80px',
              background: 'rgba(15, 23, 34, 0.9)',
              border: '2px solid rgba(212, 175, 55, 0.5)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.9), inset 0 0 50px rgba(0,0,0,0.7)',
              transform: `rotate(${interpolate(frame, [0, 98], [-2.5, -0.5])}deg) scale(${interpolate(
                frame,
                [0, 98],
                [0.95, 1.05]
              )})`,
            }}
          >
            {/* شريط لاصق زاوية */}
            <div
              style={{
                position: 'absolute',
                top: -16,
                right: -20,
                width: 120,
                height: 32,
                backgroundColor: 'rgba(212, 175, 55, 0.45)',
                transform: 'rotate(25deg)',
                boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
              }}
            />
            <div
              style={{
                fontSize: 106,
                fontFamily: "'Amiri', serif",
                color: '#FFE8A3',
                letterSpacing: 6,
                textShadow: '0 0 40px rgba(212, 175, 55, 0.6), 0 4px 10px rgba(0,0,0,0.9)',
                textAlign: 'center',
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
                textAlign: 'center',
              }}
            >
              تجربة شعرية سينمائية • Vox Mixed Media
            </div>
          </div>
        </div>
      )}

      {/* ==============================================================
          المشهد 1: الوطن، المسافة، الجدار (98 -> 436) | 0:03 – 0:14
          "ما بيننا وطن تباعد ظله / ومسافة ممتدة الأسوار / وجدار جيل كيف أعبر ظهرهُ؟"
          طبقات كولاج: خريطة خلفية + خريطة عتيقة مقصوصة + سور حجري يرتفع مع سبرينغ
          ============================================================== */}
      {frame >= 98 && frame < 436 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [98, 115, 415, 436], [0, 1, 1, 0]),
          }}
        >
          {/* طبقة 1: خلفية الخريطة التضاريسية مع كاميرا Push-in */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [98, 436], [1.02, 1.15])}) translateY(${interpolate(
                frame,
                [98, 436],
                [0, -40]
              )}px)`,
            }}
          >
            <img
              src={scene1_map_wall}
              alt="Base Map"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.75)' }}
            />
          </div>

          {/* طبقة 2: قصاصة ورقية ممزقة لخريطة تضاريسية قديمة (Cutout Layer) */}
          <div
            style={{
              position: 'absolute',
              top: '15%',
              left: '5%',
              width: '90%',
              height: '50%',
              transform: `rotate(${interpolate(frame, [98, 436], [-2, 1])}deg) scale(${interpolate(
                frame,
                [98, 436],
                [1.0, 1.08]
              )})`,
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.8))',
              pointerEvents: 'none',
            }}
          >
            <img
              src={map_vintage_layer}
              alt="Vintage Map Cutout"
              style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.85 }}
            />
          </div>

          {/* طبقة 3: جدار وأسوار حجرية شاهقة ترتفع برمجياً (Cutout Rise) عند البيت: "وجدار جيل كيف أعبر ظهرهُ؟" */}
          {frame >= 280 && (
            <div
              style={{
                position: 'absolute',
                bottom: '26%',
                left: '50%',
                width: 900,
                transform: `translateX(-50%) translateY(${interpolate(
                  spring({ frame: frame - 303, fps, config: { damping: 14, stiffness: 100 } }),
                  [0, 1],
                  [400, 0]
                )}px) scale(${interpolate(frame, [303, 436], [1.0, 1.06])})`,
                filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.95))',
              }}
            >
              <img
                src={stone_wall_cutout}
                alt="Stone Wall Barrier"
                style={{ width: '100%', objectFit: 'contain' }}
              />
            </div>
          )}
        </div>
      )}

      {/* ==============================================================
          المشهد 2: تباعد الأنساب والأقدار (436 -> 532) | 0:14 – 0:17
          "وتباعد الأنساب والأقدار"
          تفرع شجرة النسب وانفصال المسارات إلى خطين لا يلتقيان
          ============================================================== */}
      {frame >= 436 && frame < 532 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [436, 450, 515, 532], [0, 1, 1, 0]),
          }}
        >
          {/* خلفية شجرة الأنساب مع حركة تباعد ديناميكية */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [436, 532], [1.02, 1.14])}) translateY(${interpolate(
                frame,
                [436, 532],
                [10, -30]
              )}px)`,
            }}
          >
            <img
              src={scene2_genealogy_tree}
              alt="Genealogy Tree Divergence"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }}
            />
          </div>

          {/* خطوط انفصال كولاج متحركة تعكس ابتعاد الأنساب والأقدار */}
          <svg width="1080" height="1920" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
            <line
              x1={540}
              y1={1300}
              x2={540 - interpolate(frame, [436, 530], [0, 240])}
              y2={650}
              stroke="#D4AF37"
              strokeWidth="4"
              strokeDasharray="10 8"
            />
            <line
              x1={540}
              y1={1300}
              x2={540 + interpolate(frame, [436, 530], [0, 240])}
              y2={650}
              stroke="#FFDF73"
              strokeWidth="4"
              strokeDasharray="10 8"
            />
          </svg>
        </div>
      )}

      {/* ==============================================================
          المشهد 3: المرأة، اللغز، رقة وحذار (532 -> 762) | 0:17 – 0:25
          "وهي الذكية تستشف مشاعري / مخبوءةٌ في رقة وحذار / مجبولة باللغز"
          انعكاس زجاج ممطر + قصاصات ورق شفاف + حلقة لغز بيضاوية تلتف
          ============================================================== */}
      {frame >= 532 && frame < 762 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [532, 550, 745, 762], [0, 1, 1, 0]),
          }}
        >
          {/* صورة المرأة والانعكاس خلف الزجاج مع زووم سينمائي بطيء */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [532, 762], [1.0, 1.15])}) translateY(${interpolate(
                frame,
                [532, 762],
                [0, -40]
              )}px)`,
            }}
          >
            <img
              src={scene3_woman_enigma}
              alt="Woman Reflection"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8) contrast(1.18)' }}
            />
          </div>

          {/* حلقة اللغز البيضاوية التي تلتف حول انعكاس العين */}
          <div
            style={{
              position: 'absolute',
              top: '32%',
              left: '50%',
              width: 320,
              height: 480,
              border: '2px dashed #FFDF73',
              borderRadius: '50%',
              transform: `translate(-50%, -50%) rotate(${interpolate(frame, [532, 762], [0, 45])}deg)`,
              boxShadow: '0 0 35px rgba(212, 175, 55, 0.4), inset 0 0 30px rgba(212, 175, 55, 0.2)',
              pointerEvents: 'none',
            }}
          />
        </div>
      )}

      {/* ==============================================================
          المشهد 4: الصمت وغدر الهوى المدرار (762 -> 966) | 0:25 – 0:32
          "مجبولة باللغز تقرأ صمتنا / وتخاف من غدر الهوى المدرار"
          مقعدان متقابلان + تجمد الصمت + قطرات حبر سائلة تتساقط
          ============================================================== */}
      {frame >= 762 && frame < 966 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [762, 780, 945, 966], [0, 1, 1, 0]),
          }}
        >
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
              alt="Empty Room Silence"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }}
            />
          </div>

          {/* انتشار قطرات الماء والحبر عند نطق: "غدر الهوى المدرار" */}
          {frame >= 860 && (
            <div
              style={{
                position: 'absolute',
                top: '52%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 240,
                height: 240,
                borderRadius: '50%',
                border: '2px solid rgba(212, 175, 55, 0.6)',
                transformOrigin: 'center center',
                animation: 'none',
                opacity: interpolate(frame, [860, 960], [1, 0.2]),
                transformBox: 'fill-box',
                scale: `${interpolate(frame, [860, 960], [0.5, 2.2])}`,
                boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)',
              }}
            />
          )}
        </div>
      )}

      {/* ==============================================================
          المشهد 5: الشاعر، الدفتر، والأشعار (966 -> 1197) | 0:32 – 0:40
          "وأنا البسيط ورأس مالي رقتي / لا جاه يسندني سوى أشعاري"
          مكتب الشاعر + نور النافذة + قصاصة الدفتر والقلم + تدفق خط الحبر
          ============================================================== */}
      {frame >= 966 && frame < 1197 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [966, 985, 1180, 1197], [0, 1, 1, 0]),
          }}
        >
          {/* خلفية مكتب الشاعر والنافذة */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [966, 1197], [1.02, 1.15])}) translateY(${interpolate(
                frame,
                [966, 1197],
                [0, -45]
              )}px)`,
            }}
          >
            <img
              src={scene5_poet_desk}
              alt="Poet Study Window"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }}
            />
          </div>

          {/* قصاصة الدفتر المفتوح والقلم (Cutout Layer) ترتفع مع كتابة البيت */}
          <div
            style={{
              position: 'absolute',
              bottom: '24%',
              left: '50%',
              width: 780,
              transform: `translateX(-50%) translateY(${interpolate(
                spring({ frame: frame - 966, fps, config: { damping: 15, stiffness: 120 } }),
                [0, 1],
                [150, 0]
              )}px)`,
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.85))',
            }}
          >
            <img
              src={open_journal_quill}
              alt="Open Journal & Quill"
              style={{ width: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}

      {/* ==============================================================
          المشهد 6: الأشواق والإعصار (1197 -> 1383) | 0:40 – 0:46
          "جرتنيَ الأشواق نحو غموضها / فمشيت مسلوبا إلى الإعصار"
          دوامة حلزونية تدور وتسحب القصاصات والشخصية للداخل
          ============================================================== */}
      {frame >= 1197 && frame < 1383 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [1197, 1215, 1365, 1383], [0, 1, 1, 0]),
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [1197, 1383], [1.05, 1.25])}) rotate(${interpolate(
                frame,
                [1197, 1383],
                [0, 6]
              )}deg)`,
            }}
          >
            <img
              src={scene6_vortex_storm}
              alt="Vortex Storm of Emotions"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }}
            />
          </div>
        </div>
      )}

      {/* ==============================================================
          المشهد 7: البوصلة، الخوف والوقار (1383 -> 1607) | 0:46 – 0:53
          "لا أدعي علم الوصول ولم أزل / رجلا يخبيء خوفه بوقار"
          بوصلة نحاسية مقصوصة تدور بإبرتها ثم تثبت بوقار
          ============================================================== */}
      {frame >= 1383 && frame < 1607 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [1383, 1405, 1585, 1607], [0, 1, 1, 0]),
          }}
        >
          {/* خلفية المشهد والظل المتوجس */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [1383, 1607], [1.02, 1.12])})`,
            }}
          >
            <img
              src={scene7_compass_dignity}
              alt="Compass & Dignified Stance"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }}
            />
          </div>

          {/* قصاصة البوصلة النحاسية الحقيقية في المنتصف مع دوران دقيق */}
          <div
            style={{
              position: 'absolute',
              top: '36%',
              left: '50%',
              width: 520,
              transform: `translate(-50%, -50%) rotate(${interpolate(
                frame,
                [1383, 1500, 1580],
                [0, 180, 75]
              )}deg) scale(${interpolate(frame, [1383, 1607], [0.95, 1.05])})`,
              filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.9))',
            }}
          >
            <img
              src={brass_compass_cutout}
              alt="Brass Nautical Compass"
              style={{ width: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}

      {/* ==============================================================
          المشهد 8: الضباب والإبحار (1607 -> 1842) | 0:53 – 1:01
          "أمضي إليها والضباب يلفني / مستسلمًا لمصائر الإبحار!"
          بحر مائج وضباب كثيف + قارب خشبي مقصوص يبحر نحو نجمة الأفق
          ============================================================== */}
      {frame >= 1607 && frame < 1842 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: interpolate(frame, [1607, 1625, 1820, 1842], [0, 1, 1, 0]),
          }}
        >
          {/* خلفية البحر والضباب الكثيف ونجمة الأفق */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `scale(${interpolate(frame, [1607, 1842], [1.02, 1.15])}) translateY(${interpolate(
                frame,
                [1607, 1842],
                [0, -35]
              )}px)`,
            }}
          >
            <img
              src={scene8_boat_fog_sea}
              alt="Sea of Mist & Distant Star"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }}
            />
          </div>

          {/* قصاصة القارب الخشبي (Cutout Layer) تتقدم عبر الأمواج */}
          <div
            style={{
              position: 'absolute',
              bottom: '22%',
              left: '50%',
              width: 820,
              transform: `translateX(-50%) translateY(${Math.sin(frame * 0.08) * 12}px) scale(${interpolate(
                frame,
                [1607, 1842],
                [0.96, 1.06]
              )})`,
              filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.95))',
            }}
          >
            <img
              src={wooden_rowboat_cutout}
              alt="Rowboat Cutout"
              style={{ width: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}

      {/* ==============================================================
          المشهد 9: الخاتمة والتلاشي في الأفق (1842 -> 1930) | 1:01 – 1:04
          "كلمات وسيم الزبيري"
          ============================================================== */}
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
