import { API_URL } from '../script/const.js';
import { createElement } from '../script/modules/utils.js';
import { router } from '../script/router.js';
import { createBtnLike } from './btnLike.js';

export const renderCard = ({ img, title, price, id, category }) => {
  const btnCart = createElement(
    'button',
    {
      className: 'card__btn-cart btn-cart',
      type: 'button',
      id,
      textContent: 'В корзину',
    },
    {
      cb(el) {
        el.addEventListener('click', e => {
          console.log(e.target);
        });
      },
    },
  );

  btnCart.dataset.id = id;

  const btnLike = createBtnLike({
    className: 'card__btn-like',
    id,
  });

  return createElement(
    'li',
    {
      className: 'goods__item',
    },
    {
      append: createElement(
        'article',
        {
          className: 'goods__card card',
        },
        {
          appends: [
            createElement(
              'a',
              {
                className: 'card__link',
                href: `/product/${id}`,
              },
              {
                append: createElement('img', {
                  className: 'card__img',
                  src: `${API_URL}${img[0]}`,
                  alt: title,
                }),
                cb(el) {
                  el.addEventListener('click', async e => {
                    e.preventDefault();
                    const route = e.target.closest('.card__link').pathname;
                    router.navigate(route);
                  });
                },
              },
            ),
            createElement(
              'div',
              {
                className: 'card__info',
              },
              {
                appends: [
                  createElement('h3', {
                    className: 'card__info-title',
                    textContent: category.rus,
                  }),
                  createElement('p', {
                    className: 'card__info-price',
                    textContent: price,
                  }),
                ],
              },
            ),
            btnCart,
            btnLike,
          ],
        },
      ),
    },
  );
};
