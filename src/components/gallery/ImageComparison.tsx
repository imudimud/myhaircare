import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt?: string;
  afterAlt?: string;
  category?: string;
}

export default function ImageComparison({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
  beforeAlt,
  afterAlt,
  category
}: ImageComparisonProps) {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [loadedImages, setLoadedImages] = useState({ before: false, after: false });
  const containerRef = useRef<HTMLDivElement>(null);

  const loadImage = (src: string): Promise<void> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve();
    });
  };

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);
      try {
        await Promise.all([
          loadImage(beforeImage).then(() => setLoadedImages(prev => ({ ...prev, before: true }))),
          loadImage(afterImage).then(() => setLoadedImages(prev => ({ ...prev, after: true })))
        ]);
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [beforeImage, afterImage]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;

    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  return (
    <div className="relative w-full aspect-video select-none">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-navy-900/50 backdrop-blur-sm rounded-lg">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-gold-400" />
            <p className="text-white text-sm font-medium">{t('gallery.loading')}</p>
          </div>
        </div>
      )}
      
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full overflow-hidden rounded-lg shadow-lg"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* Before Image */}
            <div className="absolute inset-0">
              <img
                src={beforeImage}
                alt={beforeAlt || t('gallery.beforeAlt')}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute top-4 left-4 bg-navy-900/75 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm text-white font-medium"
              >
                {beforeLabel || t('gallery.before')}
              </div>
            </div>

            {/* After Image */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={afterImage}
                alt={afterAlt || t('gallery.afterAlt')}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute top-4 right-4 bg-gold-400/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm text-navy-900 font-medium"
              >
                {afterLabel || t('gallery.after')}
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute inset-y-0"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute inset-y-0 -ml-px w-0.5 bg-white shadow-lg" />
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
              >
                <div className="w-1 h-4 bg-navy-900 rounded-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
