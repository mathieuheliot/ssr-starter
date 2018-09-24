import React from 'react';

class FilterOption extends React.Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({
            id: null,
            checked: false,
            filterType: null,
            label: null
        }, props.data);
    }

    onToggle() {
        this.setState({ checked: !this.state.checked });
        this.props.onChange(this.state);
    }

    render() {
        return (
            <label className="option">
                <input type="checkbox"
                    name={this.state.filterType}
                    value={this.state.id}
                    onChange={() => this.onToggle()} />{this.state.label}</label>
        )
    }
}

export default FilterOption;