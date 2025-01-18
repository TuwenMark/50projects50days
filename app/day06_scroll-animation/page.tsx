'use client'

import React, {useEffect, useState} from 'react'

export default function Page() {
  const [views, setViews] = useState(Array(15).fill(false))

  useEffect(() => {
    // 滚动检测函数
    const handleScroll = () => {
      const triggerBottom = window.innerHeight / 5 * 4
      const boxes = document.querySelectorAll('h2')
      const tempViews = Array.from(boxes).map(box => {
        const boxTop = box.getBoundingClientRect().top
        return boxTop < triggerBottom
      })
      setViews(tempViews)
    }
    // 初次渲染时触发一次滚动检测
    handleScroll()
    // 添加滚动事件监听
    window.addEventListener('scroll', handleScroll)
    // 组件卸载后，移除事件监听器
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // 空依赖数组，确保只在组件挂载时添加一次事件监听器

  return (
    <div className='font-roboto bg-[#efedd6] flex flex-col justify-center items-center m-0 overflow-x-hidden'>
      <h1 className='m-2.5'>Scroll to see the animation</h1>
      {Array.from({length: 15}).map((_, index) => (<h2 key={index + 1} className={`bg-[#4c83b1] text-white m-2.5 w-[400px] h-[200px] rounded-[10px] flex justify-center items-center text-[45px] shadow-[2px_4px_5px_rgba(0,0,0,0.3)] ${views[index] ? "" : "translate-x-[400%]"} ${views[index] ? "" : "even:translate-x-[-400%]"} ${views[index] ? "translate-x-0" : ""} transition-transform duration-[400ms] ease-in-out`}>Content {index + 1}</h2>))}
    </div>
  )
}
