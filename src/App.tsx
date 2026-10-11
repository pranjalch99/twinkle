/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PHOTOS, PhotoItem } from './data/photos';
import { STORY_CHAPTERS } from './data/story';
import { useScrollProgress } from './hooks/useScrollProgress';

import { TopNav } from './components/TopNav';
import { Hero } from './components/Hero';
import { Dedication } from './components/Dedication';
import { StoryChapter } from './components/StoryChapter';
import { TheBeachInterlude } from './components/TheBeachInterlude';
import { AirportExchange } from './components/AirportExchange';
import { DistanceBridge } from './components/DistanceBridge';
import { Countdown } from './components/Countdown';
import { BirthdayLetter } from './components/BirthdayLetter';
import { FinalFrame } from './components/FinalFrame';
import { Lightbox } from './components/Lightbox';
import { PhotoVaultModal } from './components/PhotoVaultModal';

const LOCAL_STORAGE_KEY = 'twinkle_photos_override_map';

export default function App() {
  const { progress } = useScrollProgress();
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const [customSrcMap, setCustomSrcMap] = useState<Record<string, string>>({});

  // Load custom photos from localStorage if previously uploaded
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        setCustomSrcMap(JSON.parse(saved));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleUpdatePhotoSrc = (photoId: string, dataUrl: string) => {
    const nextMap = { ...customSrcMap, [photoId]: dataUrl };
    setCustomSrcMap(nextMap);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(nextMap));
    } catch {
      // LocalStorage quota might be exceeded for large images
    }
  };

  const handleResetAllPhotos = () => {
    setCustomSrcMap({});
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find featured photo for Hero (e.g. Photo 1 or Photo 7)
  const featuredPhoto = PHOTOS.find((p) => p.id === 'photo-01');

  // Chapters
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
      {/* 3-Zone Sticky Navigation with Progress Hairline */}
      <TopNav
        progress={progress}
        onOpenVault={() => setIsVaultOpen(true)}
      />

      {/* Hero Entrance Section */}
      <Hero
        featuredPhoto={featuredPhoto}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
        customSrcMap={customSrcMap}
      />

      {/* Dedication Letter (Warm Paper) */}
      <Dedication />

      {/* Main Chronological Story Journey */}
      <main id="the-nights" className="relative">
        {/* Chapter 01: The Unlikely Beginning */}
        <StoryChapter
          chapter={chapter01}
          photos={PHOTOS}
          onSelectPhoto={(p) => setSelectedPhoto(p)}
          customSrcMap={customSrcMap}
          isEven={false}
        />

        {/* Chapter 02: Dynamo */}
        <StoryChapter
          chapter={chapter02}
          photos={PHOTOS}
          onSelectPhoto={(p) => setSelectedPhoto(p)}
          customSrcMap={customSrcMap}
          isEven={true}
        />

        {/* Chapter 03: Salud Wait */}
        <StoryChapter
          chapter={chapter03}
          photos={PHOTOS}
          onSelectPhoto={(p) => setSelectedPhoto(p)}
          customSrcMap={customSrcMap}
          isEven={false}
        />

        {/* Chapter 04: The Proper Date, Nihala, Patrick, Hilltop */}
        <StoryChapter
          chapter={chapter04}
          photos={PHOTOS}
          onSelectPhoto={(p) => setSelectedPhoto(p)}
          customSrcMap={customSrcMap}
          isEven={true}
        />

        {/* Chapter 05 & 06: The Beach Interlude & Café Cortinga Morning */}
        <TheBeachInterlude
          beachChapter={chapter05}
          morningChapter={chapter06}
          photos={PHOTOS}
          onSelectPhoto={(p) => setSelectedPhoto(p)}
          customSrcMap={customSrcMap}
        />

        {/* Chapter 07: Titlee Birthday Party (Twinkle turns 27) */}
        <StoryChapter
          chapter={chapter07}
          photos={PHOTOS}
          onSelectPhoto={(p) => setSelectedPhoto(p)}
          customSrcMap={customSrcMap}
          isEven={false}
        />

        {/* Chapter 08: Goa Airport 5:08 AM & CamelPhat Melodic Techno */}
        <AirportExchange
          chapter={chapter08}
          photos={PHOTOS}
          onSelectPhoto={(p) => setSelectedPhoto(p)}
          customSrcMap={customSrcMap}
        />

        {/* Distance Bridge: Bhopal to Mumbai */}
        <DistanceBridge />

        {/* Live Countdown: November 22, 2026 IST */}
        <Countdown />

        {/* Chapter 09: Birthday Letter to Mumbai */}
        <BirthdayLetter chapter={chapter09} />
      </main>

      {/* Final Quiet Frame */}
      <FinalFrame onReplay={handleReplay} />

      {/* Fullscreen Accessible Lightbox */}
      <Lightbox
        currentPhoto={selectedPhoto}
        photos={PHOTOS}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={(p) => setSelectedPhoto(p)}
        customSrcMap={customSrcMap}
      />

      {/* Memory Vault Modal */}
      <PhotoVaultModal
        isOpen={isVaultOpen}
        onClose={() => setIsVaultOpen(false)}
        photos={PHOTOS}
        customSrcMap={customSrcMap}
        onUpdatePhotoSrc={handleUpdatePhotoSrc}
        onResetAllPhotos={handleResetAllPhotos}
      />
    </div>
  );
}
