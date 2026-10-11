import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface WaveformMotifProps {
  label?: string;
}

export const WaveformMotif: React.FC<WaveformMotifProps> = ({ label = 'CamelPhat · Emo Techno Atmosphere' }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  // 18 fine-line bars with rhythmic heights
  const bars = [
    { h: 'h-3', delay: 'animation-delay-0' },
    { h: 'h-6', delay: 'animation-delay-150' },
    { h: 'h-8', delay: 'animation-delay-300' },
    { h: 'h-4', delay: 'animation-delay-75' },
    { h: 'h-9', delay: 'animation-delay-225' },
    { h: 'h-5', delay: 'animation-delay-450' },
    { h: 'h-7', delay: 'animation-delay-100' },
    { h: 'h-10', delay: 'animation-delay-350' },
    { h: 'h-6', delay: 'animation-delay-200' },
    { h: 'h-8', delay: 'animation-delay-500' },
    { h: 'h-4', delay: 'animation-delay-150' },
    { h: 'h-9', delay: 'animation-delay-400' },
    { h: 'h-5', delay: 'animation-delay-250' },
    { h: 'h-7', delay: 'animation-delay-50' },
    { h: 'h-10', delay: 'animation-delay-300' },
    { h: 'h-6', delay: 'animation-delay-175' },
    { h: 'h-4', delay: 'animation-delay-375' },
    { h: 'h-3', delay: 'animation-delay-120' },
  ];

  return (
    <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-[#18171B]/80 border border-[#A7A0A0]/15 backdrop-blur-md">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="text-[#D5BD9B] hover:text-white transition-colors focus:outline-none"
        title={isPlaying ? 'Pause visualizer' : 'Resume visualizer'}
        aria-label={isPlaying ? 'Pause ambient waveform' : 'Resume ambient waveform'}
      >
        {isPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5 opacity-60" />}
      </button>

      <div className="flex items-center gap-[3px] h-4">
        {bars.map((bar, i) => (
          <span
            key={i}
            className={`w-[2px] rounded-full bg-gradient-to-t from-[#682D3A] to-[#D5BD9B] transition-all duration-300 ${
              isPlaying ? `animate-pulse ${bar.h}` : 'h-1 opacity-40'
            }`}
            style={{
              animationDuration: `${0.8 + (i % 5) * 0.25}s`,
              animationIterationCount: 'infinite',
            }}
          />
        ))}
      </div>

      <span className="text-[11px] font-sans text-[#A7A0A0] tracking-wide whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};
