import React, { useMemo, useState } from 'react'
import cl from './Group108.module.css'
import ListPerson from './ListPerson'
import { CloseButton, Form } from 'react-bootstrap'
import GroupTitle from './GroupTitle'

export default function List306({setVisible}) {
  const [pupil, setPupil] = useState([
    {id: 1, name: 'Тимчик', src: './pngs/TIMCHICK.png'},
    {id: 2, name: 'Вонючий', src: './pngs/TIMCHICK.png'},
    {id: 3, name: 'Геракс', src: './pngs/Grekich.png'}
  ])
  const [searchPupil, setSearchPupil] = useState('') //Аналог searchQuery

  const SearchedPupils = useMemo(() => {
    return pupil.filter(post => post.name.toLowerCase().includes(searchPupil))
  }, [searchPupil, pupil])

  const callBack = e => setSearchPupil(e.target.value)

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
