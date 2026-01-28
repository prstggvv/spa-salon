import { Phone, MapPin, Mail, type LucideIcon } from 'lucide-react';
import DocumentSvg from '../../../shared/assets/images/icons/hrefs/document.svg';
import TelegramSvg from '../../../shared/assets/images/icons/hrefs/telegram.svg';

interface IFooterDataProps {
  icon: LucideIcon;
  heading: string;
}

interface IFooterLinks {
  icon: string;
  link: string;
  href: string;
}

export const footerData: IFooterDataProps[] = [
  {
    icon: Phone,
    heading: '+7 (978) 682-82-08',
  },
  {
    icon: Mail,
    heading: 'lehalo-spa@mail.ru',
  },
  {
    icon: MapPin,
    heading: 'г. Симферополь',
  },
];

export const footerLinks: IFooterLinks[] = [
  {
    icon: DocumentSvg,
    link: 'Документы',
    href: 'https://disk.yandex.ru/d/tmKFNcufOqv7aw',
  },
  {
    icon: TelegramSvg,
    link: 'Телеграм',
    href: 'https://t.me/zudina_csm',
  }
]