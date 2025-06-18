import { motion } from 'framer-motion';
import cls from './SpaLandingPage.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

const SPA_IMAGE = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80';

export const SpaLandingPage = () => {
  return (
    <section className={classNames(cls.wrapper, {}, [])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.leftSection, {}, [])}>
          <div className={classNames(cls.content, {}, [])}>
            <div className={classNames(cls.info, {}, [])}>
              <motion.h1
                className={classNames(cls.title, {}, [])}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                SPA Салон
              </motion.h1>
              <motion.p
                className={classNames(cls.description, {}, [])}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Побалуйте себя премиальными спа-процедурами для тела и разума в атмосфере полного спокойствия.
              </motion.p>
            </div>
            <motion.button
              className={classNames(cls.button, {}, [cls.outline])}
              tabIndex={0}
              aria-label="Узнать больше о спа услугах"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Узнать больше
            </motion.button>
          </div>
        </div>
        <motion.div
          className={classNames(cls.rightSection, {}, [])}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <img
            src={SPA_IMAGE}
            alt="SPA салон"
            className={classNames(cls.spaImage, {}, [])}
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
};
