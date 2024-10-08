import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter]= useState(15)

  const addValue = () =>{
    setcounter(counter + 1)
  }

  const removeValue = () =>{
    setcounter(counter - 1)
  }

  return (
    <>
     <h1>React Series</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}
     >Add Value {counter}</button>
     <br />
     <button
     onClick={removeValue}>
      remove Value {counter}
     </button>
    </>
  )
}

export default App
