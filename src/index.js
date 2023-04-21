import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './assets/Fonts/Montserrat-Medium.ttf';
import './assets/Fonts/Montserrat-SemiBold.ttf';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/tweet-cards">
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
