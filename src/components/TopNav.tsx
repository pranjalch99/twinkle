import React from 'react';
import { Camera } from 'lucide-react';

interface TopNavProps {
  progress: number;
  onOpenVault: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({ progress, onOpenVault }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#101014]/90 backdrop-blur-md border-b border-[#A7A0A0]/10 transition-all duration-300">
      {/* Hairline story scroll progress indicator */}
      <div
        className="h-[2px] bg-gradient-to-r from-[#682D3A] via-[#B88C91] to-[#D5BD9B] transition-all duration-150"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Wordmark */}
        <a
          href="#"
          className="text-sm md:text-base font-serif italic text-[#F4EEE5] hover:text-[#D5BD9B] transition-colors whitespace-nowrap shrink-0 tracking-wide"
        >
          Somewhere Between the Bass &amp; You
        </a>

        {/* Zone 2: 4–5 single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest text-[#A7A0A0]">
          <a
            href="#dedication"
            className="hover:text-[#F4EEE5] transition-colors whitespace-nowrap shrink-0"
          >
            Prologue
          </a>
          <a
            href="#the-nights"
            className="hover:text-[#F4EEE5] transition-colors whitespace-nowrap shrink-0"
          >
            The Nights
          </a>
          <a
            href="#the-beach"
            className="hover:text-[#F4EEE5] transition-colors whitespace-nowrap shrink-0"
          >
            The Beach
          </a>
          <a
            href="#birthday-letter"
            className="hover:text-[#F4EEE5] transition-colors whitespace-nowrap shrink-0"
          >
            Letter
          </a>
          <a
            href="#countdown"
            className="hover:text-[#F4EEE5] transition-colors whitespace-nowrap shrink-0"
          >
            Nov 22
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenVault}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-[#F4EEE5] bg-[#18171B] hover:bg-[#682D3A] border border-[#A7A0A0]/20 rounded-md transition-colors whitespace-nowrap shrink-0"
            title="Inspect 10 memories and photo settings"
          >
            <Camera className="w-3.5 h-3.5 text-[#D5BD9B]" />
            <span>Memory Vault</span>
          </button>
        </div>
      </div>
    </header>
  );
};
