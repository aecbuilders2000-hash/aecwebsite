"use client";

import dynamic from "next/dynamic";

const RippleSimulation = dynamic(() => import("./LiquidShader"), {
  ssr: false,
  loading: () => null,
});

export default function ShaderWrapper() {

  return (
    <div
      style={{
        position: "fixed",
        top: "0vh",
        left: "0vw",
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <RippleSimulation />
    </div>
  );
}
