/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { STORY_CHAPTERS } from './data/story';
import { useScrollProgress } from './hooks/useScrollProgress';

import { TopNav } from './components/TopNav';
import { Hero } from './components/Hero';
import { Dedication } from './components/Dedication';
import { StoryChapter } from './components/StoryChapter';
import { TheBeachInterlude } from './components/TheBeachInterlude';
import { AirportExchange } from './components/AirportExchange';
import { InteractiveGoaMap } from './components/InteractiveGoaMap';
import { MemoryTokens } from './components/MemoryTokens';
import { GoaQuiz } from './components/GoaQuiz';
import { DistanceBridge } from './components/DistanceBridge';
import { Countdown } from './components/Countdown';
import { BirthdayLetter } from './components/BirthdayLetter';
import { FinalFrame } from './components/FinalFrame';

export default function App() {
  const { progress } = useScrollProgress();

  const handleStartStory = () => {
    const el = document.getElementById('the-nights');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreMap = () => {
    const el = document.getElementById('goa-map');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Chronological chapters
  const chapter01 = STORY_CHAPTERS.find((c) => c.id === 'chapter-01')!;
  const chapter02 = STORY_CHAPTERS.find((c) => c.id === 'chapter-02')!;
  const chapter03 = STORY_CHAPTERS.find((c) => c.id === 'chapter-03')!;
  const chapter04 = STORY_CHAPTERS.find((c) => c.id === 'chapter-04')!;
  const chapter05 = STORY_CHAPTERS.find((c) => c.id === 'chapter-05')!;
  const chapter06 = STORY_CHAPTERS.find((c) => c.id === 'chapter-06')!;
  const chapter07 = STORY_CHAPTERS.find((c) => c.id === 'chapter-07')!;
  const chapter08 = STORY_CHAPTERS.find((c) => c.id === 'chapter-08')!;
  const chapter09 = STORY_CHAPTERS.find((c) => c.id === 'chapter-09')!;

  return (
    <div className="min-h-screen bg-[#101014] text-[#F4EEE5] font-sans selection:bg-[#682D3A] selection:text-white">
      {/* 3-Zone Sticky Navigation with Progress Hairline & Melodic Techno Audio Toggle */}
      <TopNav progress={progress} />

      {/* Hero Entrance Section (Interactive audio, milestones, jump actions) */}
      <Hero
        onStartStory={handleStartStory}
        onExploreMap={handleExploreMap}
      />

      {/* Dedication Letter (Warm Paper) */}
      <Dedication />

      {/* Main Chronological Story Journey */}
      <main id="the-nights" className="relative">
        {/* Chapter 01: The Unlikely Beginning */}
        <StoryChapter
          chapter={chapter01}
          isEven={false}
        />

        {/* Chapter 02: Dynamo */}
        <StoryChapter
          chapter={chapter02}
          isEven={true}
        />

        {/* Chapter 03: Salud Wait */}
        <StoryChapter
          chapter={chapter03}
          isEven={false}
        />

        {/* Chapter 04: The Proper Date, Nihala, Patrick, Hilltop */}
        <StoryChapter
          chapter={chapter04}
          isEven={true}
        />

        {/* Chapter 05 & 06: The Beach Interlude & Café Cortinga Morning */}
        <TheBeachInterlude
          beachChapter={chapter05}
          morningChapter={chapter06}
        />

        {/* Chapter 07: Titlee Birthday Party (Twinkle turns 27) */}
        <StoryChapter
          chapter={chapter07}
          isEven={false}
        />

        {/* Chapter 08: Goa Airport 5:08 AM & CamelPhat Melodic Techno */}
        <AirportExchange
          chapter={chapter08}
        />
      </main>

      {/* Interactive Goa Nightlife Map (North Goa GPS Journey & Radar) */}
      <InteractiveGoaMap />

      {/* Interactive Memory Tokens Vault (10 collectible flip-cards with secrets) */}
      <MemoryTokens />

      {/* Interactive Goa & Couple Trivia Quiz (5 questions + commentary) */}
      <GoaQuiz />

      {/* Distance Bridge & Interactive Mumbai Date Wishlist */}
      <div id="wishlist">
        <DistanceBridge />
      </div>

      {/* Live Countdown: November 22, 2026 IST */}
      <Countdown />

      {/* Chapter 09: Birthday Letter to Mumbai (Interactive Wax-Sealed Envelope) */}
      <BirthdayLetter chapter={chapter09} />

      {/* Final Quiet Frame & Replay Trigger */}
      <FinalFrame onReplay={handleReplay} />
    </div>
  );
}
