import cls from './Button.module.css';
import { classNames } from '../../lib/classNames/classNames';

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
    <button
      className={classNames(cls.button, {}, [className || ''])}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
};

export default Button;
