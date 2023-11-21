import React from 'react'
import cl from './oteleniya.module.scss'
import Otdeleniecontent from './Otdeleniecontent'
import Footer from '../footer/footer'
import {useDispatch, useSelector} from 'react-redux'
import { setFirstOtdelFalse, setSecondOtdelFalse, setThirdOtdelFalse } from '../store/WindowStates'

export default function Otdelenie() {

  const dispatch = useDispatch()

  const firstOtdel = useSelector(state => state.otdelenie1.state)
  const secondOtdel = useSelector(state => state.otdelenie2.state)
  const thirdOtdel = useSelector(state => state.otdelenie3.state)

  if(firstOtdel) {
    dispatch(setSecondOtdelFalse())
    dispatch(setThirdOtdelFalse())
    return (
      <div className={cl.container}>
        <Otdeleniecontent number='1' image="./pngs/otdeleniya/milanova.png" name='Миланова Ирина Анатольевна' phone='8(495)640-54-36 доб. 4602' email='i.milanova@mgutm.ru'/>
        <Footer className={cl.Footer}/>
      </div>
    )
  }

  if(secondOtdel) {
    dispatch(setFirstOtdelFalse())
    dispatch(setThirdOtdelFalse())
    return (
      <div className={cl.container}>
        <Otdeleniecontent number='2' image="./pngs/otdeleniya/pereverzeva.png" name='Переверзева Елена Анатольевна' phone='8(495)640-54-36 доб. 4603' email='e.pereverzeva@mgutm.ru'/>
        <Footer className={cl.Footer}/>
      </div>
    )
  }

  if(thirdOtdel) {
    dispatch(setFirstOtdelFalse())
    dispatch(setSecondOtdelFalse())
    return (
      <div className={cl.container}>
        <Otdeleniecontent number='3' image="./pngs/otdeleniya/dzuba.png" name='Дзюба Ирина Георгиевна' phone='8(495)640-54-36 доб. 4603' email='i.dzyuba@mgutm.ru'/>
        <Footer className={cl.Footer}/>
      </div>
    )
  }
}
