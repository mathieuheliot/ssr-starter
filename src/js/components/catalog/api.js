import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:8080/api/`
});

api.getProducts = () => {
    return api.get('products.json');
};

export default api;