import React, { useState } from 'react';
import Button from './Buttons';
import calculate from '../logic/calculate';

function Calculator() {
  const [value, setValue] = useState({ total: '0', next: null, operation: null });

  function handleClick(digit) {
    setValue(calculate(value, digit));
  }

  const { total, next, operation } = value;

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="current-result">
          {total}
          {operation}
          {next}
        </div>
      </div>
      <Button value="AC" bg="" span="" press={(e) => handleClick(e.target.textContent)} />
      <Button value="+/-" bg="" span="" press={(e) => handleClick(e.target.textContent)} />
      <Button value="%" bg="" span="" press={(e) => handleClick(e.target.textContent)} />
      <Button value="÷" bg="orange" span="" press={(e) => handleClick(e.target.textContent)} />
      <Button value="7" bg="" span="" press={(e) => handleClick(e.target.textContent)} />
      <Button value="8" bg="" span="" press={(e) => handleClick(e.target.textContent)} />
      <Button value="9" bg="" span="" press={(e) => handleClick(e.target.textContent)} />
      <Button value="*" bg="orange" span="" press={(e) => handleClick(e.target.textContent)} />
      <Button value="4" bg="" span="" press={(e) => handleClick(e.target.textContent)} />
      <Button value="5" bg="" span="" press={(e) => handleClick(e.target.textContent)} />
      <Button value="6" bg="" span="" press={(e) => handleClick(e.target.textContent)} />
      <Button value="-" bg="orange" span="" press={(e) => handleClick(e.target.textContent)} />
      <Button value="1" bg="" span="" press={(e) => handleClick(e.target.textContent)} />
      <Button value="2" bg="" span="" press={(e) => handleClick(e.target.textContent)} />
      <Button value="3" bg="" span="" press={(e) => handleClick(e.target.textContent)} />
      <Button value="+" bg="orange" span="" press={(e) => handleClick(e.target.textContent)} />
      <Button value="0" bg="" span="span1" press={(e) => handleClick(e.target.textContent)} />
      <Button value="." bg="" span="" press={(e) => handleClick(e.target.textContent)} />
      <Button value="=" bg="orange" span="" press={(e) => handleClick(e.target.textContent)} />
    </div>
  );
}

export default Calculator;
