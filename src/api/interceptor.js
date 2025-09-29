import axios from 'axios';

const api = axios.create({
  baseURL: 'https://68d9088d90a75154f0d95c44.mockapi.io',
  timeout: 10000,
})

export{api}