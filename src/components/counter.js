/* 
================== Tip 1 ===================
 setState method must be used to change State property in UI
 otherwise we can derectly assign new value to state property and it will change nut we will not be able
 to see the updates in UI When State property Changes. :)
 
 ============ Tip 2 ================================
 In this Whenever we want something after setState Method Never place that code rigth after that code like this
    this.setState({count:this.state.count + 1 });
    console.log(this.state.count);
Here console.log() gets called asynchronously when the state hasnot been changed that time.
So to when we want to something to happen whenever setState executes there is Callback function available Where we can place code right there
        Like this - 
            this.setState({count:this.state.count + 1},()=>{ // this is another parameter which is function
                console.log("Call Back Valued ",this.state.count);
            });


 --- You Guys can check below codw which explains the same concept ---

 ================ Tip 3 ================================
 Now when we created IncrementFive() in which we called countinc() 5 times we saw that]
 all the setState updates were made in Single Attempt and runs all the countinc() at same time 
 which gives the great performance in React Application

 - Now to achieve regular increment in state property We can use prevState property in React.Component
*/
import React, {Component} from 'react';
class Counter extends Component {

    constructor(props){
        super(props)

        this.state = {
            count:0
        }
    }
    countinc(){
        this.setState((prevState)=>({ 
            // Here we can add Props as well like this (prevState,props)=>({count:prevState.count + props.addValue})
            count:prevState.count+1
        }),()=>{
            console.log("Call Back Value - ",this.state.count)
        });
        console.log(this.state.count)
    }

    incrementFive(){
        this.countinc()
        this.countinc()
        this.countinc()
        this.countinc()
        this.countinc()
    }
    render(){
        return(
            <div>{this.state.count}<br />
            <button onClick={()=> this.incrementFive()} >Click to Increment Count</button></div>
        );
    }
}
export default Counter;