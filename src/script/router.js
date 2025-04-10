import Navigo from 'navigo';
import { renderHeader } from '../components/renderHeader';
import { renderFooter } from '../components/renderFooter';
import { dataCart, dataOrder, main } from './const';
import { renderGoods } from '../components/renderGoods';
import { renderBreadcrumbs } from '../components/renderBreadcrumb';
import { renderCatalog } from '../components/renderCatalog';
import { renderCart } from '../components/renderCart';
import { renderOrder } from '../components/renderOrder';
import { renderProduct } from '../components/renderProduct';
import { renderNotFound } from '../components/renderNotFound';
import { slideController } from './controller/slideController';
import { getData } from './api';

const router = new Navigo('/', { hash: true });

export const initRouter = () => {
  router
    .on('*', () => {
      renderHeader();
      renderFooter();
    })
    .on('/', async () => {
      const goods = await getData();
      main.textContent = '';
      main.append(renderCatalog({ data: goods }));
      main.append(renderGoods({ data: goods }));
    })
    .on('favorite', () => {
      main.textContent = '';
      // main.append(renderBreadcrumbs({ data: dataBreadcrumb }));
      // main.append(renderGoods({ data: dataGoods, title: 'Избранное' }));
    })
    .on('cart', () => {
      main.textContent = '';
      main.append(renderCart({ data: dataCart }));
    })
    .on('card:id', async () => {
      main.textContent = '';
      const goods = await getData();
      const id = window.location.pathname.split(':')[1];
      const dataProduct = goods.find(item => item.id === +id)
      main.append(renderBreadcrumbs({ data: dataProduct }));
      main.append(renderProduct(dataProduct));
      slideController();
    })
    .on('order', () => {
      main.textContent = '';
      main.append(
        renderOrder({
          total: dataCart.reduce((acc, item) => acc + +item.count * item.price, 0),
          number: 4555555,
          data: dataOrder,
        }),
      );
    })
    .notFound(() => {
      main.textContent = '';
      main.append(renderNotFound());
      console.log('not');
    });
  console.log('end');
  main.append(renderNotFound());

  router.resolve();
};
