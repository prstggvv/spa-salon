import cls from './Notification.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Check, X, } from 'lucide-react';

interface INotificationData {
  className?: string;
  isOpen: boolean;
  type: 'success' | 'error';
  onClose: (evt: React.MouseEvent) => void;
}

export const Notification = ({
  className,
  isOpen,
  type,
  onClose,
}: INotificationData) => {
  return (
    <div className={classNames(cls.popup, { [cls.open]: isOpen }, [className || ''])}>
      <div className={classNames(cls.content, {}, [])}>
        <div className={classNames(cls.imageSrc, {}, [])}>
          {type === 'success' ? (
            <Check className={classNames(cls.svg, {}, [])} />
          ) : (
            <X className={classNames(cls.svg, {}, [])} />
          )}
        </div>
        <div className={classNames(cls.mainText, {}, [])}>
          <h2 className={classNames(cls.heading, {}, [])}>
            {type === 'success' ? (
              'Запрос принят!'
            ) : (
              'Ошибка!'
            )}
          </h2>
          <p className={classNames(cls.text, {}, [])}>
            {type === 'success' ? (
              'Запрос прошел, мы вам перезвоним для уточнения'
            ) : (
              'Что-то пошло не так, попробуйте еще раз!'
            )}
          </p>
        </div>
        <button
          className={classNames(cls.close, {}, [])}
          onClick={onClose}
        >
          <X className={classNames(cls.closeIcon, {}, [])} />
        </button>
      </div>
    </div>
  )
};
