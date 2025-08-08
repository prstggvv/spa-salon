import cls from './ContactForm.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import Button from '../../../shared/ui/Button/Button';
import { motion } from 'framer-motion';
import type { ContactFormState } from '../../../types';

interface IContactForm {
  className?: string;
}

export const ContactForm = ({ className }: IContactForm) => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    phone: '+7',
    hasPromoCode: false,
    promoCode: '',
    selectedServices: ['Маникюр', 'Педикюр'],
  });

  const formatPhoneNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    
    const cleanNumbers = numbers.startsWith('7') ? numbers.slice(1) : numbers;
    
    const limitedNumbers = cleanNumbers.slice(0, 10);
    
    if (limitedNumbers.length === 0) return '+7';
    if (limitedNumbers.length <= 3) return `+7 (${limitedNumbers}`;
    if (limitedNumbers.length <= 6) return `+7 (${limitedNumbers.slice(0, 3)}) ${limitedNumbers.slice(3)}`;
    if (limitedNumbers.length <= 8) return `+7 (${limitedNumbers.slice(0, 3)}) ${limitedNumbers.slice(3, 6)}-${limitedNumbers.slice(6)}`;
    
    return `+7 (${limitedNumbers.slice(0, 3)}) ${limitedNumbers.slice(3, 6)}-${limitedNumbers.slice(6, 8)}-${limitedNumbers.slice(8)}`;
  };

  const handleChange = (field: keyof ContactFormState, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!inputValue.startsWith('+7')) {
      return;
    }
    
    const formattedValue = formatPhoneNumber(inputValue);
    handleChange('phone', formattedValue);
  };

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
                value={formData.name}
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
                value={formData.phone}
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
                checked={formData.hasPromoCode}
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
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <input
                  type="text"
                  placeholder="Введите промокод"
                  className={cls.input}
                  value={formData.promoCode}
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