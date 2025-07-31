import { Phone, MapPin, Mail } from 'lucide-react';
import PhoneIcon from '../../../shared/assets/images/icons/lucide/phone.svg';

interface IFooterDataProps {
  icon: string;
  heading: string;
}

export const footerData: IFooterDataProps[] = [
  {
    icon: PhoneIcon,
    heading: '+7 (978) 004-45-15',
  },
  {
    icon: PhoneIcon,
    heading: 'vany4golos@yandex.ru',
  },
  {
    icon: PhoneIcon,
    heading: 'г. Симферополь ул. 60 лет октября 15',
  },
]