import { useState, useCallback, useEffect } from 'react';
import cls from './Header.module.css';
import { classNames } from "../../../shared/lib/classNames/classNames";
import { NavMenu } from '../../../components/NavMenu';
import { navLinks } from '../../NavMenu/model/navData';
import BurgerButton from '../../../shared/ui/BurgerButton/BurgerButton';
import { motion } from 'framer-motion';
import LogoSvg from '../../../shared/assets/images/icons/logo.svg';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6, 
      } 
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const navItem = {
    hidden: { 
      opacity: 0,
      y: -20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
      }
    },
  };

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial='hidden'
      animate="visible"
      variants={fadeIn}
      className={classNames(cls.header, { [cls.scrolled]: scrolled })}
    >
      <div className={classNames(cls.container)}>
        <img
          className={classNames(cls.photo, {}, [])}
          src={LogoSvg}
          alt='картинка'
        />
        <motion.nav 
          className={classNames(cls.nav, { [cls.scrolled]: scrolled }, [])}
          variants={staggerChildren}
          initial='hidden'
          animate='visible'
          aria-label='Главное меню'
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              className={classNames(cls.link, { [cls.scrolled]: scrolled }, [])}
              href={link.href}
              tabIndex={0}
              aria-label={link.label}
              variants={navItem}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>
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
    </motion.header>
  );
};
