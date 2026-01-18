import FirstImage from '../../../shared/assets/images/masters/first.jpg';
import SecondImage from '../../../shared/assets/images/masters/second.jpg';
import ThirdImage from '../../../shared/assets/images/masters/third.jpg';
import FourthImage from '../../../shared/assets/images/masters/fourth.jpg';

interface IModelDataProps {
  image: string;
  name: string;
  text: string;
}

export const masterData: IModelDataProps[] = [
  {
    image: FirstImage,
    name: 'Спа головы, лица и волос с аквамедитацией',
    text: `Каждый ритуал сопровождается индивидуальным уходом, медитативной музыкой, аромарелаксацией и чаепитием для полной перезагрузки.`,
  },
  {
    image: SecondImage,
    name: 'Профессиональный уход за кожей лица',
    text: `Авторские программы для мягкого обновления и сияния.`,
  },
  {
    image: ThirdImage,
    name: 'Индивидуальные консультации',
    text: `Подбор домашнего ухода для лица, тела и волос`,
  },
  {
    image: FourthImage,
    name: 'Подарочные  сертификаты',
    text: `Подарите своим родным и близким настоящее спокойствие, заботу и расслабление.`,
  },
];
