import cls from './Contact.module.css';
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Form } from '../../../shared/ui/Form/Form';
import { IFrame } from '../../IFrame';

interface IContactProps {
  className?: string;
}

export const Contact = ({ className }: IContactProps) => {
  return (
    <section className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <Form />
        <IFrame />
      </div>
    </section>
  );
};
