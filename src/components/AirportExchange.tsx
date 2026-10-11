import React from 'react';
import { StoryChapterData } from '../data/story';
import { PhotoItem } from '../data/photos';
import { PhotoCard } from './PhotoCard';
import { Plane, MessageSquare, Headphones } from 'lucide-react';

interface AirportExchangeProps {
  chapter: StoryChapterData;
  photos: PhotoItem[];
  onSelectPhoto: (photo: PhotoItem) => void;
  customSrcMap: Record<string, string>;
}

export const AirportExchange: React.FC<AirportExchangeProps> = ({
  chapter,
  photos,
  onSelectPhoto,
  customSrcMap,
}) => {
  const airportPhoto = photos.find((p) => p.id === 'photo-06');

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#09090C] border-t border-[#A7A0A0]/10 text-center">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D5BD9B] font-medium">
          <Plane className="w-3.5 h-3.5 text-[#B88C91]" />
          <span>08 / {chapter.chapterLabel} · October 6, 2026 · 5:08 AM</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#F4EEE5] tracking-tight max-w-3xl mx-auto">
          {chapter.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-[#F4EEE5]/90 font-sans font-light leading-relaxed">
              {chapter.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* CamelPhat Audio note */}
            <div className="p-4 rounded-lg bg-[#141317] border border-[#A7A0A0]/15 flex items-center gap-3">
              <Headphones className="w-5 h-5 text-[#D5BD9B] shrink-0" />
              <div className="text-xs">
                <span className="font-medium text-[#F4EEE5] block">Soundtrack on the way to the airport</span>
                <span className="text-[#A7A0A0]">CamelPhat · Melodic &amp; Emotional Techno</span>
              </div>
            </div>

            {/* Pull Quote */}
            <div className="py-3 px-4 rounded bg-[#101014] border-l-0 border border-[#A7A0A0]/15">
              <p className="text-base font-serif italic text-[#D5BD9B]">
                &ldquo;One last message from Goa. One more reason to look forward to what comes next.&rdquo;
              </p>
            </div>
          </div>

          {/* Screenshot / Photo Showcase */}
          <div className="lg:col-span-5">
            {airportPhoto && (
              <div className="space-y-4">
                <div className="p-2 sm:p-3 rounded-2xl bg-[#141317]/90 border border-[#D5BD9B]/30 shadow-2xl ring-1 ring-[#D5BD9B]/20 backdrop-blur-sm transition-all duration-300 hover:border-[#D5BD9B]/60 hover:shadow-[0_0_30px_rgba(213,189,155,0.15)]">
                  <PhotoCard
                    photo={airportPhoto}
                    onSelect={onSelectPhoto}
                    customSrc={customSrcMap[airportPhoto.id]}
                    className="shadow-inner border-0"
                  />
                </div>

                {/* WhatsApp callout badge */}
                <div className="p-4 rounded-xl bg-[#064E3B]/40 border border-[#10B981]/40 text-left shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#86EFAC] mb-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Text · 5:08 AM</span>
                  </div>
                  <p className="text-xs text-[#E2E8F0] italic font-serif">
                    “thankyou for everything twinkle, had some of the most beautiful times with you. if it’s meant to be, we will cross paths again &lt;33”
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
