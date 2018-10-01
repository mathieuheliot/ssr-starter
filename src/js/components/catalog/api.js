
import _ from 'lodash/lang';
import http from 'axios'
import { cacheAdapterEnhancer } from 'axios-extensions';

const api = http.create({
    baseURL: `http://local.zephcontrol.com/modules/blocklayered/blocklayered-ajax.php`,
    adapter: cacheAdapterEnhancer(http.defaults.adapter)
});

api.getCategory = (categoryId, pageNb, options) => {

    var params = { id_category_layered: categoryId };
    
    if (!_.isUndefined(pageNb)) {
        params['p'] = pageNb;
    }

    if (!_.isUndefined(options)) {
        options.forEach(function (option) {
            params['layered_' + option.filterType + '_' + option.id] = option.id;
        });
    }

    return api.get('blocklayered.json', { params: params })
        .then(function(json) {

            const products = json.data.products.map(product => ({
                id: product.id_product,
                name: product.name
            }));

            return {
                products: products,
                totalPages: json.data.totalPages,
                totalProducts: json.data.totalProducts
            };
        })
        .catch(error => alert(error));
};

api.getFilters = (categoryId) => {

    return api.get('blocklayered.json?id_category_layered=' + categoryId)
        .then(function (json) {

            var filters = [];
            json.data.filter.filters.map(function (jsonFilter) {

                var filter = {
                    id: jsonFilter.id_key,
                    type: jsonFilter.type,
                    name: jsonFilter.name,
                    options: []
                };

                Object.keys(jsonFilter.values).forEach(function (optionId) {
                    filter.options.push({
                        id: optionId,
                        filterType: jsonFilter.type,
                        label: jsonFilter.values[optionId].name
                    });
                });

                filters.push(filter);
            });

            return filters;
        })
        .catch(error => alert(error));
};

export default api;