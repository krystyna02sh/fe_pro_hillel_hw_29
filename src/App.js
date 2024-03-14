import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Counter App</h1>
                <Counter initialValue={5} />
            </div>
        );
    }
}

export default App;
