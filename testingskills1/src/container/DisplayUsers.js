import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import selectTitle from '../action/index'

class DisplayUsers extends Component {
    state = {  }

    mapAllData = () =>{
        return this.props.propsAllUsers.map(onedata=>{
            return (
                <li key={onedata.id}
                onClick = {()=>{this.TitleClicked(onedata)}}>
                   {onedata.title}
                </li>
            )
        })
    }
    
    TitleClicked=(onedata)=>{this.props.propsSelectTitle(onedata)}

    render() { 
        return ( 
            <div>
                <ul>
                {this.mapAllData()}
                </ul>
            </div>
         );
    }
}
 
function mapStateToProps(state){
    return({
        propsAllUsers:state.allUsers
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
           propsSelectTitle:selectTitle
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayUsers)