import { motion } from 'framer-motion';
import cls from './AboutSpa.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';


interface AboutSpaProps {
  className?: string;
}
export const AboutSpa = ({ className }: AboutSpaProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={classNames(cls.section, {}, [className || ''])}
    >
      <div className={classNames(cls.container, {}, [])}>
        <h2 className={classNames(cls.title, {}, [])}>
          О нас
        </h2>
      </div>
    </motion.section >
  )
}