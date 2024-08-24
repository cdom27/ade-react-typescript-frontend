import { useState, useEffect } from 'react';
import useDeviceDetect from '../hooks/useDeviceDetect';

/**
 * Responsible for rendering a video hero section on a page by
 * selecting the appropriate video source based on the device type
 */

interface VideoSources {
  tablet: {
    webm: string;
    mp4: string;
  };
  desktop: {
    webm: string;
    mp4: string;
  };
}

interface VideoHeroProps {
  videoSources: VideoSources;
  posterSource: string;
}

const VideoHero = ({ videoSources, posterSource }: VideoHeroProps) => {
  const deviceType = useDeviceDetect();
  const [canPlayWebm, setCanPlayWebm] = useState<boolean>(false);

  // Check if the browser supports WebM when component mounts
  useEffect(() => {
    const video = document.createElement('video');
    setCanPlayWebm(video.canPlayType('video/webm') !== '');
  }, []);

  // Loop video with a delay after it ends
  const handleVideoEnded = (
    event: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    const video = event.target as HTMLVideoElement;

    const playPromise = video.play();

    // Check playPromise & handle error
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setTimeout(() => {
            video.play();
          }, 5000);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const getVideoSources = () => {
    const sources = videoSources[deviceType];
    return {
      webm: sources.webm,
      mp4: sources.mp4,
    };
  };

  const { webm, mp4 } = getVideoSources();

  return (
    <div className="overflow-hidden h-screen w-full">
      <video
        className="h-screen object-cover w-full"
        autoPlay
        muted
        playsInline
        preload="metadata"
        poster={posterSource}
        onEnded={handleVideoEnded}
      >
        {canPlayWebm && <source src={webm} type="video/webm" />}
        <source src={mp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoHero;
