import React from 'react';
import { StoryChapterData } from '../data/story';
import { Mail, Sparkles } from 'lucide-react';

interface BirthdayLetterProps {
  chapter: StoryChapterData;
}

export const BirthdayLetter: React.FC<BirthdayLetterProps> = ({ chapter }) => {
  return (
    <section id="birthday-letter" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#101014] border-t border-[#A7A0A0]/10">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Section marker */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D5BD9B] font-medium">
            <Mail className="w-3.5 h-3.5 text-[#B88C91]" />
            <span>09 / {chapter.chapterLabel}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4EEE5]">
            {chapter.title}
          </h2>
        </div>

        {/* The Letter on Paper Stationery */}
        <div className="p-8 sm:p-12 md:p-16 rounded-2xl bg-[#EDE3D5] text-[#1A1817] shadow-2xl border border-[#D5BD9B]/40 space-y-6">
          <div className="flex items-center justify-between border-b border-[#1A1817]/15 pb-4 mb-6">
            <span className="text-xs uppercase tracking-widest text-[#682D3A] font-semibold">
              Bhopal to Mumbai · October 2026
            </span>
            <div className="flex items-center gap-1 text-[#682D3A]">
              <Sparkles className="w-3 h-3" />
              <span className="text-xs font-serif italic">For Twinkle's 27th</span>
            </div>
          </div>

          <div className="space-y-5 text-base sm:text-lg font-serif leading-relaxed text-[#2C2825]">
            {chapter.paragraphs.map((p, idx) => (
              <p key={idx} className="text-pretty">
                {p}
              </p>
            ))}
          </div>

          {/* Letter closing */}
          <div className="pt-8 border-t border-[#1A1817]/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-xs font-sans text-[#78716C] italic">
              Until November 22, in Mumbai.
            </div>
            <div className="text-right">
              <span className="block text-2xl font-serif italic text-[#682D3A]">
                — Pranjal
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
