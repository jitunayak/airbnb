import axios from 'axios';

import { getLocalStorage } from './LocalStorage';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: 'Bearer ' + getLocalStorage('access_token'),
    'Content-Type': 'application/json',
  },
});

export default client;
