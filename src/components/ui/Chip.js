import { cx } from "../../utils/cx";
import styles from "./Chip.module.css";

// variant: "lime" (on white cards) | "dark" (on lime cards) | "label" (in-card labels) | "grey" (restriction tags)
export function Chip({ children, variant = "lime", size = "md", className }) {
  return <span className={cx(styles.chip, styles[variant], styles[size], className)}>{children}</span>;
}

export function ChipList({ children, className }) {
  return <div className={cx(styles.list, className)}>{children}</div>;
}
