import { useState, useCallback } from 'react';
import cls from './Header.module.css';
import { classNames } from "../../../shared/lib/classNames/classNames";
import { NavMenu } from '../../../components/NavMenu';
import { navLinks } from '../../NavMenu/model/navData';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleNavLinkClick = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setMenuOpen((prev) => !prev);
    }
  }, []);

  return (
    <header className={classNames(cls.header)}>
      <div className={classNames(cls.container)}>
        <p className={classNames(cls.photo)}>Logo</p>
        <nav className={classNames(cls.nav, {}, [])} aria-label="Главное меню">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className={classNames(cls.link, {}, [])}
              href={link.href}
              tabIndex={0}
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className={classNames(cls.burger, { [cls.open]: menuOpen }, [])}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          tabIndex={0}
          onClick={handleBurgerClick}
          onKeyDown={handleKeyDown}
          type="button"
        >
          <span className={classNames(cls.burgerLine, { [cls.line1]: true, [cls.active]: menuOpen }, [])} />
          <span className={classNames(cls.burgerLine, { [cls.line2]: true, [cls.active]: menuOpen }, [])} />
          <span className={classNames(cls.burgerLine, { [cls.line3]: true, [cls.active]: menuOpen }, [])} />
        </button>
        <NavMenu 
          open={menuOpen}
          onClose={handleNavLinkClick}
        />
      </div>
    </header>
  );
};
