# Tailwind + CSS Conversion Guide

## Conversion Rules

### **Tailwind Classes (Look/Appearance)**
- `background: "#FFFFFF"` → `bg-white`
- `background: "var(--gray-2)"` → `bg-gray-2`
- `color: "#737272"` → `text-gray-7`
- `color: "#000000"` → `text-black`
- `display: "flex"` → `flex`
- `flexDirection: "column"` → `flex-col`
- `alignItems: "center"` → `items-center`
- `justifyContent: "space-between"` → `justify-between`
- `position: "absolute"` → `absolute`
- `position: "relative"` → `relative`
- `overflow: "hidden"` → `overflow-hidden`
- `borderRadius: "50px"` → `rounded-full`
- `opacity: 0` → `opacity-0`
- `fontWeight: "bold"` → `font-bold`
- `textAlign: "center"` → `text-center`
- `cursor: "pointer"` → `cursor-pointer`
- `border: "none"` → `border-none`
- `boxSizing: "border-box"` → `box-border`

### **CSS Style Properties (Size/Layout)**
- `width`, `height`, `minWidth`, `minHeight`
- `fontSize`, `lineHeight`, `letterSpacing`
- `padding`, `margin`, `gap`
- `top`, `left`, `right`, `bottom`
- `transform`, `transition`
- `zIndex` (but use z-10, z-20, etc. in Tailwind when possible)

## Example Conversions

### Before:
```jsx
<div 
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "5vh",
    width: "100%",
    height: "50vh",
    backgroundColor: "#FFFFFF",
    borderRadius: "2rem",
    padding: "clamp(2rem, 4vw, 3rem)",
    boxSizing: "border-box",
    fontSize: "clamp(1rem, 2vw, 1.5rem)",
    color: "#737272",
    fontWeight: "bold",
  }}
>
```

### After:
```jsx
<div 
  className="flex flex-col items-center absolute bg-white rounded-2xl box-border text-gray-7 font-bold"
  style={{
    top: "5vh",
    width: "100%",
    height: "50vh",
    padding: "clamp(2rem, 4vw, 3rem)",
    fontSize: "clamp(1rem, 2vw, 1.5rem)",
  }}
>
```

## Key Sections to Convert

1. **ContentSection.js**
2. **ServicesCard.js**
3. **HeroSection.js**
4. **ServicesSection.js**

Would you like me to continue with the full conversion of these files systematically?
