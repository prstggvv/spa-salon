import cls from './Button.module.css';
import { classNames } from '../../lib/classNames/classNames';

interface IButtonProps {
  className?: string;
  type: 'button' | 'reset' | 'submit';
  children: any;
}

const Button = ({ 
  className,
  type,
  children,
}: IButtonProps) => {
  return (
    <button
      className={classNames(cls.button, {}, [className || ''])}
      type={type}
    >
      {children}
    </button>
  )
};

export default Button;
