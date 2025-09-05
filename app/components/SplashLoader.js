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
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      overflow: 'hidden'
    }}>
      {/* Subtle animated grain texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.05
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom right, white, transparent, white)',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }} />
      </div>

      {/* Main content container */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        
        {/* Logo container with animations */}
        <div style={{
          marginBottom: '4rem',
          position: 'relative'
        }}>
          {/* Logo */}
          <div style={{
            position: 'relative',
            overflow: 'hidden'
          }}>
            <img 
              src="https://collectiveaec.com/wp-content/uploads/2025/01/logo-light.png"
              alt="Logo"
              style={{
                height: '5rem',
                width: 'auto',
                objectFit: 'contain',
                transition: 'all 1000ms ease-out',
                opacity: progress > 5 ? 1 : 0,
                transform: `translateY(${progress > 5 ? 0 : 30}px) scale(${progress > 5 ? 1 : 0.8})`,
              }}
              onLoad={() => {
                // Ensure logo shows even if progress hasn't started
                setTimeout(() => setProgress(prev => Math.max(prev, 10)), 500);
              }}
            />
            
            {/* Logo reveal animation */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'black',
              transition: 'transform 1200ms ease-out',
              transform: `translateY(${progress > 5 ? '-100%' : '0%'})`,
            }} />
          </div>
          
          {/* Subtle glow effect */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'white',
            filter: 'blur(3rem)',
            opacity: progress > 5 ? 0.1 : 0,
            transition: 'opacity 1000ms'
          }} />
        </div>

        {/* Loading text */}
        <div style={{
          marginBottom: '3rem',
          textAlign: 'center',
          transition: 'all 800ms ease-out',
          opacity: showText ? 1 : 0,
          transform: `translateY(${showText ? 0 : 20}px)`,
        }}>
          <h2 style={{
            color: 'white',
            fontSize: '0.875rem',
            fontWeight: 300,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
            margin: 0
          }}>
            {progress < 20 ? 'Initializing' : 
             progress < 50 ? 'Loading Experience' : 
             progress < 80 ? 'Preparing Content' : 
             progress < 95 ? 'Almost Ready' : 'Welcome'}
          </h2>
        </div>

        {/* Elegant progress bar */}
        <div style={{
          width: '20rem',
          position: 'relative'
        }}>
          {/* Background line */}
          <div style={{
            height: '1px',
            backgroundColor: 'white',
            opacity: 0.2,
            width: '100%'
          }} />
          
          {/* Progress line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '1px',
            backgroundColor: 'white',
            transition: 'all 500ms ease-out',
            width: `${progress}%`,
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
          }} />
          
          {/* Progress dot */}
          <div style={{
            position: 'absolute',
            top: 0,
            width: '0.25rem',
            height: '0.25rem',
            backgroundColor: 'white',
            borderRadius: '50%',
            transition: 'all 500ms ease-out',
            left: `${progress}%`,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
          }} />
        </div>

        {/* Progress percentage */}
        <div style={{
          marginTop: '1.5rem',
          color: 'white',
          fontSize: '0.75rem',
          fontWeight: 300,
          letterSpacing: '0.1em',
          transition: 'opacity 500ms',
          opacity: showText ? 0.7 : 0
        }}>
          {Math.round(progress)}%
        </div>
      </div>

      {/* Completion fade effect */}
      {progress === 100 && (
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'black',
          transition: 'opacity 1000ms',
          opacity: 0,
          animation: 'fadeOut 1s ease-in-out forwards',
        }} />
      )}

      {/* Minimal corner details */}
      <div style={{
        position: 'absolute',
        top: '2rem',
        left: '2rem',
        width: '2rem',
        height: '1px',
        backgroundColor: 'white',
        opacity: 0.2
      }} />
      <div style={{
        position: 'absolute',
        top: '2rem',
        left: '2rem',
        width: '1px',
        height: '2rem',
        backgroundColor: 'white',
        opacity: 0.2
      }} />
      <div style={{
        position: 'absolute',
        top: '2rem',
        right: '2rem',
        width: '2rem',
        height: '1px',
        backgroundColor: 'white',
        opacity: 0.2
      }} />
      <div style={{
        position: 'absolute',
        top: '2rem',
        right: '2rem',
        width: '1px',
        height: '2rem',
        backgroundColor: 'white',
        opacity: 0.2
      }} />
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '2rem',
        width: '2rem',
        height: '1px',
        backgroundColor: 'white',
        opacity: 0.2
      }} />
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '2rem',
        width: '1px',
        height: '2rem',
        backgroundColor: 'white',
        opacity: 0.2
      }} />
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        right: '2rem',
        width: '2rem',
        height: '1px',
        backgroundColor: 'white',
        opacity: 0.2
      }} />
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        right: '2rem',
        width: '1px',
        height: '2rem',
        backgroundColor: 'white',
        opacity: 0.2
      }} />

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
