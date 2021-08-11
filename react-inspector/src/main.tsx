import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
const elements = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
console.log(<div>11</div>, elements)
ReactDOM.render(elements,document.getElementById('root'))
