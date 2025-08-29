import cls from './Service.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { serviceData } from '../model/serviceData';
import { Card } from '../../Card';
import StrelkaImage from '../../../shared/assets/images/icons/Strelka.svg';
import { useEffect, useState } from 'react';
import Titles from '../../../shared/ui/Titles/Titles';
import { motion } from 'framer-motion';
import type { RefObject } from 'react';

interface IServiceData {
  className?: string;
  onClick: () => void;
  onBuy: (title: string) => void;
  refer: RefObject<HTMLElement | null>;
}

export const Service = ({ 
  className,
  onClick,
  onBuy,
  refer,
}: IServiceData) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState(3);
  
  const updateCardsPerView = () => {
    const width = window.innerWidth;
    if (width < 656) {
      setCards(1)
    } else if (width < 1024) {
      setCards(2)
    } else {
      setCards(3)
    }
  }

  useEffect(() => {
    updateCardsPerView();

    window.addEventListener('resize', updateCardsPerView);
    return () => {
      window.removeEventListener('resize', updateCardsPerView);
    }
  }, []);

  useEffect(() => {
    const max = Math.max(0, serviceData.length - cards);
    if (currentIndex > max) {
      setCurrentIndex(max);
    }
  }, [cards, serviceData.length, currentIndex]);

  const max = Math.max(0, serviceData.length - cards);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, max));
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }

  const style = {
    flex: `0 0 calc(${100 / cards}% - 20px)`,
    maxWidth: `calc(${100 / cards}% - 20px)`,
  };

  return (
    <section
      className={classNames(cls.section, {}, [className || ''])}
      id='#service'
      ref={refer}
    >
      <div className={classNames(cls.container, {}, [])}>
        <Titles
          dark={false}
          uptitle='Сервис'
          title='Наши услуги'
        />
        <div className={classNames(cls.info, {}, [])}>
          <motion.button
            className={classNames(cls.button, {}, [cls.buttonLeft])}
            onClick={prevSlide}
            disabled={currentIndex === 0}
            initial={{ opacity: 0, x: -20, rotate: 180 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              className={classNames(cls.svg, {}, [])}
              alt='#'
              src={StrelkaImage}
            />
          </motion.button>
          <motion.div
            className={classNames(cls.slider, {}, [])}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ul
              className={classNames(cls.list, {}, [])}
              style={{
                transform: `translateX(-${(currentIndex * 100) / cards}%)`,
              }}
            >
              {serviceData.map((s) => {
                return (
                  <motion.li
                    className={classNames(cls.cardLi, {}, [])}
                    key={s.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{ ...style }}
                  >
                    <Card
                      title={s.title}
                      image={s.image}
                      price={s.price}
                      gender={s.gender}
                      onMore={onClick}
                      onBuy={onBuy}
                    />
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
          <motion.button
            className={classNames(cls.button, {}, [cls.buttonRight])}
            onClick={nextSlide}
            disabled={currentIndex === max}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              className={classNames(cls.svg, {}, [])}
              alt='#'
              src={StrelkaImage}
            />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
