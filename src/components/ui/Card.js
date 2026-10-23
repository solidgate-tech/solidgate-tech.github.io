import { cx } from "../../utils/cx";
import styles from "./Card.module.css";

// variant: "white" | "lime". Pass `as="a"` (plus href) for whole-card links.
export function Card({ as: Element = "div", variant = "white", interactive = false, className, children, ...rest }) {
  return (
    <Element className={cx(styles.card, styles[variant], interactive && styles.interactive, className)} {...rest}>
      {children}
    </Element>
  );
}
