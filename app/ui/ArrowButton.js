'use client';
import React from "react";

const ArrowButton = ({ label = "Button", style = {}, ...props }) => (
  <button
    className="flex items-center justify-between bg-black border-none rounded-full cursor-pointer font-century-gothic transition-all duration-300 ease-in-out shadow-lg"
    style={{
      fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif',
      zIndex: 1001,
      padding: 'clamp(0.3rem, 1vw, 0.6rem)',
      paddingLeft: 'clamp(0.6rem, 2vw, 1.5rem)',
      gap: 'clamp(0.4rem, 1.5vw, 1rem)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      ...style,
    }}
    onMouseEnter={e => {
      e.target.style.backgroundColor = '#fff';
      const textSpan = e.target.querySelector('.button-text');
      const circle = e.target.querySelector('.arrow-circle');
      const arrow = e.target.querySelector('.arrow-icon');
      if (textSpan) {
        textSpan.style.color = '#000';
        textSpan.style.backgroundColor = 'transparent';
      }
      if (circle) circle.style.backgroundColor = '#000';
      if (arrow) {
        arrow.style.stroke = '#fff';
        arrow.style.transform = 'rotate(0deg)';
      }
    }}
    onMouseLeave={e => {
      e.target.style.backgroundColor = '#000';
      const textSpan = e.target.querySelector('.button-text');
      const circle = e.target.querySelector('.arrow-circle');
      const arrow = e.target.querySelector('.arrow-icon');
      if (textSpan) textSpan.style.color = '#fff';
      if (circle) circle.style.backgroundColor = '#fff';
      if (arrow) {
        arrow.style.stroke = '#000';
        arrow.style.backgroundColor = 'transparent';
        arrow.style.transform = 'rotate(-45deg)';
      }
    }}
    {...props}
  >
    <span
      className="button-text bg-transparent text-white whitespace-nowrap transition-colors duration-300 ease-in-out font-bold"
      style={{ fontSize: 'clamp(0.7rem, 1.8vw, 0.95rem)' }}
    >
      {label}
    </span>
    <div
      className="arrow-circle bg-white rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ease-in-out"
      style={{ width: 'clamp(20px, 6vw, 36px)', height: 'clamp(20px, 6vw, 36px)' }}
    >
      <svg
        className="arrow-icon stroke-black transition-all duration-300 ease-in-out"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: 'rotate(-45deg)', width: 'clamp(10px, 3vw, 16px)', height: 'clamp(10px, 3vw, 16px)' }}
      >
        <path d="M7 7h10v10" />
        <path d="M7 17L17 7" />
      </svg>
    </div>
  </button>
);

export default ArrowButton;
