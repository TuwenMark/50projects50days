'use client'

import clsx from 'clsx'
import React, { useState } from 'react'
import styles from './styles.module.css'

export default function Page() {
  const [count, setCount] = useState(1)

  const handleNext = () => {
    console.log('next' + count)
    if (count >= 4) {
      setCount(4)
    } else {
      setCount((prevCount) => prevCount + 1)
    }
    console.log('next' + count)
  }

  const handlePrev = () => {
    console.log('prev' + count)
    if (count <= 1) {
      setCount(1)
    } else {
      setCount((preCount) => preCount - 1)
    }
    console.log('prev' + count)
  }
  
  return (
    <div className="bg-[#f1f1f1] font-muli flex items-center justify-center h-screen overflow-hidden m-0">
      <div className="text-center">
        <div className="flex justify-between relative max-w-full w-[350px] mb-[30px] before:content-[''] before:bg-[var(--line-border-empty)]  before:absolute before:top-1/2 before:left-0 before:translate-y-[-50%] before:h-1 before:w-full before:z-[0]">
          <div
            className="bg-[var(--line-border-fill)] absolute top-1/2 left-0 translate-y-[-50%] h-1 z-0 transition-all duration-[400ms] ease-in w-full"
            style={{ width: `${((count - 1) / 3) * 100}%` }}
          ></div>
          {Array.of(1, 2, 3, 4).map((number) => (
            <div
              key={number}
              className={clsx(
                'z-0 flex justify-center items-center h-[30px] w-[30px] bg-white text-stone-500 rounded-[50%] border-[3px] border-solid border-[var(--line-border-empty)] transition-all duration-[400ms] ease-in',
                { ['border-[var(--line-border-fill)]']: number <= count }
              )}
            >
              {number}
            </div>
          ))}
        </div>
        <button
          className={styles.btn}
          disabled={count <= 1}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className={styles.btn}
          disabled={count >= 4}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}
