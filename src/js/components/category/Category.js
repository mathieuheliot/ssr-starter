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

    render() {
        return (
            <div className="category">

                <h2>Category {this.state.id}</h2>

                <nav className="filters">
                    <ul>
                        <li><span className="filter">Best Kiteboarding</span></li>
                        <li><span className="filter">Kite</span></li>
                    </ul>
                </nav>

                <ul className="products">
                    {this.state.products.map(product => <li key={product.id}><Product data={product} /></li>)}
                </ul>

                <aside className="filterbar">
                    <ul className="filters">
                        {this.state.filters.map(filter => <li key={filter.type}><Filter data={filter} /></li>)}
                    </ul>
                </aside>

            </div>
        );
    }
}