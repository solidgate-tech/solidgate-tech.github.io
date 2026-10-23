import { cx } from "../../utils/cx";
import styles from "./CtaButton.module.css";

// Lime pill that expands/collapses a panel ("Tech Interview Plan ↓")
export function CtaButton({ children, expanded, controls, onClick, className }) {
  return (
    <button
      type="button"
      className={cx(styles.button, className)}
      aria-expanded={expanded}
      aria-controls={controls}
      onClick={onClick}
    >
      {children}
      <span aria-hidden="true" className={styles.arrow}>
        {expanded ? "↑" : "↓"}
      </span>
    </button>
  );
}
