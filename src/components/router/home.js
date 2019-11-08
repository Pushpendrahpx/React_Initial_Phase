import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class home extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
        this.style = {
        padding:'10px' 
        }
    }

    render() {
        return (
            <div className='container'>

            <div className='card'>
                <div className='card-header'>
                    Our Header
                </div>
                <div className='card-body'>
                    <ul className='h1'>
                        <Link to='/' >
                            <li className='btn btn-danger'>Home</li>
                        </Link>

                        <Link to='/register'>
                            <li className='btn btn-success'>Register</li>
                        </Link>

                        <Link to='/login'>
                            <li className='btn btn-warning' style={this.style}> Login</li>
                        </Link>
                        
                    </ul>
                </div>
            </div>
            </div>
        )
    }
}

export default home
