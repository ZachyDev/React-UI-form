import React, { PureComponent } from 'react'

class User extends PureComponent {
    render() {
        const { render  } = this.props
        return (
            <div>
                { render(true) }
            </div>
        )
    }
}

export default User
