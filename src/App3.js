import React, { Component } from 'react'
import './App.css'
import RefsDemo from './Components/RefsDemo'
import Portals from './Components/Portals'
import Student from './Components/Student'
import ErrorBoundary from './Components/ErrorBoundary'
import ClickCounter from './Components/ClickCounter'
import HoverCount from './Components/HoverCount'
import User from './Components/User'
import Counter2 from './Components/Counter2'
import { UserProvider } from './Components/userContext'
import ContextDemoA from './Components/ContextDemoA'
class App3 extends Component {
    render() {
        return (
            <div className = "App">
                <RefsDemo />
                <Portals />
                <ErrorBoundary>
                <Student name = 'Doroh'/>
                </ErrorBoundary>
                <ErrorBoundary>
                <Student name = 'Mosetii' />
                </ErrorBoundary>
                <ErrorBoundary>
                <Student name = 'Rodgers' />
                </ErrorBoundary>  
                <User render = {(isLoggedIn) => isLoggedIn ? 'Zachy_Dev' : 'Guest'}/>
                <Counter2  render = { (count,incrementHandler) => (
                    <ClickCounter count = { count } incrementHandler = { incrementHandler } />
                )}/>

                <Counter2  render = { (count,incrementHandler) => (
                    <HoverCount count = { count } incrementHandler = { incrementHandler } />
                )}/>

                <UserProvider value = 'Zachary Moseti'>
                    <ContextDemoA />
                </UserProvider>
            </div>
        )
    }
}

export default App3
