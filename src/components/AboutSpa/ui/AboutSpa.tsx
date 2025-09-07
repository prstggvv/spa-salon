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
          title='Уютное пространство гармонии и восстановления'
        />
        <div className={classNames(cls.texts, {}, [])}>
          <motion.p
            className={classNames(cls.subtitle, {}, [])}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Наш главный ритуал - японский спа головы с аквамедитацией,
            который совмещает многоуровневый уход расслабляющими спа-массажными
            техниками за кожей головы и волосами с использованием премиальной косметики.
          </motion.p>
          <motion.p
            className={classNames(cls.subtitle, {}, [])}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Также вас ждут спа ритуалы для тела, лица и волос, аромарелаксация и чайная церемония.
            Мы объединяем профессиональный уход с атмосферой заботы и перезагрузки.
          </motion.p>
        </div>
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

// Также вас ждут спа ритуалы для тела, лица и волос, аромарелаксация и чайная церемония. Мы объединяем профессиональный уход с атмосферой заботы и перезагрузки.
