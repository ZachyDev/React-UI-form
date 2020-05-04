import React, { Component } from 'react'
import './App.css'
import HandleForm from './Register/HandleForm'
import Form from './Register/Form'
class Register extends Component {
    render() {
        return (
            <div  className = "App">
               <HandleForm render = {(HandleUsername,HandleAge,HandleGender,HandleSkill,HandleSubmit,username,age,gender,skill) => (
                   <Form HandleUsername = { HandleUsername } HandleAge = { HandleAge } HandleGender = { HandleGender } HandleSkill = { HandleSkill }
                        HandleSubmit = { HandleSubmit }
                        username = { username } age = { age } gender = { age }  gender = { gender } skill = { skill } 
                   />
               ) }/> 
            </div>
        )
    }
}

export default Register
