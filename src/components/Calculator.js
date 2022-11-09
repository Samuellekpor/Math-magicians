import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    const button = event.target.textContent;
    this.setState((previousState) => calculate(previousState, button));
  }

  render() {
    const { total, next } = this.state;
    let output = 0;
    if (total === null && next !== null) {
      output = next;
    } else if (total !== null && next === null) {
      output = total;
    } else {
      output = next;
    }

    return (
      <div className="container">
        <div className="output">{output}</div>
        <button type="button" onClick={this.handleButtonClick}>AC</button>
        <button type="button" onClick={this.handleButtonClick}>+/-</button>
        <button type="button" onClick={this.handleButtonClick}>%</button>
        <button type="button" onClick={this.handleButtonClick} className="orange">÷</button>
        <button type="button" onClick={this.handleButtonClick}>7</button>
        <button type="button" onClick={this.handleButtonClick}>8</button>
        <button type="button" onClick={this.handleButtonClick}>9</button>
        <button type="button" onClick={this.handleButtonClick} className="orange">x</button>
        <button type="button" onClick={this.handleButtonClick}>4</button>
        <button type="button" onClick={this.handleButtonClick}>5</button>
        <button type="button" onClick={this.handleButtonClick}>6</button>
        <button type="button" onClick={this.handleButtonClick} className="orange">-</button>
        <button type="button" onClick={this.handleButtonClick}>1</button>
        <button type="button" onClick={this.handleButtonClick}>2</button>
        <button type="button" onClick={this.handleButtonClick}>3</button>
        <button type="button" onClick={this.handleButtonClick} className="orange">+</button>
        <button type="button" onClick={this.handleButtonClick} className="double">0</button>
        <button type="button" onClick={this.handleButtonClick}>.</button>
        <button type="button" onClick={this.handleButtonClick} className="orange">=</button>
      </div>
    );
  }
}

export default Calculator;
