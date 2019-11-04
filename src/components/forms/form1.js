import React, { Component } from 'react'

class form1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <form>
                        <div className='form-group'>
                
                          <div className='lead'>Registration Forms : Model 1</div>
                        </div>
                        <div className='form-group'>
                            <label>Email ID - </label>
                            <input type='email' placeholder='EMAIL ID' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Password - </label>
                            <input type='password' placeholder='Password' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <button type='button' className='btn btn-danger btn-large large '>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default form1;
