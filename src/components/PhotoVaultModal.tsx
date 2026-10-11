import React, { useRef } from 'react';
import { PhotoItem } from '../data/photos';
import { X, Upload, RefreshCw, CheckCircle2, Info, Image as ImageIcon } from 'lucide-react';

interface PhotoVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: PhotoItem[];
  customSrcMap: Record<string, string>;
  onUpdatePhotoSrc: (photoId: string, dataUrl: string) => void;
  onResetAllPhotos: () => void;
}

export const PhotoVaultModal: React.FC<PhotoVaultModalProps> = ({
  isOpen,
  onClose,
  photos,
  customSrcMap,
  onUpdatePhotoSrc,
  onResetAllPhotos,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedPhotoId, setSelectedPhotoId] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && selectedPhotoId) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdatePhotoSrc(selectedPhotoId, event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUploadFor = (photoId: string) => {
    setSelectedPhotoId(photoId);
    fileInputRef.current?.click();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Memory Vault & Photo Management"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md"
      onClick={onClose}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full max-h-[88vh] flex flex-col rounded-2xl bg-[#141317] border border-[#A7A0A0]/20 shadow-2xl overflow-hidden text-left"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#A7A0A0]/15 flex items-center justify-between bg-[#18171B]">
          <div>
            <div className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-[#D5BD9B]" />
              <h2 className="text-xl font-serif text-[#F4EEE5]">
                Memory Vault · All 10 Photographs
              </h2>
            </div>
            <p className="text-xs text-[#A7A0A0] mt-1">
              Curated for Twinkle's birthday story · Ready for local preview and static deployment
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#101014] text-[#A7A0A0] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Deployment Info Banner */}
        <div className="p-4 bg-[#682D3A]/20 border-b border-[#682D3A]/40 flex items-start gap-3 text-xs text-[#F4EEE5]">
          <Info className="w-4 h-4 text-[#D5BD9B] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-[#D5BD9B]">Hosting Guide: </span>
            When you deploy to Vercel or GitHub Pages, place your original photos in the{' '}
            <code className="bg-[#101014] px-1.5 py-0.5 rounded text-[#F4EEE5]">public/images/</code> folder matching the original names (e.g.,{' '}
            <code className="bg-[#101014] px-1 py-0.5 rounded">IMG_0792.png</code> to{' '}
            <code className="bg-[#101014] px-1 py-0.5 rounded">IMG_0801.png</code>). In this preview, you can also replace any photo instantly right below!
          </div>
        </div>

        {/* Scrollable Photo Grid */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {photos.map((photo, index) => {
              const rawSrc = customSrcMap[photo.id] || photo.filename;
              const currentSrc = (() => {
                if (rawSrc.startsWith('data:') || rawSrc.startsWith('http://') || rawSrc.startsWith('https://')) return rawSrc;
                const clean = rawSrc.startsWith('/') ? rawSrc.slice(1) : rawSrc;
                const base = import.meta.env.BASE_URL || './';
                return base.endsWith('/') ? `${base}${clean}` : `${base}/${clean}`;
              })();
              const hasCustom = Boolean(customSrcMap[photo.id]);

              return (
                <div
                  key={photo.id}
                  className="p-3 rounded-lg bg-[#18171B] border border-[#A7A0A0]/15 flex gap-4 items-center"
                >
                  {/* Photo thumbnail */}
                  <div className="relative w-20 h-24 rounded bg-[#101014] overflow-hidden shrink-0 border border-[#A7A0A0]/20">
                    <img
                      src={currentSrc}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {hasCustom && (
                      <div className="absolute top-1 right-1 p-0.5 rounded-full bg-[#10B981] text-black">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                    )}
                  </div>

                  {/* Photo info */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#D5BD9B]">
                      #{index + 1} · {photo.originalName}
                    </span>
                    <h4 className="text-sm font-serif text-[#F4EEE5] truncate">
                      {photo.title}
                    </h4>
                    <p className="text-[11px] text-[#A7A0A0] truncate">
                      {photo.location}
                    </p>

                    <button
                      onClick={() => triggerUploadFor(photo.id)}
                      className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded bg-[#101014] hover:bg-[#682D3A] text-[#D5BD9B] hover:text-white border border-[#A7A0A0]/20 transition-colors"
                    >
                      <Upload className="w-3 h-3" />
                      <span>{hasCustom ? 'Replace file' : 'Upload photo'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer controls */}
        <div className="p-4 border-t border-[#A7A0A0]/15 flex items-center justify-between bg-[#18171B]">
          <button
            onClick={onResetAllPhotos}
            className="inline-flex items-center gap-1.5 text-xs text-[#A7A0A0] hover:text-white transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset to default memories</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium rounded bg-[#682D3A] text-white hover:bg-[#831843] transition-colors"
          >
            Done &amp; View Story
          </button>
        </div>
      </div>
    </div>
  );
};
