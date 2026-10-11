import React from 'react';
import { RotateCcw, Heart } from 'lucide-react';

interface FinalFrameProps {
  onReplay: () => void;
}

export const FinalFrame: React.FC<FinalFrameProps> = ({ onReplay }) => {
  return (
    <footer className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0B0B0E] border-t border-[#A7A0A0]/10 text-center">
      <div className="max-w-2xl mx-auto space-y-10">
        <Heart className="w-6 h-6 text-[#682D3A] fill-[#682D3A] mx-auto animate-pulse" />

        <div className="space-y-4">
          <p className="text-sm font-sans tracking-widest uppercase text-[#A7A0A0]">
            Some stories begin with a swipe.
          </p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4EEE5] tracking-tight leading-snug">
            Ours happened somewhere between <br />
            <span className="italic text-[#D5BD9B]">the bass &amp; you.</span>
          </h3>
          <p className="text-lg font-serif italic text-[#B88C91]">
            Happy 27th, Twinkle.
          </p>
        </div>

        <div className="pt-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#D5BD9B]">
            See you on November 22.
          </p>
        </div>

        <div className="pt-8">
          <button
            onClick={onReplay}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-[#F4EEE5] bg-[#18171B] hover:bg-[#682D3A] border border-[#A7A0A0]/20 transition-all duration-300"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay our story from the start</span>
          </button>
        </div>

        <div className="pt-12 text-[11px] text-[#A7A0A0]/50 font-sans">
          A personal digital keepsake · October 2026 · Bhopal &amp; Mulund West
        </div>
      </div>
    </footer>
  );
};
