"use client";
import { useRef, useEffect } from "react";
import { track } from '@vercel/analytics';
import type { FC } from "react";

function onFullScreenChange() {
  if (document.fullscreenElement) {
    track("Video Fullscreen");
  }
}

const VideoPlayer: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const player = videoRef.current;
    player?.addEventListener("fullscreenchange", onFullScreenChange);
    return () => player?.removeEventListener("fullscreenchange", onFullScreenChange);
  }, []);

  return (
    <video controls autoPlay muted loop playsInline 
      ref={videoRef}
      className="w-11/12 sm:w-9/12 md:w-7/12 lg:w-6/12">
      <source src='/video.mp4' type='video/mp4' />
    </video>
  );
}

export default VideoPlayer;
