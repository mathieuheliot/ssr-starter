import _ from 'lodash/lang';
import React from 'react';

class SingleOption extends React.Component {

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

    onToggle() {
        this.toggle();
    }

    render() {
        throw new Error('You must implement render() method');
    }
}

export default SingleOption;