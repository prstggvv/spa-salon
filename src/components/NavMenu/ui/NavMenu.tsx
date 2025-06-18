import cls from './NavMenu.module.css';
import { classNames } from "../../../shared/lib/classNames/classNames";
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../model/navData';

interface INavMenuData {
  open: boolean;
  onClose: () => void;
}

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.43,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, y: 30 
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.45
    }
  },
};

export const NavMenu = ({ open, onClose }: INavMenuData) => (
  <AnimatePresence>
    {open && (
      <motion.nav
        className={classNames(cls.mobileNav, {}, [])}
        aria-label="Мобильное меню"
        initial={{ x: '100%', opacity: 0, scale: 0.95 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        exit={{ x: '100%', opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="visible"
          style={{ width: '100%' }}
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              className={classNames(cls.link, {}, [])}
              href={link.href}
              tabIndex={0}
              aria-label={link.label}
              onClick={onClose}
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.nav>
    )}
  </AnimatePresence>
);
