import cls from './Button.module.css';
import { classNames } from '../../lib/classNames/classNames';
import { motion } from 'framer-motion';

interface IButtonProps {
  className?: string;
  type: 'button' | 'reset' | 'submit';
  children: any;
  onClick?: () => void;
}

const Button = ({ 
  className,
  type,
  children,
  onClick,
}: IButtonProps) => {
  return (
    <motion.button
      className={classNames(cls.button, {}, [className || ''])}
      type={type}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ type: 'keyframes', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.button>
  )
};

export default Button;
