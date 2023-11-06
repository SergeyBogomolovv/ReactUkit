import React from 'react'
import cl from './dostoprimechat.module.css'
import AttrativeCard from './attractiveCard'

export default function Attrativeness() {
  return (
    <div className={cl.container}>
      <AttrativeCard src="./pngs\photo_2023-10-20_17-43-20.jpg" text='Я хз пока что написать'/>
      <AttrativeCard src="./pngs\photo_2023-10-20_17-43-37.jpg" text='Я хз пока что написать'/>
      <AttrativeCard src="./pngs\photo_2023-10-29_12-15-36 (2).jpg" text='Я хз пока что написать'/>
      <AttrativeCard src="./pngs\photo_2023-10-20_17-43-20.jpg" text='Я хз пока что написать'/>
      <AttrativeCard src="./pngs\photo_2023-10-20_17-43-20.jpg" text='Я хз пока что написать'/>
    </div>
  )
}
