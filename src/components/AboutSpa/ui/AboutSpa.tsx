import cls from './AboutSpa.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Titles from '../../../shared/ui/Titles/Titles';
import { motion } from 'framer-motion';
import { type RefObject } from 'react';
import Button from '../../../shared/ui/Button/Button';

interface AboutSpaProps {
  className?: string;
  refer: RefObject<HTMLElement | null>;
  onScroll?: () => void;
}

export const AboutSpa = ({
  className,
  refer,
}: AboutSpaProps) => {
  return (
    <section
      className={classNames(cls.section, {}, [className || ''])}
      id='#about'
      ref={refer}
    >
      <div className={classNames(cls.container, {}, [])}>
        <Titles
          isVisible={false}
          dark={false}
          uptitle='О нас'
          title='Авторские спа программы для волос и головы с аквамедитацией.
            Профессиональный подбор ухода для лица, волос и тела.'
        />
        <div className={classNames(cls.texts, {}, [])}>
          <motion.p
            className={classNames(cls.subtitle, {}, [])}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Семейный проект, созданный из любви к спокойствию, природе и здоровому образу жизни.
            Мы - Игорь и Дарья из Симферополя, открыли пространство, где каждый сможет замедлиться, выдохнуть и почувствовать настоящую, искреннюю заботу.
            Вдохновляемся Крымской природой и создаем продукты и услуги, которые помогают поддерживать ресурсное состояние.
          </motion.p>
        </div>
        <Button
          className={classNames(cls.button, {}, [])}
          href='https://taplink.cc/zudina.csm'
          children={'Подробнее'}
        />
      </div>
    </section>
  )
};
