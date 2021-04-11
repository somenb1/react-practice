import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }
    /* increment() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count)
        });
        console.log(this.state.count);
    } */
    /* 
    # IMP : for
    */
    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }),
            () => {
                console.log(this.state.count)
            }
        );
        console.log(this.state.count);
    }
    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                <h1>Counter - {this.state.count}</h1>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.incrementFive()}>Increment By 5</button>
            </div>
        )
    }
}

export default Counter;