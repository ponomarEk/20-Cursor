import React, { Component } from 'react';

import './events.css';

class Events extends Component{
    state={
        isLiked:false,
        isCommented:false,
        isReposted:false
    }
    render(){

        const { likes, comments, reposts, changeLike, changeRepost, changeComment } = this.props;
        const like=()=>{
            this.state.isLiked ? changeLike(likes-1) : changeLike(likes+1);
            this.setState({
                isLiked:!this.state.isLiked
            })
        }
        const comment=()=>{
            this.state.isCommented ? changeComment(comments-1) : changeComment(comments+1);
            this.setState({
                isCommented:!this.state.isCommented
            })
        }
        const repost=()=>{
            this.state.isReposted ? changeRepost(reposts-1) : changeRepost(reposts+1);
            this.setState({
                isReposted:!this.state.isReposted
            })
        }
        return (
            <div className="events">
              <div className="event">
                  <i onClick={comment} className="far fa-comment-alt icon fa-lg"></i>
                  <span>{comments}</span>
              </div>
                <div className="event">
                    <i onClick={repost} className="fas fa-retweet icon fa-lg"></i>
                    <span>{reposts}</span>
                </div>
                <div className="event">
                    <i onClick={like} className="far fa-heart icon fa-lg"></i>
                    <span>{likes}</span>
                </div>
                <div className="event">
                    <i className="fas fa-upload icon fa-lg"></i>
                </div>
            </div>
        )
    }
}

export default Events;