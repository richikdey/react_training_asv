import React from 'react'
import Names1 from "./Names1"
import CommentText from "./CommentText"
import Action from "./Action"
class Comment extends React.Component {
    state = {} 
    render() { 
        return ( 
            <div>
            <div>
             <Names1 first="Richik"></Names1>
             <CommentText>SuperMan</CommentText>
            <Action/>
          </div>
          <div>
          <Names1 first="Rick"></Names1>
             <CommentText>BatMan</CommentText>
            <Action/>
          </div>
          </div>     
         );
    }
}
 
export default Comment;