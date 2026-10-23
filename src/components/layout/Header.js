import { useEffect, useState } from "react";
import { HIRING, NAV_ITEMS, SOLIDGATE_URL } from "../../data/nav";
import { cx } from "../../utils/cx";
import styles from "./Header.module.css";

function NavLinks({ activeHash, onNavigate, className }) {
  return (
    <ul className={className}>
      {NAV_ITEMS.map((item) => {
        const active = item.hash === activeHash;
        return (
          <li key={item.hash}>
            <a
              href={item.hash}
              className={cx(styles.pill, active && styles.active)}
              aria-current={active ? "page" : undefined}
              onClick={onNavigate}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function Header({ activeHash }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [activeHash]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href={SOLIDGATE_URL} target="_blank" rel="noopener noreferrer" className={styles.logo}>
          <img src="/logo-white.svg" alt="Solidgate logo" />
        </a>

        <nav className={styles.nav} aria-label="Main">
          <NavLinks activeHash={activeHash} className={styles.navList} />
        </nav>

        <div className={styles.actions}>
          <a href={HIRING.href} target="_blank" rel="noopener noreferrer" className={styles.hiring}>
            {HIRING.label}
          </a>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={cx(styles.burger, menuOpen && styles.burgerOpen)} aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav id="mobile-menu" className={styles.mobileMenu} aria-label="Main" hidden={!menuOpen}>
        <NavLinks activeHash={activeHash} onNavigate={() => setMenuOpen(false)} className={styles.mobileList} />
      </nav>
    </header>
  );
}
