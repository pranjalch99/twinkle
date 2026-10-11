import React from 'react';
import { WaveformMotif } from './WaveformMotif';
import { PhotoItem } from '../data/photos';
import { ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  featuredPhoto?: PhotoItem;
  onSelectPhoto: (photo: PhotoItem) => void;
  customSrcMap: Record<string, string>;
}

export const Hero: React.FC<HeroProps> = ({ featuredPhoto, onSelectPhoto, customSrcMap }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#682D3A]/20 via-[#B88C91]/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Top Kicker Label */}
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D5BD9B] font-medium mb-6">
        <Sparkles className="w-3.5 h-3.5 text-[#B88C91]" />
        <span>A Little Goa Story · October 2026</span>
      </div>

      {/* Main Heading with deliberate line breaks */}
      <h1 className="max-w-4xl mx-auto text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-[#F4EEE5] tracking-tight leading-[1.08] text-balance">
        Somewhere Between <br />
        <span className="italic font-light text-[#D5BD9B]">the Bass</span> <br />
        &amp; You
      </h1>

      {/* Subtitle */}
      <p className="mt-8 max-w-xl mx-auto text-base sm:text-lg md:text-xl font-serif italic text-[#A7A0A0] leading-relaxed text-balance">
        &ldquo;One random swipe. One unexpected night. One girl I wasn’t ready to leave behind.&rdquo;
      </p>

      {/* Supporting details line */}
      <p className="mt-4 text-xs tracking-widest uppercase text-[#A7A0A0]/80">
        A gift of gratitude &amp; love for Twinkle · Created by Pranjal
      </p>

      {/* Waveform Sound Motif */}
      <div className="mt-8">
        <WaveformMotif label="Goa Soundscapes · Dynamo &amp; Hilltop" />
      </div>

      {/* Teaser Photograph Frame */}
      {featuredPhoto && (
        <div className="mt-12 max-w-xs sm:max-w-sm mx-auto w-full">
          <div
            onClick={() => onSelectPhoto(featuredPhoto)}
            className="group cursor-pointer p-2 rounded-lg bg-[#18171B]/90 border border-[#A7A0A0]/20 shadow-2xl hover:border-[#D5BD9B]/50 transition-all duration-300"
          >
            <div className="relative aspect-[4/5] rounded overflow-hidden bg-[#101014]">
              <img
                src={(() => {
                  const raw = customSrcMap[featuredPhoto.id] || featuredPhoto.filename;
                  if (raw.startsWith('data:') || raw.startsWith('http://') || raw.startsWith('https://')) return raw;
                  const clean = raw.startsWith('/') ? raw.slice(1) : raw;
                  const base = import.meta.env.BASE_URL || './';
                  return base.endsWith('/') ? `${base}${clean}` : `${base}/${clean}`;
                })()}
                alt={featuredPhoto.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 inset-x-3 text-left">
                <p className="text-[11px] font-mono uppercase text-[#D5BD9B]">Featured Memory</p>
                <p className="text-xs font-serif text-[#F4EEE5] line-clamp-1">{featuredPhoto.title}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll prompt */}
      <div className="mt-14 flex flex-col items-center gap-2">
        <a
          href="#dedication"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#D5BD9B] hover:text-white transition-colors group"
        >
          <span>Our story begins here</span>
          <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  );
};
