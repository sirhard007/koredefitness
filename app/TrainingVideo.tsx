"use client";

import { useEffect, useRef } from "react";

type TrainingVideoProps = {
  src: string;
  poster: string;
  label: string;
};

export default function TrainingVideo({ src, poster, label }: TrainingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    void video.play().catch(() => {
      // The poster remains visible if a browser blocks autoplay.
    });
  }, []);

  return (
    <video ref={videoRef} autoPlay muted loop playsInline preload="metadata" poster={poster} aria-label={label}>
      <source src={src} type="video/webm" />
    </video>
  );
}
