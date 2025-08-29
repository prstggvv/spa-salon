import cls from './AboutSpa.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Button from '../../../shared/ui/Button/Button';
import Titles from '../../../shared/ui/Titles/Titles';
import { motion } from 'framer-motion';
import { type RefObject } from 'react';

interface AboutSpaProps {
  className?: string;
  refer: RefObject<HTMLElement | null>;
  onScroll?: () => void;
}
export const AboutSpa = ({ 
  className,
  refer,
  onScroll,
}: AboutSpaProps) => {
  return (
    <section
      className={classNames(cls.section, {}, [className || ''])}
      id='#about'
      ref={refer}
    >
      <div className={classNames(cls.container, {}, [])}>
        <Titles
          dark={false}
          uptitle='О нас'
          title='Спа-салон в Симферополе'
        />
        <motion.p
          className={classNames(cls.subtitle, {}, [])}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          Камерное пространство для вашего идеального отдыха в самом центре Москвы.
          Спрятаться от суеты большого города, чтобы встретиться с
          самым важным человеком – собой. Мы продумали все для
          вашего уединения и с первого шага погрузим в атмосферу
          уюта, расслабления и роскошного комфорта.
        </motion.p>
        <Button
          children='Подробнее'
          onClick={onScroll}
          type='button'
          className={classNames(cls.button, {}, [])}
        />
      </div>
    </section>
  )
};
