import { Header } from "../../../components/Header";
import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from './Main.module.css';
import TeamSection from "../../../components/TeamSection";
import { Contact } from "../../../components/Contact";
import { Reviews } from "../../../components/Reviews";
import { AboutSpa } from "../../../components/AboutSpa";

interface MainProps {
  className?: string;
}

const Main = ({ className }: MainProps) => {
  return (
    <div className={classNames(cls.main, {}, [className || ''])}>
      <Header />
      <AboutSpa />
      <TeamSection />
      <Contact />
      <Reviews />
    </div>
  )
};

export default Main;
