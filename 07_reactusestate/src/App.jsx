import { useState } from "react"

function App() {

  const [color,setColor] = useState('red');

  return (
    <>
      <h1>Usestate hook </h1>
      <h3>This is a {color}</h3>
      <button onClick={()=> setColor('blue')}>Blue</button>
      <button onClick={()=> setColor('red')}>Red</button>
      <button onClick={()=> setColor('pink')}>Pink</button>
      <button onClick={()=> setColor('black')}>Black</button>
    </>
  )
}

export default App
