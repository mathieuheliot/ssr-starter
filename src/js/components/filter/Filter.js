import React from 'react';

import FilterOption from './FilterOption';

class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({
            id: null,
            type: null,
            name: null,
            options: []
        }, props.data);
    }

    onToggle(option) {
        this.props.onChange(option);
    }

    render() {
        return (
            <ul className="filter">
                <h3>{this.state.name}</h3>
                <ul className="filter__options">
                    {this.state.options.map(option => (
                        <li className="filter__options__item" key={option.id}>
                            <FilterOption data={option} onChange={(option) => this.onToggle(option)} />
                        </li>
                    ))}
                </ul>
            </ul>
        )
    }
}

export default Filter;