import cls from './ContactForm.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import React from 'react';
import type { ChangeEvent } from 'react';
import Button from '../../../shared/ui/Button/Button';
import { motion } from 'framer-motion';
import type { ContactFormState } from '../../../types';
import { useForm } from '../../../shared/lib/hooks/useForm';

interface IContactForm {
  className?: string;
  formData: ContactFormState;
  setFormData: React.Dispatch<React.SetStateAction<ContactFormState>>;
}

export const ContactForm = ({
  className,
  formData,
  setFormData,
}: IContactForm) => {
  const { values, handleChange, handlePhoneChange } = useForm(formData, setFormData)

  const removeService = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.filter((_, i) => i !== index),
    }));
  };

  return (
    <section className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <motion.form
          className={classNames(cls.form, {}, [])}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className={classNames(cls.heading, {}, [])}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Запись на прием!
          </motion.h2>
          <div className={classNames(cls.inputs, {}, [])}>
            <motion.label
              className={classNames(cls.label, {}, [])}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              Ваше имя
              <input
                type="text"
                placeholder="Введите ваше имя"
                className={cls.input}
                value={values.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('name', e.target.value)}
                name="name"
                required
                aria-label="Ваше имя"
              />
            </motion.label>
            <motion.label
              className={classNames(cls.label, {}, [])}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              Номер телефона
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                className={cls.input}
                value={values.phone}
                onChange={handlePhoneChange}
                name="phone"
                required
                aria-label="Номер телефона"
                maxLength={18}
              />
            </motion.label>
            <motion.label
              className={classNames(cls.label, {}, [cls.checkboxLabel])}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <input
                id='promoCode'
                type='checkbox'
                checked={values.hasPromoCode}
                onChange={(e) => handleChange('hasPromoCode', e.target.checked)}
                className={cls.checkbox}
                aria-label="Как можно скорее"
              />
              Промокод
            </motion.label>
            {formData.hasPromoCode && (
              <motion.label
                className={classNames(cls.label, {}, [])}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <input
                  type="text"
                  placeholder="Введите промокод"
                  className={cls.input}
                  value={values.promoCode}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('promoCode', e.target.value)}
                  name="promoCode"
                  aria-label="Промокод"

                />
              </motion.label>
            )}
            {formData.selectedServices.length > 0 && (
              <motion.div
                className={classNames(cls.selectedServices, {}, [])}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                {formData.selectedServices.map((service, index) => (
                  <div
                    key={index}
                    className={classNames(cls.serviceCard, {}, [])}
                  >
                    <span className={classNames(cls.serviceName, {}, [])}>
                      {service}
                    </span>
                    <button
                      type='button'
                      className={classNames(cls.removeServiceBtn, {}, [])}
                      onClick={() => removeService(index)}
                      aria-label='Удалить услугу'
                    >
                      ×
                    </button>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
          <Button
            className={classNames(cls.button, {}, [])}
            type='submit'
            children='Записаться'
          />
        </motion.form>
      </div>
    </section>
  )
}