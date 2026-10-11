import React from 'react';
import { StoryChapterData } from '../data/story';
import { PhotoItem } from '../data/photos';
import { PhotoCard } from './PhotoCard';
import { Quote } from 'lucide-react';

interface StoryChapterProps {
  chapter: StoryChapterData;
  photos: PhotoItem[];
  onSelectPhoto: (photo: PhotoItem) => void;
  customSrcMap: Record<string, string>;
  isEven: boolean;
}

export const StoryChapter: React.FC<StoryChapterProps> = ({
  chapter,
  photos,
  onSelectPhoto,
  customSrcMap,
  isEven,
}) => {
  const chapterPhotos = photos.filter((p) => chapter.photoIds.includes(p.id));

  return (
    <article
      id={chapter.id}
      className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#A7A0A0]/10 ${
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
              chapterPhotos.length > 0
                ? isEven
                  ? 'lg:col-span-7 lg:order-2'
                  : 'lg:col-span-7 lg:order-1'
                : 'lg:col-span-8 lg:col-start-3'
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

            {/* Pull Quote (if present, using subtle typography and clean quotes, NO thick colored left border) */}
            {chapter.pullQuote && (
              <blockquote className="my-8 py-4 px-6 rounded-lg bg-[#18171B] border border-[#A7A0A0]/15 text-[#D5BD9B]">
                <Quote className="w-5 h-5 mb-2 text-[#B88C91] opacity-75" />
                <p className="text-lg sm:text-xl font-serif italic text-[#F4EEE5] leading-relaxed">
                  &ldquo;{chapter.pullQuote}&rdquo;
                </p>
              </blockquote>
            )}
          </div>

          {/* Photographic Composition Column */}
          {chapterPhotos.length > 0 && (
            <div
              className={`space-y-6 ${
                isEven
                  ? 'lg:col-span-5 lg:order-1'
                  : 'lg:col-span-5 lg:order-2'
              }`}
            >
              {chapterPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className={`p-2 sm:p-2.5 rounded-2xl transition-all duration-300 ${
                    chapter.id === 'chapter-07'
                      ? 'bg-gradient-to-b from-[#682D3A]/25 via-[#18171B]/90 to-[#141317] border border-[#B88C91]/35 shadow-2xl ring-1 ring-[#D5BD9B]/25 hover:ring-[#D5BD9B]/50'
                      : ''
                  }`}
                >
                  <PhotoCard
                    photo={photo}
                    onSelect={onSelectPhoto}
                    customSrc={customSrcMap[photo.id]}
                    className="shadow-2xl"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
