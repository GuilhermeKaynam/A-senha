import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';
import { TimedOffer } from './TimedOffer';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      setShowOffer(false); // Reset offer state when modal closes
    };
  }, [isOpen, onClose]);

  const handleTimeUpdate = (currentTime: number, duration: number) => {
    const timeRemaining = duration - currentTime;
    setShowOffer(timeRemaining <= 15 && timeRemaining > 0);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
          aria-label="Close video"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="aspect-video bg-black rounded-xl overflow-hidden">
          <VideoPlayer onTimeUpdate={handleTimeUpdate} />
        </div>
        {showOffer && <TimedOffer />}
      </div>
    </div>
  );
}