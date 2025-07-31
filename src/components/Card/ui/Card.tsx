import cls from './Card.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { User, Users } from 'lucide-react';

interface ICardData {
  className?: string;
  title: string;
  image: string;
  price: string;
  onMore?: () => void;
  gender?: string;
  cards: number;
}

export const Card = ({
  className,
  title,
  image,
  price,
  onMore,
  gender,
  cards,
}: ICardData) => {
  const style = {
    flex: `0 0 calc(${100 / cards}% - 20px)`,
    maxWidth: `calc(${100 / cards}% - 20px)`,
  };

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

  const getBackgroundColor = (gender?: string) => {
    switch (gender) {
      case 'men':
        return 'rgb(219 234 254)';
      case 'women':
        return 'rgb(252 231 243)';
      case 'unisex':
        return 'rgb(220 252 231)';
      default:
        return 'rgb(220 252 231)';
    }
  }

  return (
    <div
      className={classNames(cls.card, {}, [className || ''])}
    >
      <div className={classNames(cls.gap, {}, [])}>
        <div className={classNames(cls.imageWrapper)}>
          <img
            className={classNames(cls.image, {}, [])}
            alt='картинка'
            src={image}
          />
          <div
            className={classNames(cls.genderInfo, {}, [getBackgroundColor(gender)])}
          >
            {getGenderIcon(gender)}
            <span
              className={classNames(cls.genderText, {}, [])}
            >
              {getGenderText(gender)}
            </span>
          </div>
        </div>
        <div className={classNames(cls.info, {}, [])}>
          <h3 className={classNames(cls.heading, {}, [])}>{title}</h3>
          <p className={classNames(cls.price, {}, [])}>
            {`${price} руб`}
          </p>
        </div>
      </div>
      <div className={classNames(cls.buttons, {}, [])}>
        <button
          className={classNames(cls.button, {}, [cls.buttonLeft])}
          onClick={onMore}
        >
          Подробнее
        </button>
        <button
          className={classNames(cls.button, {}, [cls.buttonRight])}
        >
          Купить
        </button>
      </div>
    </div>
  )
}