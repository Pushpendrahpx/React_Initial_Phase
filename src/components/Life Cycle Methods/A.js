import React, { Component } from 'react'
import B from './B';

class A extends Component {
    constructor(props) {
        super(props)

        this.state = {
                name:'Pushpendra' 
        }
        console.log("Main Constructor 1");
    }

    static getDerivedStateFromProps(props, state) {
     console.log(' Main getDerivedStateFromProps Invoked 2 ');  
     return null; 
    }
    

    render() {
        return (
            <div>{console.log('Main Render run 3')}
                wrfrf
                <B />
            </div>
        )
    }

    componentDidMount(){
        console.log('Main componentDidMount 4');
    }
}

export default A
