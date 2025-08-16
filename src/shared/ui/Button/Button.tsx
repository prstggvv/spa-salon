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
    >
      {children}
    </motion.button>
  )
};

export default Button;
