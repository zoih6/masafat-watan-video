import React from 'react';
import { Audio, staticFile } from 'remotion';
import { VisualScenes } from '../components/VisualScenes';
import { CentralGuidingLine } from '../components/CentralGuidingLine';
import { KineticSubtitles } from '../components/KineticSubtitles';
import { AtmosphereOverlay } from '../components/AtmosphereOverlay';

export const MainVideo: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: 1080,
        height: 1920,
        backgroundColor: '#070a0e',
        overflow: 'hidden',
      }}
    >
      {/* الصوت الأصلي للقصيدة */}
      <Audio src={staticFile('masafat-watan.mp3')} />

      {/* 1. المشاهد البصرية المتصلة */}
      <VisualScenes />

      {/* 2. الخط البصري الرئيسي الموحد (الراوي الممتد عبر المشاهد) */}
      <CentralGuidingLine />

      {/* 3. النصوص الحركية الحية المتزامنة كلمة بكلمة */}
      <KineticSubtitles />

      {/* 4. أجواء الكولاج والسينما وحبيبات الإضاءة (Vox Texture & Lighting) */}
      <AtmosphereOverlay />
    </div>
  );
};
