import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { synthEngine } from '../utils/audioSynth';

interface TopNavProps {
  progress: number;
}

export const TopNav: React.FC<TopNavProps> = ({ progress }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    setIsPlayingAudio(synthEngine.getIsPlaying());
  }, []);

  const handleToggleSound = () => {
    const nextState = synthEngine.toggle();
    setIsPlayingAudio(nextState);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#101014]/90 backdrop-blur-md border-b border-[#A7A0A0]/10 transition-all duration-300">
      {/* Hairline story scroll progress indicator */}
      <div
        className="h-[2px] bg-gradient-to-r from-[#682D3A] via-[#B88C91] to-[#D5BD9B] transition-all duration-150"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Wordmark */}
        <a
          href="#"
          className="text-sm md:text-base font-serif italic text-[#F4EEE5] hover:text-[#D5BD9B] transition-colors whitespace-nowrap shrink-0 tracking-wide"
        >
          Somewhere Between the Bass &amp; You
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-widest text-[#A7A0A0]">
          <a
            href="#dedication"
            className="hover:text-[#F4EEE5] transition-colors whitespace-nowrap shrink-0"
          >
            Prologue
          </a>
          <a
            href="#the-nights"
            className="hover:text-[#F4EEE5] transition-colors whitespace-nowrap shrink-0"
          >
            The Nights
          </a>
          <a
            href="#the-beach"
            className="hover:text-[#F4EEE5] transition-colors whitespace-nowrap shrink-0"
          >
            The Beach
          </a>
          <a
            href="#goa-map"
            className="hover:text-[#F4EEE5] transition-colors whitespace-nowrap shrink-0 text-[#D5BD9B]"
          >
            Goa Map
          </a>
          <a
            href="#memories"
            className="hover:text-[#F4EEE5] transition-colors whitespace-nowrap shrink-0"
          >
            Tokens
          </a>
          <a
            href="#quiz"
            className="hover:text-[#F4EEE5] transition-colors whitespace-nowrap shrink-0"
          >
            Quiz
          </a>
          <a
            href="#countdown"
            className="hover:text-[#F4EEE5] transition-colors whitespace-nowrap shrink-0"
          >
            Nov 22
          </a>
          <a
            href="#birthday-letter"
            className="hover:text-[#F4EEE5] transition-colors whitespace-nowrap shrink-0"
          >
            Letter
          </a>
        </nav>

        {/* Zone 3: Interactive Sound Toggle Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleToggleSound}
            className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-md border transition-all whitespace-nowrap shrink-0 ${
              isPlayingAudio
                ? 'bg-[#682D3A] text-white border-[#B88C91]/60 shadow-[0_0_15px_rgba(104,45,58,0.5)]'
                : 'bg-[#18171B] text-[#D5BD9B] hover:bg-[#222127] border-[#A7A0A0]/20'
            }`}
            title={isPlayingAudio ? 'Pause Melodic Techno Audio' : 'Play Melodic Techno Audio'}
          >
            {isPlayingAudio ? (
              <Volume2 className="w-3.5 h-3.5 text-[#86EFAC] animate-pulse" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-[#A7A0A0]" />
            )}
            <span className="hidden sm:inline">
              {isPlayingAudio ? 'Audio: 124 BPM' : 'Ambient Sound'}
            </span>
            <Sparkles className="w-3 h-3 text-[#D5BD9B] hidden sm:inline" />
          </button>
        </div>
      </div>
    </header>
  );
};
