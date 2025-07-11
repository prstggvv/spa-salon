import { motion } from 'framer-motion';
import cls from './AboutSpa.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Title from '../../../shared/ui/Title/Title';
import Button from '../../../shared/ui/Button/Button';

interface AboutSpaProps {
  className?: string;
}
export const AboutSpa = ({ className }: AboutSpaProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={classNames(cls.section, {}, [className || ''])}
    >
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.mainInfo, {}, [])}>
          <Title
            className={classNames(cls.title, {}, [])}
            children='О нас'
          />
          <div className={classNames(cls.line, {}, [])}></div>
          <motion.p
            className={classNames(cls.subtitle, {}, [])}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Feugiat enim tortor in hac id imperdiet adipiscing.
            Pellentesque nisi, mi sit non sit sed fermentum. Felis
            adipiscing morbi sodales ac. Mauris dictumst risus
            pulvinar blandit elit. Vestibulum quam ultrices
            nascetur et viverra suscipit. Proin vitae aliquet
            leo aliquam amet rutrum. Lectus auctor purus ultrices
            enim ultrices. Augue fringilla tellus tortor orci
            ultrices sed. Viverra cras sapien, pellentesque viverra
            malesuada. Tellus dolor, eget vitae dignissim molestie
            eget sit duis. Vitae dui vel pretium euismod diam.
            Pellentesque amet, lacus, amet, quis risus. Pellentesque
            scelerisque nunc, orci aliquam quis.
          </motion.p>
        </div>
        <Button
          className={classNames(cls.button, {}, [])}
          children='Подробнее'
          type='button'
        />
      </div>
    </motion.section>
  )
}