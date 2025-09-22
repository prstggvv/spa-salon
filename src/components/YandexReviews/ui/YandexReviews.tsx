import cls from './YandexReviews.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

interface IYandexReviews {
  className?: string;
  width?: string;
  height?: string;
}

export const YandexReviews = ({ 
  className,
  width = '560px',
  height = '800px',
}: IYandexReviews) => {
  return (
    <div 
      className={classNames(cls.yandex, {}, [className ?? ''])}
      style={{ 
        width, 
        height, 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <iframe
        className={classNames(cls.iframe, {}, [])}
        src="https://yandex.ru/maps-reviews-widget/43987756045?comments"
        title="Отзывы Яндекс Карт для Премьера"
        frameBorder="0"
        allowFullScreen
      />
      <a
        href="https://yandex.ru/maps/org/premyera/43987756045/"
        target="_blank"
        rel="noopener noreferrer"
        className={classNames(cls.link, {}, [])}
      >
        Премьера на карте Симферополя — Яндекс Карты
      </a>
    </div>
  )
}