import React, { Component } from 'react';

import './App.css';
import { ChatMessage } from './components/ChatMessage';
import { Signup } from './components/Signup';
import { default as Chatkit } from '@pusher/chatkit-server';
import { ChatApp } from './components/ChatApp'

const chatkit = new Chatkit({
  instanceLocator: 'v1:us1:81cda96f-0627-4524-8d09-e94e669bc084',
  key: '13f201c7-1674-49b1-aa40-b94b983d0f52:cwBLkQHS+3zA7h35UKuv0OnJWTlD2hiU3Vk34OZW534='
})

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUsername: '',
      currentId: '',
      currentView: 'signup'
    }
  }

  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  createUser = (username) => {
    console.log("username",username)
    chatkit.createUser({
      id: username,
      name: username
    })
      .then((currentUser) => {
        this.setState({
          currentUsername: username,
          currentId: username,
          currentView: 'chatApp'
        })
      }).catch((err) => {
        if (err.status === 400) {

          this.setState({
            currentUsername: username,
            currentId: username,
            currentView: 'chatApp'
          })

        }
        else {
          console.log(err.status)
        }
      })

  }

  render() {
debugger
    let view = '';
    if (this.state.currentView === "ChatMessage") {
      debugger
      view = <ChatMessage changeView={this.changeView} />
    } else if (this.state.currentView === "signup") {
      view = <Signup onSubmit={this.createUser} />
    } else if (this.state.currentView === "chatApp") {
      view = <ChatApp currentId={this.state.currentId} />
    }

    return (
      <div className="App">
        {view}
      </div>
    )
  }

}

export default App;
