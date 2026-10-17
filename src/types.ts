export interface SubtitleWord {
  word: string;
  startSec: number;
  endSec: number;
  startFrame: number;
  endFrame: number;
}

export interface SubtitleItem {
  id: number;
  text: string;
  startSec: number;
  endSec: number;
  startFrame: number;
  endFrame: number;
  words: SubtitleWord[];
}
