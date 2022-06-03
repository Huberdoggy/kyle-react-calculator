/* eslint-disable no-useless-escape */
import './App.css';
import { useState } from 'react';
import * as math from 'mathjs';
import Button from './components/button/Button';
import { Input } from './components/input/Input';
import { ClearButton } from './components/clear-button/ClearButton';

function App() {
  const [input, setInput] = useState(0);

  const regex = /^[^0-9=\.]$/;

  const isOperator = (val) => {
    return val.match(regex);
  };

  const addToInput = (val) => {
    const startWithZero = /^0$/;
    if (input.toString().match(startWithZero)) {
      setInput(val);
    } else {
      setInput(() => input + val);
    }
  };

  const handleEqual = () => {
    setInput(math.evaluate(input));
  };

  return (
    <div className="main-app">
      <div className="calc-wrapper">
        <Input input={input} />
        <div className="num-row">
          <Button handleClick={addToInput} isOperator={isOperator}>
            7
          </Button>
          <Button handleClick={addToInput} isOperator={isOperator}>
            8
          </Button>
          <Button handleClick={addToInput} isOperator={isOperator}>
            9
          </Button>
          <Button handleClick={addToInput} isOperator={isOperator}>
            /
          </Button>
        </div>
        <div className="num-row">
          <Button handleClick={addToInput} isOperator={isOperator}>
            4
          </Button>
          <Button handleClick={addToInput} isOperator={isOperator}>
            5
          </Button>
          <Button handleClick={addToInput} isOperator={isOperator}>
            6
          </Button>
          <Button handleClick={addToInput} isOperator={isOperator}>
            *
          </Button>
        </div>
        <div className="num-row">
          <Button handleClick={addToInput} isOperator={isOperator}>
            1
          </Button>
          <Button handleClick={addToInput} isOperator={isOperator}>
            2
          </Button>
          <Button handleClick={addToInput} isOperator={isOperator}>
            3
          </Button>
          <Button handleClick={addToInput} isOperator={isOperator}>
            +
          </Button>
        </div>
        <div className="num-row">
          <Button handleClick={addToInput} isOperator={isOperator}>
            0
          </Button>
          <Button handleClick={addToInput} isOperator={isOperator}>
            .
          </Button>
          <Button handleClick={handleEqual} isOperator={isOperator}>
            =
          </Button>
          <Button handleClick={addToInput} isOperator={isOperator}>
            -
          </Button>
        </div>
        <div className="num-row">
          <ClearButton handleClear={() => setInput(0)}>AC</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
