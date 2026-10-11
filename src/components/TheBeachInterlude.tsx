import React, { useState } from 'react';
import { StoryChapterData } from '../data/story';
import { Waves, Coffee, Compass, Sparkles, Smile } from 'lucide-react';
import { synthEngine } from '../utils/audioSynth';

interface TheBeachInterludeProps {
  beachChapter: StoryChapterData;
  morningChapter: StoryChapterData;
}

export const TheBeachInterlude: React.FC<TheBeachInterludeProps> = ({
  beachChapter,
  morningChapter,
}) => {
  const [slipToggled, setSlipToggled] = useState(false);
  const [isPlayingWaves, setIsPlayingWaves] = useState(false);

  const toggleBeachAudio = () => {
    synthEngine.toggle();
    setIsPlayingWaves(synthEngine.getIsPlaying());
  };

  return (
    <section id="the-beach" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#18171B] border-y border-[#A7A0A0]/15">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Editorial Intro Banner */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D5BD9B] font-medium">
            <Waves className="w-3.5 h-3.5 text-[#B88C91]" />
            <span>Chapter 05 &amp; 06 · The Emotional Centerpiece</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-[#F4EEE5] tracking-tight">
            When the Music Finally Fell Quiet
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base font-serif italic text-[#A7A0A0]">
            Away from the speakers, the crowds, and the humidity. Just a quiet beach lane and two people discovering each other.
          </p>
        </div>

        {/* Paper Container for The Beach Story */}
        <div className="p-8 sm:p-12 md:p-16 rounded-2xl bg-[#EDE3D5] text-[#1A1817] shadow-2xl border border-[#D5BD9B]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text (Col 7) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#682D3A] font-semibold">
                <Compass className="w-3.5 h-3.5" />
                <span>05 / {beachChapter.chapterLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{beachChapter.date}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif text-[#1A1817] tracking-tight">
                {beachChapter.title}
              </h3>

              <div className="space-y-4 text-base sm:text-lg font-serif text-[#2C2825] leading-relaxed">
                {beachChapter.paragraphs.map((para, i) => (
                  <p key={i} className="text-pretty">
                    {para}
                  </p>
                ))}
              </div>

              {/* Special Pull Quote */}
              <div className="pt-4 border-t border-[#1A1817]/15">
                <p className="text-lg font-serif italic text-[#682D3A]">
                  &ldquo;Somewhere between the music and the sea, I stopped thinking about the night and started thinking about you.&rdquo;
                </p>
              </div>
            </div>

            {/* Interactive Sand Slip & Beach Physics Card (Col 5) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div
                onClick={() => setSlipToggled(!slipToggled)}
                className="p-6 rounded-2xl bg-[#DFD3C3] border border-[#1A1817]/15 shadow-md cursor-pointer hover:bg-[#D7CAB9] transition-all"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#682D3A] mb-3">
                  <span className="font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Smile className="w-4 h-4 text-[#682D3A]" /> The 2 AM Sand Slip
                  </span>
                  <span className="text-[11px] underline">
                    {slipToggled ? 'Close breakdown' : 'View physics'}
                  </span>
                </div>

                <h4 className="text-xl font-serif text-[#1A1817] mb-2">
                  Gym Deadlift vs. Wet Goa Sand
                </h4>

                <p className="text-xs font-sans text-[#4A4540] leading-relaxed mb-4">
                  Pranjal can comfortably deadlift thrice Twinkle’s bodyweight. However, when attempting the romantic cinematic hero lift at 2:00 AM on Anjuna beach...
                </p>

                {slipToggled ? (
                  <div className="space-y-2 pt-3 border-t border-[#1A1817]/15 text-xs font-mono text-[#1A1817]">
                    <div className="flex justify-between py-1 border-b border-[#1A1817]/10">
                      <span>Lifting Confidence:</span>
                      <span className="font-bold text-[#15803D]">100%</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#1A1817]/10">
                      <span>Anjuna Sand Friction:</span>
                      <span className="font-bold text-[#DC2626]">0.02 (Slip!)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#1A1817]/10">
                      <span>Resulting Laughter:</span>
                      <span className="font-bold text-[#682D3A]">Infinite</span>
                    </div>
                    <p className="pt-2 text-[11px] font-serif italic text-[#682D3A]">
                      “We laughed so hard we almost fell into the tide anyway haha.”
                    </p>
                  </div>
                ) : (
                  <span className="text-[11px] font-mono text-[#682D3A] flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Tap to inspect the sand slip breakdown
                  </span>
                )}
              </div>

              {/* Ocean Tide Soundscape Action */}
              <div className="p-4 rounded-xl bg-white/70 border border-[#1A1817]/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Waves className="w-4 h-4 text-[#682D3A]" />
                  <span className="text-xs font-sans font-medium text-[#1A1817]">
                    Beach Night Soundscape
                  </span>
                </div>
                <button
                  onClick={toggleBeachAudio}
                  className="px-3 py-1 rounded text-xs font-mono uppercase tracking-wider text-white bg-[#682D3A] hover:bg-[#7D3847] transition-colors"
                >
                  {isPlayingWaves ? 'Pause' : 'Play'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Morning After & Café Cortinga Transition (Chapter 06) */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#141317] border border-[#A7A0A0]/20 max-w-3xl mx-auto space-y-6 text-left shadow-2xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D5BD9B] font-medium">
            <Coffee className="w-3.5 h-3.5 text-[#B88C91]" />
            <span>06 / {morningChapter.chapterLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#A7A0A0]">{morningChapter.location}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif text-[#F4EEE5]">
            {morningChapter.title}
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-[#F4EEE5]/90 font-sans leading-relaxed">
            {morningChapter.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#101014] border border-[#A7A0A0]/15 flex items-center justify-between text-xs">
            <span className="text-[#D5BD9B] font-mono">
              The Titlee Guest List
            </span>
            <span className="text-[#A7A0A0]">
              Oct 5, 2026 · A gesture that meant the world
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
