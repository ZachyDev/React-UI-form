import React, { Component } from 'react'

class Child extends Component {
    render() {
        const { sayHi } = this.props
        return (
            <div>
                <button onClick = { () =>  sayHi('zachy') }>Say Hi</button>
            </div>
        )
    }
}

export default Child
