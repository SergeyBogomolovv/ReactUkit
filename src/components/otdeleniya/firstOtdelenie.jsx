import React from 'react'

export default function FirstOtdelenie({setFirstOtdelenie}) {
  return (
    <div>
      Something
      <button onClick={() => setFirstOtdelenie(false)}>Нажми</button>
    </div>
  )
}
