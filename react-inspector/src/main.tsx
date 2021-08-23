import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
 import App from './App'

// function App() {
//   const [text, setText] = React.useState('hello word');
//   const [name, setNam] = React.useState('Jack');
//   return <div>{text}</div>
// }
const element = <App />;
ReactDOM.render(element,document.getElementById('root'))
