import type { ChangeEvent, FormEvent } from 'react';
import cls from './Form.module.css';
import { classNames } from '../../lib/classNames/classNames';
import { Input } from '../Input/Input';
import { useValidation } from '../../lib/hooks/useValidation';
import Button from '../Button/Button';
import Title from '../Title/Title';

interface IFormProps {
  className?: string;
}

export const Form = ({ className }: IFormProps) => {
  const {
    values,
    errors,
    handleChange,
  } = useValidation({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  }

  return (
    <div className={classNames(cls.block, {}, [className || ''])}>
      <Title 
        className={classNames(cls.title, {}, [])}
        children='Свяжитесь с нами'
      />
      <form
        className={classNames(cls.form, {}, [])}
        onSubmit={handleSubmit}
      >
        <Input 
          className={classNames(cls.input, {}, [])}
          type='text'
          placeholder='Имя'
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          value={values.names}
          name='name'
          error={Object.prototype.hasOwnProperty.call(errors, 'names')}
          errorText={errors.names || ''}
        />
        <Input 
          className={classNames(cls.input, {}, [])}
          type='email'
          placeholder='E-mail'
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          value={values.email}
          name='email'
          error={Object.prototype.hasOwnProperty.call(errors, 'email')}
          errorText={errors.email || ''}
        />
        <Input 
          className={classNames(cls.input, {}, [])}
          type='text'
          placeholder='+7 (xxx) xxx-xx-xx'
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          value={values.phone}
          name='phone'
          error={Object.prototype.hasOwnProperty.call(errors, 'phone')}
          errorText={errors.phone || ''}
        />
        <Button
          className={classNames(cls.button, {}, [])}
          type='submit'
          children='Записаться'
        />
      </form>
    </div>
  )
};