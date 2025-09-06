import React from 'react'

const Button = ({text, fontFamily}) => {
  return (
    <button
      className="flex items-center justify-between border-none cursor-pointer bg-transparent font-geist-sans transition-all duration-300 ease-in-out"
      style={{
        padding: 'clamp(0.3rem, 0.5vw, 0.6rem)',
        paddingLeft: 'clamp(0.6rem, 2vw, 1.5rem)',
        gap: 'clamp(0.4rem, 1.5vw, 1rem)',
      }}
      onMouseEnter={(e) => {
        const textSpan = e.target.querySelector('.button-text');
        const circle = e.target.querySelector('.arrow-circle');
        const arrow = e.target.querySelector('.arrow-icon');

        if (textSpan) {
          textSpan.style.backgroundColor = 'transparent';
        }
        if (arrow) {
          arrow.style.transform = 'rotate(0deg)'; // Right arrow on hover
        }
      }}
      onMouseLeave={(e) => {
        // e.target.style.backgroundColor = '#fff';
        const textSpan = e.target.querySelector('.button-text');
        const circle = e.target.querySelector('.arrow-circle');
        const arrow = e.target.querySelector('.arrow-icon');

        if (textSpan) textSpan.style.color = '#000';
        if (circle) {
          circle.style.backgroundColor = '#000';
        }
        if (arrow) {
          arrow.style.stroke = '#fff';
          arrow.style.backgroundColor = "transparent";
          arrow.style.transform = 'rotate(-45deg)'; // Top-right arrow initially
        }
      }}
    >
      {/* Text */}
      <span
        className="button-text text-black bg-transparent font-medium whitespace-nowrap transition-colors duration-300 ease-in-out"
        style={{
          fontFamily: fontFamily || 'var(--font-geist-sans), sans-serif',
          fontSize: 'clamp(0.7rem, 2vw, 1.5rem)',
        }}
      >
        {text}
      </span>

      {/* Circle inside the button */}
      <div
        className="arrow-circle bg-black rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ease-in-out"
        style={{
          width: 'clamp(20px, 6vw, 36px)',
          height: 'clamp(20px, 6vw, 36px)',
        }}
      >
        <svg
          className="arrow-icon stroke-white transition-all duration-300 ease-in-out"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: 'rotate(-45deg)', // Top-right diagonal initially
            width: 'clamp(10px, 3vw, 16px)',
            height: 'clamp(10px, 3vw, 16px)',
          }}
        >
          <path d="M7 7h10v10" />
          <path d="M7 17L17 7" />
        </svg>
      </div>
    </button>
  )
}

export default Button