import React from 'react';

import MultipleOption from '~/filter/MultipleOption';

class CheckboxOption extends MultipleOption {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label className="option">
                <input type="checkbox"
                    name={this.state.filterId + '_' + this.state.id}
                    value={this.state.id}
                    checked={this.state.checked}
                    onChange={() => this.onToggle()} />{this.state.label}
            </label>

        )
    }
}

export default CheckboxOption;