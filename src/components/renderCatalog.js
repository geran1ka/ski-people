import { createElement } from '../script/modules/utils';

export const renderCatalog = ({ data }) => {
  const arrayItem = data.map(({ title, href, active }) =>
    createElement(
      'li',
      {
        className: 'catalog__item',
      },
      {
        append: createElement('a', {
          className: active ? 'catalog__link catalog__link_active' : 'catalog__link',
          href,
          textContent: title,
        }),
      },
    ),
  );

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
            },
          ),
        },
      ),
    },
  );
};

// <div class="catalog">
//   <div class="container catalog__container">
//     <ul class="catalog__list">
//       <li class="catalog__item">
//         <a href="#" class="catalog__link catalog__link_active">Все</a>
//       </li>
//       <li class="catalog__item">
//         <a href="#" class="catalog__link">Лыжи</a>
//       </li>
//       <li class="catalog__item">
//         <a href="#" class="catalog__link">Сноуборды</a>
//       </li>
//       <li class="catalog__item">
//         <a href="#" class="catalog__link">Экипировка</a>
//       </li>
//       <li class="catalog__item">
//         <a href="#" class="catalog__link">Ботинки</a>
//       </li>
//     </ul>
//   </div>
// </div>
