import cls from './ContactForm.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import React from 'react';
import type { RefObject } from 'react';
import { motion } from 'framer-motion';
import type { ContactFormState } from '../../../types';

interface IContactForm {
  className?: string;
  formData: ContactFormState;
  setFormData: React.Dispatch<React.SetStateAction<ContactFormState>>;
  handleSumbit: (e: React.FormEvent) => void;
  refer: RefObject<HTMLElement | null>;
}

export const ContactForm = ({
  className,
  handleSumbit,
  refer,
}: IContactForm) => {
  return (
    <section
      className={classNames(cls.section, {}, [className || ''])}
      id='#contact'
      ref={refer}
    >
      <div className={classNames(cls.container, {}, [])}>
        <motion.form
          className={classNames(cls.form, {}, [])}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onSubmit={handleSumbit}
        >
          <a
            className={classNames(cls.button, {}, [])}
            href='https://dikidi.net/1497252'
            target='_blank'
          >
            Записаться
          </a>
        </motion.form>
      </div>
    </section>
  )
}