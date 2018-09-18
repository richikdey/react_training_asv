import React, { Component } from 'react';
import '../../node_modules/semantic-ui/dist/semantic.css'

class Product extends Component {
    state = {
        like: this.props.vote
    }


    likeCount = () => {
        // this.setState(
        //     { like: this.state.like + 1 }
        // )
        this.props.checkVote(this.props.id,1)
    }
    dislikeCount = () => {
        if(this.state.like > 0){
        // this.setState(
        //     { like: this.state.like - 1 }
        // )
        this.props.checkVote(this.props.id,0)
    }
    }

    render() {
        // console.log(this.props.likeCount)
        return (

            <div className="item">
                <div className="image">
                    <img src={this.props.imageUrl} />
                </div>

                <div className="middle aligned content">
                    <div className="header">
                        {this.props.vote}
                    </div>
                    <div className="description">
                        <a>{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="extra">
                        <span>Submitted by:</span>
                        <img className="ui avatar image" src={this.props.avatarUrl} />
                    </div>
                    <div className="ui buttons">
                        <button onClick={this.likeCount} className="ui positive button">Upvote</button>
                        <div className="or"></div>
                        <button onClick={this.dislikeCount} className="ui button">Downvote</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;