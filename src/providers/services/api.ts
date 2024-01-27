import axios from 'axios';
import Config from 'react-native-config';

const api = axios.create({
  baseURL: 'https://api.clarifai.com',
  headers: {
    Authorization: `Key ${Config.CLARIFAI_API_KEY}`,
  },
});

export default api;
