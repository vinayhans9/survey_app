import React, { useState } from 'react';
import { Widget } from './components/Widget';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Widget />
    </>
  )
}

export default App
