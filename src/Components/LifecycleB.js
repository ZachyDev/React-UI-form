import React, { Component } from 'react'

class LifeCycleMethods extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'LifeCycleMethods'
        }
        console.log('LifecycycleB constructor');
    }
    static getDerivedStateFromProps(props,state) {
        console.log('LifecycycleB getDerivedStateFromProps')
        return null;
    }
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycycleB shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycycleBcomponentDidUpdate')
    }
    render() {
        console.log('LifecycycleB method render')
        return (
            <div>
                <strong>Component Lifecycle MethodB</strong>
            </div>
        )
    }
}

export default LifeCycleMethods
