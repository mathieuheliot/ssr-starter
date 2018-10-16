import _ from 'lodash/lang';
import React from 'react';

class SelectOption extends React.Component {

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

        this.setState({ checked: false },
            () => {
                this.props.onCancel(this)
            }
        );
    }

    check() {

        if (this.state.checked) {
            return;
        }

        this.setState({ checked: true },
            () => this.props.onCheck(this)
        );
    }

    uncheck(callback) {

        if (!this.state.checked) {
            return;
        }
        
        this.setState({ checked: false },
            () => {
                if (!_.isUndefined(callback)) {
                    callback(this);
                }
                this.props.onUncheck(this)
            }
        );
    }

    toggle() {

        if (!this.state.checked) {
            this.check();
        }
        else {
            this.uncheck();
        }
    }

    render() {
        return (
            <option 
                value={this.state.id}
                checked={this.state.checked}>{this.state.label}
            </option>
        )
    }
}

export default SelectOption;