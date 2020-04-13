import React, { Component } from "react";

import User from './user';
import Content from './content'
import Avatar from './avatar'
import Events from './events';
import Date from './date'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeText, changeImage, changeAuthor, changeLike, changeComment, changeRepost } from '../actions/actions'

import "./container.css";

class Container extends Component{

    state={
        author:this.props.author,
        imageUrl:this.props.image,
        textContent:this.props.text
    }

    onChangeImageUrl=(e)=>{
        this.setState({ imageUrl: e.target.value })
    }
    onChangeAuthor=(e)=>{
        this.setState({ author: e.target.value })
        console.log(e.target.value)
    }
    onChangeTextContent=(e)=>{
        this.setState({ textContent: e.target.value })
    }
    

    render(){
        const { changeAuthor, changeText, changeImage } = this.props;
        const dispatchData=()=>{
                changeAuthor(this.state.author);
                changeImage(this.state.imageUrl);
                changeText(this.state.textContent);
        }
        return(
            <>
            <div className ="container">
                <Avatar {...this.props}/>
                <div className="f">
                    <div className = "a">
                        <User {...this.props}/>
                        <Date {...this.props}/> 
                    </div>
                    <Content {...this.props}/>
                    <Events {...this.props}/>
                </div>
            </div>
            <div className='change_data'>
                <label>
                    <input
                        value={this.state.textContent}
                        onChange={this.onChangeTextContent}
                        type='text' 
                        placeholder='Post text'
                    />
                    Text content
                </label>
                <label>
                    <input
                        value={this.state.imageUrl}
                        onChange={this.onChangeImageUrl}
                        type='text' 
                        placeholder='Image url'
                    />
                    Image URL
                </label> 
                <select onChange={this.onChangeAuthor} >
                    <option defaultChecked> Anakin Skywalker </option>
                    <option> Chewbacca </option>
                    <option> Joda </option>
                </select>

                <button onClick={dispatchData} className='dispatch_data'> Push data</button>
            </div>
         </>
        )
    }
    
}
const mapStateToProps = (state)=>{
    return{
        author: state.author,
        avatar: state.avatar, 
        nick: state.nick,
        date: state.date,
        text: state.text,
        image: state.image,
        likes: state.likes,
        comments: state.comments,
        reposts: state.reposts
    }
}

const mapActionsToProps = (dispatch)=>{
    return{
      changeAuthor: bindActionCreators(changeAuthor,dispatch),
      changeImage: bindActionCreators(changeImage,dispatch),
      changeText: bindActionCreators(changeText,dispatch),
      changeLike: bindActionCreators(changeLike,dispatch),
      changeComment: bindActionCreators(changeComment,dispatch),
      changeRepost: bindActionCreators(changeRepost,dispatch) 
    }
}

export default connect(mapStateToProps,mapActionsToProps)(Container);