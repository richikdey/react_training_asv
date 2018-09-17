import React from 'react'
import "../components/index.css"

class Names1 extends React.Component {
    state = {  }
    render() { 

        

        return ( 
            <div className = "colorname">
            Name : {this.props.first}
         </div>
        );
    }
}
 
export default Names1;