import './App.css';
import freeCodeCampLogo from './Images/freecodecamp-logo.png'
import Button from './components/buttons';
import Input from './components/input';
import Clear from './components/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('0');

  const ops = ['/', '*', '+', '-', '.'];

  const addInput = val => {
    if (
        (ops.includes(val) && input === '0') || 
        (ops.includes(val) && ops.includes(input.slice(-1)))
      ) {
        return;
    } else if (input === '0') {
      setInput(val)
    } else {
      setInput(input + val);
    }
  };

  const result = () => {
    if (input) {
      setInput(evaluate(input))
    };
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img 
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo freeCodeCamp'/>
      </div>
      <div className='calculator-container'>
        <Input input={input}/>
        <div className='fila'>
          <Button clickHandle={addInput}>1</Button>
          <Button clickHandle={addInput}>2</Button>
          <Button clickHandle={addInput}>3</Button>
          <Button clickHandle={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button clickHandle={addInput}>4</Button>
          <Button clickHandle={addInput}>5</Button>
          <Button clickHandle={addInput}>6</Button>
          <Button clickHandle={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button clickHandle={addInput}>7</Button>
          <Button clickHandle={addInput}>8</Button>
          <Button clickHandle={addInput}>9</Button>
          <Button clickHandle={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button clickHandle={result}>=</Button>
          <Button clickHandle={addInput}>0</Button>
          <Button clickHandle={addInput}>.</Button>
          <Button clickHandle={addInput}>/</Button></div>    
        <div className='fila'>
          <Clear clearHandle={() => setInput('0')}>
            Clear
          </Clear>
          </div>    
      </div>
    </div>
  );
}

export default App;
