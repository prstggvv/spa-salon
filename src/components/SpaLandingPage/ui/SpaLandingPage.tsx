import { motion } from 'framer-motion';
import cls from './SpaLandingPage.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

const SPA_IMAGE = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80';

interface ISpanSection {
  className?: string;
}

export const SpaLandingPage = ({ className }: ISpanSection) => {
  const handleScrollToNext = () => {
    const el = document.getElementById('next-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section
      className={classNames(cls.wrapper, {}, [className || ''])}
    >
      <img
        src={SPA_IMAGE}
        alt="SPA салон"
        className={classNames(cls.bg, {}, [])}
        draggable={false}
        aria-hidden="true"
      />
      <div className={cls.overlay} />
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.info, {}, [])}>
          <motion.h1
            className={classNames(cls.title, {}, [])}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            SPA Салон
          </motion.h1>
          <motion.p 
            className={classNames(cls.description, {}, [])}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            Побалуйте себя премиальными спа-процедурами для тела и разума в 
            атмосфере полного спокойствия.
          </motion.p>
        </div>
        <motion.button
          className={classNames(cls.arrowBtn, {}, [])}
          tabIndex={0}
          aria-label="Прокрутить вниз к следующей секции"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleScrollToNext}
        >
          <svg className={cls.arrowIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M12 5v14M12 19l-7-7M12 19l7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </div>
    </section>
  );
};
