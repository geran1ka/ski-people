import { localStorageLoad } from '../script/localstorage';
import { createElement } from '../script/modules/utils';

export const createBtnLike = ({ className, id }) => {
  const favoriteList = localStorageLoad('ski-people-favorite');

  const btnLike = createElement(
    'button',
    {
      className: className ? `${className} btn-like` : 'btn-like',
      type: 'button',
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
          if (el.classList.contains('btn-like_active')) {
            el.classList.remove('btn-like_active');
          } else {
            el.classList.add('btn-like_active');
          }
        });
      },
    },
  );

  const like = favoriteList.findIndex(item => item.id === id) !== -1;

  btnLike.dataset.id = id;

  if (like) btnLike.classList.add('btn-like_active');

  return btnLike;
};
