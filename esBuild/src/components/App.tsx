import React, { useState, useEffect } from 'react';
import CounterDisplay from './CounterDisplay';
import CounterButtons from './CounterButtons';
import Stats from './Stats';

const App = (props: { message: string }) => {
    const [count, setCount] = useState(0);
    const [totalClicks, setTotalClicks] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [minValue, setMinValue] = useState(0);
    const [pulseAnimation, setPulseAnimation] = useState(false);

    useEffect(() => {
        if (count > maxValue) setMaxValue(count);
        if (count < minValue) setMinValue(count);
    }, [count]);

    const handleIncrement = () => {
        setCount(prev => prev + 1);
        setTotalClicks(prev => prev + 1);
        triggerPulse();
    };

    const handleDecrement = () => {
        setCount(prev => prev - 1);
        setTotalClicks(prev => prev + 1);
        triggerPulse();
    };

    const handleReset = () => {
        setCount(0);
        setTotalClicks(0);
        setMaxValue(0);
        setMinValue(0);
        triggerPulse();
    };

    const triggerPulse = () => {
        setPulseAnimation(true);
        setTimeout(() => setPulseAnimation(false), 300);
    };

    return (
        <div className="container">
            <h1 className="title">{props.message}</h1>
            <p className="subtitle">Contador interactivo con esbuild</p>
            
            <CounterDisplay count={count} pulseAnimation={pulseAnimation} />
            
            <CounterButtons 
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onReset={handleReset}
                count={count}
            />

            <Stats 
                totalClicks={totalClicks}
                maxValue={maxValue}
                minValue={minValue}
            />
            
            <div className="footer">
                Hecho con ⚡ esbuild por Carla Mendía Díaz
            </div>
        </div>
    );
}

export default App;