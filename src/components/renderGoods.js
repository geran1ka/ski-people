import { createElement } from '../script/modules/utils';
import { renderPagination } from './renderPagination';

export const renderGoods = ({ data, title }) => {
  const section = createElement('section', {
    className: 'goods',
  });

  const container = createElement(
    'div',
    {
      className: 'container goods__container',
    },
    {
      parent: section,
    },
  );

  if (title) {
    createElement(
      'h2',
      {
        className: 'goods__title',
        textContent: title,
      },
      {
        parent: container,
      },
    );
  }

  const arrayItem = data.map(item =>
    createElement('li', {
      className: 'goods__item',
      innerHTML: `
            <article class="goods__card card">
        <a href=${item.href} class="card__link">
          <img
            src=${item.src}
            alt=${item.title}
            class="card__img" />
        </a>
        <div class="card__info">
          <h3 class="card__info-title">${item.title}</h3>

          <p class="card__info-price">${item.price}&nbsp;₽</p>
        </div>

        <button class="card__btn-cart btn-cart">В корзину</button>
        <button class="card__btn-like ${item.like && 'card__btn-like_active'} btn-like">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133
              1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301
              2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597
              2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </article>
    `,
    }),
  );

  createElement(
    'ul',
    {
      className: 'goods__list',
      textContent: '',
    },
    {
      appends: [...arrayItem],
      parent: container,
    },
  );

  container.append(renderPagination({ current: 12, total: 31 }));

  return section;
};
