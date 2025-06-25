import cls from './Carousel.module.css';
import { classNames } from '../../lib/classNames/classNames';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Анна Петрова',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna',
    rating: 5,
    text: 'Потрясающий опыт! Процедуры в Amoveo Spa помогли мне полностью расслабиться и забыть о повседневных заботах. Профессиональные мастера и приятная атмосфера. Обязательно вернусь снова!',
  },
  {
    id: 2,
    name: 'Михаил Соколов',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mikhail',
    rating: 4,
    text: 'Отличный сервис и внимательный персонал. Массаж был именно тем, что мне было нужно после напряженной рабочей недели. Рекомендую всем, кто ценит качество и профессионализм.',
  },
  {
    id: 3,
    name: 'Елена Иванова',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
    rating: 5,
    text: 'Я в восторге от процедур по уходу за лицом! Результат превзошел все мои ожидания. Кожа выглядит свежей и сияющей. Спасибо команде Amoveo Spa за такой замечательный опыт!',
  },
  {
    id: 4,
    name: 'Дмитрий Козлов',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry',
    rating: 5,
    text: 'Подарил жене сертификат на спа-день, и она вернулась полностью преображенной. Теперь мы оба постоянные клиенты. Особенно понравились комплексные программы и индивидуальный подход.',
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export const Carousel = ({ className }: { className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className={classNames(cls.carouselWrapper, {}, [className || ''])}>
      <div className={classNames(cls.carousel, {}, [])}>
        <AnimatePresence 
          initial={false}
          custom={direction}
          mode="wait"
        >
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className={cls.slide}
          >
            <div className={classNames(cls.stars, {}, [])}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={classNames(cls.star, {
                    [cls.filled]: i < testimonials[currentIndex].rating,
                  }, [])}
                >
                  ★
                </span>
              ))}
            </div>
            <div className={classNames(cls.textBlock, {}, [])}>
              <p className={classNames(cls.text, {}, [])}>
                "{testimonials[currentIndex].text}"
              </p>
              <h3 className={classNames(cls.name, {}, [])}>{testimonials[currentIndex].name}</h3>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className={classNames(cls.dotsWrapper, {}, [])}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={classNames(cls.dot, {
                [cls.active]: index === currentIndex,
              }, [])}
              aria-label={`Перейти к слайду ${index + 1}`}
              tabIndex={0}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
}