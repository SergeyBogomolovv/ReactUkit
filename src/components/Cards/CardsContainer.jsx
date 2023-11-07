import React from 'react'
import Card3D from './Card3D'
import ImgOverlayExample from './card'
import BasicExample from './card'
import cl from './Cards.module.css'

export default function CardsContainer() {
  return (
    <div className={cl.cardContainer}>
      <BasicExample title="./pngs/GNUTOV.png" name="Гнусный Гнутик" text="Наглым образом назвал жизнь фруктовым садом"/>
      <BasicExample title="./pngs\GLUSI.png" name="Глускер Сметанович" text="Глускер с курочкой, БОЙСЯ ЕГО"/>
      <BasicExample title="./pngs\GULAMADZODICHI.png" name="Гуламадзодичи" text="Гуламадзодичи и его вонючие сородичи"/>
      {/* <BasicExample title="./pngs\Grekich.png" name="Вонючий Грекас" text="Девочка с юбкой и большими штанами с большими глазами с белыми ушами с короткими рукавами с длинными волосами и длинными сумками на лице с коротким хвостом"/>
      <BasicExample title="./pngs/TIMCHICK.png" name="Робошизик" text="Го обмен ЦП 🍒 чур ты первый"/>
      <BasicExample title="./pngs\NIKITEICH.png" name="Черри Блоссом" text="Наглым образом назвал свою жизнь фруктовым садом"/> */}
    </div>
  )
}
