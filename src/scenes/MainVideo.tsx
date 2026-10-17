import React from 'react';
import { Audio, staticFile } from 'remotion';
import { VisualScenes } from '../components/VisualScenes';
import { CentralGuidingLine } from '../components/CentralGuidingLine';
import { KineticSubtitles } from '../components/KineticSubtitles';
import { VoxOverlayEffects } from '../components/VoxOverlayEffects';

export const MainVideo: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: 1080,
        height: 1920,
        backgroundColor: '#06090e',
        overflow: 'hidden',
      }}
    >
      {/* الصوت الأصلي للقصيدة */}
      <Audio src={staticFile('masafat-watan.mp3')} />

      {/* 1. الطبقات والكولاج الحركي (Vox Paper Collage Layers & Cutouts) */}
      <VisualScenes />

      {/* 2. الخط البصري الموحد المتطور مع كل بيت (The Guiding Line) */}
      <CentralGuidingLine />

      {/* 3. النصوص الحركية الحية المتزامنة بالمللي ثانية كلمة بكلمة */}
      <KineticSubtitles />

      {/* 4. مؤثرات Vox السينمائية (Halftone/Grid, Light Leak, Vignette) */}
      <VoxOverlayEffects />
    </div>
  );
};
