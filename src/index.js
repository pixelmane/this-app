import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Entry } from './entry.js'

class Hula extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: 0,
      users: [{
        userName: 'James',
        memberLevel: 'Lion',
        logo: 'insertPhoto'
      }, {
        userName: 'Bill',
        memberLevel: 'Hawk',
        logo: 'insertPhoto'
      }, {
        userName: 'Tom',
        memberLevel: 'Otter',
        logo: 'insertPhoto'
      }]
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    let myValue = e.target.value;
    this.setState({
      currentUser: myValue,
    })
  }
  render() {
    return (
      <div>
        <div id="userNav">
          <button value={0} onClick={this.handleClick}>James</button>
          <button value={1} onClick={this.handleClick}>Bill</button>
          <button value={2} onClick={this.handleClick}>Tom</button>
        </div>
        <h1>you are signed in as {this.state.users[this.state.currentUser].userName}</h1>
        <Entry userName={this.state.users[this.state.currentUser].userName} userNumber={this.state.currentUser} />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Hula />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
