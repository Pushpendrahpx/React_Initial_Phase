import React, {Component} from 'react';

export class Eventbinding extends Component{
    constructor(props){
        super(props)
        this.state = {
            message:"Hello"
        }


        // =============== 
        this.clickhandler = this.clickhandler.bind(this);
    }
    // clickhandler(){
    //     this.setState({
    //         message:"Changed Message"
    //     })
    //     console.log(this);
    // }

    clickhandler = ()=>{
        this.setState({
        message:"Changed 3rd method and most popular method to use Event Binding"
        },()=>{
            console.log("Hello")
        })

    }
    render(){
        return(
            <div className='alert alert-success'>
                <h1>Eventbinding, {this.state.message} </h1>
                <br />
                <button onClick={this.clickhandler}>Change to Good Bye</button>
            </div>
        );
    }
}
export default Eventbinding;