import React from 'react';

class FirstFriend extends React.Component {
    state = {  }
    render() { 
        return (
            <div>
               Hello {this.props.children} from {this.props.location}!!
            </div>
        );
    }
}
export default FirstFriend;