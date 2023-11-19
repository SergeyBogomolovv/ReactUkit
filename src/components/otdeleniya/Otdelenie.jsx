import React from 'react'
import cl from './oteleniya.module.scss'
import Otdeleniecontent from './Otdeleniecontent'
import Footer from '../footer/footer'

export default function Otdelenie({firstOtdelenie, setFirstOtdelenie, secondOtdelenie, setSecondOtdelenie, thirdOtdelenie, setThirdOtdelenie}) {

  if(firstOtdelenie) {
    setSecondOtdelenie(false)
    setThirdOtdelenie(false)
    return (
      <div className={cl.container}>
        <Otdeleniecontent number='1' image="./pngs/otdeleniya/milanova.png" name='Миланова Ирина Анатольевна' phone='8(495)640-54-36 доб. 4602' email='i.milanova@mgutm.ru'/>
        <Footer className={cl.Footer}/>
      </div>
    )
  }

  if(secondOtdelenie) {
    setFirstOtdelenie(false)
    setThirdOtdelenie(false)
    return (
      <div className={cl.container}>
        <Otdeleniecontent number='2' image="./pngs/otdeleniya/pereverzeva.png" name='Переверзева Елена Анатольевна' phone='8(495)640-54-36 доб. 4603' email='e.pereverzeva@mgutm.ru'/>
        <Footer className={cl.Footer}/>
      </div>
    )
  }

  if(thirdOtdelenie) {
    setFirstOtdelenie(false)
    setSecondOtdelenie(false)
    return (
      <div className={cl.container}>
        <Otdeleniecontent number='3' image="./pngs/otdeleniya/dzuba.png" name='Дзюба Ирина Георгиевна' phone='8(495)640-54-36 доб. 4603' email='i.dzyuba@mgutm.ru'/>
        <Footer className={cl.Footer}/>
      </div>
    )
  }
  
}
