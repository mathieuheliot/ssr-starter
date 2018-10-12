import React from 'react';

import OptionCheckbox from './OptionCheckbox';
import OptionRadio from './OptionRadio';

class Filter extends React.Component {

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
                <ul className="filter__options">
                    {this.state.options.map(option => (
                        <li className="filter__options__item" key={'option' + option.id}>
                            {{
                                'checkbox': (
                                    <OptionCheckbox data={option} onChange={(filterOption) => this.onToggle(filterOption)} ref={option.id} />
                                ),
                                'radio': (
                                    <OptionRadio data={option} onChange={(filterOption) => this.onToggle(filterOption)} ref={option.id} />
                                )
                            }[this.state.display.input]}
                        </li>
                    ))}
                </ul>
            </ul>
        )
    }
}

export default Filter;