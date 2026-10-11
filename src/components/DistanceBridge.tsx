import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export const DistanceBridge: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#101014] border-t border-[#A7A0A0]/10 text-center">
      <div className="max-w-4xl mx-auto space-y-10">
        <span className="text-xs uppercase tracking-[0.25em] font-sans font-medium text-[#D5BD9B]">
          Two Cities · One Shared Memory
        </span>

        {/* Minimal Editorial Bridge */}
        <div className="relative py-8 px-6 sm:px-12 rounded-2xl bg-[#18171B] border border-[#A7A0A0]/15 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Bhopal: Pranjal */}
            <div className="text-center md:text-left space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#B88C91] uppercase tracking-wider font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Bhopal, MP</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#F4EEE5]">Pranjal</h3>
              <p className="text-xs text-[#A7A0A0]">Software Engineer · Home</p>
            </div>

            {/* Connecting Vector */}
            <div className="flex flex-col items-center justify-center space-y-2">
              <span className="text-[11px] font-mono tracking-widest text-[#D5BD9B] uppercase">
                ~ 780 km · West by South
              </span>
              <div className="relative w-full flex items-center justify-center">
                <div className="h-[1px] w-full bg-gradient-to-r from-[#682D3A] via-[#D5BD9B] to-[#682D3A]" />
                <div className="absolute p-1.5 rounded-full bg-[#101014] border border-[#D5BD9B]">
                  <Navigation className="w-3.5 h-3.5 text-[#D5BD9B] rotate-45" />
                </div>
              </div>
              <span className="text-xs font-serif italic text-[#A7A0A0]">
                Until November 22, 2026
              </span>
            </div>

            {/* Mumbai: Twinkle */}
            <div className="text-center md:text-right space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#D5BD9B] uppercase tracking-wider font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Mulund West, Mumbai</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#F4EEE5]">Twinkle</h3>
              <p className="text-xs text-[#A7A0A0]">Software Engineer · 27th Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
