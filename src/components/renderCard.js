import { API_URL_ } from '../script/const.js';
import { createElement } from '../script/modules/utils.js';

export const renderCard = ({ img, title, price, id }) =>
  createElement('li', {
    className: 'goods__item',
    innerHTML: `
        <article class="goods__card card">
          <a href="/card:${id}" class="card__link">
          <img
            src=${API_URL_}${img[0]}
            alt=${title}
            class="card__img" />
        </a>
        <div class="card__info">
          <h3 class="card__info-title">${title}</h3>

          <p class="card__info-price">${price}</p>
        </div>

        <button class="card__btn-cart btn-cart">В корзину</button>
        <button class="card__btn-like btn-like">
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
  });
