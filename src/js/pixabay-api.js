import axios from 'axios';

export const getImagesByPage = async (query, page) => {
  const KEY = '54665781-1b012506ba8c9acb61074d03f';
  const BASE_URL = 'https://pixabay.com/api/';
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
