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
import { useState, type FormEvent } from "react";
import type { ContactFormState } from "../../../types";
import { BOT_ID, BOT_TOKEN, } from "../../../shared/lib/constants";
import { TelegramApi } from "../../../shared/lib/api/TelegramApi";

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

  const telegramApi = new TelegramApi(BOT_TOKEN, BOT_ID);

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { name, phone, hasPromoCode, promoCode, selectedServices, } = formData;
    const message = 
      `
        Имя: ${name}\n
        Номер телефона: ${phone}\n
        Выбранные услуги: ${selectedServices}\n
        ${hasPromoCode && promoCode ? `Промокод: ${promoCode}\n` : ''}
      `
      try {
        telegramApi.sendMessage(message);
        alert('Заявка прошла успешно');
        setFormData({
          name: '',
          phone: '',
          hasPromoCode: false,
          promoCode: '',
          selectedServices: [],
        });    
      } catch(e) {
        console.log(e);
      }

  }

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
        handleSumbit={handleSubmit}
      />
      <Footer />
    </div>
  )
};

export default Main;
