import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// You can specify which plugins you need
import { Tooltip, Toast, Popover } from 'bootstrap';
import * as bootstrap from "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
