import React, { Component } from 'react'

class Counter2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
             count: 0
        }
    }
    incrementHandler = () => {
        this.setState(prevState =>{
            return { count: prevState.count +1 }
        })
    }
    
    render() {
        const { render } = this.props
        const { count } = this.state
        return (
            <div>
                { render(count,this.incrementHandler) }
            </div>
        )
    }
}

export default Counter2
