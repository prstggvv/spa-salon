import cls from './Service.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { ProductCard } from '../../ProductCard';
import ArrowLeft from '../../../shared/ui/ArrowLeft/ArrowLeft';
import ArrowRight from '../../../shared/ui/ArrowRight/ArrowRight';
import Title from '../../../shared/ui/Title/Title';

interface ServiceProps {
  className?: string;
}

export const Service = ({ className }: ServiceProps) => (
  <section className={classNames(cls.section, {}, [className || ''])}>
    <div className={classNames(cls.container, {}, [])}>
      <div className={cls.header}>
        <div className={cls.headerText}>
          <Title 
            className={classNames(cls.title, {}, [])}
            children='Наши услуги'
          />
          <p className={cls.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
        <div className={cls.navigation}>
          <button type="button" className={cls.navButton}>
            <ArrowLeft />
          </button>
          <button type="button" className={cls.navButton}>
            <ArrowRight />
          </button>
        </div>
      </div>
      <ul className={classNames(cls.list, {}, [])}>
        <ProductCard className={classNames(cls.card, {}, [])} />
        <ProductCard className={classNames(cls.card, {}, [])} />
        <ProductCard className={classNames(cls.card, {}, [])} />
      </ul>
    </div>
  </section>
);