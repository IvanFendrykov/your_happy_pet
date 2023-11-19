import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme.js';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/your_happy_pet">

          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>

    </BrowserRouter>
  </React.StrictMode>,
);