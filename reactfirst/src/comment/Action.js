import React from 'react'

class Action extends React.Component {

    constructor() {
        super()
        this.state = {
            like: 0,
            dislike: 0
        }
        this.dislikeMe = this.dislikeMe.bind(this)
        this.likeMe = this.likeMe.bind(this)
    }



    likeMe = function () {
        this.setState(
            { like: this.state.like + 1 }
        )
    }

    dislikeMe = function () {
        this.setState(
            { dislike: this.state.dislike + 1 }
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.likeMe}>Like {this.state.like}</button>
                <button onClick={this.dislikeMe}>Dislike {this.state.dislike}</button>
            </div>
        );
    }
}

export default Action;