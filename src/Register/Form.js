import React, { Component } from 'react'

class Form extends Component {
    render() {
        const { HandleUsername,HandleAge,HandleGender,HandleSkill,HandleSubmit,username,age,gender,skill } = this.props
        return (
            <form onSubmit = { HandleSubmit }>
            <div className = "form">
               <h1 id = "title"> Register Form </h1>
               {/*username */}
               <div>
                     <input type="text" placeholder = "Username/Email"  value = { username } onChange = { HandleUsername }/>
                </div>
                {/*age */}
                <div>
                    <input type = "number" placeholder = "Age" value = { age } onChange = { HandleAge }/>
                </div>
                 {/*gender */}
                <div>
                    <input type = "text" placeholder = "Gender" value = { gender } onChange = { HandleGender }/>
                </div>
                 {/*Skills */}
                 <div>
                    <input type = "text" placeholder = "Skill" value = { skill } onChange = { HandleSkill }/>
                </div>
                 {/*Submit */}
                 <input type="submit" value = "Register"/>
            </div>
            
            </form>
        )
    }
}

export default Form
