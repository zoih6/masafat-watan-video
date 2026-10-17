import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import subtitlesData from '../subtitles.json';
import { SubtitleItem } from '../types';

const subtitles = subtitlesData as SubtitleItem[];

export const KineticSubtitles: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // البحث عن السطر الحالي
  // نترك الجملة تظل ظاهرة فترة وجيزة بعد انتهائها (حوالي 8 إطارات) لتحقيق سلاسة القراءة
  const currentItem = subtitles.find(
    (item) => frame >= item.startFrame && frame <= item.endFrame + 10
  );

  if (!currentItem) return null;

  // تقدم حركة السطر العام
  const itemAge = frame - currentItem.startFrame;
  const isLeaving = frame > currentItem.endFrame;
  const exitProgress = isLeaving
    ? interpolate(frame, [currentItem.endFrame, currentItem.endFrame + 10], [0, 1], {
        extrapolateRight: 'clamp',
      })
    : 0;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 320,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 60px',
        zIndex: 50,
        direction: 'rtl',
        pointerEvents: 'none',
        opacity: 1 - exitProgress,
        transform: `translateY(${-exitProgress * 20}px)`,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px 18px',
          background: 'rgba(12, 17, 24, 0.72)',
          padding: '24px 38px',
          borderRadius: '16px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
        }}
      >
        {currentItem.words.map((w, index) => {
          const isSpoken = frame >= w.startFrame;
          const isCurrentWord = frame >= w.startFrame && frame <= w.endFrame;

          // حركة دخول ناعمة فور بدء نطق الكلمة
          const wordSpring = spring({
            frame: frame - w.startFrame,
            fps,
            config: { damping: 14, stiffness: 180 },
          });

          // حركة خاصة للكلمات المفتاحية كما حدد الدليل الإبداعي
          let keywordTransform = '';
          const cleanWord = w.word.replace(/[.,!?،؛]/g, '');

          if (isCurrentWord) {
            if (cleanWord === 'وطن') keywordTransform = 'scale(1.25)';
            else if (cleanWord === 'الأسوار') keywordTransform = 'scaleX(1.3) scaleY(1.1)';
            else if (cleanWord === 'جدار') keywordTransform = 'scaleY(1.3)';
            else if (cleanWord === 'الإعصار') keywordTransform = 'rotate(6deg) scale(1.2)';
            else if (cleanWord === 'الضباب') keywordTransform = 'blur(1px) scale(1.15)';
            else if (cleanWord.includes('الإبحار')) keywordTransform = 'scaleX(1.35) scale(1.15)';
            else keywordTransform = 'scale(1.12)';
          }

          return (
            <span
              key={index}
              style={{
                fontFamily: "'Amiri', 'Lemonada', serif",
                fontSize: 52,
                fontWeight: isCurrentWord ? 'bold' : 'normal',
                color: isCurrentWord
                  ? '#FFDF73' // ذهبي ناصع ومشرق للكلمة الحالية
                  : isSpoken
                  ? '#FFFFFF' // أبيض مقروء للكلمات المنطوقة
                  : 'rgba(255, 255, 255, 0.15)', // باهتة قبل نطقها
                textShadow: isCurrentWord
                  ? '0 0 20px rgba(255, 223, 115, 0.8), 0 2px 4px rgba(0,0,0,0.8)'
                  : isSpoken
                  ? '0 2px 4px rgba(0,0,0,0.8)'
                  : 'none',
                opacity: isSpoken ? Math.min(1, Math.max(0.1, wordSpring)) : 0.12,
                transform: `${isSpoken ? `scale(${wordSpring * 0.2 + 0.8})` : 'scale(0.95)'} ${keywordTransform}`,
                transition: 'all 0.12s ease-out',
                display: 'inline-block',
                position: 'relative',
              }}
            >
              {w.word}
              {isCurrentWord && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: '#D4AF37',
                    borderRadius: 2,
                    boxShadow: '0 0 8px #D4AF37',
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
