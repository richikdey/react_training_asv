import React from 'react';

class SecondFriend extends React.Component {
    state = {  }
    render() { 
        return (
            <div>
               Hello {this.props.children} congrats on being a {this.props.proffesion}!!
            </div>
        );
    }
}
export default SecondFriend;