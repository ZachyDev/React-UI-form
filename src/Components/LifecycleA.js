import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'hello'
        }
        console.log('LifecycleA constructor')
    }
static getDerivedStateFromProps(props,state){
    console.log('LifecycleA getDerivedStateFromProp');
    return null;
}
componentDidMount(){
    console.log('LifecycleA componentDidMount');
}
shouldComponentUpdate(){
    console.log('LifecycycleA shouldComponentUpdate')
    return true;
}
getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
}
componentDidUpdate(){
    console.log('LifecycleA componentDidUpdate')
}
changeState = () =>{
    this.setState({
        name: 'Codevolution'
    })
}
    render() {
        console.log('LifecycleA render')
        return (
            <div>
            <strong>Component Lifecycle MethodsA</strong>
            <button onClick = { this.changeState }>changeState</button>
            <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
