"use client";
import { useEffect, useRef, useState } from 'react';

const AudioManager = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasTriedPlay, setHasTriedPlay] = useState(false);
  const [audioError, setAudioError] = useState(null);

  // Initialize audio element listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 1.0;
    audio.loop = true;
    audio.preload = 'auto';

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = (e) => setAudioError(e.target.error || e);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (!isPlaying) {
        // First user gesture ensures browser allows playback
        if (!hasTriedPlay) setHasTriedPlay(true);
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (err) {
      console.error('Audio toggle failed', err);
      setAudioError(err);
    }
  };

  return (
    <>
      <audio ref={audioRef} preload="auto" loop>
        <source src="/uplifting-pad-texture-113842.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating circular control button */}
      <button
        type="button"
        onClick={toggleAudio}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? 'Pause background audio' : 'Play background audio'}
        className={`group fixed bottom-6 left-6 z-[120] w-14 h-14 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-white/30 backdrop-blur-md shadow-lg overflow-hidden
          ${isPlaying ? 'bg-black text-white' : 'bg-white text-black'}
          hover:scale-105 active:scale-95`}
        style={{ fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif' }}
      >
        {isPlaying && (
          <span className="absolute inset-0 rounded-full animate-pingSlow bg-gradient-to-br from-white/10 to-white/0" />
        )}
        {/* Equalizer / dancing audio logo */}
        <span className="relative flex items-end gap-[3px] h-6 w-8">
          {[0,1,2,3].map(i => (
            <span
              key={i}
              className={`inline-block w-[5px] rounded-sm bg-current transition-all duration-500
                ${isPlaying ? 'eq-bar-playing' : 'eq-bar-paused'}`}
              style={{
                animationDelay: isPlaying ? `${i * 0.15}s` : '0s',
                height: isPlaying ? '100%' : '55%'
              }}
            />
          ))}
        </span>
      </button>

      <style jsx global>{`
        @keyframes pingSlow { 0% { transform: scale(1); opacity: 0.6;} 80% { transform: scale(1.8); opacity: 0;} 100% { transform: scale(1.8); opacity: 0;} }
        .animate-pingSlow { animation: pingSlow 2.5s cubic-bezier(0,0,.2,1) infinite; }
        @keyframes eqPulse { 0% { transform: scaleY(0.3);} 25% { transform: scaleY(1);} 50% { transform: scaleY(0.45);} 75% { transform: scaleY(0.9);} 100% { transform: scaleY(0.3);} }
        .eq-bar-playing { animation: eqPulse 1.1s ease-in-out infinite; transform-origin: bottom; }
        .eq-bar-paused { transform: scaleY(0.55); opacity: 0.7; }
        .group:hover .eq-bar-paused { opacity: 0.9; }
      `}</style>

      {audioError && (
        <div className="fixed bottom-24 left-6 z-[121] max-w-xs text-xs bg-red-600/90 text-white px-3 py-2 rounded-md shadow">
          Audio error. Tap again or check console.
        </div>
      )}
    </>
  );
};

export default AudioManager;
