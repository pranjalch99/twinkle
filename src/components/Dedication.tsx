import React from 'react';
import { DEDICATION } from '../data/story';
import { Heart } from 'lucide-react';

export const Dedication: React.FC = () => {
  return (
    <section id="dedication" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#141317]">
      <div className="max-w-3xl mx-auto">
        {/* Paper card styling */}
        <div className="relative p-8 sm:p-12 md:p-16 rounded-xl bg-[#EDE3D5] text-[#1A1817] shadow-2xl border border-[#D5BD9B]/30">
          {/* Subtle paper header */}
          <div className="flex items-center justify-between border-b border-[#1A1817]/15 pb-6 mb-8">
            <span className="text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-[#682D3A]">
              {DEDICATION.kicker}
            </span>
            <div className="flex items-center gap-1.5 text-[#682D3A]">
              <Heart className="w-3.5 h-3.5 fill-[#682D3A]" />
              <span className="text-xs font-serif italic">October 6, 2026</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A1817] tracking-tight mb-8">
            {DEDICATION.heading}
          </h2>

          {/* Letter Prose */}
          <div className="space-y-5 text-base sm:text-lg font-serif leading-relaxed text-[#2C2825]">
            {DEDICATION.body.map((paragraph, index) => (
              <p key={index} className="text-balance">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Handwritten-feel Sign-off */}
          <div className="mt-10 pt-6 border-t border-[#1A1817]/15 flex items-center justify-between">
            <span className="text-sm font-sans text-[#78716C] italic">
              Written from Bhopal with love
            </span>
            <span className="text-xl sm:text-2xl font-serif italic text-[#682D3A]">
              {DEDICATION.signoff}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
