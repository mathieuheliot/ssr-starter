import axios from 'axios';

const api = axios.create({
    baseURL: `http://local.zephcontrol.com/modules/blocklayered/blocklayered-ajax.php`
});

api.getProducts = (categoryId) => {
    return api.get('?id_category_layered=' + categoryId)
        .then(json => json.data.productList.map(product => ({
            id: product.id_product,
            name: product.name
        })))
        .catch(error => alert(error));
};

export default api;