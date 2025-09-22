import cls from './NavMenu.module.css';
import { classNames } from "../../../shared/lib/classNames/classNames";
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../model/navData';
import { listVariants } from '../../../shared/lib/constants';

interface INavMenuData {
  className?: string;
  open: boolean;
  onClose: () => void;
  scrollPage: (id: string) => void;
}

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

export const NavMenu = ({ 
  open,
  onClose,
  scrollPage,
}: INavMenuData) => (
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
              onClick={(e: any) => {
                e.preventDefault();
                
                onClose();
                scrollPage(link.href)
              }}
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
