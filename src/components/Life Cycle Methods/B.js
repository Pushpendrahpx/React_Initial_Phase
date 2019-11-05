import React, { Component } from 'react'

class B extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 name:"Kendriya Vidyalaya"
        }

        console.log('children Constructor Called');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('Children getderivedstate called');
        return null;
    }
    render() {
        console.log('Children Render Method');
        return (
            <div>
                
            </div>
        )
    }

    componentDidMount(){
        console.log('Children componentDidMount');
    }
}

export default B
