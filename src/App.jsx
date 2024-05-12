import { useState } from 'react'
import './App.css'
import Envelope from './components/biteSize'

function App() {
  const [count, setCount] = useState([1,2,3,4])
  // const count = []

  return (
    <>
      <h1>Hello</h1>
      <Envelope />
    </>
  )
}

export default App
