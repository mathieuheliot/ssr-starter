import React from 'react';

class OptionRadio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            options: props.data,
            selectedOption: null
        };
    }

    isChecked(option) {
        if (this.state.selectedOption == null) {
            return false;
        }

        return (option.id === this.state.selectedOption.id)
    }

    toggle(option) {
        this.setState({
            checked: true,
            selectedOption: option
        });
        this.props.onChange(option);
    }

    onToggle(option) {
        this.toggle(option);
    }

    render() {
        return (
            <ul className="filter__options filter__options--radio">
                {this.state.options.map(option => (
                    <li className="filter__options__item" key={'option' + option.id}>
                        <label className="option">
                            <input type="radio"
                                name={option.filterType}
                                value={option.id}
                                checked={this.isChecked(option)}
                                onChange={() => this.onToggle(option)} />{option.label}
                        </label>
                    </li>
                ))}
            </ul>

        )
    }
}

export default OptionRadio;