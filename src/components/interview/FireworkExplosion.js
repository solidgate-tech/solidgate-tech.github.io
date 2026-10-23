import { useEffect, useState } from "react";

export function FireworkExplosion({ position }) {
  const [phase, setPhase] = useState("flying");
  const [currentPos, setCurrentPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    // Start flying to random position
    const flyTimer = setTimeout(() => {
      setCurrentPos({ x: position.x, y: position.y });
    }, 10);

    // Phase 1: Heart flies to position (0.5s)
    const explodeTimer = setTimeout(() => {
      setPhase("exploding");
    }, 510);

    return () => {
      clearTimeout(flyTimer);
      clearTimeout(explodeTimer);
    };
  }, [position]);

  return (
    <>
      {/* Main heart flying from center to explosion position */}
      <div
        style={{
          position: "fixed",
          left: `${currentPos.x}%`,
          top: `${currentPos.y}%`,
          fontSize: "48px",
          zIndex: 9999,
          transition:
            phase === "flying"
              ? "left 0.5s ease-out, top 0.5s ease-out"
              : "opacity 0.1s ease-out, transform 0.1s ease-out",
          pointerEvents: "none",
          transform:
            phase === "exploding"
              ? "translate(-50%, -50%) scale(0)"
              : "translate(-50%, -50%)",
          opacity: phase === "exploding" ? 0 : 1,
        }}
      >
        💚
      </div>
      {/* Exploding hearts - appear when main heart reaches position */}
      {phase === "exploding" &&
        Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "fixed",
              left: position.x + "%",
              top: position.y + "%",
              fontSize: "32px",
              zIndex: 9999,
              animation: `heartExplode${i + 1} 0.8s ease-out forwards`,
              pointerEvents: "none",
            }}
          >
            💚
          </div>
        ))}
    </>
  );
}
