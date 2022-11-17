import React from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = React.useState({
    total: null,
    next: null,
  });

  const handleButtonClick = (event) => {
    const button = event.target.textContent;
    setState((previousState) => calculate(previousState, button));
  };

  const { total, next } = state;
  let output = 0;
  if (total === null && next !== null) {
    output = next;
  } else if (total !== null && next === null) {
    output = total;
  } else {
    output = next;
  }

  return (
    <div className="App">
      <h3 className="title">Let&apos;s do some math!</h3>
      <div className="container">
        <div className="output">{output}</div>
        <button type="button" onClick={handleButtonClick}>AC</button>
        <button type="button" onClick={handleButtonClick}>+/-</button>
        <button type="button" onClick={handleButtonClick}>%</button>
        <button type="button" onClick={handleButtonClick} className="orange">÷</button>
        <button type="button" onClick={handleButtonClick}>7</button>
        <button type="button" onClick={handleButtonClick}>8</button>
        <button type="button" onClick={handleButtonClick}>9</button>
        <button type="button" onClick={handleButtonClick} className="orange">x</button>
        <button type="button" onClick={handleButtonClick}>4</button>
        <button type="button" onClick={handleButtonClick}>5</button>
        <button type="button" onClick={handleButtonClick}>6</button>
        <button type="button" onClick={handleButtonClick} className="orange">-</button>
        <button type="button" onClick={handleButtonClick}>1</button>
        <button type="button" onClick={handleButtonClick}>2</button>
        <button type="button" onClick={handleButtonClick}>3</button>
        <button type="button" onClick={handleButtonClick} className="orange">+</button>
        <button type="button" onClick={handleButtonClick} className="double">0</button>
        <button type="button" onClick={handleButtonClick}>.</button>
        <button type="button" onClick={handleButtonClick} className="orange">=</button>
      </div>
    </div>
  );
};

export default Calculator;
