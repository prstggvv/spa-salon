import { Phone, MapPin, Mail, type LucideIcon } from 'lucide-react';
import VKSvg from '../../../shared/assets/images/icons/hrefs/vk.svg';
import TelegramSvg from '../../../shared/assets/images/icons/hrefs/telegram.svg';

interface IFooterDataProps {
  icon: LucideIcon;
  heading: string;
}

interface IFooterLinks {
  icon: string;
  link: string;
}

export const footerData: IFooterDataProps[] = [
  {
    icon: Phone,
    heading: '+7 (978) 004-45-15',
  },
  {
    icon: Mail,
    heading: 'vany4golos@yandex.ru',
  },
  {
    icon: MapPin,
    heading: 'г. Симферополь ул. 60 лет октября 15',
  },
];

export const footerLinks: IFooterLinks[] = [
  {
    icon: VKSvg,
    link: 'Вконтакте',
  },
  {
    icon: TelegramSvg,
    link: 'Телеграм',
  }
]