import cls from './Reviews.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { StarImage } from '../../../shared/ui/StarImage/StarImage';
import Title from '../../../shared/ui/Title/Title';
import { Carousel } from '../../../shared/ui/Carousel/Carousel';

export const Reviews = () => {
  return (
    <section className={classNames(cls.section, {}, [])}>
      <div className={classNames(cls.container, {}, [])}>
        <Title 
          children='Отзывы'
        />
        <div className={classNames(cls.reviews, {}, [])}>
          <Carousel />
        </div>
      </div>
    </section>
  )
}