import React from 'react';
import QueryString from 'query-string';
import { withRouter } from 'react-router';

import API from '../catalog/api';
import FilterComponent from '../filter/FilterComponent';
import Product from '../product/Product';

class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.url.match(/^\/(\d+)-/)[1],
            url: props.url,
            page: QueryString.parse(props.location.search).p,
            products: [],
            filters: [],
            selectedOptions: [],
            totalPages: null,
            totalProducts: null,
        }
    }

    componentDidMount() {

        this.refresh();

        API.getFilters(this.state.id)
            .then(filters => this.setState({ filters: filters }));
    }

    goTo(page) {
        this.setState({ page: page }, () => this.refresh());
    }

    removeFilter(filterOption) {
        var instance = this.refs[filterOption.filterType].refs[filterOption.filterId].refs[filterOption.id];
        if (instance === undefined) {
            throw new Error('Cannot recover instance of FilterOption with type ' + filterOption.filterId + ' and id ' + filterOption.id);
        }
        instance.cancel();
    }

    refresh() {

        this.props.history.push({
            search: '?p=' + this.state.page
        });

        return API.getCategory(this.state.id, this.state.page, this.state.selectedOptions)
            .then(category => this.setState({
                products: category.products,
                totalPages: category.totalPages,
                totalProducts: category.totalProducts
            }));
    }

    onFilter(filterOption) {

        var options = [];
        if (filterOption.checked) {
            options = this.state.selectedOptions;
            options.push(filterOption);
        }
        else {
            this.state.selectedOptions.forEach(option => {

                if (filterOption.filterId !== option.filterId
                    || (filterOption.filterId === option.filterId && filterOption.id !== option.id)) {
                    options.push(option);
                }
            });
        }

        this.setState({
            page: 1,
            selectedOptions: options
        },
            () => this.refresh()
        );
    }

    onPaginate(e, page) {
        e.preventDefault();
        this.goTo(page);
    }

    onRemoveFilter(e, filterOption) {
        e.preventDefault();
        this.removeFilter(filterOption);
    }

    render() {

        let pagination = [];
        for (let p = 1; p <= this.state.totalPages; p++) {

            let style = 'pages__item';
            if (p == this.state.page) {
                style += ' active';
            }

            pagination.push(
                <li className={style} key={"p" + p}>
                    <a href={this.state.url + "?p=" + p} onClick={(e) => this.onPaginate(e, p)}>{p}</a>
                </li>)
        }

        return (
            <div className="category">

                <div className="category__content">
                    <ul className="products">
                        {this.state.products.map(product => <li className="products__item" key={'product' + product.id}><Product data={product} /></li>)}
                    </ul>
                    <nav className="pagination">
                        <ul className="pages">
                            {pagination}
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
                                <li className="options__item" key={'option' + option.id}>
                                    <span className="option">
                                        {option.label}
                                        <a className="option__close-btn" href="#" title="Retirer ce filtre" onClick={(e) => this.onRemoveFilter(e, option)}>X</a>
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <ul className="filters">
                            {this.state.filters.map(filter => (
                                <li className="filers__item" key={'filter' + filter.id}>
                                    <FilterComponent data={filter} onChange={(filter) => this.onFilter(filter)} ref={filter.type} />
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