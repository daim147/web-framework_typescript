import axios from 'axios';

export const local = axios.create({
  baseURL: 'http://localhost:3000/',
});
export const users = axios.create({
  baseURL: 'http://localhost:3000/users',
});
