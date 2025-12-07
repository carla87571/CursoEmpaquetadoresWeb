import React from 'react';

interface CounterDisplayProps {
  count: number;
  pulseAnimation: boolean;
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({ count, pulseAnimation }) => {
  return (
    <div className="counter-display">
      <div className="counter-label">Count</div>
      <div className={`counter-value ${pulseAnimation ? 'pulse' : ''}`}>
        {count}
      </div>
    </div>
  );
};

export default CounterDisplay;
