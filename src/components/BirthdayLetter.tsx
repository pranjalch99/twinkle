import React, { useState } from 'react';
import { StoryChapterData } from '../data/story';
import { Mail, Sparkles, Heart, Flame, Unlock } from 'lucide-react';

interface BirthdayLetterProps {
  chapter: StoryChapterData;
}

export const BirthdayLetter: React.FC<BirthdayLetterProps> = ({ chapter }) => {
  const [isUnsealed, setIsUnsealed] = useState(false);
  const [isCandlelight, setIsCandlelight] = useState(false);
  const [heartCount, setHeartCount] = useState(27); // Starts at 27 for her 27th birthday!
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number }[]>([]);

  const handleSendHeart = (e: React.MouseEvent) => {
    setHeartCount((c) => c + 1);
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const newId = Date.now();
    setFloatingHearts((prev) => [...prev.slice(-10), { id: newId, x: Math.random() * 60 - 30 }]);
    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newId));
    }, 1500);
  };

  return (
    <section
      id="birthday-letter"
      className={`py-28 px-4 sm:px-6 lg:px-8 border-t border-[#A7A0A0]/10 transition-colors duration-700 ${
        isCandlelight ? 'bg-[#0B0907]' : 'bg-[#101014]'
      }`}
    >
      <div className="max-w-3xl mx-auto space-y-12 text-center">
        {/* Section marker */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D5BD9B] font-medium">
            <Mail className="w-3.5 h-3.5 text-[#B88C91]" />
            <span>09 / {chapter.chapterLabel}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4EEE5]">
            {chapter.title}
          </h2>
          <p className="text-sm font-serif italic text-[#A7A0A0] max-w-md mx-auto">
            A quiet letter sealed in Bhopal, addressed to Mulund West for Twinkle’s 27th.
          </p>
        </div>

        {/* Envelope or Letter Display */}
        {!isUnsealed ? (
          <div className="p-8 sm:p-14 rounded-3xl bg-[#18171B] border border-[#D5BD9B]/40 shadow-2xl space-y-8 max-w-xl mx-auto">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-[#682D3A] to-[#A84B5E] border-2 border-[#D5BD9B] flex items-center justify-center shadow-lg shadow-[#682D3A]/40">
              <span className="text-2xl font-serif font-bold text-[#F4EEE5] italic">T·27</span>
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-[#D5BD9B] font-mono">
                Wax-Sealed Keepsake
              </p>
              <h3 className="text-2xl font-serif text-[#F4EEE5]">
                To Twinkle, in Mulund West
              </h3>
              <p className="text-xs text-[#A7A0A0] font-sans">
                Postmark: Bhopal ➔ Mumbai · October 2026
              </p>
            </div>

            <button
              onClick={() => setIsUnsealed(true)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#682D3A] to-[#8A3B4D] hover:from-[#7A3444] hover:to-[#9E4458] shadow-lg shadow-[#682D3A]/40 transition-all hover:scale-105"
            >
              <Unlock className="w-4 h-4 text-[#D5BD9B]" />
              <span>Break Wax Seal &amp; Unfold Letter</span>
            </button>
          </div>
        ) : (
          <div
            className={`p-8 sm:p-12 md:p-16 rounded-2xl shadow-2xl transition-all duration-500 text-left relative ${
              isCandlelight
                ? 'bg-[#F2E8DC] text-[#1B1713] border-2 border-[#E0A96D] shadow-[0_0_50px_rgba(224,169,109,0.25)]'
                : 'bg-[#EDE3D5] text-[#1A1817] border border-[#D5BD9B]/40'
            }`}
          >
            {/* Ambient controls */}
            <div className="flex items-center justify-between border-b border-[#1A1817]/15 pb-4 mb-6">
              <span className="text-xs uppercase tracking-widest text-[#682D3A] font-semibold">
                Bhopal to Mumbai · October 2026
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsCandlelight(!isCandlelight)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono transition-all ${
                    isCandlelight
                      ? 'bg-[#E0A96D]/30 text-[#854D0E] font-bold'
                      : 'bg-black/5 text-[#57534E] hover:text-[#1A1817]'
                  }`}
                  title="Toggle warm candlelight glow"
                >
                  <Flame className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>{isCandlelight ? 'Candlelight Active' : 'Candlelight Mode'}</span>
                </button>
                <div className="flex items-center gap-1 text-[#682D3A]">
                  <Sparkles className="w-3 h-3" />
                  <span className="text-xs font-serif italic">For Twinkle's 27th</span>
                </div>
              </div>
            </div>

            {/* Letter Content */}
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

            {/* Interactive Love Tap Reaction for Twinkle */}
            <div className="mt-8 pt-6 border-t border-[#1A1817]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-sans text-[#78716C]">
                Send birthday love back across the 780 km:
              </span>

              <div className="relative">
                <button
                  onClick={handleSendHeart}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#682D3A] hover:bg-[#7D3847] text-white text-xs font-mono uppercase tracking-wider shadow-md transition-transform active:scale-95"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Send Love ({heartCount})</span>
                </button>

                {/* Floating hearts */}
                {floatingHearts.map((h) => (
                  <span
                    key={h.id}
                    className="absolute -top-6 text-sm text-[#E11D48] pointer-events-none animate-ping"
                    style={{ left: `calc(50% + ${h.x}px)` }}
                  >
                    ❤️
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
