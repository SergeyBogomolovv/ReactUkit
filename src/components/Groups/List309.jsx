import React from 'react'
import cl from './Group108.module.css'
import ListPerson from './ListPerson'
import { CloseButton } from 'react-bootstrap'

export default function List309({setVisible}) {
  return (
    <div>
      <div className={cl.title}>
        Группа № 309
        <CloseButton variant='white'className={cl.closeBtn} onClick={() => setVisible(false)}/>
        </div>
      <div className={cl.listContainer}>
      <ListPerson>Никитеич <img src="./pngs\NIKITEICH.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Никитеич <img src="./pngs\NIKITEICH.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Никитеич <img src="./pngs\NIKITEICH.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Никитеич <img src="./pngs\NIKITEICH.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Никитеич <img src="./pngs\NIKITEICH.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Никитеич <img src="./pngs\NIKITEICH.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Никитеич <img src="./pngs\NIKITEICH.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Никитеич <img src="./pngs\NIKITEICH.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Никитеич <img src="./pngs\NIKITEICH.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Никитеич <img src="./pngs\NIKITEICH.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Никитеич <img src="./pngs\NIKITEICH.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Никитеич <img src="./pngs\NIKITEICH.png" className={cl.listimage}/></ListPerson>
    </div>
    </div>
  )
}