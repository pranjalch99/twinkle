import React, { useState } from 'react';
import { StoryChapterData } from '../data/story';
import { Quote, Sparkles, Heart, Compass, Music2 } from 'lucide-react';
import { synthEngine } from '../utils/audioSynth';

interface StoryChapterProps {
  chapter: StoryChapterData;
  isEven: boolean;
}

export const StoryChapter: React.FC<StoryChapterProps> = ({ chapter, isEven }) => {
  const [showSecretNote, setShowSecretNote] = useState(false);
  const [hasHearted, setHasHearted] = useState(false);
  const [heartCount, setHeartCount] = useState(1);

  const handleHeart = () => {
    if (!hasHearted) {
      setHasHearted(true);
      setHeartCount((c) => c + 1);
    } else {
      setHasHearted(false);
      setHeartCount((c) => c - 1);
    }
  };

  const handlePlaySoundtrack = () => {
    if (!synthEngine.getIsPlaying()) {
      synthEngine.start();
    }
  };

  return (
    <article
      id={chapter.id}
      className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#A7A0A0]/10 transition-colors ${
        chapter.theme === 'deep-noir'
          ? 'bg-[#0A0A0E]'
          : chapter.theme === 'paper'
          ? 'bg-[#18171B]'
          : 'bg-[#101014]'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start ${
            isEven ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Narrative Column */}
          <div
            className={`space-y-6 ${
              isEven
                ? 'lg:col-span-7 lg:order-2'
                : 'lg:col-span-7 lg:order-1'
            }`}
          >
            {/* Clean Unboxed Metadata Line (Zero-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#D5BD9B] font-medium">
              <span>{chapter.chapterNumber}</span>
              <span aria-hidden="true">/</span>
              <span>{chapter.chapterLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#A7A0A0]">{chapter.date}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#A7A0A0]">{chapter.location}</span>
            </div>

            {/* Chapter Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#F4EEE5] tracking-tight leading-tight text-balance">
              {chapter.title}
            </h2>

            {/* Body Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#F4EEE5]/90 font-sans font-light leading-relaxed max-w-prose">
              {chapter.paragraphs.map((para, idx) => (
                <p key={idx} className="text-pretty">
                  {para}
                </p>
              ))}
            </div>

            {/* Pull Quote */}
            {chapter.pullQuote && (
              <blockquote className="my-8 py-4 px-6 rounded-lg bg-[#18171B] border border-[#A7A0A0]/15 text-[#D5BD9B]">
                <Quote className="w-5 h-5 mb-2 text-[#B88C91] opacity-75" />
                <p className="text-lg sm:text-xl font-serif italic text-[#F4EEE5] leading-relaxed">
                  &ldquo;{chapter.pullQuote}&rdquo;
                </p>
              </blockquote>
            )}

            {/* Interactive Chapter Reaction */}
            <div className="pt-4 flex items-center gap-4 border-t border-[#A7A0A0]/10">
              <button
                onClick={handleHeart}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  hasHearted
                    ? 'bg-[#E11D48]/20 border border-[#E11D48] text-[#FCA5A5]'
                    : 'bg-[#18171B] border border-[#A7A0A0]/20 text-[#A7A0A0] hover:text-white hover:border-[#D5BD9B]/40'
                }`}
              >
                <Heart
                  className={`w-3.5 h-3.5 ${
                    hasHearted ? 'fill-[#E11D48] text-[#E11D48] animate-bounce' : ''
                  }`}
                />
                <span>{hasHearted ? 'Memory Cherished' : 'Cherish this memory'}</span>
                <span className="opacity-70 font-sans">({heartCount})</span>
              </button>

              <button
                onClick={handlePlaySoundtrack}
                className="inline-flex items-center gap-1.5 text-xs text-[#A7A0A0] hover:text-[#D5BD9B] font-mono transition-colors"
                title="Play atmospheric melodic techno background"
              >
                <Music2 className="w-3.5 h-3.5 text-[#B88C91]" />
                <span>Atmospheric Sound</span>
              </button>
            </div>
          </div>

          {/* Interactive Companion Column (No images, 100% interactive cards) */}
          <div
            className={`space-y-6 ${
              isEven
                ? 'lg:col-span-5 lg:order-1'
                : 'lg:col-span-5 lg:order-2'
            }`}
          >
            {/* Key Metric Card */}
            {chapter.metric && (
              <div className="p-6 rounded-2xl bg-[#141317] border border-[#A7A0A0]/15 shadow-xl space-y-2 text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B88C91]">
                  Memory Metric
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-normal text-[#F4EEE5] tracking-tight">
                  {chapter.metric.value}
                </div>
                <div className="text-sm font-medium text-[#D5BD9B]">
                  {chapter.metric.label}
                </div>
                <p className="text-xs text-[#A7A0A0] leading-relaxed">
                  {chapter.metric.sublabel}
                </p>
              </div>
            )}

            {/* Interactive Private Footnote (Secret thoughts from Pranjal) */}
            {chapter.privateFootnote && (
              <div
                className={`p-6 rounded-2xl border transition-all duration-300 text-left cursor-pointer ${
                  showSecretNote
                    ? 'bg-[#18171B] border-[#D5BD9B]/60 shadow-[0_8px_30px_rgba(213,189,155,0.12)] ring-1 ring-[#D5BD9B]/30'
                    : 'bg-[#141317]/80 border-[#A7A0A0]/20 hover:border-[#D5BD9B]/40 hover:bg-[#18171B]'
                }`}
                onClick={() => setShowSecretNote(!showSecretNote)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#D5BD9B]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-[#D5BD9B]">
                      {chapter.privateFootnote.label}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#A7A0A0]">
                    {showSecretNote ? 'Hide' : 'Tap to reveal'}
                  </span>
                </div>

                {showSecretNote ? (
                  <div className="space-y-3 pt-2 border-t border-[#A7A0A0]/15 animate-fade-in">
                    <p className="text-sm font-sans text-[#F4EEE5]/90 leading-relaxed">
                      {chapter.privateFootnote.note}
                    </p>
                    <blockquote className="p-3 rounded-lg bg-[#101014] border border-[#A7A0A0]/15 text-xs font-serif italic text-[#D5BD9B]">
                      {chapter.privateFootnote.quote}
                    </blockquote>
                  </div>
                ) : (
                  <p className="text-xs text-[#A7A0A0] font-sans italic">
                    Tap to read what Pranjal was secretly thinking at this exact moment in Goa...
                  </p>
                )}
              </div>
            )}

            {/* Vibe Tag Pill */}
            {chapter.vibeTag && (
              <div className="p-4 rounded-xl bg-[#101014] border border-[#A7A0A0]/15 flex items-center justify-between text-left">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#B88C91]" />
                  <span className="text-xs font-mono text-[#F4EEE5]/90">
                    {chapter.vibeTag}
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D5BD9B]">
                  Goa 2026
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
