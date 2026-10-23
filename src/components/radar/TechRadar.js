import { useEffect, useRef } from "react";
import { cx } from "../../utils/cx";
import styles from "./TechRadar.module.css";

// Renders the forked Zalando radar (public/vendor/radar.js) into an SVG
export function TechRadar({ config, className }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    svg.innerHTML = "";
    // The radar mutates config and entries (positions, ids), so hand it copies
    window.radar_visualization({
      ...config,
      colors: { ...config.colors },
      entries: config.entries.map((entry) => ({ ...entry })),
    });
    return () => {
      svg.innerHTML = "";
    };
  }, [config]);

  return (
    <div className={cx(styles.scroller, className)}>
      <svg id={config.svg_id} ref={svgRef} className={styles.svg} role="img" aria-label={config.title} />
    </div>
  );
}
