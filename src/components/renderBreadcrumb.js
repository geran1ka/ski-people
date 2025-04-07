import { createElement } from '../script/modules/utils.js';

export const renderBreadcrumbs = ({ data }) => {
  const arrayBreadcrumb = data.map(item =>
    createElement(
      'li',
      {
        className: 'breadcrumb__item',
      },
      {
        append: createElement('a', {
          className: 'breadcrumb__link',
          href: `${item.href}`,
          textContent: item.title,
        }),
      },
    ),
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
              append: createElement(
                'ul',
                {
                  className: 'breadcrumb__list',
                  textContent: '',
                },
                {
                  appends: [
                    createElement(
                      'li',
                      {
                        className: 'breadcrumb__item',
                      },
                      {
                        append: createElement('a', {
                          className: 'breadcrumb__link',
                          href: '/',
                          textContent: 'Главная',
                        }),
                      },
                    ),
                    ...arrayBreadcrumb,
                  ],
                },
              ),
            },
          ),
        },
      ),
    },
  );
};
