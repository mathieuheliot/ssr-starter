import React from 'react';

import FilterSingle from '~/filter/FilterSingle';
import CheckboxOption from './CheckboxOption';

class CheckboxFilter extends FilterSingle {

    constructor(props) {
        super(props);
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