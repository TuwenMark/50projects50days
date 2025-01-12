import React from 'react'

export default function Page() {
  return (
    <div>
      <h1>Scroll to see the animation</h1>
      {Array.from({length: 15}).map((_, index) => (<div key={index + 1}>Content {index + 1}</div>))}
    </div>
  )
}
