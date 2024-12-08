import React from 'react';
import ReactDOM from 'react-dom/client';  // Make sure you're importing from 'react-dom/client'
import './index.css';
import App from './App';

// Ensure you're using createRoot, not render
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
