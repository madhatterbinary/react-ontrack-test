import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://nyx.vima.ekt.gr:3000/api/books?',
});

export default instance;
