import React from 'react';

interface StatsProps {
  totalClicks: number;
  maxValue: number;
  minValue: number;
}

const Stats: React.FC<StatsProps> = ({ totalClicks, maxValue, minValue }) => {
  return (
    <div className="stats">
      <div className="stat-item">
        <div className="stat-value">{totalClicks}</div>
        <div className="stat-label">Total Clicks</div>
      </div>
      <div className="stat-item">
        <div className="stat-value">{maxValue}</div>
        <div className="stat-label">Máximo</div>
      </div>
      <div className="stat-item">
        <div className="stat-value">{minValue}</div>
        <div className="stat-label">Mínimo</div>
      </div>
    </div>
  );
};

export default Stats;
