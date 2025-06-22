import cls from './Service.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { ProductCard } from '../../ProductCard';
import ArrowRightIconDark from '../../../shared/assets/images/icons/arrow-right-dark.svg';
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
            <img 
              src={ArrowRightIconDark}
              alt='arrow-right'
              className={classNames(cls.arrow, {}, [])}
            />
          </button>
          <button type="button" className={cls.navButton}>
            <img 
              src={ArrowRightIconDark}
              alt='arrow-right'
              className={classNames(cls.arrow, {}, [])}
            />
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