import Navigo from 'navigo';
import { renderHeader } from '../components/renderHeader';
import { renderFooter } from '../components/renderFooter';
import { dataBreadcrumb, dataCart, dataCatalog, dataGoods, dataOrder, dataProduct, main } from './const';
import { renderGoods } from '../components/renderGoods';
import { renderBreadcrumbs } from '../components/renderBreadcrumb';
import { renderCatalog } from '../components/renderCatalog';
import { renderCart } from '../components/renderCart';
import { renderOrder } from '../components/renderOrder';
import { renderProduct } from '../components/renderProduct';
import { renderNotFound } from '../components/renderNotFound';
import { slideController } from './controller/slideController';
console.log('dataProduct: ', dataProduct);

const router = new Navigo('/', { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
  router
    .on('*', () => {
      renderHeader();
      renderFooter();
    })
    .on('/', () => {
      main.textContent = '';
      main.append(renderCatalog({ data: dataCatalog }));
      main.append(renderGoods({ data: dataGoods }));
    })
    .on('/favorite', () => {
      main.textContent = '';
      main.append(renderBreadcrumbs({ data: dataBreadcrumb }));
      main.append(renderGoods({ data: dataGoods, title: 'Избранное' }));
    })
    .on('/cart', () => {
      main.textContent = '';
      main.append(renderCart({ data: dataCart }));
    })
    .on('/card', () => {
      main.textContent = '';
      main.append(renderBreadcrumbs({ data: dataBreadcrumb }));
      main.append(renderProduct(dataProduct));
      slideController();
    })
    .on('/order', () => {
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
