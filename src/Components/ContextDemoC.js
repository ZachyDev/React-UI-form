import React, { Component } from 'react'
import { UserConsumer } from './userContext'
class ContextDemoC extends Component {
    render() {
      return(
          <UserConsumer>
                {
                   (username) => {
                       return <div>Hello { username }</div>
                   }
                }
          </UserConsumer>
      )
    }
}

export default ContextDemoC
