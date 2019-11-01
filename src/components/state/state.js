/* 
--------- Props
Props get passed to the Component 
Function Parameters
Props are immutable

props - Functional Compomemts
this.props - Class Components



-------- State 
it is manages within Component
Variables declared within function body
State can be changed

useState Hook - Functional Components
this.state - Class Components
*/

import React, {Component} from 'react'

class State extends Component{
    constructor(){
        super()
            this.state = { // State is Predefined Variable
                message:'Hello'
            }
    }
    changeMessage = ()=>{
        this.setState({
            message:'Thanks for Subscribing'
        });
    }
    render(){
        return(
            <div className='container'>
                <div className='jumbotron'>
                    <div className='lead'>StateM - State Content</div>
                    {this.state.message}<br />
                    <button className='btn btn-danger' onClick={()=> this.changeMessage()}>Subscribe</button>
                </div>

            </div>
        );
    }
}
export default State