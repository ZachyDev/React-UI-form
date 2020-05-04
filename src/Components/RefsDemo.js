import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount(){
        console.log(this.inputRef)
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                Refs Demo
                <input type="text" ref = { this.inputRef }/>
            </div>
        )
    }
}

export default RefsDemo
