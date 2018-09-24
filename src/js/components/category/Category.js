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
            filters: []
        }
    }

    componentDidMount() {

        API.getProducts(this.state.id)
            .then(products => this.setState({ products: products }));

        API.getFilters(this.state.id)
            .then(filters => this.setState({ filters: filters }));
    }

    onFilter(filter) {
        API.findProducts(this.state.id, this.state.filters)
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
                    <ul className="filters">
                        {this.state.filters.map(filter => (
                            <li className="filers__item" key={filter.type}>
                                <Filter data={filter} onChange={(filter) => this.onFilter(filter)} />
                            </li>
                        ))}
                    </ul>
                </aside>

            </div>
        );
    }
}