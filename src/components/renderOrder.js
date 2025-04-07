import { createElement } from '../script/modules/utils';
import { renderTable } from './renderTable';

export const renderOrder = ({ total, number, data }) =>
  createElement(
    'div',
    {
      className: 'order',
    },
    {
      append: createElement(
        'div',
        {
          className: 'container order__container',
        },
        {
          append: createElement(
            'div',
            {
              className: 'order__wrapper',
              innerHTML: `
              <div class="order__top">
                <h2 class="order__top-title">Заказ успешно размещен</h2>
                <p class="order__top-total">${total}&nbsp;₽</p>
                <p class="order__top-number">№${number}43435</p>
              </div>
            `,
            },
            {
              append: createElement(
                'div',
                {
                  className: 'order__info',
                },
                {
                  appends: [
                    createElement('h3', {
                      className: 'order__title',
                      textContent: 'Данные доставки',
                    }),
                    renderTable({ className: 'order__table', data }),
                  ],
                },
              ),
            },
          ),
        },
      ),
    },
  );
