import http from 'axios'

const api = http.create({
    //baseURL: `http://local.zephcontrol.com/modules/blocklayered/blocklayered-ajax.php`
    baseURL: `/api`
});

api.getProducts = (categoryId) => {

    return api.get('blocklayered.json?id_category_layered=' + categoryId)
        .then(json => json.data.products.map(product => ({
            id: product.id_product,
            name: product.name
        })))
        .catch(error => alert(error));
};

api.getFilters = (categoryId) => {

    return api.get('blocklayered.json?id_category_layered=' + categoryId)
        .then(function(json) {

            var filters = [];
            json.data.filter.filters.map(function(jsonFilter) {

                var filter = {
                    id: jsonFilter.id_key,
                    type: jsonFilter.type,
                    name: jsonFilter.name,
                    options: []
                };

                Object.keys(jsonFilter.values).forEach(function(optionId) {
                    filter.options.push({
                        id: optionId,
                        name: jsonFilter.values[optionId].name
                    });
                });

                filters.push(filter);
            });
            
            console.log(filters)
            return filters;
        })
        .catch(error => alert(error));

};

export default api;