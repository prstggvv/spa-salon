import cls from './Popup.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import type React from 'react';
import ImageWW from '../../../shared/assets/images/IMAGE.jpeg';
import Button from '../../../shared/ui/Button/Button';
import { X, Clock, UserPlus, User } from 'lucide-react';
import type { IServiceProps } from '../../../types';
import { motion } from "framer-motion";

interface IPopupData {
  className?: string;
  isOpen: boolean;
  onClose?: (evt: React.MouseEvent) => void;
  service?: IServiceProps;
  onBuy: (title: string) => void;
}

export const Popup = ({
  className,
  isOpen,
  onClose,
  service,
  onBuy,
}: IPopupData) => {
  const handleCardBuy = () => {
    onBuy(service?.title ?? '');
  }

  return (
    <motion.div
      className={classNames(cls.popup, { [cls.open]: isOpen }, [className ?? ''])}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={classNames(cls.container, {}, [])}>
        <button
          onClick={onClose}
          className={classNames(cls.close, {}, [])}>
          <X
            className={classNames(cls.closeIcon, {}, [])}
          />
        </button>
        <div className={classNames(cls.scrollable, {}, [])}>
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
                {service?.title}
              </h2>
              <ul className={classNames(cls.block, {}, [])}>
                <li className={classNames(cls.card, {}, [])}>
                  <Clock
                    className={classNames(cls.icon, {}, [])}
                  />
                  <p className={classNames(cls.text, {}, [])}>
                    {`${service?.duration} минут`}
                  </p>
                </li>
                <li className={classNames(cls.card, {}, [])}>
                  <UserPlus
                    className={classNames(cls.icon, {}, [])}
                  />
                  <p className={classNames(cls.text, {}, [])}>
                    {service?.master}
                  </p>
                </li>
                <li className={classNames(cls.card, {}, [])}>
                  <User
                    className={classNames(cls.icon, {}, [])}
                  />
                  <p className={classNames(cls.text, {}, [])}>
                    {service?.genderText}
                  </p>
                </li>
              </ul>
              <p className={classNames(cls.price, {}, [])}>{service?.price} руб.</p>
              <p className={classNames(cls.description, {}, [])}>
                {service?.text}
              </p>
            </div>
            <Button
              type='button'
              children='Купить'
              onClick={handleCardBuy}
              className={classNames(cls.button, {}, [])}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}