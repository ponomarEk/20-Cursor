import React, { Component } from 'react';

import './date.css';



class Date extends Component{
    render(){
        const { date } = this.props;
        return(
            <span>
                {date}
            </span>
        )
    }
}

export default Date;