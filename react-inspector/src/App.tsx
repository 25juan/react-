import React from 'react';
import { unstable_batchedUpdates } from 'react-dom'

function ChildA({ text, onClick }) {
  console.log('childA....')
  return <span onClick={onClick}>{text}</span>
}
function ChildB({ text, onClick }) {
  const textSpan = React.useMemo(() => {
    console.log('childB....');
    return <span onClick={onClick}>{text}</span>
  },[text]);
  return textSpan;
}

function App2() {
  const [textA, setTextA] = React.useState('childA.....');
  const [textB, setTextB] = React.useState('childB.....');

  console.log("------------");
  console.log("App...", textA, textB);

  return (<div>
    <ChildA onClick={() => setTextA("hello A")} text={textA} />
    <ChildB onClick={() => setTextB("hello B")} text={textB} />
    <button onClick={() => {
      setTimeout(() => {
        setTextA("hello A");
        setTextB("hello B");
      },0)
    }}>点我</button>
  </div>)
}

function App() {
  return  (<div>
    <span>hello world</span>
  </div>)
}

export default App;
