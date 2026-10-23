import { cx } from "../../utils/cx";
import styles from "./PillTabs.module.css";

// Toggle group of pills (years, tracks); active pill is lime
export function PillTabs({ items, value, onChange, ariaLabel, className }) {
  return (
    <div role="tablist" aria-label={ariaLabel} className={cx(styles.tabs, className)}>
      {items.map((item) => {
        const active = item.id === value;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active}
            className={cx(styles.tab, active && styles.active)}
            onClick={() => onChange(item.id)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
