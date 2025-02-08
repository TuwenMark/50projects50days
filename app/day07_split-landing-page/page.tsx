'use client'

import React, { useState } from 'react'

export default function Page() {
  const [left, setLeft] = useState('50%')
  const [right, setRight] = useState('50%')

  const handleMouseEnterLeft = () => {
    if (left !== '75%') {
      setLeft('75%')
      setRight('25%')
    }
  }

  const handleMouseEnterRight = () => {
    if (left !== '25%') {
      setLeft('25%')
      setRight('75%')
    }
  }

  const handleMouseLeave = () => {
    if (left !== '50%') {
      setLeft('50%')
      setRight('50%')
    }
  }

  return (
    <div className="font-roboto h-[100vh] overflow-hidden m-0 bg-[#333] w-[100vw] relative">
      <div
        className="absolute h-full overflow-hidden left-0 bg-[url(/images/ps.jpg)] bg-no-repeat bg-cover before:content-[''] before:bg-[var(--left-bg-color)] before:w-full before:h-full before:absolute transition-all duration-1000 ease-in-out before:transition-all before:duration-1000 before:ease-in-out"
        style={{ width: left }}
        onMouseEnter={handleMouseEnterLeft}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="text-[4rem] text-white whitespace-nowrap absolute top-[20%] left-1/2 transform translate-x-[-50%] max-[800px]:text-[2rem] max-[800px]:top-[30%]">
          Playstation 5
        </h1>
        <a
          href="#"
          className="text-[1rem] font-bold text-white border-[0.2rem] border-white p-[1.5rem] w-[15rem] no-underline uppercase flex justify-center items-center absolute top-[40%] left-1/2 transform translate-x-[-50%] hover:bg-[var(--left-btn-hover-color)] hover:border-[var(--left-btn-hover-color)] max-[800px]:text-[1.2rem] max-[800px]:w-[12rem]"
        >
          Buy Now
        </a>
      </div>
      <div
        className="absolute h-full overflow-hidden right-0 bg-[url(/images/xbox.jpg)] bg-no-repeat bg-cover before:content-[''] before:bg-[var(--right-bg-color)] before:w-full before:h-full before:absolute transition-all duration-1000 ease-in-out before:transition-all before:duration-1000 before:ease-in-out"
        style={{ width: right }}
        onMouseEnter={handleMouseEnterRight}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="text-[4rem] text-white whitespace-nowrap absolute top-[20%] left-1/2 transform translate-x-[-50%] max-[800px]:text-[2rem] max-[800px]:top-[30%]">
          XBox Series X
        </h1>
        <a
          href="#"
          className="text-[1rem] font-bold text-white border-[0.2rem] border-white p-[1.5rem] w-[15rem] no-underline uppercase flex justify-center items-center absolute top-[40%] left-1/2 transform translate-x-[-50%] hover:bg-[var(--right-btn-hover-color)] hover:border-[var(--right-btn-hover-color)] max-[800px]:text-[1.2rem] max-[800px]:w-[12rem]"
        >
          Buy Now
        </a>
      </div>
    </div>
  )
}
