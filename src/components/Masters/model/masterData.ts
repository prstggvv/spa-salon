import IgorImage from '../../../shared/assets/images/masters/IGOR.jpeg';
import DashaImage from '../../../shared/assets/images/masters/DASHA.jpeg';

interface IModelDataProps {
  image: string;
  name: string;
  text: string;
}

export const masterData: IModelDataProps[] = [
  {
    image: IgorImage,
    name: 'Игорь Зудин',
    text: `Опытный спа-мастер. Специализируется на спа-программах для тела, используя профессиональные и 
          современные техники. Создает индивидуальные ритуалы для полного расслабления и восстановления.`,
  },
  {
    image: DashaImage,
    name: 'Дарья Зудина',
    text: `Опытный мастер по японскому спа головы и уходу за волосами и лицом.
           Создает индивидуальные программы, сочетая древние японские 
           традиции с современными профессиональным уходом.  Мастер по глубокому 
           восстановлению структуры поврежденных волос.`,
  },
];
