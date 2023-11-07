import React, { useState } from 'react'
import cl from './dostoprimechat.module.css'
import AttrativeCard from './attractiveCard'

export default function Attrativeness() {
  const [attractive, setAttractive] = useState([
    {src: './pngs/photo_2023-10-20_17-43-20.jpg', text:'Я хз пока что написать'},
    {src: './pngs/photo_2023-10-20_17-43-20.jpg', text:'Я хз пока что написат'},
    {src: './pngs/photo_2023-10-20_17-43-20.jpg', text:'Я хз пока что dsfdsf'}
  ])

  return (
    <div className={cl.container}>
      {attractive.map(card =>
        <AttrativeCard card={card} key={card.text}/>)}
    </div>
  )
}
