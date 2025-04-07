import { createElement, pluralizeCount } from '../script/modules/utils';
import { renderCount } from './renderCount';

export const renderCart = ({ data }) => {
  const cartList = createElement('ul', {
    className: 'cart__list',
    textContent: '',
  });

  if (data) {
    data.map(item =>
      createElement(
        'li',
        {
          className: 'cart__item',
          innerHTML: `
          <img
            src="/img/snow-mini.jpg"${item.src}
            alt="Горные лыжи"${item.title}
            class="cart__item-img" />

          <div class="cart__item-wrapper">
            <h3 class="cart__item-title">${item.title}</h3>
            <p class="cart__item-id">арт. 84348945757</p>
          </div>

          <p class="cart__item-price">${item.price}&nbsp;₽</p>
          `,
        },
        {
          append: renderCount(item.count, count => {
            item.count = count;
          }),
          parent: cartList,
        },
      ),
    );
  } else {
    createElement(
      'li',
      {
        className: 'cart__item',
        innerHTML: '<h3 class="cart__item-title">Ваша корзина пуста</h3>',
      },
      {
        parent: cartList,
      },
    );
  }

  const totalCount = data.reduce((acc, item) => acc + +item.count, 0);
  const totalPrice = data.reduce((acc, item) => acc + +item.count * item.price, 0);
  return createElement(
    'section',
    {
      className: 'cart',
    },
    {
      append: createElement(
        'div',
        {
          className: 'container cart__container',
        },
        {
          appends: [
            createElement('h2', {
              className: 'cart__title',
              textContent: 'Корзина',
            }),
            cartList,
            createElement('div', {
              className: 'cart__order',
              innerHTML: `
                <h3 class="cart__order-title">Оформление</h3>

                <div class="cart__order-info">
                  <p class="cart__order-count">
                    <span class="cart__order-number">${totalCount}</span>
                    ${pluralizeCount(totalCount)} на сумму:
                  </p>

                <p class="cart__order-price">${totalPrice}&nbsp;₽</p>
                </div>

                <p class="cart__order-delivery">Доставка 0 ₽</p>

                <button
                  class="cart__order-btn btn-cart-alt"
                  type="submit"
                  form="cartForm">
                  Оформить заказ
                </button>
          `,
            }),
            createElement('form', {
              className: 'cart__form form',
              action: '#',
              id: 'cartForm',
              innerHTML: `
                <h3 class="form__title">Данные для доставки</h3>

                <fieldset class="form__contacts">
                  <input
                    class="form__input"
                    type="text"
                    name="name"
                    placeholder="Фамилия Имя Отчество" />
                  <input
                    class="form__input"
                    type="number"
                    name="tel"
                    placeholder="Телефон" />
                  <input
                    class="form__input"
                    type="email"
                    name="email"
                    placeholder="E-mail" />
                  <input
                    class="form__input"
                    type="text"
                    name="address"
                    placeholder="Адрес доставки" />
                  <textarea
                    class="form__textarea"
                    name="comment"
                    id="comment"
                    placeholder="Комментарий к заказу">
                  </textarea>
                </fieldset>
                <fieldset class="form__delivery form-radio">
                  <legend class="form-radio__title">Доставка</legend>
                  <input
                    class="form-radio__input"
                    name="delivery"
                    id="delivery"
                    type="radio"
                    hidden />
                  <label class="form-radio__label" for="delivery"> Доставка </label>
                  <input
                    class="form-radio__input"
                    name="delivery"
                    id="pickup"
                    type="radio"
                    hidden />
                  <label class="form-radio__label" for="pickup"> Самовывоз </label>
                </fieldset>

                <fieldset class="form__payment form-radio">
                  <legend class="form-radio__title">Оплата</legend>
                  <input
                    class="form-radio__input"
                    name="payment"
                    id="card"
                    type="radio"
                    hidden />
                  <label class="form-radio__label" for="card">
                    Картой при получении
                  </label>
                  <input
                    class="form-radio__input"
                    name="payment"
                    id="cash"
                    type="radio"
                    hidden />
                  <label class="form-radio__label" for="cash">
                    Наличными при получении
                  </label>
                </fieldset>
              `,
            }),
          ],
        },
      ),
    },
  );
};
