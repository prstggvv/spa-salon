import { Header } from "../../../components/Header";
import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from './Main.module.css';
import { Reviews } from "../../../components/Reviews";
import { AboutSpa } from "../../../components/AboutSpa";
import { Hero } from "../../../components/Hero";
import { Service } from "../../../components/Service";

interface MainProps {
  className?: string;
}

const Main = ({ className }: MainProps) => {
  return (
    <div className={classNames(cls.main, {}, [className || ''])}>
      <Header />
      <Hero />
      <AboutSpa />
      <Service />
      <Reviews />
    </div>
  )
};

export default Main;
