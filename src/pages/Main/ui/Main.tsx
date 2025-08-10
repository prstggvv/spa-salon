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
import { useState, type RefObject, useRef, type FormEvent } from "react";
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
  const scrollToAboutPage = useRef<HTMLElement | null>(null);
  const scrollToTeamPage = useRef<HTMLElement | null>(null);
  const scrollToReviewsPage = useRef<HTMLElement | null>(null);
  const scrollToServicePage = useRef<HTMLElement | null>(null);
  const scrollToContactPage = useRef<HTMLElement | null>(null);

  const telegramApi = new TelegramApi(BOT_TOKEN, BOT_ID);

  const handleScrollPage = (id: string) => {
    const refMap: { [key: string]: RefObject<HTMLElement | null> } = {
      '#about': scrollToAboutPage,
      '#team': scrollToTeamPage,
      '#reviews': scrollToReviewsPage,
      '#service': scrollToServicePage,
      '#contact': scrollToContactPage,
    };

    const elementRef = refMap[id];
    elementRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
      ` Имя: ${name}\n
        Номер телефона: ${phone}\n
        Выбранные услуги: ${selectedServices}\n
        ${hasPromoCode && promoCode ? `Промокод: ${promoCode}\n` : ''}`
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
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={classNames(cls.main, {}, [className ?? ''])}>
      <Popup
        isOpen={isPopup}
        onClose={handleClosePopup}
      />
      <Header 
        scrollPage={handleScrollPage}
      />
      <Hero />
      <AboutSpa
        refer={scrollToAboutPage}
      />
      <Masters
        refer={scrollToTeamPage}
      />
      <Advantages />
      <Reviews 
        refer={scrollToReviewsPage}
      />
      <Service
        onClick={handleOpenPopup}
        onBuy={handleAddService}
        refer={scrollToServicePage}
      />
      <ContactForm
        formData={formData}
        setFormData={setFormData}
        handleSumbit={handleSubmit}
        refer={scrollToContactPage}
      />
      <Footer />
    </div>
  )
};

export default Main;
