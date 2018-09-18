import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import updateTitle  from '../actions/updateTitle'

class FeedbackDescription  extends Component {

    constructor(){
        super()
        this.state ={
            updatedFB:{}
        }
        this.updateTitleInContainer = this.updateTitleInContainer.bind(this)
        this.dispatchNewTitle = this.dispatchNewTitle.bind(this)
    }

    updateTitleInContainer(e){
        e.preventDefault();
        const temp_updatedFB = Object.assign({}, this.props.selectedFBprops, {
                                                                    title:e.target.value
                                                                        })
        this.setState({
            updatedFB:temp_updatedFB
        })
        console.log(this.state.updatedFB)


    }

    dispatchNewTitle(e){
        e.preventDefault();
        this.props.updateTitleLocal(this.state.updatedFB)
    }
    render() { 
        if(this.props.selectedFBprops == null ){
            return(
            <div>
              <p>Click on any title</p>
            </div>)
        }
       

        return ( 
            <div>
               <ul>
                    <li>Feedback Description will come here</li>
                    <li>{this.props.selectedFBprops.description}</li>
                    <li>Title: {this.props.selectedFBprops.title}</li>
                    <br></br>
                    <form onSubmit={this.dispatchNewTitle}>
                        Update title:
                        <input type="text"
                               defaultValue={this.props.selectedFBprops.title} 
                               onChange={this.updateTitleInContainer}
                        />
                        <button type="submit">Update Title</button>
                    </form>
                </ul>
            </div>
         );
    }
}

function connectStoreToComponents (state){
    return {
        selectedFBprops:state.oneFB
    }
  }

  function connectActionToComponentAsProps(dispatch){
    return bindActionCreators({updateTitleLocal: updateTitle}, dispatch)
} 

export default connect(connectStoreToComponents,connectActionToComponentAsProps)(FeedbackDescription)
