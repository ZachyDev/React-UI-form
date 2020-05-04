import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class Portals extends Component {
    render() {
      return ReactDOM.createPortal(
          <h2>React Portals</h2>,
          document.getElementById('portals-root')
      )
    }
}

export default Portals
