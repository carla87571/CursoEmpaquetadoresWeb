import React from 'react';

interface CounterButtonsProps {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
  count: number;
}

const CounterButtons: React.FC<CounterButtonsProps> = ({ 
  onIncrement, 
  onDecrement, 
  onReset,
  count 
}) => {
  return (
    <div className="button-group">
      <button 
        className="btn btn-decrement" 
        onClick={onDecrement}
      >
        - Decrementar
      </button>
      <button 
        className="btn btn-reset" 
        onClick={onReset}
        disabled={count === 0}
      >
        ↻ Reset
      </button>
      <button 
        className="btn btn-increment" 
        onClick={onIncrement}
      >
        + Incrementar
      </button>
    </div>
  );
};

export default CounterButtons;
