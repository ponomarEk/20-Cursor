import React from 'react';

import Container from './container';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addData, changeLike, changeComment, changeRepost } from '../actions/actions'
import Input from '../Input/input'

function Post(props){
    let k =0
    const elements = props.res.map(value=>{
        k ++;
        return (<Container key = {k} id = {k} {...value} 
            changeLike = {props.changeLike} 
            changeComment={props.changeComment} 
            changeRepost={props.changeRepost}
             />)
    });
    
    return(
        <div>
            <Input {...props}/>
            {elements}
        </div>
    )
}

const mapStateToProps = (state)=>{
    let obj = [];
    state.data.forEach(value=>{
        return obj.push(value);
     });
     return {res:obj};
}


const mapActionsToProps = (dispatch)=>{
    return{
      addData: bindActionCreators(addData,dispatch),
      changeLike: bindActionCreators(changeLike,dispatch),
      changeComment: bindActionCreators(changeComment,dispatch),
      changeRepost: bindActionCreators(changeRepost,dispatch) 
    }
}

export default connect(mapStateToProps,mapActionsToProps)(Post);
