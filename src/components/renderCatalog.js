import { createElement } from '../script/modules/utils';
import { router } from '../script/router';

export const renderCatalog = ({ data = [], category = '' }) => {
  const arrayItem = [
    createElement('li', {
      className: 'catalog__item',
      innerHTML: `
        <a ${category ? 'class="catalog__link "' : 'class="catalog__link catalog__link_active"'} href="/">Все</a>
      `,
    }),
    ...data.map(item =>
      createElement('li', {
        className: 'catalog__item',
        innerHTML: `
            <a ${
              item.eng === category ? 'class="catalog__link catalog__link_active"' : 'class="catalog__link"'
            } href="/goods/${item.eng}">${item.rus}</a>
          `,
      }),
    ),
  ];

  return createElement(
    'div',
    {
      className: 'catalog',
    },
    {
      append: createElement(
        'div',
        {
          className: 'container catalog__container',
        },
        {
          append: createElement(
            'ul',
            {
              className: 'catalog__list',
              textContent: '',
            },
            {
              appends: [...arrayItem],
              cb(el) {
                el.addEventListener('click', async e => {
                  e.preventDefault();
                  arrayItem.forEach(item => {
                    if (item.contains(e.target)) {
                      item.children[0].classList.add('catalog__link_active');
                    } else {
                      item.children[0].classList.remove('catalog__link_active');
                    }
                  });

                  router.navigate(e.target.pathname);
                });
              },
            },
          ),
        },
      ),
    },
  );
};
