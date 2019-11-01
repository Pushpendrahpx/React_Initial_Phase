import React,{ Component } from "react";
class ChildComponent extends Component{
    constructor(props){
        super(props)

        
    }
    render(){
        return(
            <div className='card'>
                <div className='lead'>
                    ChildComponent
                    <br />
                    <button onClick={()=> this.props.greetHandler("Pintu")} className='btn btn-info'>Child Component Button</button>
                </div>
            </div>
        );
    }
}
export default ChildComponent;