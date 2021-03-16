import axios from 'axios';

const dataApi = axios.create({
  baseURL: 'http://localhost:5005/api',
});

const createApi = (api) => (method) => async ({ url, apiConfig = {}, data, withAuth }) => {
  try {
    let config = {
      ...apiConfig,
    };
    const response = await api[method](url, data || config, data ? config : undefined);

    return response.data;
  } catch (error) {
    console.error(error.response)
  }
};

const createDataApi = createApi(dataApi);
export const getData = createDataApi('get');
export const postData = createDataApi('post');
export const putData = createDataApi('put');
export const deleteData = createDataApi('delete');