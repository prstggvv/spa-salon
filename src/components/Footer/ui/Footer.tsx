import cls from './Footer.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Phone, MapPin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import VKSvg from '../../../shared/assets/images/icons/hrefs/vk.svg';
import TelegramSvg from '../../../shared/assets/images/icons/hrefs/telegram.svg';
import { footerData } from '../model/footerData';

interface IFooterData {
  className?: string;
}

export const Footer = ({ className }: IFooterData) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <footer className={classNames(cls.footer, {}, [className ?? ''])}>
      <motion.div
        className={classNames(cls.container, {}, [])}
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div
          className={classNames(cls.info, {}, [])}
          variants={itemVariants}
        >
          <h2 className={classNames(cls.title, {}, [])}>Le Halo Spa</h2>
          <p className={classNames(cls.subtitle, {}, [])}>Наши контакты</p>
        </motion.div>
        <motion.ul
          className={classNames(cls.list, {}, [])}
          variants={containerVariants}
        >
          {footerData.map(({ icon: Icon, heading }, i) => {
            return (
              <motion.li
                className={classNames(cls.card, {}, [])}
                variants={itemVariants}
                key={i}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={classNames(cls.img, {}, [])}

                >
                  <Icon />
                </motion.div>
                <p className={classNames(cls.text, {}, [])}>
                  {heading}
                </p>
              </motion.li>
            )
          })}
        </motion.ul>
        <nav className={classNames(cls.links, {}, [])}>
          <a
            className={classNames(cls.link, {}, [])}
            href='#'
          >
            <img
              className={classNames(cls.svg, {}, [])}
              alt='Логотип соцсети'
              src={VKSvg}
            />
            <p className={classNames(cls.linkText, {}, [])}>Вконтакте</p>
          </a>
          <a
            className={classNames(cls.link, {}, [])}
            href='#'
          >
            <img
              className={classNames(cls.svg, {}, [])}
              alt='Логотип соцсети'
              src={TelegramSvg}
            />
            <p className={classNames(cls.linkText, {}, [])}>Телеграм</p>
          </a>
        </nav>
      </motion.div>
    </footer>
  )
}