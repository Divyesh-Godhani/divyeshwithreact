import { useEffect, useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  })
  

  return (
    <>
      <>
      <h1>Count Timer : {count}</h1>
      </>
    </>
  )
}

export default App
