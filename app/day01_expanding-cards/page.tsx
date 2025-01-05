// Expanding Cards
'use client'

import Card from '@/components/Card'
import { images } from '@/lib/data'
import { useState } from 'react'

export default function Page() {
  const [active, setActive] = useState(0)

  const handleClick = (index: number) => {
    setActive(index)
  }

  return (
    <div className="font-muli flex justify-center items-center h-[100vh] w-[90vw] overflow-hidden m-0">
      {images.map((image, index) => (
        <Card
          key={image.alt}
          src={image.src}
          text={image.text}
          index={index}
          isActive={active === index}
          onClick={handleClick}
        ></Card>
      ))}
    </div>
  )
}
