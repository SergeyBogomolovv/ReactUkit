import React from 'react'
import BasicExample from './card'
import cl from './Cards.module.scss'

export default function CardsContainer() {
  return (
    <div className={cl.cardContainer}>
      <BasicExample title="./pngs/GNUTOV.png" name="Гнусный Гнутик" text="Наглым образом назвал жизнь фруктовым садом"/>
      <BasicExample title="./pngs\GLUSI.png" name="Глускер Сметанович" text="Глускер с курочкой, БОЙСЯ ЕГО"/>
      <BasicExample title="./pngs\GULAMADZODICHI.png" name="Гуламадзодичи" text="Гуламадзодичи и его вонючие сородичи"/>
    </div>
  )
}
