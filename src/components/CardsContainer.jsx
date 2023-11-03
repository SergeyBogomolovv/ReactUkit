import React from 'react'
import Card3D from './Card3D'
import ImgOverlayExample from './card'
import BasicExample from './card'

export default function CardsContainer() {
  return (
    <div className='cardContainer'>
      <BasicExample title="./pngs/GNUTOV.png" name="Гнусный Гнутик" text="Страшный гнутов трахнул спрутов, а потом ебал верблюдов"/>
      <BasicExample title="./pngs\Grekich.png" name="Вонючий Грекас" text="Девочка с юбкой и большими штанами с большими глазами с белыми ушами с короткими рукавами с длинными волосами и длинными сумками на лице с коротким хвостом"/>
      <BasicExample title="./pngs/TIMCHICK.png" name="Робошизик" text="Го обмен ЦП 🍒 чур ты первый"/>
      <BasicExample title="./pngs\NIKITEICH.png" name="Черри Блоссом" text="Наглым образом назвал свою жизнь фруктовым садом"/>
      <BasicExample title="./pngs\GULAMADZODICHI.png" name="Гуламадзодичи" text="Гуламадзодичи и его вонючие сородичи в мире в целом не так много как у меня в голове и не только"/>
      <BasicExample title="./pngs/Wadim.jpg" name="Вадим Метеличенко" text="-бизнес тренинг с Ильёй Соболевым 👍🏻"/>
    </div>
  )
}
