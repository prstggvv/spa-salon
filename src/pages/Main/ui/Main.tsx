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
import { useState } from "react";
import type { ContactFormState } from "../../../types";

interface MainProps {
  className?: string;
}

const Main = ({ className }: MainProps) => {
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    phone: '',
    hasPromoCode: false,
    promoCode: '',
    selectedServices: [],
  });

  console.log(formData.hasPromoCode);

  const handleOpenPopup = () => {
    setIsPopup(true);
  }

  const handleClosePopup = () => {
    setIsPopup(false);
  }

  const handleAddService = (title: string) => {
    setFormData((prev) => {
      if (prev.selectedServices.includes(title)) {
        return prev;
      }
  
      return {
        ...prev,
        selectedServices: [...prev.selectedServices, title],
      };
    });
  };

  return (
    <div className={classNames(cls.main, {}, [className ?? ''])}>
      <Popup 
        isOpen={isPopup}
        onClose={handleClosePopup}
      />
      <Header />
      <Hero />
      <AboutSpa />
      <Masters />
      <Advantages />
      <Reviews />
      <Service 
        onClick={handleOpenPopup}
        onBuy={handleAddService}
      />
      <ContactForm
        formData={formData}
        setFormData={setFormData}
      />
      <Footer />
    </div>
  )
};

export default Main;
