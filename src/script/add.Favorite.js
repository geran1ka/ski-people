import { localStorageLoad, localStorageSave } from './localstorage';

export const addFavorite = async data => {
  const list = document.querySelector('.goods__list');
  if (list) {
    list.addEventListener('click', e => {
      if (e.target.closest('.btn-like')) {
        const favoriteList = localStorageLoad('ski-people-favorite');

        const id = Number(e.target.closest('.btn-like').dataset.id);
        const item = data.find(item => item.id === id);

        if (favoriteList.length === 0) {
          favoriteList.push(item);
          localStorageSave('ski-people-favorite', favoriteList);
        } else {
          let thereIs = false;
          favoriteList.forEach((favoriteItem, index) => {
            if (favoriteItem.id === id) {
              thereIs = true;
              favoriteList.splice(index, 1);
              localStorageSave('ski-people-favorite', favoriteList);
            }
          });
          if (!thereIs) {
            favoriteList.push(item);
            localStorageSave('ski-people-favorite', favoriteList);
          }
        }
      }
    });
  }
};

export const addFavoriteA = async data => {
  const favoriteList = localStorageLoad('ski-people-favorite');
  const list = document.querySelector('.goods__list');
  if (list) {
    list.addEventListener('click', e => {
      if (e.target.closest('.btn-like')) {
        const id = Number(e.target.closest('.btn-like').dataset.id);

        if (!id) return;

        const item = data.find(item => item.id === id);

        if (favoriteList.length === 0) {
          favoriteList.push(item);
          localStorageSave('ski-people-favorite', favoriteList);
        } else {
          let thereIs = false;
          favoriteList.forEach((favoriteItem, index) => {
            if (favoriteItem.id === id) {
              thereIs = true;
              favoriteList.splice(index, 1);
              localStorageSave('ski-people-favorite', favoriteList);
            }
          });
          if (!thereIs) {
            favoriteList.push(item);
            localStorageSave('ski-people-favorite', favoriteList);
          }
        }
      }
    });
  } else {
  }
};
