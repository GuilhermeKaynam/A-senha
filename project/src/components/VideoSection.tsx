import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { VideoModal } from './VideoModal';

export function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoId = 'WMACMQzkKvU';

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <AnimateOnScroll>
          <button
            onClick={() => setIsModalOpen(true)}
            className="block w-full relative rounded-2xl overflow-hidden shadow-2xl group"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1612825173281-9a193378527e?auto=format&fit=crop&w=1920&q=80"
                alt="Car Auction"
                className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
            </div>
          </button>
        </AnimateOnScroll>
      </div>
      <VideoModal
        videoId={videoId}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}