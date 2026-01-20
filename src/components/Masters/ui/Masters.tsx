import cls from './Masters.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Titles from '../../../shared/ui/Titles/Titles';
import { motion } from 'framer-motion';
import { masterData } from '../model/masterData';
import { containerVariants, masterVariants, } from '../../../shared/lib/constants';
import type { RefObject } from 'react';

interface IMastersData {
  className?: string;
  refer: RefObject<HTMLElement | null>;
  onScroll?: () => void;
}

export const Masters = ({ className, refer }: IMastersData) => {
  return (
    <section
      className={classNames(cls.section, {}, [className ?? ''])}
      ref={refer}
      id='#team'
    >
      <div className={classNames(cls.container, {}, [])}>
        <Titles
          isVisible={true}
          dark={false}
          className={classNames(cls.titles, {}, [])}
          uptitle='Наши направления'
          title='Познакомьтесь с нашей командой'
        />
        <motion.ul
          className={classNames(cls.content, {}, [])}
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          {masterData.map((c, i) => {
            const isEven = i % 2 === 0
            return (
              <motion.li
                className={classNames(cls.item, {}, [])}
                key={i}
                variants={masterVariants}
              >
                <motion.div
                  className={classNames(cls.imageBlock, {}, [])}
                  initial={{ opacity: 0, scale: 0.9, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className={classNames(cls.imageDekstop, {}, [])}>
                    <img
                      className={classNames(cls.image, {}, [])}
                      alt='#'
                      src={c.image}
                    />
                  </div>
                  <div className={classNames(cls.imageMobile, {}, [])}>
                    <img
                      className={classNames(cls.image, {
                        [cls.low]: i === 2,
                        [cls.lowSecond]: i === 3,
                      }, [])}
                      alt='#'
                      src={c.image}
                    />
                  </div>
                </motion.div>
                <motion.div
                  className={classNames(cls.infoBlock, {}, [])}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className={classNames(cls.mainBlock, {}, [])}>
                    <motion.h3
                      className={classNames(cls.heading, {}, [])}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {c.name}
                    </motion.h3>
                    <motion.p
                      className={classNames(cls.text, {}, [])}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {c.text}
                    </motion.p>
                  </div>
                  <a
                    className={classNames(cls.button, {}, [])}
                    href='https://dikidi.net/1497252'
                    target='_blank'
                  >
                    Записаться
                  </a>
                </motion.div>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}

/* 
<ul className={classNames(cls.list, {}, [])}>
          <li className={classNames(cls.card, {}, [])}>
            <div className={classNames(cls.imageBlock, {}, [])}>
              <div className={classNames(cls.imageWrapper, {}, [])}>
                <img
                  src={ImageWrapp}
                  alt='Имя Фамилия'
                  className={classNames(cls.image, {}, [])}
                  style={{ maxHeight: '500px' }}
                />
              </div>
            </div>
            <div className={classNames(cls.mainInfo, {}, [])}>
              <div className={classNames(cls.nameBlock, {}, [])}>
                <h3 className={classNames(cls.name, {}, [])}>Игорь Зудин</h3>
                <p className={classNames(cls.position, {}, [])}>Мастер</p>
              </div>
              <p className={classNames(cls.description, {}, [])}>
                Опытный мастер с более чем 8-летним стажем в сфере красоты. Специализируется на создании индивидуального образа для каждого клиента, используя современные техники и качественные материалы. Постоянно совершенствует свои навыки, посещая мастер-классы ведущих специалистов индустрии.
              </p>
              <div className={classNames(cls.servicesBlock, {}, [])}>
                <h4 className={classNames(cls.servicesTitle, {}, [])}>Специализация:</h4>
                <div className={classNames(cls.servicesList, {}, [])}>
                  <div className={classNames(cls.serviceCard, {}, [])}>
                    <p className={classNames(cls.job, {}, [])}>
                      Услуга 1
                    </p>
                  </div>
                  <div className={classNames(cls.serviceCard, {}, [])}>
                    <p className={classNames(cls.job, {}, [])}>
                      Услуга 1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className={classNames(cls.card, {}, [])}>
            <div className={classNames(cls.imageBlock, {}, [])}>
              <div className={classNames(cls.imageWrapper, {}, [])}>
                <img
                  src={ImageWrapp}
                  alt='Имя Фамилия'
                  className={classNames(cls.image, {}, [])}
                  style={{ maxHeight: '500px' }}
                />
              </div>
            </div>
            <div className={classNames(cls.mainInfo, {}, [])}>
              <div className={classNames(cls.nameBlock, {}, [])}>
                <h3 className={classNames(cls.name, {}, [])}>Игорь Зудин</h3>
                <p className={classNames(cls.position, {}, [])}>Мастер</p>
              </div>
              <p className={classNames(cls.description, {}, [])}>
                Опытный мастер с более чем 8-летним стажем в сфере красоты. Специализируется на создании индивидуального образа для каждого клиента, используя современные техники и качественные материалы. Постоянно совершенствует свои навыки, посещая мастер-классы ведущих специалистов индустрии.
              </p>
              <div className={classNames(cls.servicesBlock, {}, [])}>
                <h4 className={classNames(cls.servicesTitle, {}, [])}>Специализация:</h4>
                <div className={classNames(cls.servicesList, {}, [])}>
                  <div className={classNames(cls.serviceCard, {}, [])}>
                    <p className={classNames(cls.job, {}, [])}>
                      Услуга 1
                    </p>
                  </div>
                  <div className={classNames(cls.serviceCard, {}, [])}>
                    <p className={classNames(cls.job, {}, [])}>
                      Услуга 1
                    </p>
                  </div>
                  <div className={classNames(cls.serviceCard, {}, [])}>
                    <p className={classNames(cls.job, {}, [])}>
                      Услуга 1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
*/