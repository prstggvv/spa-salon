import { useState, useCallback, useEffect } from 'react';
import cls from './Header.module.css';
import { classNames } from "../../../shared/lib/classNames/classNames";
import { NavMenu } from '../../../components/NavMenu';
import { navLinks } from '../../NavMenu/model/navData';
import BurgerButton from '../../../shared/ui/BurgerButton/BurgerButton';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={classNames(cls.header, { [cls.scrolled]: scrolled })}>
      <div className={classNames(cls.container)}>
        <p className={classNames(cls.photo, { [cls.scrolled]: scrolled })}>Logo</p>
        <nav 
          className={classNames(cls.nav, { [cls.scrolled]: scrolled }, [])}
          aria-label="Главное меню"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              className={classNames(cls.link, { [cls.scrolled]: scrolled }, [])}
              href={link.href}
              tabIndex={0}
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <BurgerButton 
          className={classNames(cls.burger, { [cls.scrolled]: scrolled }, [])}
          menuOpen={menuOpen}
          handleBurgerClick={handleBurgerClick}
          handleKeyDown={handleKeyDown}
        />
        <NavMenu 
          open={menuOpen}
          onClose={handleNavLinkClick}
        />
      </div>
    </header>
  );
};
