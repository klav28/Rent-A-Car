import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

// import './fonts/Manrope-VariableFont_wght.ttf';
// import './fonts/Montserrat-VariableFont_wght';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/rent-a-car">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
