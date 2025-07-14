import cls from './ProductCard.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import ArrowRightSvg from '../../../shared/assets/images/icons/arrow-right.svg';
import { User, Users } from 'lucide-react';

interface ProductCardProps {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  alt?: string;
  gender?: 'men' | 'women' | 'unisex';
  price?: string;
}

const getGenderIcon = (gender?: string) => {
  switch (gender) {
    case 'men':
      return <User className={cls.genderIcon} color="#60a5fa" size={20} aria-label="Мужчина" />;
    case 'women':
      return <User className={cls.genderIcon} color="#f472b6" size={20} aria-label="Женщина" />;
    case 'unisex':
      return <Users className={cls.genderIcon} color="#a78bfa" size={20} aria-label="Для всех" />;
    default:
      return <Users className={cls.genderIcon} color="#a3a3a3" size={20} aria-label="Для всех" />;
  }
};

const getGenderText = (gender?: string) => {
  switch (gender) {
    case 'men':
      return 'Для мужчин';
    case 'women':
      return 'Для женщин';
    case 'unisex':
      return 'Для всех';
    default:
      return 'Для всех';
  }
};

export const ProductCard = ({
  className,
  title = 'Массаж',
  image = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  alt = 'Изображение услуги',
  gender = 'unisex',
  price = '2800 руб.',
}: ProductCardProps) => (
  <li
    className={classNames(cls.card, {}, [className || ''])}
    tabIndex={0}
    aria-label={`Карточка услуги: ${title}`}
    role="button"
    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') (e.currentTarget as HTMLElement).click(); }}
  >
    <img
      src={image}
      alt={alt}
      className={classNames(cls.image, {}, [])}
    />
    <div className={classNames(cls.overlay, {}, [])} />
    <div className={classNames(cls.genderInfo, {}, [])}>
      <div className={cls.genderWrap}>
        {getGenderIcon(gender)}
          <span 
            className={cls.genderText}
          >
              {getGenderText(gender)}
          </span>
      </div>
    </div>
    <div className={classNames(cls.titleWrap, {}, [])}>
      <h3 className={cls.heading}>
        {title}
      </h3>
    </div>
    <div className={classNames(cls.priceWrap, {}, [])}>
      <div className={classNames(cls.priceContent, {}, [])}>
        <div className={classNames(cls.priceValue, {}, [])}>
          {price}
        </div>
        <img
          className={classNames(cls.arrow, {}, [])}
          src={ArrowRightSvg}
          alt="стрелка"
        />
      </div>
    </div>
  </li>
);