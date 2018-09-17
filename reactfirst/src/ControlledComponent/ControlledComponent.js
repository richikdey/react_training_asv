import React, { Component } from 'react'

class ControlledComponent extends Component {
    
    // constructor(props){
    //     super(props)
        state={
            name:"",
            Programming:false
        }
    // }

    // handleNameChange = (e) =>{
    //     this.setState({name:e.target.value})
    // }
    submitForm = (e) =>{
        e.preventDefault(e);
        console.log(this.state)
    }
    knowProgramming = (e) =>{
        this.setState({Programming:e.target.checked})
        console.log(e.target)
    }
    captureChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    render() { 
        return ( 
            <div>
               <h3>ControlledComponent</h3>
                <form onSubmit={this.submitForm}>
                Name : <input type = "text" 
                        name="name"
                        value={this.state.name} 
                        onChange={this.captureChange}/>

                kNOWS Programming? <input type = "checkbox" 
                                    name="Programming"
                                    checked={this.state.Programming}
                                    onChange={this.knowProgramming}/>
                <button type="Submit">Save</button>
                </form>
            </div>
         );
    }
}
 
export default ControlledComponent;