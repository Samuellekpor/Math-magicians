import React, { Component } from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      output: ""
    };

    this.addToOutput = this.addToOutput.bind(this);
  }

  addToOutput(event) {
    let inputString = this.state.output + event.currentTarget.innerText;
    this.setState({ output: inputString });
  };

  render() {
    return (
      <div className="container">
        <div className="output">{this.state.output}</div>
        <button type="button" value="">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="orange">÷</button>
        <button type="button" onClick={this.addToOutput}>7</button>
        <button type="button" onClick={this.addToOutput}>8</button>
        <button type="button" onClick={this.addToOutput}>9</button>
        <button type="button" className="orange">x</button>
        <button type="button" onClick={this.addToOutput}>4</button>
        <button type="button" onClick={this.addToOutput}>5</button>
        <button type="button" onClick={this.addToOutput}>6</button>
        <button type="button" className="orange">-</button>
        <button type="button" onClick={this.addToOutput}>1</button>
        <button type="button" onClick={this.addToOutput}>2</button>
        <button type="button" onClick={this.addToOutput}>3</button>
        <button type="button" className="orange">+</button>
        <button type="button" onClick={this.addToOutput} className="double">0</button>
        <button type="button">.</button>
        <button type="button" className="orange">=</button>
      </div>
    );
  }
}

export default Calculator;
