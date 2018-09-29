import React from 'react';
import API from '../catalog/api';
import { withRouter } from 'react-router'

import Filter from '../filter/Filter';
import Product from '../product/Product';

export default class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            products: [],
            filters: [],
            selectedOptions: []
        }
    }

    componentDidMount() {

        API.getProducts(this.state.id)
            .then(products => this.setState({ products: products }));

        API.getFilters(this.state.id)
            .then(filters => this.setState({ filters: filters }));
    }

    addFilter(filterOption) {
        var options = [];
        options = this.state.selectedOptions;
        options.push(filterOption);
        this.setState({ selectedOptions: options });
        this.refresh();
    }

    removeFilter(filterOption) {
        var options = [];
        this.state.selectedOptions.forEach(option => {
            if (filterOption.id !== option.id && filterOption.filterType !== option.filterType) {
                options.push(option);
            }
        });
        this.setState({ selectedOptions: options });
        this.refresh();
    }

    onFilter(filterOption) {

        if (!filterOption.checked) {
            this.addFilter(filterOption);
        }
        else {
            this.removeFilter(filterOption);
        }
    }

    refresh() {
        API.findProducts(this.state.id, this.state.selectedOptions)
            .then(products => this.setState({ products: products }));
    }

    render() {
        return (
            <div className="category">

                <div className="category__content">
                    <ul className="products">
                        {this.state.products.map(product => <li className="products__item" key={product.id}><Product data={product} /></li>)}
                    </ul>
                </div>

                <aside className="category__filterbar">
                    <h2>Category {this.state.id}</h2>
                    <div className="filter">
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
                                    <Filter data={filter} onChange={(filter) => this.onFilter(filter)} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

            </div>
        );
    }
}