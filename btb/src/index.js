import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/styles.css'
import {BrowserRouter } from 'react-router-dom'
import {GlobalStyle} from './assets/css/global'
import { ToastContainer } from 'react-toastify'
import { Provider as ReduxProvider} from 'react-redux'
import {store} from './store/store'
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <ReduxProvider store = {store}>
    <BrowserRouter >
    <App />
    <ToastContainer/>
    </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
