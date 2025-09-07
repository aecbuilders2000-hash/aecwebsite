// Utility functions for responsive design
export const responsive = {
  // Font sizes
  textSm: 'clamp(0.7rem, 1.8vw, 0.95rem)',
  textBase: 'clamp(0.8rem, 2vw, 1rem)',
  textLg: 'clamp(1rem, 2.5vw, 1.25rem)',
  
  // Spacing
  spacingXs: 'clamp(0.25rem, 0.5vw, 0.375rem)',
  spacingSm: 'clamp(0.3rem, 1vw, 0.6rem)',
  spacingMd: 'clamp(0.4rem, 1.5vw, 1rem)',
  spacingLg: 'clamp(0.6rem, 2vw, 1.5rem)',
  spacingXl: 'clamp(0.8rem, 2.5vw, 2rem)',
  
  // Dimensions
  iconSm: 'clamp(0.625rem, 3vw, 1rem)', // 10px-16px
  iconMd: 'clamp(1.25rem, 6vw, 2.25rem)', // 20px-36px
  
  // Button dimensions
  buttonHeight: 'clamp(2.8125rem, 6vh, 3.75rem)', // 45px-60px
  buttonPadding: 'clamp(0.5rem, 1.5vw, 1rem)',
  buttonPaddingX: 'clamp(1rem, 3vw, 2rem)',
  buttonGap: 'clamp(0.6rem, 2vw, 1.5rem)',
};

// Calculate text width approximately (for SVG sizing)
export const getTextWidth = (text, fontSize = '0.95rem') => {
  // Approximate character width multiplier for Century Gothic
  const avgCharWidth = 0.55;
  const baseSize = parseFloat(fontSize);
  return `calc(${text.length * avgCharWidth}em + ${responsive.spacingLg} * 2 + ${responsive.iconMd} + ${responsive.buttonGap})`;
};
