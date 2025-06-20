import cls from './StarImage.module.css';
import { classNames } from '../../lib/classNames/classNames';
import StarImageSrc from '../../assets/images/icons/star/star.svg';

export const StarImage = () => {
  return (
    <img 
      className={classNames(cls.star, {}, [])}
      alt='star'
      src={StarImageSrc}
    />
  )
}