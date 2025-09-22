import { useState, useCallback, useEffect } from 'react';
import cls from './Header.module.css';
import { classNames } from "../../../shared/lib/classNames/classNames";
import { NavMenu } from '../../../components/NavMenu';
import { navLinks } from '../../NavMenu/model/navData';
import BurgerButton from '../../../shared/ui/BurgerButton/BurgerButton';
import { motion } from 'framer-motion';
import LogoSvg from '../../../shared/assets/images/icons/logo_main.svg';
import { fadeIn, staggerChildren, navItem, } from '../../../shared/lib/constants';

interface IHeaderData {
  className?: string;
  scrollPage: (id: string) => void;
  activeSection?: string;
}
export const Header = ({
  className,
  scrollPage,
  activeSection,
}: IHeaderData) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      animate='visible'
      variants={fadeIn}
      className={classNames(cls.header, { [cls.scrolled]: scrolled }, [className ?? ''])}
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
              className={classNames(cls.link, 
                { 
                  [cls.scrolled]: scrolled,
                  [cls.active]: activeSection === link.href
                }, [])}
              href={link.href}
              tabIndex={0}
              aria-label={link.label}
              variants={navItem}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e: any) => {
                e.preventDefault();

                scrollPage(link.href)
              }}
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
          scrollPage={scrollPage}
          open={menuOpen}
          onClose={handleNavLinkClick}
        />
      </div>
    </motion.header>
  );
};
