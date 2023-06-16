import React from 'react';
import { createRoot } from "react-dom/client";
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

reportWebVitals();
