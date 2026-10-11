import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { Calendar, Sparkles } from 'lucide-react';

export const Countdown: React.FC = () => {
  const { days, hours, minutes, seconds, isComplete, targetFormatted } = useCountdown();

  return (
    <section id="countdown" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#141317] border-t border-[#A7A0A0]/10 text-center">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D5BD9B] font-medium">
          <Calendar className="w-3.5 h-3.5 text-[#B88C91]" />
          <span>The Next Chapter · India Standard Time</span>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F4EEE5] tracking-tight">
            Counting Down to November 22
          </h2>
          <p className="max-w-md mx-auto text-sm sm:text-base font-serif italic text-[#A7A0A0]">
            The next date marked on the calendar with a little extra meaning.
          </p>
        </div>

        {/* Countdown Display */}
        {isComplete ? (
          <div className="p-8 sm:p-12 rounded-2xl bg-[#682D3A]/30 border border-[#D5BD9B]/40 max-w-xl mx-auto">
            <Sparkles className="w-8 h-8 text-[#D5BD9B] mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl font-serif text-[#F4EEE5]">
              November 22 is here.
            </h3>
            <p className="mt-2 text-base text-[#D5BD9B] font-serif italic">
              The next chapter is yours to write in Mumbai.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {/* Days */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#18171B] border border-[#A7A0A0]/15 flex flex-col items-center shadow-lg">
              <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#F4EEE5] tabular-nums">
                {String(days).padStart(2, '0')}
              </span>
              <span className="mt-2 text-[11px] uppercase tracking-widest text-[#D5BD9B] font-sans">
                Days
              </span>
            </div>

            {/* Hours */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#18171B] border border-[#A7A0A0]/15 flex flex-col items-center shadow-lg">
              <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#F4EEE5] tabular-nums">
                {String(hours).padStart(2, '0')}
              </span>
              <span className="mt-2 text-[11px] uppercase tracking-widest text-[#D5BD9B] font-sans">
                Hours
              </span>
            </div>

            {/* Minutes */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#18171B] border border-[#A7A0A0]/15 flex flex-col items-center shadow-lg">
              <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#F4EEE5] tabular-nums">
                {String(minutes).padStart(2, '0')}
              </span>
              <span className="mt-2 text-[11px] uppercase tracking-widest text-[#D5BD9B] font-sans">
                Minutes
              </span>
            </div>

            {/* Seconds */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#18171B] border border-[#A7A0A0]/15 flex flex-col items-center shadow-lg">
              <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#B88C91] tabular-nums">
                {String(seconds).padStart(2, '0')}
              </span>
              <span className="mt-2 text-[11px] uppercase tracking-widest text-[#D5BD9B] font-sans">
                Seconds
              </span>
            </div>
          </div>
        )}

        <p className="text-xs text-[#A7A0A0]/70 font-sans">
          Target: {targetFormatted} (00:00 IST) · No pressure, just a warm date to anticipate.
        </p>
      </div>
    </section>
  );
};
