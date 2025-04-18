import { API_URL } from './const.js';

export const getData = async (params = null) => {
  try {
    let response = {};
    if (params.url || params.queryString) {
      response = await fetch(
        `${API_URL}/${params.url ? params.url : ''}${params.queryString ? `?${params.queryString}` : ''}`,
      );
    } else {
      response = await fetch(`${API_URL}/`);
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`Ошибка при получении товаров: ${error}`);
    return [];
  }
};

export const getCategory = async () => {
  try {
    const response = await fetch(`${API_URL}/category`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`Ошибка при получении категорий: ${error}`);
    return [];
  }
};

export const getProduct = async id => {
  try {
    const response = await fetch(`${API_URL}/product/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`Ошибка при получении карточки товара: ${error}`);
    return [];
  }
};
