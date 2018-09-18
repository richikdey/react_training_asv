import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import updateField from '../action/updateField';

class DisplayInfo extends Component {
    state = { 
        changedUserValue:{}
     }

    captureChange = (e) =>{
        e.preventDefault();
        const changedValue = Object.assign({},this.props.selectedFBprops, 
            {title:e.target.value})         
        this.setState({
            changedUserValue:changedValue
        })
    }
    submitChange = (e) =>{
        e.preventDefault();
       {this.props.propsUpdateField(this.state.changedUserValue)}
    }
    render() {

        if(this.props.allUsers === null){
         return (
             <div>
                 Welcome, Select One Title !!
             </div>
         )
        }
        return ( 
            <div>
                <table border="1">
                  <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td>{this.props.allUsers.title}</td>
                    <td>{this.props.allUsers.description}</td>
                    </tr>
                  </tbody>
                </table>
                <hr/>
                <form onSubmit={this.submitChange}>
                Update Description {''}  
                <button
                type = "submit">Update</button><hr/>
                <input type = "text" 
                onChange={this.captureChange}/>
                </form>
            </div>
         );
    }
}

function mapStateToProps(state){
return({
    allUsers:state.UserClicked
})
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        propsUpdateField:updateField
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayInfo)
