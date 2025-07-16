import cls from './AboutSpa.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Button from '../../../shared/ui/Button/Button';
import ImageBlock from '../../../shared/assets/images/f2ymw6hfmjuq5v2dxwbbkzfsh34dr62q.webp';

interface AboutSpaProps {
  className?: string;
}
export const AboutSpa = ({ className }: AboutSpaProps) => {
  return (
    <section
      className={classNames(cls.section, {}, [className || ''])}
    >
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.mainInfo, {}, [])}>
          <p className={classNames(cls.uptitle, {}, [])}>
            О нас
          </p>
          <h2 className={classNames(cls.title, {}, [])}>
            Спа-салон в Симферополе
          </h2>
          <p className={classNames(cls.subtitle, {}, [])}>
            Камерное пространство для вашего идеального отдыха в самом центре Москвы. 
            Спрятаться от суеты большого города, чтобы встретиться с 
            самым важным человеком – собой. Мы продумали все для 
            вашего уединения и с первого шага погрузим в атмосферу 
            уюта, расслабления и роскошного комфорта.
          </p>
          <Button 
            children='Подробнее'
            type='button'
            className={classNames(cls.button, {}, [])}
          />
        </div>
        <div className={classNames(cls.imageBlock, {}, [])}>
          <div className={classNames(cls.imageWrap, {}, [])}>
            <img 
              className={classNames(cls.image, {}, [])}
              alt='логотип'
              src={ImageBlock}
            />
          </div>
        </div>
      </div>
    </section>
  )
}