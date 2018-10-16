import React from 'react';

class MultipleOption extends React.Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({
            id: null,
            filterId: null,
            checked: false,
            label: null
        }, props.data);
    }

    cancel() {
        this.toggle();
    }

    toggle() {
        this.setState({ checked: !this.state.checked },
            () => this.props.onChange(this)
        );
    }

    onToggle() {
        this.toggle();
    }

    render() {
        throw new Error('You must implement render() method');
    }
}

export default MultipleOption;