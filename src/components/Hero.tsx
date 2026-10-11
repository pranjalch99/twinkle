import React from 'react';
import { WaveformMotif } from './WaveformMotif';
import { ChevronDown, Sparkles, MapPin, Music2, HeartHandshake, Compass } from 'lucide-react';

interface HeroProps {
  onStartStory: () => void;
  onExploreMap: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartStory, onExploreMap }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#682D3A]/25 via-[#B88C91]/10 to-transparent blur-3xl pointer-events-none -z-10" />

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

      {/* Live Interactive Melodic Techno Soundscape */}
      <div className="mt-8">
        <WaveformMotif label="Goa Soundscapes · CamelPhat Ambience" />
      </div>

      {/* Interactive Milestone Cards Bar */}
      <div className="mt-12 max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full text-left">
        <div className="p-3.5 sm:p-4 rounded-xl bg-[#18171B]/90 border border-[#A7A0A0]/15 shadow-xl hover:border-[#D5BD9B]/40 transition-colors">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#D5BD9B] tracking-wider mb-1">
            <MapPin className="w-3 h-3 text-[#B88C91]" />
            <span>Oct 2–6</span>
          </div>
          <p className="text-sm font-serif font-medium text-[#F4EEE5]">Goa Coastline</p>
          <p className="text-[11px] text-[#A7A0A0]">Dynamo to Titlee</p>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-[#18171B]/90 border border-[#A7A0A0]/15 shadow-xl hover:border-[#D5BD9B]/40 transition-colors">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#D5BD9B] tracking-wider mb-1">
            <Sparkles className="w-3 h-3 text-[#B88C91]" />
            <span>Oct 6</span>
          </div>
          <p className="text-sm font-serif font-medium text-[#F4EEE5]">27th Birthday</p>
          <p className="text-[11px] text-[#A7A0A0]">Birthday Girl Sash</p>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-[#18171B]/90 border border-[#A7A0A0]/15 shadow-xl hover:border-[#D5BD9B]/40 transition-colors">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#D5BD9B] tracking-wider mb-1">
            <HeartHandshake className="w-3 h-3 text-[#B88C91]" />
            <span>Nov 22</span>
          </div>
          <p className="text-sm font-serif font-medium text-[#F4EEE5]">Next Chapter</p>
          <p className="text-[11px] text-[#A7A0A0]">Mulund West, Mumbai</p>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-[#18171B]/90 border border-[#A7A0A0]/15 shadow-xl hover:border-[#D5BD9B]/40 transition-colors">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#D5BD9B] tracking-wider mb-1">
            <Music2 className="w-3 h-3 text-[#B88C91]" />
            <span>Soundtrack</span>
          </div>
          <p className="text-sm font-serif font-medium text-[#F4EEE5]">124 BPM</p>
          <p className="text-[11px] text-[#A7A0A0]">Melodic Techno</p>
        </div>
      </div>

      {/* Interactive Action Shortcuts */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={onStartStory}
          className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#682D3A] to-[#8A3B4D] hover:from-[#7A3444] hover:to-[#9E4458] shadow-lg shadow-[#682D3A]/30 transition-all hover:scale-105"
        >
          Begin The Journey
        </button>

        <button
          onClick={onExploreMap}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider text-[#F4EEE5] bg-[#18171B] border border-[#A7A0A0]/25 hover:border-[#D5BD9B]/50 hover:bg-[#201F25] transition-all"
        >
          <Compass className="w-3.5 h-3.5 text-[#D5BD9B]" />
          <span>Explore Goa Map</span>
        </button>
      </div>

      {/* Scroll prompt */}
      <div className="mt-12 flex flex-col items-center gap-2">
        <a
          href="#dedication"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#D5BD9B] hover:text-white transition-colors group"
        >
          <span>Read dedication &amp; memories</span>
          <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  );
};
