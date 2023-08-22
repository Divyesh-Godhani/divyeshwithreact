import { useState } from 'react'

function App() {
  const [counter,setCounter] = useState(0);
  const increment = () => {
    if(counter != 20){
    setCounter(counter + 1);
    }
  }
  const decrement = () => {
    if(counter != 0){
      setCounter(counter - 1);
    }
  }
  const reset = () => {
      setCounter(0);
  }

  return (
    <>
    <div style={{textAlign:'center'}}>
      <h1>Counter App</h1>
      <p>Counter:{counter}</p>
      <button type='button' onClick={increment}>increment</button>
      <button type='button' onClick={decrement}>decrement</button>
      <button type='button' onClick={reset}>reset</button>
    </div>
    </>
  )
}

export default App
