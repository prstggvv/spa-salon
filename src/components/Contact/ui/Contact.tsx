import cls from './Contact.module.css';
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Form } from '../../../shared/ui/Form/Form';
import Title from '../../../shared/ui/Title/Title';

interface IContactProps {
  className?: string;
}

export const Contact = ({ className }: IContactProps) => {
  return (
    <section className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.mainInfo, {}, [])}>
          <div className={classNames(cls.titleBackground, {}, [])}>
            <div className={classNames(cls.block, {}, [])}>
              <Title
                children={`Запись на прием`}
                className={classNames(cls.title, {}, [])}
              />
            </div>
          </div>
          <div className={classNames(cls.line, {}, [])}></div>
          <div className={classNames(cls.subtitle, {}, [])}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Feugiat enim tortor in hac id imperdiet adipiscing.
            Pellentesque nisi, mi sit non sit sed fermentum.
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};
