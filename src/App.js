import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h3 className="title">Let&apos;s do some math!</h3>
        <Calculator />
      </div>
    );
  }
}

export default App;
