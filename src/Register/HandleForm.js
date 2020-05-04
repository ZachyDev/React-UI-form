import React, { Component } from 'react'
import styles from './styles.css'
import Form from './Form'
class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             age: '',
             gender: '',
             skill: ''
        }
    }
    HandleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    HandleGenderChange = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    HandleAgeChange = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    HandleSkillChange = (event) => {
        this.setState({
            skill: event.target.value
        })
    }
    HandleSubmit = (event) => {
       const { username, age, gender, skill } = this.state
       return (
           username === '' || null && 
           gender === '' || null &&
           age === '' || null &&
           skill === '' || null ? alert(`All fields are required`) :
           alert('Registration successful')
           ),
        event.preventDefault()
    }
    render() {
        const { render } = this.props
        const { username, age, gender, skill } = this.state
        return (
           <div>
             { render(
                 this.HandleUsernameChange,
                 this.HandleAgeChange,
                 this.HandleGenderChange,
                 this.HandleSkillChange,
                 this.HandleSubmit,
                 username,
                 age,
                 gender,
                 skill
                 ) }
           </div>
        )
    }
}

export default SignUp
