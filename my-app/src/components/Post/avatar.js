import React, { Component } from 'react';

import "./avatar.css"

class Avatar extends Component{
    render(){
        const{ avatar } = this.props;
        return(
            <img src = {avatar} alt = '' id = "author"/>
        )
    }
}
export default Avatar;