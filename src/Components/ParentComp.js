import React, { PureComponent, Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'
import MemoComp from './MemoComp'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Zachy_Codes'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Zachy_Codes'
            })
        },2000)
    }
    render() {
        console.log('*************************ParentComp render**********************')
        return (
            <div>
               <PureComp name = { this.state.name } />
               <RegularComp name = { this.props.name } />
               <MemoComp name = { this.state.name } />
               
            </div>
        )
    }
}

export default ParentComp
