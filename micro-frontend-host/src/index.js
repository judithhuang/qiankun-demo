import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { registerMicroApps, start } from 'qiankun';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

registerMicroApps([
  {
    name: 'react app1', // app name registered
    entry: '//localhost:3001',
    container: '#sub-app',
    activeRule: '/app1',
  },
]);

start();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
