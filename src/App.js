import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ChannelSection} from './channels/ChannelSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [
        {name: 'Hardware Support'},
        {name: 'Software Support'},
        {name: 'ToolMan Support'}
      ]
    }
  }
  addChannel(name) {
    let {channels} = this.state;
    channels.push({name: name});
    this.setState({
      channels: channels
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ChannelSection />
      </div>
    );
  }
}

export default App;
