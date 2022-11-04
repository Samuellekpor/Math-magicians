import React, { Component } from 'react';

const Calculator = () => {
  return (
    <div className='container'>
      <div className='output'>0</div>
      <button>AC</button>
      <button>+/-</button>
      <button>%</button>
      <button className='orange'>÷</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className='orange'>X</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className='orange'>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className='orange'>+</button>
      <button>0</button>
      <button>.</button>
      <button className='orange'>=</button>
    </div>
  );
};

export default Calculator;
