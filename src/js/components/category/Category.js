import React from 'react';
import http from 'axios';

import Product from '../product/Product';

export default class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            products: []
        }
    }

    componentDidMount() {
        http.get('/products.json')
            .then(json => this.setState({ products: json.data }))
            .catch(error => alert(error));
    }

    render() {
        return (
            <div>

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
                </aside>

            </div>
        );
    }
}