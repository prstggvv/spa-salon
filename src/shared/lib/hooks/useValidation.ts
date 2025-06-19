import type { ChangeEvent } from 'react';
import { useState } from 'react';

interface InputItems {
  [name: string]: string;
}

const validation = (values: InputItems) => {
  const errors: Record<string, string> = {};

  if (!values.names) {
    errors.name = 'Заполните поле Имя';
  } else if (!/^[а-яА-ЯёЁa-zA-Z]+$/.test(values.name)) {
    errors.name = 'Имя должно содержать только буквы';
  }

  if (!values.email) {
    errors.email = 'Заполните поле E-mail';
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
    errors.email = 'Введите корректный E-mail';
  }

  if (!values.password) {
    errors.password = 'Заполните поле пароль';
  } else if (values.password.length < 8) {
    errors.password = 'Пароль не может быть меньше 8 символов';
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(values.password)) {
    errors.password = 'Пароль должен состоять из строчных и прописных латинских букв, спецсимволов, цифр';
  }

  if (values.phone !== undefined) {
    if (!values.phone) {
      errors.phone = 'Заполните поле телефон';
    } else if (!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(values.phone)) {
      errors.phone = 'Введите корректный номер телефона';
    }
  }

  return errors;
};

export const useValidation = (inputValues: InputItems) => {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });

    const currentErrors = validation({ ...values, [name]: value });

    setErrors(currentErrors);
    setIsValid(Object.keys(currentErrors).length === 0);
  };

  return {
    values,
    errors,
    isValid,
    handleChange,
  };
};