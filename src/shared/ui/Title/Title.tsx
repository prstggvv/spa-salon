import cls from './Title.module.css';
import { motion } from 'framer-motion';
import { classNames } from '../../lib/classNames/classNames';

interface ITitleProps {
  className?: string;
  children: string;
}

const Title = ({ className, children }: ITitleProps) => {
  return (
    <motion.div
      className={classNames(cls.block, {}, [className || ''])}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      <h2 className={cls.title}>
        {children}
      </h2>
      <div className={cls.line} />
    </motion.div>
  )
}

export default Title;
