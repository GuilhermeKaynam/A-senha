import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
  onTimeUpdate: (currentTime: number, duration: number) => void;
}

export function VideoPlayer({ onTimeUpdate }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      onTimeUpdate(video.currentTime, video.duration);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, [onTimeUpdate]);

  return (
    <video
      ref={videoRef}
      className="w-full h-full rounded-xl"
      controls={false}
      autoPlay
      playsInline
    >
      <source src="/A-senha-do-leilão-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}