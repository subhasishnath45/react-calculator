import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // state variable result will be set as the value of the input field.
  let [result, setResult] = useState("");

  const handleClick = (e)=>{
    // console.log(e.target.value);
    // concatinating with result variable
      setResult(result+=e.target.name);
  }

  const clear = ()=>{
    setResult("");
  }
  const backspace = ()=>{
    // slicing 1 character from EOS.
    setResult(result.toString().slice(0,-1));
  }
  const calculate = ()=>{
    // eval() evaluates the expression
    if(result.charAt(result.length-1) == '+' ||result.charAt(result.length-1) == '-' || result.charAt(result.length-1) == '/' ||result.charAt(result.length-1) == '*'){
      alert('Please input the second number');
    }else if(result.includes('++') || 
    result.includes('+-') ||
    result.includes('+*') ||
    result.includes('+/') ||
    result.includes('--') ||
    result.includes('-+') ||
    result.includes('-*') ||
    result.includes('-/') ||
    result.includes('**') ||
    result.includes('*+') ||
    result.includes('*-') ||
    result.includes('*/') ||
    result.includes('//') ||
    result.includes('/+') ||
    result.includes('/-') ||
    result.includes('/*')){
      alert('Invalid Operation');
      setResult('');
    }else{
      setResult(eval(result));
    }

  }
  return (
    <>
      <div className="container">
        <form action="">
          <input type="text" value={result}/>
        </form>
        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">Clear</button>
          <button className="highlight" onClick={backspace} id="backspace">C</button>
          <button name="/" onClick={handleClick}>&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick}>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick}>&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick}>+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button onClick={calculate} id="result">=</button>
        </div>
      </div>
    </>
  );
}

export default App;
