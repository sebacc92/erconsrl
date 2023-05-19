import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://strapi-erconsrl.onrender.com/api',
});

export default instance;
