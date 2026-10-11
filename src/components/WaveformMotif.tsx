import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { synthEngine } from '../utils/audioSynth';

interface WaveformMotifProps {
  label?: string;
}

export const WaveformMotif: React.FC<WaveformMotifProps> = ({
  label = 'Goa Soundscapes · CamelPhat Ambience',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(synthEngine.getIsPlaying());
  }, []);

  const handleToggleAudio = () => {
    const nextState = synthEngine.toggle();
    setIsPlaying(nextState);
  };

  const bars = [
    { h: 'h-3' },
    { h: 'h-6' },
    { h: 'h-8' },
    { h: 'h-4' },
    { h: 'h-9' },
    { h: 'h-5' },
    { h: 'h-7' },
    { h: 'h-10' },
    { h: 'h-6' },
    { h: 'h-8' },
    { h: 'h-4' },
    { h: 'h-9' },
    { h: 'h-5' },
    { h: 'h-7' },
    { h: 'h-10' },
    { h: 'h-6' },
    { h: 'h-4' },
    { h: 'h-3' },
  ];

  return (
    <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-full bg-[#18171B]/90 border border-[#A7A0A0]/20 backdrop-blur-md shadow-lg transition-all hover:border-[#D5BD9B]/40">
      <button
        onClick={handleToggleAudio}
        className="flex items-center gap-2 text-[#D5BD9B] hover:text-white transition-colors focus:outline-none"
        title={isPlaying ? 'Mute ambient sound' : 'Play ambient techno synth'}
        aria-label={isPlaying ? 'Mute ambient sound' : 'Play ambient techno synth'}
      >
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-[#86EFAC] animate-pulse" />
        ) : (
          <VolumeX className="w-4 h-4 text-[#A7A0A0]" />
        )}
        <span className="text-[11px] font-mono uppercase tracking-wider text-[#D5BD9B]">
          {isPlaying ? 'Audio Live' : 'Sound On'}
        </span>
      </button>

      <div className="flex items-center gap-[3px] h-4">
        {bars.map((bar, i) => (
          <span
            key={i}
            className={`w-[2px] rounded-full transition-all duration-300 ${
              isPlaying
                ? `bg-gradient-to-t from-[#682D3A] via-[#B88C91] to-[#D5BD9B] animate-pulse ${bar.h}`
                : 'bg-[#A7A0A0]/40 h-1.5'
            }`}
            style={{
              animationDuration: `${0.8 + (i % 5) * 0.25}s`,
              animationIterationCount: 'infinite',
            }}
          />
        ))}
      </div>

      <span className="hidden sm:inline text-[11px] font-sans text-[#A7A0A0] tracking-wide whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};
