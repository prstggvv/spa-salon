import FirstImage from '../../../shared/assets/images/cards/first.jpeg';
import SecondImage from '../../../shared/assets/images/cards/second.jpeg';
import ThirdImage from '../../../shared/assets/images/cards/third.jpeg';
import type { IServiceProps } from '../../../types';

export const serviceData: IServiceProps[] = [
  {
    id: 1,
    title: 'SPA головы',
    image: FirstImage,
    price: '2800',
    gender: 'women',
    text: `1. Детальное изучение состояния кожи головы и волос.
2. Подбор индивидуального домашнего ухода
3. Многоуровневый уход за кожей головы и волосами с использованием премиальной косметики
4. Завершающий аккорд - Аквамедитация 
5. Сушка волос феном (без укладки)
6. Аромарелаксация
7. Чайная церемония`,
    master: 'Дарья Зудина',
    genderText: 'Для женщин',
    duration: '60',
  },
  {
    id: 2,
    title: 'СПА-тела со скрабом и обертыванием',
    image: SecondImage,
    price: '300',
    gender: 'unisex',
    text: `1.Прогревание кожи тела горячими потоленцами
2.Скрабирование
3.Расслабление тела испанскими техниками СПА-массажного ухода
4.Обертывание
5.Чайная церемония
`,
    master: 'Игорь Зудин',
    genderText: 'Для всех',
    duration: '60',
  },
  {
    id: 3,
    title: 'СПА-тела с использованием спа-камней',
    image: ThirdImage,
    price: '3000',
    gender: 'unisex',
    text: `1.Прогревание кожи тела горячими полотенцами
2.Расслабление тела испанскими техниками СПА-массажного ухода
3.Прогревание точечных зон СПА-камнями
4.Аромарелаксация
5.Чайная церемония`,
    master: 'Игорь Зудин',
    genderText: 'Для всех',
    duration: '60',
  },
  {
    id: 4,
    title: `СПА-восстанавливающий уход${'\u00A0'}за волосами`,
    image: ThirdImage,
    price: '3000',
    gender: 'women',
    text: `Хороший массаж в котором можно купить все при этом есть мемеепк ыакк этот мемеепк ыакк этот мемеепк ыакк этот мемеепк ыакк этот`,
    master: 'Дарья Зудина',
    genderText: 'Для женщин',
    duration: '60',
  },
  {
    id: 5,
    title: 'СПА-уход за лицом',
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
    title: 'СПА-уход головы + за лицом',
    image: ThirdImage,
    price: '3000',
    gender: 'unisex',
    text: `Хороший массаж в котором можно купить все при этом есть мемеепк ыакк этот мемеепк ыакк этот мемеепк ыакк этот мемеепк ыакк этот`,
    master: 'Игорь Зудин',
    genderText: 'Для всех',
    duration: '60',
  },
];
