import React from 'react';

import CheckboxOption from './CheckboxOption';

class CheckboxFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: props.data
        };
    }

    toggle(option) {
        this.props.onChange(option.state);
    }

    onToggle(option) {
        this.toggle(option);
    }

    render() {
        return (
            <ul className="filter__options filter__options--checkbox">
                {this.state.options.map(option => (
                    <li className="filter__options__item" key={'option' + option.id}>
                        <CheckboxOption data={option} onChange={(checkboxOption) => this.onToggle(checkboxOption)} ref={option.id} />
                    </li>
                ))}
            </ul>
        )
    }
}

export default CheckboxFilter;