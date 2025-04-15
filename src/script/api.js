import { API_URL } from './const.js';

// const getIdFromUrl = () => {
//   const params = new URLSearchParams(location.search);
//   return params.get('id');
// };

// const formatQueryString = params => {
//   if (Object.keys(params).length === 0) {
//     return '';
//   }

//   const searchParams = new URLSearchParams();
//   Object.entries(params).forEach(([key, value]) => {
//     searchParams.append(key, value);
//   });

//   return `?${searchParams.toString()}`;
// };

// export const fetchProducts = async (params = {}) => {
//   try {
//     const response = await fetch(`${API_URL}/goods${formatQueryString(params)}`);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();

//     return data;
//   } catch (error) {
//     console.error(`Ошибка при получении данных: ${error}`);
//     return [];
//   }
// };

export const getData = async (category = '') => {
  try {
    const response = await fetch(`${API_URL}/goods${category ? '/' + category : ''}`);

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
