import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import selectFeedback from '../actions/index'

class FeedbackTitle extends Component {

    
    displayAllTitles=() => {
        return this.props.propsfeedbacktitles.map(onetitle=>{
            return(
                <li 
                key = {onetitle.id}
                onClick = {()=>this.feedbackClicked(onetitle)}>
                    {onetitle.title}
                </li>
                )
        })
    }

    feedbackClicked =(onetitle)=> 
        {this.props.selectFeedback(onetitle)}


    render() { 
        return ( 
            <div>
                <ul>
                    {this.displayAllTitles()}
                </ul>
            </div>
         );
    }
}

function connectStoreToComponents (state){
    // console.log(state)
  return {
      propsfeedbacktitles:state.allFB
  }
}

function bindActionCreatorsToFunctionAsProps(dispatch){
    return bindActionCreators({
        selectFeedback:selectFeedback
    },dispatch)
}

export default connect(connectStoreToComponents,bindActionCreatorsToFunctionAsProps)(FeedbackTitle)