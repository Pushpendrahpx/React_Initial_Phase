import React, {Component} from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            ParentName:"Pushpendra Vishwakarma"
        }
    }
    greetHandler = (childName)=>{
        alert(` Hello, ${this.state.ParentName}'s son is ${childName} `);
    }

    render(){
        return(
            <div className='jumbotron'>
                <div className='display-4'>
                    Parent Component
                </div>
                <div className='container'>
                    <ChildComponent greetHandler={this.greetHandler} ></ChildComponent>
                </div>
            </div>
        );
    }
}
export default ParentComponent;