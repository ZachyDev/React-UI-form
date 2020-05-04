import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    static getDerivedStateFromError(error){
       return {
           hasError: true
       }
    }
    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }
    render(){
        const { hasError } = this.state
        const { children } = this.props
        return(
            hasError ? <h1>Something went wrong</h1>:
            children
        )
    }
}

export default ErrorBoundary
