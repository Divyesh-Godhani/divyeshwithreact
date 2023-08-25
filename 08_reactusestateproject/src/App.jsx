import { useState } from 'react'
import { Counter } from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container' style={{display:'flex'}}>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
    </>
  )
}

export default App
