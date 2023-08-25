import React from 'react'

export default function Button({title = "Nothing"}) {
  return (
    <div>
      <button className='button'>{title}</button>
    </div>
  )
}
