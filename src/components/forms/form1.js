import React, { Component } from 'react'

class form1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
                email:'',
                password:'',
                comments:'',
                topic:'Angular'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangepass = this.handleChangepass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event=>{
        this.setState({
            email:event.target.value
        });
    }
    handleChangepass = event =>{
        this.setState({
            password:event.target.value
        });
    }
    handleSubmit = event=> {
       console.log(this.state);
        event.preventDefault();
      }
      commentChange = event=>{
          this.setState({
              comments:event.target.value
          });
      }
      topicChange = (event)=>{
          this.setState({
              topic:event.target.value
          });
      }
    
    render() {
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                
                          <div className='lead'>Registration Forms : Model 1</div>
                        </div>
                        <div className='form-group'>
                            <label>Email ID - </label>
                            <input type='email'
                             value={this.state.email}
                             onChange={this.handleChange} placeholder='EMAIL ID' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Password - </label>
                            <input type='password' 
                            value={this.state.password} 
                            onChange={this.handleChangepass} placeholder='Password' className='form-control' />
                        </div>
                        
                        <div className='form-group'>
                            <label>Comment - </label>
                            <textarea
                                value={this.state.comments}
                                onChange={this.commentChange}
                                className='form-control' placeholder="Comments"></textarea>
                        </div>
                        <div className='form-group'>
                            <select value={this.state.topic} onChange={this.topicChange}>
                                <option value='Angular'>Angular</option>
                                <option value='React'>React</option>
                                <option value='Vue'>Vue</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <button type='submit' className='btn btn-danger btn-large large '>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default form1;
