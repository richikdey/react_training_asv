import React from 'react'


class Name extends React.Component {
    
    render() { 

        let nameColor = {
        color : this.props.fcolor,
        backgroundColor : "burlywood",
        float : "left",
        padding:5,
        margin:2,
        border:"2px solid red",
        borderRadius:5
        }

        return ( 
            <div style = {nameColor}>
               {this.props.children}
            </div>
         );
    }
}
 
export default Name;