'use client'

import React, {useEffect, useState} from 'react'

export default function Page() {
  const [loading, setLoading] = useState(0)
  useEffect(() => {
    if(loading == 100) {
      return
    }
      const intervalId = setInterval(() => {
        setLoading(loading + 1)
      }, 30)
    return () => clearInterval(intervalId)
  }, [loading])
  const handleScale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
  }
  return (
    // 通过style修改动态属性
    <div className='font-Ubuntu flex justify-center items-center m-0 overflow-hidden h-[100vh]'>
      <section className='bg-[url("https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80")] bg-center bg-no-repeat bg-cover h-[100vh] w-[100vw] absolute top-[-30px] left-[-30px] z-[-1]' style={{filter: `blur(${handleScale(loading, 0, 100, 30, 0)}px)`}}></section>
      <div className='text-[50px] text-white' style={{opacity: `${handleScale(loading, 0, 100, 1, 0)}`}}>{`${loading}%`}</div>
    </div>
  )
}
