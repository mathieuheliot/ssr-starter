import React from 'react';

class FilterMultiple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            options: props.data,
            selectedOption: null
        };
    }

    cancel(option) {
        this.setState({
            selectedOption: null
        },
            () => this.props.onChange(option.state)
        );
    }

    check(option) {

        let action = () => {

            this.setState({
                selectedOption: option
            },
                () => this.props.onChange(option.state)
            );
        }

        if (this.state.selectedOption !== null) {
            this.state.selectedOption.uncheck(() => {
                action();
            });
        }
        else {
            action();
        }
    }

    uncheck(option) {        
        this.props.onChange(option.state);
    }

    render() {
        throw new Error('You must implement render() method');
    }
}

export default FilterMultiple;