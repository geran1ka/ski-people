import { API_URL_ } from '../script/const.js';
import { createElement } from '../script/modules/utils.js';

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

  const btnLike = createElement(
    'button',
    {
      className: 'card__btn-like card__btn-like_active btn-like',
      type: 'button',
      id,
      innerHTML: `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"  xmlns="http://www.w3.org/2000/svg">
        <path d="M8.4135 13.8733C8.18683 13.9533 7.8135 13.9533 7.58683 13.8733C5.6535
        13.2133 1.3335 10.46 1.3335 5.79332C1.3335 3.73332 2.9935 2.06665 5.04016 
        2.06665C6.2535 2.06665 7.32683 2.65332 8.00016 3.55998C8.6735 2.65332 9.7535 
        2.06665 10.9602 2.06665C13.0068 2.06665 14.6668 3.73332 14.6668 5.79332C14.6668 
        10.46 10.3468 13.2133 8.4135 13.8733Z" 
        stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    },
    {
      cb(el) {
        el.addEventListener('click', () => {
          console.log(el);
          if (el.classList.contains('btn-like_active')) {
            el.classList.remove('btn-like_active');
          } else {
            el.classList.add('btn-like_active');
          }
        });
      },
    },
  );

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
                  src: `${API_URL_}${img[0]}`,
                  alt: title,
                }),
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
//   className: 'goods__item',
//   innerHTML: `
//         <article class="goods__card card">
//           <a href="/card:${id}" class="card__link">
//           <img
//             src=${API_URL_}${img[0]}
//             alt=${title}
//             class="card__img" />
//         </a>
//         <div class="card__info">
//           <h3 class="card__info-title">${title}</h3>

//           <p class="card__info-price">${price}</p>
//         </div>

//         <button class="card__btn-cart btn-cart">В корзину</button>
//         <button class="card__btn-like btn-like">
//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133
//               1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301
//               2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597
//               2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
//               stroke-linecap="round"
//               stroke-linejoin="round" />
//           </svg>
//         </button>
//       </article>
//     `,
// });
