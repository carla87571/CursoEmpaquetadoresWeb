import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/main.css';

const root = ReactDOM.createRoot(
    document.getElementById("app") as HTMLElement
);

root.render(
    <App message="⚡ esbuild Counter"/>
);
