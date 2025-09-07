"use client";
import { useEffect, useRef, useState } from 'react';

const AudioManager = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [audioError, setAudioError] = useState(null);

  useEffect(() => {
    console.log('AudioManager: Initializing...');
    
    const audio = audioRef.current;
    if (!audio) {
      console.error('AudioManager: No audio element found');
      return;
    }

    // Basic audio setup
    audio.volume = 1.0;
    audio.loop = true;
    audio.preload = 'auto';

    // Audio event listeners
    const handleLoadStart = () => console.log('AudioManager: Load start');
    const handleCanPlay = () => console.log('AudioManager: Can play');
    const handleLoadedData = () => console.log('AudioManager: Loaded data');
    const handlePlay = () => {
      console.log('AudioManager: Playing');
      setIsPlaying(true);
    };
    const handlePause = () => {
      console.log('AudioManager: Paused');
      setIsPlaying(false);
    };
    const handleError = (e) => {
      console.error('AudioManager: Error:', e.target.error);
      setAudioError(e.target.error);
    };

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    // Simple click handler
    const startAudio = async (event) => {
      console.log('AudioManager: User interaction detected, starting audio...');
      
      if (hasStarted) {
        console.log('AudioManager: Already started');
        return;
      }

      setHasStarted(true);

      try {
        // Force load the audio
        audio.load();
        console.log('AudioManager: Audio loaded, attempting to play...');
        
        // Simple play attempt
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          console.log('AudioManager: Audio started successfully!');
        }
        
      } catch (error) {
        console.error('AudioManager: Play failed:', error);
        setAudioError(error);
        
        // Try again after a short delay
        setTimeout(async () => {
          try {
            await audio.play();
            console.log('AudioManager: Audio started on retry!');
          } catch (retryError) {
            console.error('AudioManager: Retry also failed:', retryError);
          }
        }, 1000);
      }
    };

    // Add event listeners - simple approach
    const addListeners = () => {
      console.log('AudioManager: Adding click listeners');
      document.body.addEventListener('click', startAudio, { once: true });
      document.body.addEventListener('touchstart', startAudio, { once: true });
      window.addEventListener('click', startAudio, { once: true });
    };

    // Add listeners immediately
    if (document.body) {
      addListeners();
    } else {
      // Wait for DOM to be ready
      setTimeout(addListeners, 100);
    }

    return () => {
      console.log('AudioManager: Cleaning up...');
      
      // Remove event listeners
      document.body?.removeEventListener('click', startAudio);
      document.body?.removeEventListener('touchstart', startAudio);
      window.removeEventListener('click', startAudio);
      
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
    };
  }, [hasStarted]);

  return (
    <>
      <audio
        ref={audioRef}
        preload="auto"
        loop
      >
        <source src="/uplifting-pad-texture-113842.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );

};

export default AudioManager;
