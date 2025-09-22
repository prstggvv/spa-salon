import cls from './Notification.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Check, X, } from 'lucide-react';
import { useState, useEffect, } from 'react';
import { motion } from 'framer-motion';

interface INotificationData {
  className?: string;
  isOpen: boolean;
  type: 'succes' | 'error';
  onClose?: () => void;
  duration?: number;
}

export const Notification = ({
  className,
  isOpen,
  type,
  onClose,
  duration = 3000,
}: INotificationData) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (isOpen) {
      setProgress(100);

      const stepTime = 50;
      const step = (100 * stepTime) / duration;

      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(timer);
            onClose?.();
            return 0;
          }
          return prev - step;
        });
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isOpen, duration, onClose]);

  return (
    isOpen && (
      <motion.div
        className={classNames(cls.popup, {}, [className || ''])}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className={classNames(cls.content, {}, [])}>
          <motion.div
            className={classNames(cls.imageSrc, {}, [])}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 400 }}
          >
            {type === 'succes' ? (
              <Check className={classNames(cls.svg, {}, [])} />
            ) : (
              <X className={classNames(cls.svg, {}, [])} />
            )}
          </motion.div>
          <motion.div
            className={classNames(cls.mainText, {}, [])}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {type === 'succes' ? (
              <>
                <h2 className={classNames(cls.heading, {}, [])}>
                  Запрос принят!
                </h2>
                <p className={classNames(cls.text, {}, [])}>
                  Ждите звонка для подтверждения!
                </p>
              </>
            ) : (
              <>
                <h2 className={classNames(cls.heading, {}, [])}>
                  Ошибка
                </h2>
                <p className={classNames(cls.text, {}, [])}>
                  Что-то пошло не так, попробуйте еще раз!
                </p>
              </>
            )}
          </motion.div>
          <motion.button
            className={classNames(cls.close, {}, [])}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className={classNames(cls.closeIcon, {}, [])} />
          </motion.button>
        </div>
        <div className={classNames(cls.progressBar, {}, [])}>
          <div
            className={classNames(cls.progress, {}, [])}
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>
    )
  )
};
