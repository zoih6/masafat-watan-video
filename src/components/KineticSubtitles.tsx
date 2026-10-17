import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import subtitlesData from '../subtitles.json';
import { SubtitleItem } from '../types';

const subtitles = subtitlesData as SubtitleItem[];

export const KineticSubtitles: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // قاعدة صارمة: قبل الإطار 98 (أي طوال فترة ظهور العنوان 0:00 - 0:03.27) لا تظهر أي ترجمة إطلاقاً
  if (frame < 98) {
    return null;
  }

  // إيجاد السطر النشط حالياً
  const currentItem = subtitles.find(
    (item) => frame >= item.startFrame && frame <= item.endFrame + 10
  );

  if (!currentItem) return null;

  // خروج سلس بعد انتهاء السطر
  const isLeaving = frame > currentItem.endFrame;
  const exitProgress = isLeaving
    ? interpolate(frame, [currentItem.endFrame, currentItem.endFrame + 10], [0, 1], {
        extrapolateRight: 'clamp',
      })
    : 0;

  // في نهاية الفيديو (البيت 17: كلمات وسيم الزبيري) يظهر النص في المنتصف بأناقة
  const isOutro = currentItem.id === 17;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: isOutro ? '40%' : 220,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 40px',
        zIndex: 100,
        direction: 'rtl',
        pointerEvents: 'none',
        opacity: 1 - exitProgress,
        transform: `translateY(${-exitProgress * 25}px) scale(${1 - exitProgress * 0.05})`,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: isOutro ? '16px 24px' : '12px 18px',
          background: isOutro ? 'transparent' : 'rgba(8, 12, 18, 0.88)',
          padding: isOutro ? '20px' : '22px 42px',
          borderRadius: '12px',
          border: isOutro ? 'none' : '1.5px solid rgba(212, 175, 55, 0.45)',
          boxShadow: isOutro ? 'none' : '0 25px 60px rgba(0, 0, 0, 0.9), inset 0 0 30px rgba(0, 0, 0, 0.8)',
          backdropFilter: isOutro ? 'none' : 'blur(16px)',
          maxWidth: '92%',
          position: 'relative',
        }}
      >
        {/* شريط Washi Tape كولاج في الزاوية للأبيات العادية */}
        {!isOutro && (
          <div
            style={{
              position: 'absolute',
              top: -12,
              right: 40,
              width: 80,
              height: 22,
              backgroundColor: 'rgba(212, 175, 55, 0.4)',
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

          // حركة نبض وانبثاق لحظية عند نطق الكلمة
          const popProgress = interpolate(
            frame,
            [w.startFrame, w.startFrame + 4, w.endFrame],
            [0.85, 1.25, 1.0],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
          );

          const cleanWord = w.word.replace(/[.,!?،؛]/g, '');

          let customWordStyle: React.CSSProperties = {};
          if (isCurrentWord) {
            if (cleanWord === 'وطن') {
              customWordStyle = { color: '#FFE169', textShadow: '0 0 35px #FFE169, 0 0 70px #D4AF37' };
            } else if (cleanWord === 'الأسوار' || cleanWord === 'وجدار') {
              customWordStyle = { color: '#FFF4C2', transform: 'scale(1.25) translateY(-4px)' };
            } else if (cleanWord === 'الأقدار' || cleanWord === 'الإعصار') {
              customWordStyle = { color: '#FF7B54', textShadow: '0 0 30px #FF7B54' };
            } else if (cleanWord === 'الضباب' || cleanWord.includes('الإبحار')) {
              customWordStyle = { color: '#88D9E6', textShadow: '0 0 35px #88D9E6' };
            } else if (cleanWord === 'رقتي' || cleanWord === 'أشعاري') {
              customWordStyle = { color: '#FFD700', textShadow: '0 0 30px #FFD700' };
            }
          }

          const fontSize = isOutro ? (w.word === 'كلمات' ? 44 : 76) : 54;

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
