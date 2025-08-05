import cls from './Hero.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import HeroImage from '../../../shared/assets/images/hero.avif';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface HeroProps {
  className?: string;
}

export const Hero = ({ className }: HeroProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <motion.div
          style={{ y }}
          className={classNames(cls.background, {}, [])}
        >
          <img
            className={classNames(cls.image, {}, [])}
            src={HeroImage}
            alt="Hero"
          />
          <div className={classNames(cls.black, {}, [])}></div>
        </motion.div>
        <div className={classNames(cls.content, {}, [])}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={classNames(cls.title, {}, [])}
          >
            Le Hola Spa
          </motion.h1>
          <motion.p
            className={classNames(cls.subtitle, {}, [])}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Уютный спа-салон в центре города
          </motion.p>
        </div>
      </div>
    </section>
  )
}