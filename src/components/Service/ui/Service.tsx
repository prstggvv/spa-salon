import cls from './Service.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Title from '../../../shared/ui/Title/Title';
import { ProductCard } from '../../ProductCard';
import { serviceData } from '../model/serviceData';
import StrelkaImage from '../../../shared/assets/images/icons/Strelka.svg';
import { Card } from '../../Card';

interface IServiceData {
  className?: string;
}

export const Service = ({ className }: IServiceData) => {
  return (
    <section className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <Title
          className={classNames(cls.title, {}, [])}
          children='Наши услуги'
        />
        <div className={classNames(cls.info, {}, [])}>
          <ul className={classNames(cls.list, {}, [])}>
            {serviceData.map((s, i) => {
              return (
                <Card 
                  title={s.title}
                  image={s.image}
                  gender={s.gender}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}