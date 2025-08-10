interface INavLinkData {
  label: string;
  href: string;
}

export const navLinks: INavLinkData[] = [
  {
    label: 'О нас',
    href: '#about',
  },
  { 
    label: 'Наша команда',
    href: '#team',
  },
  { label: 'Отзывы',
    href: '#reviews',
  },
  { 
    label: 'Сервис',
    href: '#service',
  },
  { 
    label: 'Контакты',
    href: '#contacts',
  },
];