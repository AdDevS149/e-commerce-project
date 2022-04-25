import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
// import { DataContextProvider } from './contexts/DataContext';

// Does I need Strict Mode
ReactDOM.render(
  <BrowserRouter>
 
    <Routes>
      <Route path='/*' element={<App />} />
    </Routes>

  </BrowserRouter>,

  document.getElementById('root')
);
