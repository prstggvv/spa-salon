interface IReviewsProps {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

export const reviewsData: IReviewsProps[] = [
  {
    id: 1,
    name: 'Анна Петрова',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna',
    rating: 5,
    text: 'Потрясающий опыт! Процедуры в Amoveo Spa помогли мне полностью расслабиться и забыть о повседневных заботах. Профессиональные мастера и приятная атмосфера. Обязательно вернусь снова!',
  },
  {
    id: 2,
    name: 'Михаил Соколов',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mikhail',
    rating: 4,
    text: 'Отличный сервис и внимательный персонал. Массаж был именно тем, что мне было нужно после напряженной рабочей недели. Рекомендую всем, кто ценит качество и профессионализм.',
  },
  {
    id: 3,
    name: 'Елена Иванова',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
    rating: 5,
    text: 'Я в восторге от процедур по уходу за лицом! Результат превзошел все мои ожидания. Кожа выглядит свежей и сияющей. Спасибо команде Amoveo Spa за такой замечательный опыт!',
  },
];