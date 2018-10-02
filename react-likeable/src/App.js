import React, { Component } from 'react';
import LikeButton from './components/like-button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LikeButton nbLikes = "3" />
      </div>
    );
  }
}

export default App;
