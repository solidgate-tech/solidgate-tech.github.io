import { useId } from "react";
import { cx } from "../../utils/cx";
import styles from "./Accordion.module.css";

// One lime accordion row. Collapsed it shows `summary`; open it grows into a
// large lime card with `header` on top and `children` below. The parent owns
// which item is open (one at a time). `split` puts header and content side by
// side when open.
export function AccordionItem({ open, onToggle, onHoverChange, summary, header, children, split, className }) {
  const id = useId();
  const triggerId = `${id}-trigger`;
  const panelId = `${id}-panel`;

  const hoverProps = onHoverChange
    ? {
        onPointerEnter: (e) => e.pointerType === "mouse" && onHoverChange(true),
        onPointerLeave: (e) => e.pointerType === "mouse" && onHoverChange(false),
      }
    : {};

  return (
    <div className={cx(styles.item, open && styles.open, split && styles.split, className)} {...hoverProps}>
      <button
        type="button"
        id={triggerId}
        className={styles.trigger}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {open ? header : summary}
      </button>
      <div id={panelId} role="region" aria-labelledby={triggerId} className={styles.panel} hidden={!open}>
        {children}
      </div>
    </div>
  );
}

export function Accordion({ children, className, ...rest }) {
  return (
    <div className={cx(styles.accordion, className)} {...rest}>
      {children}
    </div>
  );
}
