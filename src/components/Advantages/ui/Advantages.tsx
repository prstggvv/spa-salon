import cls from './Advantages.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Titles from '../../../shared/ui/Titles/Titles';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { advantagesData } from '../model/advantagesData';

interface IAdvantagesData {
  className?: string;
}

export const Advantages = ({ className }: IAdvantagesData) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <Titles
          dark={true}
          title='Почему выбирают нас'
          uptitle='Наши преимущества'
        />
        <motion.ul
          className={classNames(cls.list, {}, [])}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {advantagesData.map((a, i) => {
            return (
              <motion.li
                key={i}
                className={classNames(cls.card, {}, [])}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={classNames(cls.svg, {}, [])}>
                  <Heart />
                </div>
                <h2 className={classNames(cls.heading, {}, [])}>
                  {a.heading}
                </h2>
                <p className={classNames(cls.description, {}, [])}>
                  {a.subtitle}
                </p>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}