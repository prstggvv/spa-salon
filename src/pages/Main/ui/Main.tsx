import { Header } from "../../../components/Header";
import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from './Main.module.css';
import { SpaLandingPage } from "../../../components/SpaLandingPage";

interface MainProps {
  className?: string;
}

const Main = ({ className }: MainProps) => {
  return (
    <div className={classNames(cls.main, {}, [className || ''])}>
      <Header />
      <SpaLandingPage />
    </div>
  )
};

export default Main;
