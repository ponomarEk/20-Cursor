import React, { Component } from 'react';

import "./user.css"

const VERIFIED_ICON = "https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg";


class User extends Component{
    render(){
        const { nick, author } = this.props;
        return(
            <div className = "info"> 
                
                    <ul className = "user__elements">
                        <li>
                            <span id = "name">
                                {author}
                            </span>
                            <img src = {VERIFIED_ICON} alt = '' id = "verify" />
                        </li>
                        <li>
                            <span>
                                {nick}
                            </span>
                        </li>
                    </ul>
                </div>
            
        )
    }
}

export default User;