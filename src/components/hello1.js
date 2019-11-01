import React,{Component} from 'react';
class Hello1 extends Component{
    render(props){
        return(
            <div className='card container'>
                <div className='card-header'>{this.props.name} viewed profile of {this.props.heroName} </div>
                <div className='card-body'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default Hello1;