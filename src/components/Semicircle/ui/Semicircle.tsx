import cls from './Semicircle.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

interface ISemicircle {
  className?: string;
}

export const Semicircle = ({ className }: ISemicircle) => {
  return (
    <div className={classNames(cls.main, {}, [className ?? ''])}></div>
  )
};
