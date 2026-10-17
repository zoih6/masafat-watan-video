import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import subtitlesData from '../subtitles.json';
import { SubtitleItem } from '../types';

const subtitles = subtitlesData as SubtitleItem[];

export const KineticSubtitles: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // قاعدة صارمة: قبل الإطار 98 (طوال فترة العنوان الافتتاحي 0:00 - 0:03.27) لا يظهر أي نص ترجمة
  if (frame < 98) {
    return null;
  }

  // البحث عن السطر الصوتي الفعال
  const currentItem = subtitles.find(
    (item) => frame >= item.startFrame && frame <= item.endFrame + 8
  );

  if (!currentItem) return null;

  // خروج ناعم
  const isLeaving = frame > currentItem.endFrame;
  const exitProgress = isLeaving
    ? interpolate(frame, [currentItem.endFrame, currentItem.endFrame + 8], [0, 1], {
        extrapolateRight: 'clamp',
      })
    : 0;

  // في المشهد الأخير (17: كلمات وسيم الزبيري)
  const isOutro = currentItem.id === 17;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: isOutro ? '42%' : 200,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 40px',
        zIndex: 120,
        direction: 'rtl',
        pointerEvents: 'none',
        opacity: 1 - exitProgress,
        transform: `translateY(${-exitProgress * 20}px) scale(${1 - exitProgress * 0.04})`,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: isOutro ? '16px 24px' : '10px 16px',
          background: isOutro ? 'transparent' : 'rgba(10, 15, 22, 0.92)',
          padding: isOutro ? '20px' : '20px 38px',
          borderRadius: '10px',
          border: isOutro ? 'none' : '1.5px solid rgba(255, 215, 0, 0.4)',
          boxShadow: isOutro ? 'none' : '0 20px 50px rgba(0, 0, 0, 0.95), inset 0 0 30px rgba(0, 0, 0, 0.8)',
          backdropFilter: isOutro ? 'none' : 'blur(16px)',
          maxWidth: '92%',
          position: 'relative',
        }}
      >
        {/* شريط Washi Tape كولاج في الزاوية */}
        {!isOutro && (
          <div
            style={{
              position: 'absolute',
              top: -10,
              right: 35,
              width: 75,
              height: 20,
              backgroundColor: 'rgba(212, 175, 55, 0.45)',
              transform: 'rotate(-4deg)',
              backdropFilter: 'blur(4px)',
              borderLeft: '1px dashed rgba(255,255,255,0.4)',
              borderRight: '1px dashed rgba(255,255,255,0.4)',
            }}
          />
        )}

        {currentItem.words.map((w, index) => {
          const isSpoken = frame >= w.startFrame;
          const isCurrentWord = frame >= w.startFrame && frame <= w.endFrame;

          // حركة نبض وانبثاق لحظية للكلمة فور نطقها
          const popProgress = interpolate(
            frame,
            [w.startFrame, w.startFrame + 4, w.endFrame],
            [0.85, 1.25, 1.0],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
          );

          const cleanWord = w.word.replace(/[.,!?،؛]/g, '');

          // تفاعل دلالي نوعي للكلمات المفتاحية
          let customWordStyle: React.CSSProperties = {};
          if (isCurrentWord) {
            if (cleanWord === 'وطن') {
              customWordStyle = { color: '#FFE169', textShadow: '0 0 35px #FFE169, 0 0 70px #D4AF37' };
            } else if (cleanWord === 'الأسوار' || cleanWord === 'وجدار') {
              customWordStyle = { color: '#FFF4C2', transform: 'scale(1.22) translateY(-4px)' };
            } else if (cleanWord === 'الأقدار' || cleanWord === 'الإعصار') {
              customWordStyle = { color: '#FF7B54', textShadow: '0 0 30px #FF7B54' };
            } else if (cleanWord === 'الضباب' || cleanWord.includes('الإبحار')) {
              customWordStyle = { color: '#88D9E6', textShadow: '0 0 35px #88D9E6' };
            } else if (cleanWord === 'رقتي' || cleanWord === 'أشعاري') {
              customWordStyle = { color: '#FFD700', textShadow: '0 0 30px #FFD700' };
            }
          }

          const fontSize = isOutro ? (w.word === 'كلمات' ? 44 : 76) : 52;

          return (
            <span
              key={index}
              style={{
                fontFamily: "'Amiri', 'Lemonada', serif",
                fontSize,
                fontWeight: isCurrentWord || isOutro ? 'bold' : 'normal',
                color: isCurrentWord
                  ? '#FFE57F'
                  : isSpoken
                  ? isOutro && w.word === 'كلمات'
                    ? '#8A9BA8'
                    : '#FFFFFF'
                  : 'rgba(255, 255, 255, 0.15)',
                opacity: isSpoken ? 1 : 0.15,
                transform: isCurrentWord
                  ? `scale(${popProgress})`
                  : isSpoken
                  ? 'scale(1)'
                  : 'scale(0.95)',
                transition: 'all 0.08s cubic-bezier(0.2, 0.9, 0.3, 1)',
                display: 'inline-block',
                position: 'relative',
                lineHeight: 1.4,
                textShadow: isCurrentWord
                  ? '0 0 30px rgba(255, 229, 127, 0.9), 0 4px 8px rgba(0,0,0,0.9)'
                  : isSpoken
                  ? '0 3px 6px rgba(0,0,0,0.8)'
                  : 'none',
                ...customWordStyle,
              }}
            >
              {w.word}
              {/* خط تسطير سينمائي ذهبي متحرك أسفل الكلمة اللحظية (Highlighter Sweep) */}
              {isCurrentWord && !isOutro && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: 'linear-gradient(90deg, transparent, #FFE57F, #D4AF37, transparent)',
                    borderRadius: 2,
                    boxShadow: '0 0 12px #FFE57F',
                  }}
                />
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};
