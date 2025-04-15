import { createElement } from '../script/modules/utils';
import { renderCard } from './renderCard';
import { renderPagination } from './renderPagination';

export const renderGoods = ({ data = [], title }) => {

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
