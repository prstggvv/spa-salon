import { Header } from "../../../components/Header";
import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from './Main.module.css';
import { Reviews } from "../../../components/Reviews";
import { AboutSpa } from "../../../components/AboutSpa";
import { Hero } from "../../../components/Hero";
import { Service } from "../../../components/Service";
import { ContactForm } from "../../../components/ContactForm";
import { Masters } from "../../../components/Masters";
import { Popup } from "../../../components/Popup/ui/Popup";
import { Advantages } from "../../../components/Advantages";
import { Footer } from "../../../components/Footer/ui/Footer";

interface MainProps {
  className?: string;
}

const Main = ({ className }: MainProps) => {
  return (
    <div className={classNames(cls.main, {}, [className ?? ''])}>
      <Popup 
        isOpen={false}
      />
      <Header />
      <Hero />
      <AboutSpa />
      <Masters />
      <Advantages />
      <Reviews />
      <Service />
      <ContactForm />
      <Footer />
    </div>
  )
};

export default Main;
