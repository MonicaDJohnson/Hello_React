import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Intro from './Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header message = "Hello World!"/>
      <Header message = "Goodbye World!" />
      <Intro /> 
        
      </div>
    );
  }
}

export default App;
