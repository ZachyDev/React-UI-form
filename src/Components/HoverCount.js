import React, { Component } from 'react'

class HoverCount extends Component {
    render() {
        const { count, incrementHandler } = this.props
        return (
            <div>
                <h2 onMouseOver = { incrementHandler }>Hovered { count } times</h2>
            </div>
        )
    }
}

export default HoverCount
