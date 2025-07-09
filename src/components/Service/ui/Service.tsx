import cls from './Service.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Title from '../../../shared/ui/Title/Title';
import FirstImage from '../../../shared/assets/images/cards/first.jpeg';
import SecondImage from '../../../shared/assets/images/cards/second.jpeg';
import ThirdImage from '../../../shared/assets/images/cards/third.jpeg';
import { Card } from '../../Card/ui/Card';

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
        <ul className={classNames(cls.list, {}, [])}>
          <Card 
            title='Массаж'
            image={FirstImage}
            price='3600'
            onMore={() => {}}
          />
          <Card 
            title='Массаж'
            image={SecondImage}
            price='3600'
            onMore={() => {}}
          />
          <Card 
            title='Массаж'
            image={ThirdImage}
            price='3600'
            onMore={() => {}}
          />
        </ul>
      </div>
    </section>
  )
}