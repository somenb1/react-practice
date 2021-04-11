import React, { Component } from 'react'

class HelloClass extends Component {
    render() {
        // destructuring props
        const { name, play } = this.props;
        {/* 
        before destructuring
        <h1>Hi, I am {this.props.name} and I like {this.props.play}</h1> */ }
        return (
            <h1>Hi, I am {name} and I like {play}</h1>
        )
    }
}

export default HelloClass;