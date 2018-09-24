import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Category from '../category/Category';

export default class Catalog extends React.Component {

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

                    <h1>{this.state.title}</h1>
                    <nav>
                        <ul>
                            <li><Link to="/20-ailes">Ailes</Link></li>
                            <li><Link to="/21-ailes">Ailes</Link></li>
                            <li><Link to="/22-ailes">Ailes</Link></li>
                        </ul>
                    </nav>

                    <Route path='/:category' render={({ match }) => <Category id={match.url.match(/^\/(\d+)-/)[1]} />} />

                </div>
            </Router>
        );
    }
}