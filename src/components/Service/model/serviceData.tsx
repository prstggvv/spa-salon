import FirstImage from '../../../shared/assets/images/cards/first.jpeg';
import SecondImage from '../../../shared/assets/images/cards/second.jpeg';
import ThirdImage from '../../../shared/assets/images/cards/third.jpeg';

interface IServiceProps {
  id: number;
  title: string;
  image: string;
  price: string;
  gender: 'men' | 'women' | 'unisex';
}

export const serviceData: IServiceProps[] = [
  {
    id: 1,
    title: 'Массаж спины',
    image: FirstImage,
    price: '2800',
    gender: 'men',
  },
  {
    id: 2,
    title: 'Расслабляющий массаж',
    image: SecondImage,
    price: '3200',
    gender: 'women',
  },
  {
    id: 3,
    title: 'Универсальный массаж',
    image: ThirdImage,
    price: '3000',
    gender: 'unisex',
  },
  {
    id: 4,
    title: 'Универсальный массаж',
    image: ThirdImage,
    price: '3000',
    gender: 'unisex',
  },
  {
    id: 5,
    title: 'Универсальный массаж',
    image: ThirdImage,
    price: '3000',
    gender: 'unisex',
  },
  {
    id: 6,
    title: 'Универсальный массаж',
    image: ThirdImage,
    price: '3000',
    gender: 'unisex',
  },
  {
    id: 7,
    title: 'Универсальный массаж',
    image: ThirdImage,
    price: '3000',
    gender: 'unisex',
  },
];