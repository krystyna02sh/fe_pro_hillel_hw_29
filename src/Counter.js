import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { value: props.initialValue };
    }

    increment = () => {
        this.setState((prevState) => ({ value: prevState.value + 1 }));
    };

    decrement = () => {
        this.setState((prevState) => ({ value: prevState.value - 1 }));
    };

    reset = () => {
        this.setState({ value: this.props.initialValue });
    };

    render() {
        return (
            <div>
                <button onClick={this.decrement} className='but'>-</button>
                <span>{this.state.value}</span>
                <button onClick={this.increment} className='but'>+</button>
                <div>
                    <button onClick={this.reset} className='res'>Reset</button>
                </div>

            </div>
        );
    }
}

export default Counter;

