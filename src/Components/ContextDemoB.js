import React, { Component } from 'react'
import ContextDemoC from './ContextDemoC'
class ContextDemoB extends Component {
    render() {
        return (
            <div>
                <ContextDemoC />
            </div>
        )
    }
}

export default ContextDemoB
