import React from 'react';

export class Entry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            messageArray: [],
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handlePost = this.handlePost.bind(this)
    }
    handleChange(e) {
        let message = e.target.value;
        this.setState({
            value: message,
            
        })
    }
    handleClick(){
        let messageArray = this.state.messageArray.slice();
        messageArray.push(this.handlePost())
        console.log(messageArray)
        this.setState({
            messageArray: messageArray,
        })
    }
    handlePost(){
        return (
            <Forum  message={this.state.value} 
                    user={this.props.userName}/>
        )
    }
    render() {
        return (
            <div>
            <input  onChange={this.handleChange} 
                    type="text" 
                    placeholder="post here"></input>
            <button onClick={this.handleClick}>Post</button>
            <div id="board">
             {this.state.messageArray}
             </div>
            </div>
        )
    }
}

class Forum extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messageArray: []
        }
    }
    render(){
        return (
            <div>
                <h3>{this.props.user}</h3><h4>{this.props.message}</h4>
            </div>
        )
    }
}