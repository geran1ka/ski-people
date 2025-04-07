import { countController } from '../script/controller/countController';
import { createElement } from '../script/modules/utils';

export const renderCount = (count, returnCount = () => {}) => {
  const control = createElement('div', {
    className: 'cart__item-counter counter',
  });

  const minus = createElement(
    'button',
    {
      className: 'counter__item counter__item_minus',
      type: 'button',
      textContent: '-',
    },
    {
      parent: control,
    },
  );

  const number = createElement(
    'span',
    {
      className: 'counter__item counter__item_number',
      textContent: count,
    },
    {
      parent: control,
    },
  );

  const plus = createElement(
    'button',
    {
      className: 'counter__item counter__item_plus',
      type: 'button',
      textContent: '+',
    },
    {
      parent: control,
    },
  );

  const input = createElement(
    'input',
    {
      type: 'hidden',
      value: count,
      name: 'count',
    },
    {
      parent: control,
    },
  );

  countController(minus, number, plus, input, returnCount);

  return control;
};
