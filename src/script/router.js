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
import { getCategory, getData, getProduct } from './api';
import { addFavorite } from './add.Favorite';
import { localStorageLoad } from './localstorage';

export const router = new Navigo('/', { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
  router
    .on('*', async () => {
      renderHeader();
      renderFooter();
    })
    .on('/', async obj => {
      const { goods, page, pages, size, totalCount } = await getData(obj);
      const categories = await getCategory();
      main.textContent = '';
      main.append(renderCatalog({ data: categories }));
      main.append(renderGoods({ data: goods, page, pages, size, totalCount, obj }));
      addFavorite(goods);
    })
    .on('/goods/:category', async obj => {
      console.log('obj: ', obj);
      const category = obj.data.category;
      const categories = await getCategory();
      const { goods, page, pages, size, totalCount } = await getData(obj);
      main.textContent = '';
      main.append(renderCatalog({ data: categories, category }));
      main.append(renderGoods({ data: goods, page, pages, size, totalCount, obj }));
    })
    .on('/product/:id', async obj => {
      const id = obj.data.id;
      main.textContent = '';
      const product = await getProduct(id);
      main.append(renderBreadcrumbs({ data: product }));
      main.append(renderProduct(product));
      slideController();
    })
    .on('/favorite', async obj => {
      const { goods, page, pages, size, totalCount } = await getData(obj);
      // addFavorite(goods);
      main.textContent = '';
      main.append(
        renderGoods({
          data: localStorageLoad('ski-people-favorite'),
          title: 'Избранное',
          page: 1,
          pages: 2,
          size: 12,
          totalCount: 23,
          obj,
        }),
      );
      addFavorite(goods);
    })
    .on('/search', async obj => {
      const params = obj.params;
      const { goods, page, pages, size, totalCount } = await getData(obj);
      console.log('goods: ', goods);
      const categories = await getCategory();
      main.textContent = '';
      main.append(renderCatalog({ data: categories, category: params.search }));
      main.append(renderGoods({ data: goods, page, pages, size, totalCount, obj }));
      addFavorite(goods);
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
