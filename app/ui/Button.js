import React from 'react'

const Button = ({text, fontFamily}) => {
  return (
    <button
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'clamp(0.3rem, 0.5vw, 0.6rem)',
        paddingLeft: 'clamp(0.6rem, 2vw, 1.5rem)',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: "transparent",
        fontFamily: 'var(--font-geist-sans), sans-serif',
        transition: 'all 0.3s ease',
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
        className="button-text"
        style={{
          color: '#000',
          backgroundColor: 'transparent',
          fontFamily: fontFamily || 'var(--font-geist-sans), sans-serif',
          fontSize: 'clamp(0.7rem, 2vw, 1.5rem)',
          fontWeight: '500',
          transition: 'color 0.3s ease',
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </span>

      {/* Circle inside the button */}
      <div
        className="arrow-circle"
        style={{
          width: 'clamp(20px, 6vw, 36px)',
          height: 'clamp(20px, 6vw, 36px)',
          backgroundColor: '#000',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          flexShrink: 0,
        }}
      >
        <svg
          className="arrow-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: 'rotate(-45deg)', // Top-right diagonal initially
            transition: 'all 0.3s ease',
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