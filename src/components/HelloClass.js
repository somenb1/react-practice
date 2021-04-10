import React, { Component } from 'react'

class HelloClass extends Component {
    render() {
        return (
            <h1>Hi, I am {this.props.name} and I like {this.props.play}</h1>
        )
    }
}

export default HelloClass;