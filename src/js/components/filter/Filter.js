import React from 'react';

class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({
            id: null,
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
                            <label className="option">
                                <input type="checkbox"
                                    name={option.type}
                                    value={option.id}
                                    onChange={() => this.onToggle(option)} />{option.name}</label>
                        </li>
                    ))}
                </ul>
            </ul>
        )
    }
}

export default Filter;