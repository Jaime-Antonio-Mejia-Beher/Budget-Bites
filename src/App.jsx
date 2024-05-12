import { useState } from 'react'
import './App.css'
import Envelope from './components/biteSize'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState([1,2,3,4])
  // const count = []

  return (
    <>
    <div>
      <Header />
    </div>
    <div className='appContainer'>
      <Envelope />
      <Envelope />
      <Envelope />
      <Envelope />
      <Envelope />
      <Envelope />
      <Envelope />
      <Envelope />
      <Envelope />
    </div>
    </>
  )
}

export default App
