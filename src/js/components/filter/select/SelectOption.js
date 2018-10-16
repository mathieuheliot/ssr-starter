import React from 'react';

import SingleOption from '~/filter/SingleOption';

class SelectOption extends SingleOption {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <option 
                value={this.state.id}
                checked={this.state.checked}>{this.state.label}
            </option>
        )
    }
}

export default SelectOption;