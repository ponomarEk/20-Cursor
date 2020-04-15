import React, { Component } from "react";

import User from './user';
import Content from './content'
import Avatar from './avatar'
import Events from './events';
import Date from './date'


import "./container.css";

export default class Container extends Component{


    render(){
 

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
           
         </>
        )
    }
    
}
