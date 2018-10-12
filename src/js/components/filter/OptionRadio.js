import React from 'react';

class OptionRadio extends React.Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({
            id: null,
            checked: false,
            filterType: null,
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
                <input type="radio"
                    name={this.state.filterType}
                    value={this.state.id}
                    checked={this.state.checked}
                    onChange={() => this.onToggle()} />{this.state.label}
            </label>
        )
    }
}

export default OptionRadio;