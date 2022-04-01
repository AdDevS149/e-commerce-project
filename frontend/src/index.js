import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// import { DataContextProvider } from './contexts/DataContext';

ReactDOM.render(
  <React.StrictMode>
    {/* <DataContextProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </DataContextProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
