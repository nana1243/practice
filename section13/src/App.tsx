import { useState } from 'react'
import './App.css'
import Count from "./componets/Count";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count/>
    </>
  )
}

export default App
