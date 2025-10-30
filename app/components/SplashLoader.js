"use client";
import { useEffect, useState } from "react";

export default function SplashLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after logo animation
    setTimeout(() => setShowText(true), 800);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Wait for completion animation, then notify parent
          setTimeout(() => {
            setIsComplete(true);
            // Emit custom event for backward compatibility
            window.dispatchEvent(new CustomEvent('loaderComplete'));
            // Call onComplete prop if provided
            if (onComplete) {
              onComplete();
            }
          }, 1000);
          return 100;
        }
        // Realistic loading progression
        const increment = prev < 10 ? 0.3 : prev < 30 ? 1.2 : prev < 70 ? 1.8 : prev < 90 ? 0.8 : 0.2;
        //fast
        // const increment = prev < 20 ? 2 : prev < 80 ? 4 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Subtle animated grain texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-white via-transparent to-white animate-pulse" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Logo container with animations */}
        <div className="relative" style={{ marginBottom: '4rem' }}>
          {/* Logo */}
          <div className="relative overflow-hidden">
            <img
              src="https://collectiveaec.com/wp-content/uploads/2025/01/logo-light.png"
              alt="Logo"
              className="w-auto object-contain transition-all duration-1000 ease-out"
              style={{
                height: '5rem',
                opacity: progress > 5 ? 1 : 0,
                transform: `translateY(${progress > 5 ? 0 : 30}px) scale(${progress > 5 ? 1 : 0.8})`,
              }}
              onLoad={() => {
                // Ensure logo shows even if progress hasn't started
                setTimeout(() => setProgress(prev => Math.max(prev, 10)), 500);
              }}
            />

            {/* Logo reveal animation */}
            <div
              className="absolute inset-0 bg-black transition-transform duration-1200 ease-out"
              style={{
                transform: `translateY(${progress > 5 ? '-100%' : '0%'})`,
              }}
            />
          </div>

          {/* Subtle glow effect */}
          <div
            className="absolute inset-0 bg-white blur-3xl transition-opacity duration-1000"
            style={{
              opacity: progress > 5 ? 0.1 : 0,
            }}
          />
        </div>

        {/* Loading text */}
        <div
          className="text-center transition-all duration-800 ease-out"
          style={{
            marginBottom: '3rem',
            opacity: showText ? 1 : 0,
            transform: `translateY(${showText ? 0 : 20}px)`,
          }}
        >
          <h2 className="text-white text-sm font-light uppercase tracking-wider m-0" style={{ letterSpacing: '0.3em' }}>
            {progress < 20 ? 'Initializing' :
              progress < 50 ? 'Loading Experience' :
                progress < 80 ? 'Preparing Content' :
                  progress < 95 ? 'Almost Ready' : 'Welcome'}
          </h2>
        </div>

        {/* Elegant progress bar */}
        <div className="relative" style={{ width: '20rem' }}>
          {/* Background line */}
          <div className="w-full bg-white opacity-20" style={{ height: '1px' }} />

          {/* Progress line */}
          <div
            className="absolute top-0 left-0 bg-white transition-all duration-500 ease-out shadow-md shadow-white/30"
            style={{
              height: '1px',
              width: `${progress}%`,
            }}
          />

          {/* Progress dot */}
          <div
            className="absolute top-0 w-1 h-1 bg-white rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2 shadow-md shadow-white/60"
            style={{
              left: `${progress}%`,
            }}
          />
        </div>

        {/* Progress percentage */}
        <div
          className="text-white text-xs font-light tracking-wider transition-opacity duration-500"
          style={{
            marginTop: '1.5rem',
            opacity: showText ? 0.7 : 0
          }}
        >
          {Math.round(progress)}%
        </div>
      </div>

      {/* Completion fade effect */}
      {progress === 100 && (
        <div className="absolute inset-0 bg-black transition-opacity duration-1000 opacity-0 animate-fadeOut" />
      )}

      {/* Minimal corner details */}
      <div className="absolute top-8 left-8 w-8 bg-white opacity-20" style={{ height: '1px' }} />
      <div className="absolute top-8 left-8 h-8 bg-white opacity-20" style={{ width: '1px' }} />
      <div className="absolute top-8 right-8 w-8 bg-white opacity-20" style={{ height: '1px' }} />
      <div className="absolute top-8 right-8 h-8 bg-white opacity-20" style={{ width: '1px' }} />
      <div className="absolute bottom-8 left-8 w-8 bg-white opacity-20" style={{ height: '1px' }} />
      <div className="absolute bottom-8 left-8 h-8 bg-white opacity-20" style={{ width: '1px' }} />
      <div className="absolute bottom-8 right-8 w-8 bg-white opacity-20" style={{ height: '1px' }} />
      <div className="absolute bottom-8 right-8 h-8 bg-white opacity-20" style={{ width: '1px' }} />

      <style jsx>{`
        @keyframes fadeOut {
          to {
            opacity: 1;
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
