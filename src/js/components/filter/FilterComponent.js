import React from 'react';

import CheckboxFilter from './checkbox/CheckboxFilter';
import RadioFilter from './radio/RadioFilter';

class FilterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({
            id: null,
            type: null,
            name: null,
            options: [],
            display: null
        }, props.data);
    }

    onToggle(filterOption) {
        this.props.onChange(filterOption);
    }

    render() {
        return (
            <ul className="filter">
                <h3>{this.state.name}</h3>
                {{
                    'checkbox': (
                        <CheckboxFilter data={this.state.options} onChange={(filterOption) => this.onToggle(filterOption)} ref={this.state.id} />
                    ),
                    'radio': (
                        <RadioFilter data={this.state.options} onChange={(filterOption) => this.onToggle(filterOption)} ref={this.state.id} />
                    ),
                    'select': (
                        <RadioFilter data={this.state.options} onChange={(filterOption) => this.onToggle(filterOption)} ref={this.state.id} />
                    )
                }[this.state.display.input]}
            </ul>
        )
    }
}

export default FilterComponent;