import React, { Component } from 'react'
import ContextDemoB from './ContextDemoB'
class ContextDemoA extends Component {
    render() {
        return (
            <div>
                <ContextDemoB />
            </div>
        )
    }
}

export default ContextDemoA
