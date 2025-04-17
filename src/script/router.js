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
import { getCategory, getData, getDataSearch, getProduct } from './api';
import { addFavorite } from './add.Favorite';
import { localStorageLoad } from './localstorage';

export const router = new Navigo('/', { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
  router
    .on('*', async () => {
      renderHeader();
      renderFooter();
    })
    .on('/', async () => {
      const data = await getData();
      const categories = await getCategory();
      main.textContent = '';
      main.append(renderCatalog({ data: categories }));
      main.append(renderGoods({ data }));
      addFavorite(data);
    })
    .on('/goods/:category', async obj => {
      const category = obj.data.category;
      const categories = await getCategory();
      const data = await getData(category);
      main.textContent = '';
      main.append(renderCatalog({ data: categories, category }));
      main.append(renderGoods({ data }));
    })
    .on('/product/:id', async obj => {
      const id = obj.data.id;
      main.textContent = '';
      const product = await getProduct(id);
      main.append(renderBreadcrumbs({ data: product }));
      main.append(renderProduct(product));
      slideController();
    })
    .on('/favorite', async () => {
      const data = await getData();
      addFavorite(data);
      main.textContent = '';
      main.append(renderGoods({ data: localStorageLoad('ski-people-favorite'), title: 'Избранное' }));
      addFavorite(data);
    })
    .on('/search', async obj => {
      const params = obj.params;
      console.log('params: ', params.search);
      const data = await getDataSearch(params);
      const categories = await getCategory();
      main.textContent = '';
      main.append(renderCatalog({ data: categories, category: params.search }));
      main.append(renderGoods({ data }));
      addFavorite(data);
    })
    .on('/cart', () => {
      main.textContent = '';
      main.append(renderCart({ data: dataCart }));
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
  router.resolve();

  router.updatePageLinks();
};
