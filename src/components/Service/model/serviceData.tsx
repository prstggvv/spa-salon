import FirstImage from '../../../shared/assets/images/cards/first.jpeg';
import SecondImage from '../../../shared/assets/images/cards/second.jpeg';
import ThirdImage from '../../../shared/assets/images/cards/third.jpeg';

interface IServiceProps {
  id: number;
  title: string;
  text?: string | '';
  master?: string | '';
  image: string;
  price: string;
  gender: 'men' | 'women' | 'unisex';
  genderText: 'Для мужчин' | 'Для женщин' | 'Для всех';
  duration: string;
}

export const serviceData: IServiceProps[] = [
  {
    id: 1,
    title: 'Массаж спины',
    image: FirstImage,
    price: '2800',
    gender: 'men',
    text: `Хороший массаж в котором можно купить все при этом есть мемеепк ыакк этот мемеепк ыакк этот мемеепк ыакк этот мемеепк ыакк этот`,
    master: 'Игорь Зудин',
    genderText: 'Для мужчин',
    duration: '60',
  },
  {
    id: 2,
    title: 'Расслабляющий массаж',
    image: SecondImage,
    price: '4100',
    gender: 'women',
    text: `Хороший массаж в котором можно купить все при этом есть мемеепк ыакк этот мемеепк ыакк этот мемеепк ыакк этот мемеепк ыакк этот`,
    master: 'Игорь Зудин',
    genderText: 'Для женщин',
    duration: '60',
  },
  {
    id: 3,
    title: 'Универсальный массаж',
    image: ThirdImage,
    price: '3000',
    gender: 'unisex',
    text: `Хороший массаж в котором можно купить все при этом есть мемеепк ыакк этот мемеепк ыакк этот мемеепк ыакк этот мемеепк ыакк этот`,
    master: 'Игорь Зудин',
    genderText: 'Для всех',
    duration: '60',
  },
  {
    id: 4,
    title: 'Универсальный массаж',
    image: ThirdImage,
    price: '3000',
    gender: 'unisex',
    text: `Хороший массаж в котором можно купить все при этом есть мемеепк ыакк этот мемеепк ыакк этот мемеепк ыакк этот мемеепк ыакк этот`,
    master: 'Игорь Зудин',
    genderText: 'Для всех',
    duration: '60',
  },
  {
    id: 5,
    title: 'Универсальный массаж',
    image: ThirdImage,
    price: '3000',
    gender: 'unisex',
    text: `Хороший массаж в котором можно купить все при этом есть мемеепк ыакк этот мемеепк ыакк этот мемеепк ыакк этот мемеепк ыакк этот`,
    master: 'Игорь Зудин',
    genderText: 'Для всех',
    duration: '60',
  },
  {
    id: 6,
    title: 'Универсальный массаж',
    image: ThirdImage,
    price: '3000',
    gender: 'unisex',
    text: `Хороший массаж в котором можно купить все при этом есть мемеепк ыакк этот мемеепк ыакк этот мемеепк ыакк этот мемеепк ыакк этот`,
    master: 'Игорь Зудин',
    genderText: 'Для всех',
    duration: '60',
  },
  {
    id: 7,
    title: 'Универсальный массаж',
    image: ThirdImage,
    price: '3000',
    gender: 'unisex',
    text: `Хороший массаж в котором можно купить все при этом есть мемеепк ыакк этот мемеепк ыакк этот мемеепк ыакк этот мемеепк ыакк этот`,
    master: 'Игорь Зудин',
    genderText: 'Для всех',
    duration: '60',
  },
];