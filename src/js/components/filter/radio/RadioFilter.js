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
        return (
            <ul className="filter__options filter__options--radio">
                {this.state.options.map(option => (
                    <li className="filter__options__item" key={'option' + option.id}>
                        <RadioOption
                            data={option}
                            onCancel={(radioOption) => this.cancel(radioOption)}
                            onCheck={(radioOption) => this.check(radioOption)}
                            onUncheck={(radioOption) => this.uncheck(radioOption)}
                            ref={option.id} />
                    </li>
                ))}
            </ul>
        )
    }
}

export default RadioFilter;