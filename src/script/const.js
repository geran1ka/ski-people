export const header = document.querySelector('.header');
export const main = document.querySelector('.main');
export const footer = document.querySelector('.footer');

export const API_URL = 'https://api-aski-people.onrender.com';

// export const API_URL = 'http://localhost:3000';

export const dataCart = [
  {
    src: '/img/snow.jpg',
    title: 'Горные лыжи',
    price: 1000,
    like: true,
    count: 2,
  },
  {
    src: '/img/snow.jpg',
    title: 'Горные лыжи',
    price: 2000,
    like: false,
    count: 5,
  },
  {
    src: '/img/snow.jpg',
    title: 'Горные лыжи',
    price: 3000,
    like: false,
    count: 99,
  },
];

export const dataOrder = [
  {
    field: 'Получатель',
    value: 'Иванов Петр Александрович',
  },
  {
    field: 'Телефон',
    value: '+7 (737) 346 23 00',
  },
  {
    field: 'E-mail',
    value: 'Ivanov84@gmail.com',
  },
  {
    field: 'Адрес доставки',
    value: 'Москва, ул. Ленина, 21, кв. 33',
  },
  {
    field: 'Способ оплаты',
    value: 'Картой при получении',
  },
  {
    field: 'Способ получения',
    value: 'Доставка',
  },
];

// export const dataProduct = {
//   img: {
//     bg: ['/img/main-slide.jpg', '/img/main-slide.jpg', '/img/main-slide.jpg', '/img/main-slide.jpg'],
//     thumb: ['/img/mini-slide.jpg', '/img/mini-slide.jpg', '/img/mini-slide.jpg', '/img/mini-slide.jpg'],
//   },
//   title: 'Лыжи',
//   price: 5000,
//   article: 45234235423,
//   characteristics: [
//     {
//       field: 'Коллекция',
//       value: 'Мирсаж',
//     },
//     {
//       field: 'Производитель',
//       value: 'Россия',
//     },
//     {
//       field: 'Гарантия',
//       value: '18 мес.',
//     },
//     {
//       field: 'Срок службы',
//       value: '5 лет',
//     },
//     {
//       field: 'Цвет',
//       value: 'Желтый',
//     },
//     {
//       field: 'Макс. нагрузка<',
//       value: '130 кг',
//     },
//   ],
// };
