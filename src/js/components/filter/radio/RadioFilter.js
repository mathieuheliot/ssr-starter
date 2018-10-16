import React from 'react';

import FilterSingle from '~/filter/FilterSingle';
import RadioOption from './RadioOption';

class RadioFilter extends FilterSingle {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="filter__options filter__options--radio">
                {this.state.options.map(option => (
                    <li className="filter__options__item" key={'option' + option.id}>
                        <RadioOption
                            data={option}
                            onCancel={(radioOption) => this.cancel(radioOption)}
                            onCheck={(radioOption) => this.check(radioOption)}
                            onUncheck={(radioOption) => this.uncheck(radioOption)}
                            ref={option.id} />
                    </li>
                ))}
            </ul>
        )
    }
}

export default RadioFilter;