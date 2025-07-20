import cls from './Card.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import ArrowRightSvg from '../../../shared/assets/images/icons/arrow-right.svg';
import { User, Users } from 'lucide-react';

interface ICardData {
  className?: string;
  title: string;
  image: string;
  gender?: 'men' | 'women' | 'unisex';
}

export const Card = ({
  className,
  title,
  image,
  gender,
}: ICardData) => {
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

  return (
    <li 
      className={classNames(cls.card, {}, [className || ''])}
    >
      <img 
        className={classNames(cls.image, {}, [])}
        alt='#'
        src={image}
      />
      <div className={classNames(cls.overlay, {}, [])} />
      <div className={classNames(cls.gender, {}, [])}>
        {getGenderIcon(gender)}
        <p className={classNames(cls.genderText, {}, [])}>
          {getGenderText(gender)}
        </p>
      </div>
      <div className={classNames(cls.svgWrap, {}, [])}>
        <img 
          className={classNames(cls.svg, {}, [])}
          alt='#'
          src={ArrowRightSvg}
        />
      </div>
      <div className={classNames(cls.titleWrap, {}, [])}>
        <h3 className={classNames(cls.title, {}, [])}>
          {title}
        </h3>
      </div>
    </li>
  )
}