import React from 'react';

import RadioOption from './RadioOption';

class RadioFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            options: props.data,
            selectedOption: null
        };
    }

    toggle(option) {

        if (this.state.selectedOption !== null) {
            this.state.selectedOption.toggle();
        }

        this.setState({
            checked: true,
            selectedOption: option
        });

        this.props.onChange(option.state);
    }

    onToggle(option) {
        this.toggle(option);
    }

    render() {
        return (
            <ul className="filter__options filter__options--radio">
                {this.state.options.map(option => (
                    <li className="filter__options__item" key={'option' + option.id}>
                        <RadioOption data={option} onChange={(radioOption) => this.onToggle(radioOption)} ref={option.id}/>
                    </li>
                ))}
            </ul>
        )
    }
}

export default RadioFilter;