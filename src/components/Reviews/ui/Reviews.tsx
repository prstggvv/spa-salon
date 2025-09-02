import cls from './Reviews.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { motion } from 'framer-motion';
import Titles from '../../../shared/ui/Titles/Titles';
import { reviewsData } from '../model/reviewsData';
import { itemVariants } from '../../../shared/lib/constants';
import type { RefObject } from 'react';
import { YandexReviews } from '../../YandexReviews';

const Stars = () => (
  <div
    className={classNames(cls.stars, {}, [])}
    aria-label="5 звезд"
  >
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={classNames(cls.starIcon, {}, [])}
        width="20" height="20" viewBox="0 0 20 20" fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="#fde68a" />
      </svg>
    ))}
  </div>
);

interface IReviewsData {
  className?: string;
  refer: RefObject<HTMLElement | null>;
}

export const Reviews = ({
  className,
  refer,
}: IReviewsData) => {
  return (
    <section
      className={classNames(cls.section, {}, [className ?? ''])}
      ref={refer}
      id='#reviews'
    >
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.mainInfo, {}, [])}>
          <Titles
            uptitle='Отзывы'
            title='Что говорят наши клиенты'
            dark={true}
          />
        </div>
          <YandexReviews />
      </div>
    </section>
  );
}

/*
  <motion.ul
            className={classNames(cls.grid, {}, [])}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {reviewsData.map((c) => {
              return (
                <motion.li
                  className={classNames(cls.review, {}, [])}
                  key={c.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className={classNames(cls.block, {}, [])}>
                    <Stars />
                    <p className={classNames(cls.reviewText, {}, [])}>
                      {c.text}
                    </p>
                  </div>
                  <p className={classNames(cls.author, {}, [])}>{`- ${c.name}`}</p>
                </motion.li>
              )
            })}
          </motion.ul>
*/