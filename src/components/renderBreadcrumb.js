import { createElement } from '../script/modules/utils.js';

export const renderBreadcrumbs = ({ data }) => {
  const { title, category } = data;
  const breadcrumbs = ['Главная', category, title];
  const arrayBreadcrumb = breadcrumbs.map(item =>
    createElement(
      'li',
      {
        className: 'breadcrumb__item',
      },
      {
        append: createElement('a', {
          className: 'breadcrumb__link',
          href: '/',
          textContent: item,
        }),
      },
    ),
  );

  const breadcrumbList = createElement(
    'ul',
    {
      className: 'breadcrumb__list',
      textContent: '',
    },
    {
      appends: [...arrayBreadcrumb],
      cb(el) {
        el.addEventListener('click', e => {
          console.log(e.target);
        });
      },
    },
  );

  return createElement(
    'div',
    {
      className: 'breadcrumb',
    },
    {
      append: createElement(
        'div',
        {
          className: 'container breadcrumb__container',
        },
        {
          append: createElement(
            'nav',
            {
              className: 'breadcrumb__navigation',
            },
            {
              append: breadcrumbList,
            },
          ),
        },
      ),
    },
  );
};
