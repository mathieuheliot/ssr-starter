import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Category from '../category/Category';

export default class Catalog extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            title: "Catalogue Prestashop"
        }
    }

    render() {
        return (
            <Router>
                <div className="catalog">

                    <header className="header">
                        <h1>{this.state.title}</h1>
                    </header>

                    <main className="content">
                        <Route
                            path='/:category'
                            component={({ match }) => <Category id={match.url.match(/^\/(\d+)-/)[1]} />} />
                    </main>

                </div>
            </Router>
        );
    }
}