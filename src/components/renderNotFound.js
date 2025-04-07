import { createElement } from '../script/modules/utils';

export const renderNotFound = () =>
  createElement('section', {
    className: 'notFound',
    innerHTML: `
      <div class="container notFound__container">
        <div class="notFound__wrapper">
          <ul class="notFound__list">
            <li class="notFound__item">
              <p class="notFound__text">4</p>
            </li>
            <li class="notFound__tem">
              <p class="notFound__text">0</p>
            </li>
            <li class="notFound__item">
              <p class="notFound__text">4</p>
            </li>
          </ul>
          <p class="notFound__textError">
            Похоже вы ошиблись, такой страницы не существует!
          </p>
          <a class="notFound__link btn-cart" href="/">
            Вернуться на главную
          </a>
        </div>
      </div>
    `,
  });
