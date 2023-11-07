import React, { useMemo, useState } from 'react'
import cl from './Group108.module.css'
import ListPerson from './ListPerson'
import { CloseButton, Form } from 'react-bootstrap'
import GroupTitle from './GroupTitle'

export default function List306({setVisible}) {
  const [pupil306, setPupil306] = useState([
    {id: 1, name: 'Тимчик', src: './pngs/TIMCHICK.png'},
    {id: 2, name: 'Вонючий', src: './pngs/TIMCHICK.png'},
    {id: 3, name: 'Геракс', src: './pngs/Grekich.png'}
  ])

  const [sort, setSort] = useState('') //Аналог selectedSort
  const [searchPupil, setSearchPupil] = useState('') //Аналог searchQuery



  const sortedPupils = useMemo(() => {
    if(sort) {
      return [...pupil306].sort((a,b) => a[setSort].localeCompare(b[setSort]))
    }
    return pupil306
  }, [sort, pupil306]) 

  const sortedAndSearchedPupils = useMemo(() => {
    return sortedPupils.filter(post => post.name.toLowerCase().includes(searchPupil))
  }, [searchPupil, sortedPupils])

  

  const callBack = e => setSearchPupil(e.target.value)

  return (
    <div>
      <GroupTitle title='306' setVisible={setVisible} searchPupil={searchPupil} callBack={callBack}/>
      <div className={cl.listContainer}>
      {sortedAndSearchedPupils.map(pupils =>
          <ListPerson key={pupils.id} >{pupils.id}. {pupils.name} <img src={pupils.src} className={cl.listimage}/></ListPerson>
          )}
    
    </div>
    </div>
  )
}
