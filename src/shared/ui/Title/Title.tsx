import cls from './Title.module.css';
import { motion } from 'framer-motion';
import { classNames } from '../../lib/classNames/classNames';

interface ITitleProps {
  className?: string;
  children: string;
}

const Title = ({ className, children }: ITitleProps) => {
  return (
    <motion.h2
      className={classNames(cls.title, {}, [className || ''])}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.h2>
  )
}

export default Title;
