'use client'

import React, { useState, useRef } from 'react'

export default function Page() {
  const [active, setActive] = useState(false)
  const inputRef = useRef(null)

  const handleClick = () => {
    setActive(prev => !prev)
    inputRef.current.focus()
    if (!active) {
      inputRef.current.value = ''
    }
  }

  return (
    <div className='h-[100vh] font-roboto bg-gradient-to-r from-[#7d5fff] to-[#7158e2] overflow-hidden m-0 flex justify-center items-center'>
      <div className='h-[50px] relative'>
        <input className={`h-[50px] border-0 bg-white text-lg p-[15px] focus:outline-none transition-[width] duration-[400ms] ease-linear ${active ? 'w-[200px]' : 'w-[50px]'}`} ref={inputRef} type="text" placeholder='Search...'/>
        <button className={`absolute top-0 left-0 h-[50px] w-[50px] bg-white text-2xl border-0 focus:outline-none transition-transform duration-[400ms] ease-linear ${active ? 'translate-x-[198px]' : ''}`} onClick={handleClick}>
          <i className='fas fa-search'></i>
        </button>
      </div>
    </div>
  )
}
