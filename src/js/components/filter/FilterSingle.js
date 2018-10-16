import React from 'react';

class FilterSingle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: props.data
        };
    }

    toggle(option) {
        this.props.onChange(option.state);
    }

    onToggle(option) {
        this.toggle(option);
    }

    render() {
        throw new Error('You must implement render() method');
    }
}

export default FilterSingle;