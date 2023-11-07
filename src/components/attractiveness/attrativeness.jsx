import React, { useState } from 'react'
import cl from './dostoprimechat.module.css'
import AttrativeCard from './attractiveCard'

export default function Attrativeness() {
  const [attractive, setAttractive] = useState([
    {src: './pngs/naymov.png', text:'Я уже давно не мальчик... А почему анон? Найти меня можно всегда в 405... С уважением, завлаб 405...'},
    {src: './pngs/dyrka2.png', text:'Легендарная дырка на втором этаже у 28 кабинета, там можно складировать мусорные отходы'},
    {src: './pngs/photo_2023-10-20_17-43-20.jpg', text:'Обвал потолочных секций в первую неделю, вызвало большой резонанс в соц сетях'}
  ])

  return (
    <div className={cl.container}>
      {attractive.map(card =>
        <AttrativeCard card={card} key={card.text}/>)}
    </div>
  )
}
