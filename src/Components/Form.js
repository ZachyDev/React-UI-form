import React, { Component } from 'react'

class Form extends Component { 
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             language: ''
        }
    }
HandleUsernameChange = (event) => {
    this.setState({
        username: event.target.value
    })
}
HandleCommentChange = (event) => {
    this.setState({
        comments: event.target.value
    })
}
HandleLanguageChange = (event) => {
    this.setState({
        language: event.target.value
    })
}
HandleSubmit = (event) => {
    alert(`${ this.state.username } ${ this.state.comments } ${ this.state.language }`);
    event.preventDefault();
}
    render() {
        const { username, comments, language } = this.state;
        return (
            <form onSubmit = { this.HandleSubmit }>
                <div>
                    <label>Username</label>
                    <input type="text" value = { username } onChange = { this.HandleUsernameChange } placeholder = "username" />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value = { comments } onChange = { this.HandleCommentChange }/>
                </div>
               <div>
                    <label>Language</label>
                    <select value = { language } onChange = { this.HandleLanguageChange }>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                    </select>
               </div>
               <button type="submit">Submit</button>

            </form>
        )
    }
}

export default Form
