import React from 'react';

import FilterMultiple from '~/filter/FilterMultiple';
import SelectOption from './SelectOption';

class SelectFilter extends FilterMultiple {

    constructor(props) {
        super(props);
    }

    select(optionId) {
        this.refs[optionId].check();
    }

    onChange(event) {
        let optionId = event.target.value
        this.select(optionId);
    }

    render() {
        return (
            <select
                className="filter__options filter__options--select" 
                name={this.state.type}              
                onChange={(event) => this.onChange(event)}>
                {this.state.options.map(option => (
                    <SelectOption
                        data={option}
                        onCancel={(selectOption) => this.cancel(selectOption)}
                        onCheck={(selectOption) => this.check(selectOption)}
                        onUncheck={(selectOption) => this.uncheck(selectOption)}
                        key={'option' + option.id}
                        ref={option.id} />
                ))}
            </select>
        )
    }
}

export default SelectFilter;