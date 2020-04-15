import React, { Component } from 'react'

export default class Input extends Component{

    state={
        author:'',
        imageUrl:'',
        textContent:''
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

        const { addData } = this.props;
                const dispatchData=()=>{
                    if(this.state.author==='Choose hero'||this.state.author===''){
                        alert('Choose hero please')
                    }else{
                        addData({
                            author:this.state.author,
                            image:this.state.imageUrl,
                            text:this.state.textContent
                        });
                        this.setState({
                            author:'dscs',
                            imageUrl:'',
                            textContent:''
                        })
                    }
                }
        return(
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
                        <option defaultChecked> Choose hero</option>
                        <option> Anakin Skywalker </option>
                        <option> Chewbacca </option>
                        <option> Joda </option>
                    </select>
    
                    <button onClick={dispatchData} className='dispatch_data'> Push data</button>
                </div>
        )
    }
}