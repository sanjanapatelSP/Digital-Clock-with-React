import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Time from './Time.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Time />
  </React.StrictMode>
);

