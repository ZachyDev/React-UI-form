import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('Pure component render')
        const { name } = this.props;
        return (
            <div>
                Pure Component - { name }
            </div>
        )
    }
}

export default PureComp;
