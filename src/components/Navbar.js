import React,{ Component } from 'react';
import './Navbar.css';
class Navbar extends Component{
    render(){
        return(
            <div className='navbar bg-dark navbar-dark text-white'>
                <div className='navbar-brand'>Askilly</div>
                <div className='nav-item'>
                    <ul>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
                
            </div>
        );
    }
};

export default Navbar;