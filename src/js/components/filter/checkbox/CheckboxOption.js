import React from 'react';

class CheckboxOption extends React.Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({
            id: null,
            filterId: null,
            checked: false,
            label: null
        }, props.data);
    }

    toggle() {
        this.setState({ checked: !this.state.checked });
        this.props.onChange(this);
    }

    onToggle() {
        this.toggle();
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