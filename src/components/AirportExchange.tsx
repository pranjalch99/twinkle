import React, { useState } from 'react';
import { StoryChapterData } from '../data/story';
import { Plane, MessageSquare, Headphones, Heart, ArrowRight } from 'lucide-react';
import { synthEngine } from '../utils/audioSynth';

interface AirportExchangeProps {
  chapter: StoryChapterData;
}

export const AirportExchange: React.FC<AirportExchangeProps> = ({ chapter }) => {
  const [reactedHeart, setReactedHeart] = useState(false);
  const [isPlayingCamelPhat, setIsPlayingCamelPhat] = useState(false);

  const toggleCamelPhatAudio = () => {
    synthEngine.toggle();
    setIsPlayingCamelPhat(synthEngine.getIsPlaying());
  };

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
          {/* Narrative Column (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-[#F4EEE5]/90 font-sans font-light leading-relaxed">
              {chapter.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* CamelPhat Audio note & interactive trigger */}
            <div className="p-4 rounded-xl bg-[#141317] border border-[#A7A0A0]/15 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Headphones className="w-5 h-5 text-[#D5BD9B] shrink-0" />
                <div className="text-xs">
                  <span className="font-medium text-[#F4EEE5] block">Soundtrack to the Departure Gate</span>
                  <span className="text-[#A7A0A0]">CamelPhat · Melodic &amp; Emotional Techno</span>
                </div>
              </div>
              <button
                onClick={toggleCamelPhatAudio}
                className="px-3 py-1 rounded text-xs font-mono uppercase tracking-wider text-white bg-[#682D3A] hover:bg-[#7D3847] transition-colors"
              >
                {isPlayingCamelPhat ? 'Pause' : 'Play Beat'}
              </button>
            </div>

            {/* Pull Quote */}
            <div className="py-3 px-4 rounded bg-[#101014] border-l-0 border border-[#A7A0A0]/15">
              <p className="text-base font-serif italic text-[#D5BD9B]">
                &ldquo;One last message from Goa. One more reason to look forward to what comes next.&rdquo;
              </p>
            </div>
          </div>

          {/* Interactive Airport Dispatch & Terminal Board (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Flight Departure Screen Motif */}
            <div className="p-5 rounded-2xl bg-[#0F0F14] border border-[#A7A0A0]/20 shadow-2xl space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#D5BD9B] border-b border-white/10 pb-3">
                <span className="flex items-center gap-1.5 uppercase tracking-wider">
                  <Plane className="w-3.5 h-3.5 text-[#B88C91]" /> Goa (GOI) ➔ Bhopal (BHO)
                </span>
                <span className="text-[#86EFAC] font-bold animate-pulse">BOARDING</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono py-2 bg-[#141317] rounded-lg">
                <div>
                  <span className="text-[10px] text-[#A7A0A0] block">FLIGHT</span>
                  <span className="text-[#F4EEE5] font-semibold">6E 5218</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#A7A0A0] block">GATE</span>
                  <span className="text-[#D5BD9B] font-semibold">04B</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#A7A0A0] block">TIME</span>
                  <span className="text-[#F4EEE5] font-semibold">05:45 AM</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#A7A0A0]">
                <span>Destination: Bhopal</span>
                <span className="flex items-center gap-1 text-[#D5BD9B]">
                  Next: Mumbai <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* WhatsApp Dispatch Card */}
            <div className="p-5 rounded-2xl bg-[#064E3B]/25 border border-[#10B981]/40 text-left shadow-2xl relative">
              <div className="flex items-center justify-between text-xs font-semibold text-[#86EFAC] mb-2">
                <div className="flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp · 5:08 AM IST</span>
                </div>
                <span className="text-[10px] font-mono opacity-80">Sent from Departure Gate</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#022c22]/60 border border-[#10B981]/20 my-2">
                <p className="text-sm text-[#F0FDF4] italic font-serif leading-relaxed">
                  “thankyou for everything twinkle, had some of the most beautiful times with you. if it’s meant to be, we will cross paths again &lt;33”
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setReactedHeart(!reactedHeart)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#86EFAC] hover:text-white transition-colors"
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${
                      reactedHeart ? 'fill-[#E11D48] text-[#E11D48]' : ''
                    }`}
                  />
                  <span>{reactedHeart ? 'Heart Reacted ❤️' : 'Tap to react'}</span>
                </button>

                <span className="text-[11px] text-[#A7F3D0]/70 font-sans">
                  Twinkle: “have a safe flight!”
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
