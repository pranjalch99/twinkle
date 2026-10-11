import React, { useState } from 'react';
import { PhotoItem } from '../data/photos';
import { Maximize2, MapPin, Calendar } from 'lucide-react';

interface PhotoCardProps {
  photo: PhotoItem;
  onSelect: (photo: PhotoItem) => void;
  className?: string;
  customSrc?: string;
  priority?: boolean;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({
  photo,
  onSelect,
  className = '',
  customSrc,
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If user uploaded a custom override via vault, use it, else fallback to filename
  const rawSource = customSrc || photo.filename;
  const imageSource = (() => {
    if (rawSource.startsWith('data:') || rawSource.startsWith('http://') || rawSource.startsWith('https://')) {
      return rawSource;
    }
    const clean = rawSource.startsWith('/') ? rawSource.slice(1) : rawSource;
    const base = import.meta.env.BASE_URL || './';
    return base.endsWith('/') ? `${base}${clean}` : `${base}/${clean}`;
  })();

  return (
    <figure
      onClick={() => onSelect(photo)}
      className={`group relative cursor-pointer overflow-hidden rounded-lg bg-[#18171B] border border-[#A7A0A0]/15 transition-all duration-300 hover:border-[#D5BD9B]/40 hover:shadow-xl ${className}`}
    >
      <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden bg-[#101014]">
        {/* Loading shimmer */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-[#18171B] animate-pulse" />
        )}

        <img
          src={imageSource}
          alt={photo.alt}
          loading={priority ? 'eager' : 'lazy'}
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            // If primary png failed, try svg or fallback
            if (!hasError) {
              setHasError(true);
            }
          }}
          className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectPosition: photo.objectPosition || 'center center' }}
        />

        {/* Fallback container if image failed or file absent */}
        {hasError && (
          <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-[#101014] via-[#18171B] to-[#27272A] text-left">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#D5BD9B]">
              Memory Asset · {photo.originalName}
            </span>
            <p className="mt-2 text-sm font-serif text-[#F4EEE5] line-clamp-2">
              {photo.title}
            </p>
            <p className="mt-1 text-xs text-[#A7A0A0]">{photo.location}</p>
          </div>
        )}

        {/* Subtle Dark Gradient Scrim for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101014]/90 via-[#101014]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Expand affordance button */}
        <div className="absolute top-3 right-3 p-1.5 rounded-full bg-[#101014]/80 text-[#F4EEE5] opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
          <Maximize2 className="w-3.5 h-3.5 text-[#D5BD9B]" />
        </div>

        {/* Bottom Metadata bar within card */}
        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#101014] via-[#101014]/80 to-transparent text-left">
          <div className="flex items-center gap-2 text-[11px] text-[#A7A0A0] tracking-wide">
            <MapPin className="w-3 h-3 text-[#B88C91] shrink-0" />
            <span className="truncate">{photo.location}</span>
            <span aria-hidden="true">·</span>
            <Calendar className="w-3 h-3 text-[#D5BD9B] shrink-0" />
            <span className="truncate">{photo.timestamp}</span>
          </div>
        </div>
      </div>

      {/* Caption beneath photo */}
      <figcaption className="p-3.5 text-left border-t border-[#A7A0A0]/10 bg-[#141317]">
        <p className="text-xs text-[#F4EEE5]/90 font-serif italic leading-relaxed">
          &ldquo;{photo.caption}&rdquo;
        </p>
      </figcaption>
    </figure>
  );
};
