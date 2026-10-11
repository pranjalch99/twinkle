import React from 'react';
import { StoryChapterData } from '../data/story';
import { PhotoItem } from '../data/photos';
import { PhotoCard } from './PhotoCard';
import { Waves, Coffee, Compass } from 'lucide-react';

interface TheBeachInterludeProps {
  beachChapter: StoryChapterData;
  morningChapter: StoryChapterData;
  photos: PhotoItem[];
  onSelectPhoto: (photo: PhotoItem) => void;
  customSrcMap: Record<string, string>;
}

export const TheBeachInterlude: React.FC<TheBeachInterludeProps> = ({
  beachChapter,
  morningChapter,
  photos,
  onSelectPhoto,
  customSrcMap,
}) => {
  const beachPhoto = photos.find((p) => p.id === 'photo-10');

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
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
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

            {/* Photo Column */}
            <div className="lg:col-span-5">
              {beachPhoto && (
                <div className="p-2 rounded-xl bg-white shadow-xl border border-[#1A1817]/10">
                  <PhotoCard
                    photo={beachPhoto}
                    onSelect={onSelectPhoto}
                    customSrc={customSrcMap[beachPhoto.id]}
                  />
                  <div className="p-3 text-center">
                    <span className="text-[11px] font-sans text-[#78716C] uppercase tracking-wider">
                      Café Cortinga &amp; Beach Morning · October 2026
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Morning After & Café Cortinga Transition (Chapter 06) */}
        <div className="p-8 sm:p-12 rounded-xl bg-[#141317] border border-[#A7A0A0]/20 max-w-3xl mx-auto space-y-6 text-left">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D5BD9B] font-medium">
            <Coffee className="w-3.5 h-3.5 text-[#B88C91]" />
            <span>06 / {morningChapter.chapterLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#A7A0A0]">{morningChapter.location}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif text-[#F4EEE5]">
            {morningChapter.title}
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-[#F4EEE5]/80 font-sans leading-relaxed">
            {morningChapter.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
