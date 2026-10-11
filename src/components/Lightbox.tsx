import React, { useEffect } from 'react';
import { PhotoItem } from '../data/photos';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';

interface LightboxProps {
  currentPhoto: PhotoItem | null;
  photos: PhotoItem[];
  onClose: () => void;
  onSelectPhoto: (photo: PhotoItem) => void;
  customSrcMap: Record<string, string>;
}

export const Lightbox: React.FC<LightboxProps> = ({
  currentPhoto,
  photos,
  onClose,
  onSelectPhoto,
  customSrcMap,
}) => {
  useEffect(() => {
    if (!currentPhoto) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        navigate(-1);
      } else if (e.key === 'ArrowRight') {
        navigate(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  if (!currentPhoto) return null;

  const currentIndex = photos.findIndex((p) => p.id === currentPhoto.id);

  const navigate = (direction: number) => {
    const newIndex = (currentIndex + direction + photos.length) % photos.length;
    onSelectPhoto(photos[newIndex]);
  };

  const rawSrc = customSrcMap[currentPhoto.id] || currentPhoto.filename;
  const imageSrc = (() => {
    if (rawSrc.startsWith('data:') || rawSrc.startsWith('http://') || rawSrc.startsWith('https://')) return rawSrc;
    const clean = rawSrc.startsWith('/') ? rawSrc.slice(1) : rawSrc;
    const base = import.meta.env.BASE_URL || './';
    return base.endsWith('/') ? `${base}${clean}` : `${base}/${clean}`;
  })();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentPhoto.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close photo preview"
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-[#18171B]/80 text-[#F4EEE5] hover:bg-[#682D3A] border border-[#A7A0A0]/20 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev / Next controls */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate(-1);
        }}
        aria-label="Previous photograph"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#18171B]/80 text-[#F4EEE5] hover:bg-[#682D3A] border border-[#A7A0A0]/20 transition-colors hidden sm:flex items-center justify-center"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate(1);
        }}
        aria-label="Next photograph"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#18171B]/80 text-[#F4EEE5] hover:bg-[#682D3A] border border-[#A7A0A0]/20 transition-colors hidden sm:flex items-center justify-center"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col rounded-xl overflow-hidden bg-[#141317] border border-[#A7A0A0]/20 shadow-2xl"
      >
        {/* Image frame */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[50vh] max-h-[65vh]">
          <img
            src={imageSrc}
            alt={currentPhoto.alt}
            className="w-full h-full object-contain max-h-[65vh]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption & Metadata Footer */}
        <div className="p-6 bg-[#18171B] border-t border-[#A7A0A0]/15 space-y-2 text-left">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-mono text-[#D5BD9B] uppercase tracking-wider">
              Photo {currentIndex + 1} of {photos.length} · {currentPhoto.originalName}
            </span>
            <div className="flex items-center gap-3 text-[#A7A0A0]">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#B88C91]" />
                {currentPhoto.location}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#D5BD9B]" />
                {currentPhoto.timestamp}
              </span>
            </div>
          </div>

          <h3 className="text-xl font-serif text-[#F4EEE5]">
            {currentPhoto.title}
          </h3>

          <p className="text-sm font-serif italic text-[#D5BD9B] leading-relaxed">
            &ldquo;{currentPhoto.caption}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
};
