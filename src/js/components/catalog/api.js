
import _ from 'lodash/lang';
import http from 'axios'
import { cacheAdapterEnhancer } from 'axios-extensions';

const api = http.create({
    baseURL: `http://local.zephcontrol.com/modules/blocklayered/blocklayered-ajax.php`,
    adapter: cacheAdapterEnhancer(http.defaults.adapter)
});

api.getCategory = (categoryId, pageNb, options) => {

    let params = { id_category_layered: categoryId };

    if (!_.isUndefined(pageNb)) {
        params['p'] = pageNb;
    }

    if (!_.isUndefined(options)) {
        options.forEach(function (option) {
            params['layered_' + option.filterType + '_' + option.id] = option.id;
        });
    }

    return api.get('blocklayered.json', { params: params })
        .then(function (json) {

            const products = json.data.products.map(product => ({
                id: product.id_product,
                name: product.name,
                thumbnail: product.image
            }));

            return {
                products: products,
                totalPages: json.data.totalPages,
                totalProducts: json.data.totalProducts
            };
        })
        .catch(error => console.error(error));
};

api.getFilters = (categoryId) => {

    return api.get('blocklayered.json?id_category_layered=' + categoryId)
        .then(function (json) {

            let filters = [];
            json.data.filter.filters.map(function (jsonFilter) {

                let filterId = (jsonFilter.type === 'id_attribute_group') ? 'id_attribute_group_' + jsonFilter.id_key : jsonFilter.type;
                let filter = {
                    id: filterId,
                    type: jsonFilter.type,
                    name: jsonFilter.name,
                    options: [],
                    display: null
                };

                // Display type
                let display = null;

                if (!_.isUndefined(jsonFilter.slider && jsonFilter.slider)) {
                    display = {
                        input: 'range',
                        min: jsonFilter.min,
                        max: jsonFilter.max
                    }
                }
                else if (jsonFilter.is_color_group && jsonFilter.is_color_group) {
                    display = {
                        input: 'color'
                    }
                }
                else if (jsonFilter.filter_type === '1') {
                    display = {
                        input: 'radio'
                    }
                }
                else if (jsonFilter.filter_type === '2') {
                    display = {
                        input: 'select'
                    }
                }
                else {
                    display = {
                        input: 'checkbox'
                    }
                }

                filter.display = display;

                // Options
                Object.keys(jsonFilter.values).forEach(function (optionId) {
                    filter.options.push({
                        id: optionId,
                        filterId: filterId,
                        filterType: jsonFilter.type,
                        label: jsonFilter.values[optionId].name
                    });
                });

                filters.push(filter);
            });

            return filters;
        })
        .catch(error => console.error(error));
};

export default api;