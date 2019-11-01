import React,{Component} from 'react';
class ConditionalRendering extends Component{
    
    isLoggedin = true;
    render(){
       return ( this.isLoggedin && <div>Hello Pushpendra</div> )
    }
}
export default ConditionalRendering;