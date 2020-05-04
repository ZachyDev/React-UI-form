import React, { Component } from 'react'

class Student extends Component {
    render() { 
        const { name } = this.props
      if ( name === 'Moseti') { 
          throw new Error('Moseti is not a student!')
      }
      return (
      <div>
        { name }
      </div>
      )
    }
}

export default Student
