import { Phone, MapPin, Mail, type LucideIcon } from 'lucide-react';

interface IFooterDataProps {
  icon: LucideIcon;
  heading: string;
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
]