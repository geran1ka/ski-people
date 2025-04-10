import { API_URL } from './const.js';

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

export const getData = async () => {
  try {
    const response = await fetch(`${API_URL}/goods`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`Ошибка при получении данных: ${error}`);
    return [];
  }
};
