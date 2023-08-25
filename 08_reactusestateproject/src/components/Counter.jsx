import React from 'react'
import { useState } from 'react'

export function Counter() {
  const [counter,setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }
  return (
    <div className="relative h-[400px] w-[300px] rounded-md ml-10">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">Counter</h1>
        <h1 className=' text-gray-300'>{counter}</h1>
        <button onClick={increment} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-green-500">
          increment
        </button>
        <button onClick={decrement} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-red-500 ml-2">
          decrement
        </button>
      </div>
    </div>
  )
}
