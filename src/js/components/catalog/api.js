import axios from 'axios';

const api = axios.create({
    baseURL: `http://local.zephcontrol.com/modules/blocklayered/`
});

api.getProducts = (categoryId) => {
    return api.get('blocklayered-ajax.php?id_category_layered=' + categoryId)
        .then(json => json.data.productList.map(product => ({
            id: product.id_product,
            name: product.name
        })))
        .catch(error => alert(error));
};

export default api;