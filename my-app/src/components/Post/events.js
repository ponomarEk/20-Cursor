import React, { Component } from 'react';

import './events.css';

class Events extends Component{
    state={
        isLiked:false,
        isCommented:false,
        isReposted:false
    }
    render(){
        let colorIfLiked;
        let colorIfCommented;
        let colorIfReposted;
        const { likes, comments, reposts, changeLike, changeRepost, changeComment } = this.props;
        const like=()=>{
            this.state.isLiked ? changeLike([likes-1,this.props.id-1]) : changeLike([likes+1,this.props.id-1]);
            this.setState({
                isLiked:!this.state.isLiked
            })
        }
        const comment=()=>{
            this.state.isCommented ? changeComment([comments-1,this.props.id-1]) : changeComment([comments+1,this.props.id-1]);
            this.setState({
                isCommented:!this.state.isCommented
            })
        }
        const repost=()=>{
            this.state.isReposted ? changeRepost([reposts-1,this.props.id-1]) : changeRepost([reposts+1,this.props.id-1]);
            this.setState({
                isReposted:!this.state.isReposted
            })
        }    
        if(this.state.isLiked){
            colorIfLiked='red'
        }else{
            colorIfLiked='#4b5965'
        } 

        if(this.state.isCommented){
            colorIfCommented='white'
        }else{
            colorIfCommented='#4b5965'
        }

        if(this.state.isReposted){
            colorIfReposted='white'
        }else{
            colorIfReposted='#4b5965'
        }

        return (
            <div className="events">
              <div className="event">
                  <i onClick={comment} className="far fa-comment-alt icon fa-lg" style={{color:colorIfCommented}}></i>
                  <span>{comments}</span>
              </div>
                <div className="event">
                    <i onClick={repost} className="fas fa-retweet icon fa-lg" style={{color:colorIfReposted}}></i>
                    <span>{reposts}</span>
                </div>
                <div className="event">
                    <i onClick={like} className="far fa-heart icon fa-lg" style={{color:colorIfLiked}}></i>
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