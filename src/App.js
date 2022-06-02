/* eslint-disable no-useless-escape */
import './App.css';
// import { useState } from 'react';
import Button from './components/button/Button';
// import { Form, Button } from 'react-bootstrap';

function App() {
  // const [styleClass, setStyleClass] = useState('');

  const regex = /^[^0-9=\.]$/;

  const isOperator = (val) => {
    return val.match(regex);
  };

  return (
    <div className="main-app">
      <div className="calc-wrapper">
        <div className="num-row">
          <Button isOperator={isOperator}>7</Button>
          <Button isOperator={isOperator}>8</Button>
          <Button isOperator={isOperator}>9</Button>
          <Button isOperator={isOperator}>÷</Button>
        </div>
        <div className="num-row">
          <Button isOperator={isOperator}>4</Button>
          <Button isOperator={isOperator}>5</Button>
          <Button isOperator={isOperator}>6</Button>
          <Button isOperator={isOperator}>X</Button>
        </div>
        <div className="num-row">
          <Button isOperator={isOperator}>1</Button>
          <Button isOperator={isOperator}>2</Button>
          <Button isOperator={isOperator}>3</Button>
          <Button isOperator={isOperator}>+</Button>
        </div>
        <div className="num-row">
          <Button isOperator={isOperator}>0</Button>
          <Button isOperator={isOperator}>.</Button>
          <Button isOperator={isOperator}>=</Button>
          <Button isOperator={isOperator}>-</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
