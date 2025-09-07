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
    heading: '+7 (978) 696-80-00',
  },
  {
    icon: Mail,
    heading: 'igor.z.v204@mail.ru',
  },
  {
    icon: MapPin,
    heading: 'г. Симферополь ул. Пушкина д. 4',
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