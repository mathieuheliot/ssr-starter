import React from 'react';
import QueryString from 'query-string';
import { withRouter } from 'react-router'

import API from '../catalog/api';
import Filter from '../filter/Filter';
import Product from '../product/Product';

class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            page: QueryString.parse(props.location.search).p,
            products: [],
            filters: [],
            selectedOptions: []
        }
    }

    componentDidMount() {

        API.getProducts(this.state.id, this.state.page)
            .then(products => this.setState({ products: products }));

        API.getFilters(this.state.id)
            .then(filters => this.setState({ filters: filters }));
    }

    removeFilter(filterOption) {
        var instance = this.refs[filterOption.filterType].refs[filterOption.id];
        if (instance === undefined) {
            throw new Error('Cannot recover instance of FilterOption with type ' + filterOption.filterType + ' and id ' + filterOption.id);
        }
        instance.toggle();
    }

    onFilter(filterOption) {

        var options = [];
        if (!filterOption.state.checked) {
            options = this.state.selectedOptions;
            options.push(filterOption.state);
        }
        else {
            this.state.selectedOptions.forEach(option => {

                if (filterOption.state.filterType !== option.filterType
                    || (filterOption.state.filterType === option.filterType && filterOption.state.id !== option.id)) {
                    options.push(option);
                }
            });
        }

        this.setState({ selectedOptions: options });
        API.getProducts(this.state.id, this.state.page, options)
            .then(products => this.setState({ products: products }));
    }

    render() {
        return (
            <div className="category">

                <div className="category__content">
                    <ul className="products">
                        {this.state.products.map(product => <li className="products__item" key={product.id}><Product data={product} /></li>)}
                    </ul>
                    <nav className="pagination">
                        <ul>
                            <li></li>
                        </ul>
                    </nav>
                </div>

                <aside className="category__filterbar">
                    <h2>Category {this.state.id}</h2>
                    <div className="filter">
                        {this.state.selectedOptions.length > 0 &&
                            <strong>{this.state.selectedOptions.length} filtre{this.state.selectedOptions.length > 1 ? 's' : ''} sélectionné{this.state.selectedOptions.length > 1 ? 's' : ''}</strong>
                        }
                        <ul className="options">
                            {this.state.selectedOptions.map(option => (
                                <li className="options__item" key={option.id}>
                                    <span className="option">
                                        {option.label}
                                        <a className="option__close-btn" href="#" title="Retirer ce filtre" onClick={() => this.removeFilter(option)}>X</a>
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <ul className="filters">
                            {this.state.filters.map(filter => (
                                <li className="filers__item" key={filter.type}>
                                    <Filter data={filter} onChange={(filter) => this.onFilter(filter)} ref={filter.type} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

            </div>
        );
    }
}

export default withRouter(Category)