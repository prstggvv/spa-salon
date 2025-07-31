import cls from './Popup.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import type React from 'react';
import ImageWW from '../../../shared/assets/images/IMAGE.jpeg';
import Button from '../../../shared/ui/Button/Button';
import { X, Clock, UserPlus, User } from 'lucide-react';

interface IPopupData {
  className?: string;
  isOpen: boolean;
  onClose?: (evt: React.MouseEvent) => void;
}

export const Popup = ({
  className,
  isOpen,
  onClose,
}: IPopupData) => {
  return (
    <div className={classNames(cls.popup, { [cls.open]: isOpen }, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <button
          onClick={onClose}
          className={classNames(cls.close, {}, [])}>
          <X
            className={classNames(cls.closeIcon, {}, [])}
          />
        </button>
        <div className={classNames(cls.imageWrapper, {}, [])}>
          <img
            className={classNames(cls.image, {}, [])}
            src={ImageWW}
            alt='#'
          />
        </div>
        <div className={classNames(cls.content, {}, [])}>
          <div className={classNames(cls.gap, {}, [])}>
            <h2 className={classNames(cls.title, {}, [])}>
              Массаж
            </h2>
            <ul className={classNames(cls.block, {}, [])}>
              <li className={classNames(cls.card, {}, [])}>
                <Clock
                  className={classNames(cls.icon, {}, [])}
                />
                <p className={classNames(cls.text, {}, [])}>
                  60 минут
                </p>
              </li>
              <li className={classNames(cls.card, {}, [])}>
                <UserPlus
                  className={classNames(cls.icon, {}, [])}
                />
                <p className={classNames(cls.text, {}, [])}>
                  Игорь Зудин
                </p>
              </li>
              <li className={classNames(cls.card, {}, [])}>
                <User
                  className={classNames(cls.icon, {}, [])}
                />
                <p className={classNames(cls.text, {}, [])}>
                  Для мужчин
                </p>
              </li>
            </ul>
            <p className={classNames(cls.price, {}, [])}>2700 руб.</p>
            <p className={classNames(cls.description, {}, [])}>
              Pamper yourself with our deluxe manicure service.
              Includes nail shaping, cuticle care, hand massage,
              and your choice of polish or nail art design.
            </p>
          </div>
          <Button
            type='button'
            children='Купить'
            className={classNames(cls.button, {}, [])}
          />
        </div>
      </div>
    </div>
  )
}