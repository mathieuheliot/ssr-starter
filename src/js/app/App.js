import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Category from '../components/category/Category';

class App extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="app">
                <h2 className="app__title">Catalogue</h2>
                <Switch>

                    <Route
                        path='/:category'
                        component={() => <Category products={this.props.products} filters={this.props.filters} />}
                        exact />

                </Switch>
            </div>
        )
    }
}

export default App