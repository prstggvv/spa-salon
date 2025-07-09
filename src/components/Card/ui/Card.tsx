import cls from './Card.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

interface ICardData {
  className?: string;
  title: string;
  image: string;
  price: string;
  onMore?: () => void;
}

export const Card = ({
  className,
  title,
  image,
  price,
  onMore,
}: ICardData) => {
  return (
    <li 
      className={classNames(cls.card, {}, [className || ''])}
    >
      <div className={classNames(cls.gap, {}, [])}>
        <img
          className={classNames(cls.image, {}, [])}
          alt='картинка'
          src={image}
        />
        <div className={classNames(cls.info, {}, [])}>
          <h3 className={classNames(cls.heading, {}, [])}>{title}</h3>
          <p className={classNames(cls.price, {}, [])}>
            {`${price} руб`}
          </p>
        </div>
      </div>
      <div className={classNames(cls.buttons, {}, [])}>
        <button
          className={classNames(cls.button, {}, [])}
          onClick={onMore}
        >
          Подробнее
        </button>
        <button
          className={classNames(cls.button, {}, [])}
        >
          Купить
        </button>
      </div>
    </li>
  )
}