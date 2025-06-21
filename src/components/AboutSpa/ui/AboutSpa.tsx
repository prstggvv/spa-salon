import { motion } from 'framer-motion';
import cls from './AboutSpa.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Title from '../../../shared/ui/Title/Title';


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
        <Title
          className={classNames(cls.title, {}, [])}
          children='О нас'
        />
        <motion.p
          className={classNames(cls.subtitle, {}, [])}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </motion.p>
      </div>
    </motion.section >
  )
}