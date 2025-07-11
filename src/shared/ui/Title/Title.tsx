import cls from './Title.module.css';
import { classNames } from '../../lib/classNames/classNames';

interface ITitleProps {
  className?: string;
  children: string;
}

const Title = ({ className, children }: ITitleProps) => {
  return (
    <h2
      className={classNames(cls.title, {}, [className || ''])}
    >
      {children}
    </h2>
  )
}

export default Title;
