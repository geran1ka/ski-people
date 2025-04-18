import { createElement } from '../script/modules/utils';
import { renderCard } from './renderCard';
import { renderPagination } from './renderPagination';
import { router } from '../script/router';

export const renderGoods = ({ data = [], title = '', page, pages, size, totalCount, obj }) => {
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

  const arrayItem = data.map(item => renderCard(item));

  const goodsList = createElement(
    'ul',
    {
      className: 'goods__list',
      textContent: '',
    },
    {
      parent: container,
    },
  );

  const empty = createElement(
    'li',
    {
      className: 'goods__empty-item',
      innerHTML: '<h3 class="goods__empty-title">По вашему запросу ничего не найдено!!!</h3>',
    },
    {
      append: createElement(
        'a',
        {
          className: 'goods__empty-link',
          href: '/',
          textContent: 'Вернуться на главную страницу',
        },
        {
          cb(el) {
            el.addEventListener('click', e => {
              e.preventDefault();

              router.navigate('/');
            });
          },
        },
      ),
    },
  );

  if (arrayItem.length !== 0) {
    goodsList.append(...arrayItem);
  } else {
    goodsList.append(empty);
  }

  if (pages !== 1) {
    console.log();
    container.append(renderPagination({ page, pages, size, totalCount, obj }));
  }

  return section;
};
