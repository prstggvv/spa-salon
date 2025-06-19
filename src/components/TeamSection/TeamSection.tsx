import React from 'react';
import { motion } from 'framer-motion';
import cls from './TeamSection.module.css';
import { classNames } from '../../shared/lib/classNames/classNames';

const MAX_IMAGE = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80';

const teamMembers = [
  {
    name: 'МАКС',
    role: 'CEO',
    img: MAX_IMAGE,
    alt: 'Фото Макса, CEO',
  },
  {
    name: 'АНЯ',
    role: 'Co-Founder',
    img: MAX_IMAGE,
    alt: 'Фото Ани, Co-Founder',
  },
  {
    name: 'МИЛА',
    role: 'Designer',
    img: MAX_IMAGE,
    alt: 'Фото Милы, Designer',
  },
];

const TeamSection: React.FC = () => (
  <section className={cls.teamSection} aria-label="Наша команда">
    <div className={cls.container}>
      <motion.div
        className={cls.block}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2 className={cls.title}>Наша команда</h2>
        <div className={cls.line} />
      </motion.div>
      <ul className={cls.teamGrid}>
        {teamMembers.map((member, i) => (
          <motion.li
            key={i}
            className={cls.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={cls.photoWrapper}>
              <motion.img
                src={member.img}
                alt={member.alt}
                className={cls.photo}
                whileHover={{ scale: 1.02 }}
              />
              <div className={cls.photoOverlay} />
            </div>
            <div className={classNames(cls.info, {}, [])}>
              <p className={cls.name}>{member.name}</p>
              <p className={cls.role}>{member.role}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default TeamSection; 