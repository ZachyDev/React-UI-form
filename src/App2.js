import React , { Component } from 'react';
import FragmentsDemo from './Components/FragmentsDemo';
import Table from './Components/Table';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
class App2 extends Component {
    render() {
        return (
            <div className = "App">
                { /* Fragments Demo */}
                <FragmentsDemo /> 

                { /* Table Comp */}
                <Table />

                { /* Parent Comp */}
                <ParentComp />
              
                { /* Parent Comp */}
                <RefsDemo />
                

            </div>
        )
    }
}

export default App2
