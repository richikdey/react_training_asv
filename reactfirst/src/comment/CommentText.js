import React from 'react'

class CommentText extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className = "colorname">
               Comment : {this.props.children} 
            </div>
        );
    }
}
 
export default CommentText;