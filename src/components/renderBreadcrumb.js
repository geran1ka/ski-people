import { createElement } from '../script/modules/utils.js';
import { router } from '../script/router.js';

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
          href: item === 'Главная' ? '/' : item === category ? '/' + category.eng.toLowerCase() : '#',
          textContent: item === category ? category.rus : item,
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
        el.addEventListener('click', async e => {
          e.preventDefault();
          const route = e.target.pathname;
          if (route === '/') {
            router.navigate(route);
          } else if (route !== undefined) {
            router.navigate(`goods${route}`);
          }
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
