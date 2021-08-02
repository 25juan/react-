import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
const elements = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
ReactDOM.render(
  elements,
  document.getElementById('root'),
  () => {
    console.log('inited...')
  }
)
