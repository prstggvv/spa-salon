import cls from './ProductCard.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import ArrowRight from '../../../shared/ui/ArrowRight/ArrowRight';

interface ProductCardProps {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
}

export const ProductCard = ({
  className,
  title = 'Массаж',
  image = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
}: ProductCardProps) => (
  <li className={classNames(cls.card, {}, [className || ''])}>
    <div className={cls.imageWrap}>
      <img 
        src={image}
        alt={title}
        className={cls.image} 
      />
    </div>
    <div className={cls.overlay} />
    <div className={cls.mainInfo}>
      <h3 className={cls.heading}>{title}</h3>
      <div className={classNames(cls.price, {}, [])}>
        <p className={classNames(cls.priceValue, {}, [])}>2800 руб.</p>
        <ArrowRight 
          className={classNames(cls.arrow, {}, [])}
        />
      </div>
    </div>
  </li>
);