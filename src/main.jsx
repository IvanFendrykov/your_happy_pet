import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme.js';
import {App} from './App.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store.js';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
           <BrowserRouter basename="/your_happy_pet">

            <ThemeProvider theme={theme}>
                 <App />
             </ThemeProvider>

          </BrowserRouter>
        </PersistGate>
     </Provider>
  </React.StrictMode>,
);