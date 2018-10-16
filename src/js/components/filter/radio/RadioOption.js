import React from 'react';

import SingleOption from '~/filter/SingleOption';

class RadioOption extends SingleOption {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label className="option">
                <input type="radio"
                    name={this.state.filterType}
                    value={this.state.id}
                    checked={this.state.checked}
                    onChange={() => this.onToggle()} />{this.state.label}
            </label>
        )
    }
}

export default RadioOption;