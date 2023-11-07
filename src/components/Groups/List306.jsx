import React from 'react'
import cl from './Group108.module.css'
import ListPerson from './ListPerson'
import { CloseButton } from 'react-bootstrap'

export default function List306({setVisible}) {
  return (
    <div>
      <div className={cl.title}>
        Группа № 306
        <CloseButton variant='white'className={cl.closeBtn} onClick={() => setVisible(false)}/>
        </div>
      <div className={cl.listContainer}>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
      <ListPerson>Тимчик <img src="./pngs\TIMCHICK.png" className={cl.listimage}/></ListPerson>
    </div>
    </div>
  )
}
