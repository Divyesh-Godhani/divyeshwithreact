import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('octra')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red
          </button>
          <button onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green
          </button>
          <button onClick={() => setColor('blue')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue
          </button>
          <button onClick={() => setColor('orange')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}}>Orange
          </button>
          <button onClick={() => setColor('Black')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Black"}}>Black
          </button>
          <button onClick={() => setColor('Purple')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Purple"}}>
          Purple
          </button>
          <button onClick={() => setColor('Gray')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Gray"}}>Gray
          </button>
          <button onClick={() => setColor('Cyan')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Cyan"}}>Cyan
          </button>
          <button onClick={() => setColor('Yellow')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Yellow"}}>
          Yellow
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
