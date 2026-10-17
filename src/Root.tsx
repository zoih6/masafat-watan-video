import React from 'react';
import { Composition } from 'remotion';
import { MainVideo } from './scenes/MainVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MasafatWatan"
      component={MainVideo}
      durationInFrames={1930} // ~64.3s at 30 fps
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
