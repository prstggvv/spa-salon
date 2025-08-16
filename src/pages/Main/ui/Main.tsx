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
import { Notification } from "../../../components/Notification";

interface MainProps {
  className?: string;
}

const Main = ({ className }: MainProps) => {
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [isNotification, setIsNotification] = useState<boolean>(false);
  const [typeNotification, setTypeNotification] = useState<'succes' | 'error'>('succes');
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

  const currentDate = new Date().toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

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
    const message = `
      📅 *Дата заявки:* ${currentDate}
      ━━━━━━━━━━━━━━━━━━  
      **👤 Имя:** ${name}  
      **📞 Телефон:** ${phone}  
      **💼 Услуги:** ${selectedServices}  
      ${hasPromoCode && promoCode ? `**🎟 Промокод:** ${promoCode}\n` : ''}  
      ━━━━━━━━━━━━━━━━━━
    `;

    try {
      telegramApi.sendMessage(message);

      setTypeNotification('succes');
      setIsNotification(true);
      setFormData({
        name: '',
        phone: '',
        hasPromoCode: false,
        promoCode: '',
        selectedServices: [],
      });
    } catch (e) {
      setTypeNotification('error');
      setIsNotification(true);
      console.log(e);
    }
  };

  return (
    <div className={classNames(cls.main, {}, [className ?? ''])}>
      <Notification
        type={typeNotification}
        isOpen={isNotification}
        onClose={() => setIsNotification(false)}
      />
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
