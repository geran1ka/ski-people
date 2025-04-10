import { createElement } from '../script/modules/utils';
import { renderCard } from './renderCard';

export const updateGoodsList = ({ el, data }) => {
  el.textContent = '';
  const items = [...data.map(({ img, title, price, id }) => renderCard({ img, title, price, id }))];
  el.append(...items);

  return el;
};

// const links = text => {
//   let href = '';

//   switch (text) {
//     case 'Лыжи':
//       href = '/goods#skis';
//       break;
//     case 'Сноуборды':
//       href = '/goods#snowboard';
//       break;
//     case 'Аксессуары':
//       href = '/goods#accessories';
//       break;
//     case 'Экипировка':
//       href = '/goods#equipment';
//       break;
//     default:
//       href = '/goods';
//   }

//   return href;
// };

// console.log(links(['Лыжи', 'ntc']));

export const renderCatalog = ({ data = [] }) => {
  const arrCatalog = [...new Set(data.map(item => item.category))];

  const arrayItem = [
    createElement(
      'li',
      {
        className: 'catalog__item',
      },
      {
        append: createElement('a', {
          className: 'catalog__link catalog__link_active',
          textContent: 'Все',
        }),
      },
    ),
    ...arrCatalog.map(item =>
      createElement(
        'li',
        {
          className: 'catalog__item',
        },
        {
          append: createElement('a', {
            className: 'catalog__link',
            textContent: item,
          }),
        },
      ),
    ),
  ];

  return createElement(
    'div',
    {
      className: 'catalog',
    },
    {
      append: createElement(
        'div',
        {
          className: 'container catalog__container',
        },
        {
          append: createElement(
            'ul',
            {
              className: 'catalog__list',
              textContent: '',
            },
            {
              appends: [...arrayItem],
              cb(el) {
                el.addEventListener('click', e => {
                  arrayItem.forEach(item => {
                    // if (e.target.matches('a')) {
                    if (e.target === item.firstChild) {
                      item.firstChild.classList.add('catalog__link_active');
                    } else {
                      item.firstChild.classList.remove('catalog__link_active');
                    }
                    // }
                  });
                  console.log(e.target.textContent);
                  const goodsList = document.querySelector('.goods__list');

                  if (e.target.textContent === 'Все') {
                    updateGoodsList({ el: goodsList, data });
                  } else {
                    const refreshList = data.filter(item => item.category === e.target.textContent);
                    updateGoodsList({ el: goodsList, data: refreshList });
                  }
                });
              },
            },
          ),
        },
      ),
    },
  );
};
