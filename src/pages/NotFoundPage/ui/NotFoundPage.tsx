import cls from './NotFoundPage.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

interface INotFoundPageData {
  className?: string;
}

const NotFoundPage = ({ className }: INotFoundPageData) => {
  return (
    <main className={classNames(cls.content, {}, [className ?? ''])}>
      <h1>404</h1>
    </main>
  )
};

export default NotFoundPage;