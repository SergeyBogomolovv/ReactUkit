import React, { useMemo, useState } from 'react'
import cl from './Groups.module.scss'
import ListPerson from './ListPerson'
import { CloseButton, Form } from 'react-bootstrap'
import GroupTitle from './GroupTitle'
import NotFound from '../alert/alert'

export default function List306({setVisible}) {
  const [pupil, setPupil] = useState([
    {id: 1, name: 'Тимчик', src: './pngs/TIMCHICK.png'},
    {id: 2, name: 'Вонючий', src: './pngs/TIMCHICK.png'},
    {id: 3, name: 'Геракс', src: './pngs/Grekich.png'}
  ])
  const [searchPupil, setSearchPupil] = useState('') //Аналог searchQuery

  const SearchedPupils = useMemo(() => {
    return pupil.filter(post => post.name.includes(searchPupil))
  }, [searchPupil, pupil])

  const callBack = e => setSearchPupil(e.target.value)

  if (SearchedPupils.length === 0) {
    return (
      <>
        <GroupTitle title='306' setVisible={setVisible} searchPupil={searchPupil} callBack={callBack}/>
        <NotFound heading={'Извините, ученик ' + searchPupil + ' не найден'} text="Проверьте правильность написания имени и существует ли ученик в этой группе"/>
      </>
    )
  }

  return (
    <>
      <GroupTitle title='306' setVisible={setVisible} searchPupil={searchPupil} callBack={callBack}/>
      <div className={cl.contentContainer}>
        {SearchedPupils.map(pupils =>
          <ListPerson key={pupils.id} >{pupils.id}. {pupils.name} <img src={pupils.src} className={cl.listimage}/></ListPerson>
          )}
      </div>
      
    </>
  )
}
