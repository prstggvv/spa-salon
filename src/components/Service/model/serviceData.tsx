import FirstImage from '../../../shared/assets/images/cards/first.jpeg';
import SecondImage from '../../../shared/assets/images/cards/second.jpeg';
import ThirdImage from '../../../shared/assets/images/cards/third.jpeg';

interface IServiceProps {
  title: string;
  image: string;
  price: string;
  gender: 'men' | 'women' | 'unisex';
}

export const serviceData: IServiceProps[] = [
  {
    title: 'Массаж спины',
    image: FirstImage,
    price: '2800 руб.',
    gender: 'men',
  },
  {
    title: 'Расслабляющий массаж',
    image: SecondImage,
    price: '3200 руб.',
    gender: 'women',
  },
  {
    title: 'Универсальный массаж',
    image: ThirdImage,
    price: '3000 руб.',
    gender: 'unisex',
  },
];