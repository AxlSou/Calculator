import './App.css';
import Button from './components/buttons';
import Input from './components/input';
import Clear from './components/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('0');
  const [resetResult, setResetResult] = useState(false) 

  const ops = ['/', '*', '+', '-', '.'];

  const addInput = val => {
    if (
        (ops.includes(val) && input === '0') || 
        (ops.includes(val) && ops.includes(input.slice(-1)) && val !== '-') ||
        (ops.includes(val) && input.slice(-2) === "--") ||
        (ops.includes(val) && ops.includes(input.charAt(input.length - 2)) && ops.includes(input.charAt(input.length - 1)))
        ) {
      return;
    } else if (val === '.') { 
       let plus = input.split('+')
       let negative = input.split('-')
       let multi = input.split('*')
       let divi = input.split('/')
        if (input.includes('+') && !plus.at(-1).includes('.')){
          setInput(input + val)
        } else if (input.includes('-') && !negative.at(-1).includes('.')){
          setInput(input + val)
        } else if (input.includes('*') && !multi.at(-1).includes('.')){
          setInput(input + val)
        } else if (input.includes('/') && !divi.at(-1).includes('.')){
          setInput(input + val)
        } else {
          if (!input.includes('.')) {
            setInput(input + val);
          }
        }
    } else if (resetResult === true) {
      if (ops.includes(val)) {
        setInput(input + val)
        setResetResult(false)
      } else {
      setInput(val)
      setResetResult(false)
      }
    } else if (input === '0') {
      setInput(val)
    } else {
      setInput(input + val);
    }
  };

  const result = () => {
    if (input) {
      setInput(String(evaluate(input)))
      setResetResult(true)
    };
  };

  return (
    <div className="App">
      <div className='calculator-container'>
        <Input input={input}/>
        <div className='fila'>
          <Button id="one" clickHandle={addInput}>1</Button>
          <Button id="two" clickHandle={addInput}>2</Button>
          <Button id="three" clickHandle={addInput}>3</Button>
          <Button id="add" clickHandle={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button id="four" clickHandle={addInput}>4</Button>
          <Button id="five" clickHandle={addInput}>5</Button>
          <Button id="six" clickHandle={addInput}>6</Button>
          <Button id="subtract" clickHandle={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button id="seven" clickHandle={addInput}>7</Button>
          <Button id="eight" clickHandle={addInput}>8</Button>
          <Button id="nine" clickHandle={addInput}>9</Button>
          <Button id="multiply" clickHandle={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button id="equals" clickHandle={result}>=</Button>
          <Button id="zero" clickHandle={addInput}>0</Button>
          <Button id="decimal" clickHandle={addInput}>.</Button>
          <Button id="divide" clickHandle={addInput}>/</Button></div>    
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
