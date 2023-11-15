import React from 'react'
import Card3D from './Card3D'
import ImgOverlayExample from './card'
import BasicExample from './card'
import cl from './Cards.module.css'

export default function CardsContainer() {
  return (
    <div className={cl.cardContainer}>
      <BasicExample title="./pngs/GNUTOV.png" name="Гнусный Гнутик" text="Наглым образом назвал жизнь фруктовым садом"/>
      <BasicExample title="./pngs\GLUSI.png" name="Глускер Сметанович" text="Глускер с курочкой, БОЙСЯ ЕГО. Уже не является китом, так как уходит из колледжа"/>
      <BasicExample title="./pngs\GULAMADZODICHI.png" name="Гуламадзодичи" text="Гуламадзодичи и его вонючие сородичи"/>
    </div>
  )
}
