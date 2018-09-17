import React from 'react'
import ReactDOM from 'react-dom'

class LifeCycleComponent extends React.Component {

       constructor(){
         super()
        this.state={
            status:0
        }
         this.updateState = this.updateState.bind(this)
    }
    componentWillMount(){
        console.log("componentWillMount")
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    updateState(){
      this.setState({status:this.state.status+1})
      if(this.state.status = 10)
      {
          this.unMountMe();
      }
    }
    unMountMe(){
         ReactDOM.unmountComponentAtNode(document.getElementById("lifecycle"))
    }
    render() { 
        return ( 
            <div>
                hi
                <button onClick={this.updateState}>Change state {this.state.status}</button>
                {/* <button onClick={this.unMountMe}>UnMount</button> */}
            </div>
         );
    }
}

 
export default LifeCycleComponent;