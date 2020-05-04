import React, { Component } from 'react'
import Child from './Child';

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parent: 'parent'
        }
        this.SayHelloToParent = this.SayHelloToParent.bind(this);
    }
SayHelloToParent(child){
    alert(`Hello ${ this.state.parent } from ${ child }`);
}
    
    render() {
        return (
            <div>
                <Child sayHi = { this.SayHelloToParent }/>
            </div>
        )
    }
}

export default Parent
