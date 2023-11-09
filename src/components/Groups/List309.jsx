import React, { useMemo, useState } from 'react'
import cl from './Group108.module.css'
import ListPerson from './ListPerson'
import { CloseButton } from 'react-bootstrap'
import GroupTitle from './GroupTitle'

export default function List309({setVisible}) {
  const [pupil309, setPupil309] = useState([
    {id: 1, name: 'Никитеич', src: './pngs/NIKITEICH.png'},
    {id: 2, name: 'Никитеич2', src: './pngs/NIKITEICH.png'},
    {id: 3, name: 'Никитеич3', src: './pngs/NIKITEICH.png'}
  ])
  const [searchPupil, setSearchPupil] = useState('') //Аналог searchQuery

  const SearchedPupils = useMemo(() => {
    return pupil309.filter(post => post.name.toLowerCase().includes(searchPupil))
  }, [searchPupil, pupil309])

  const callBack = e => setSearchPupil(e.target.value)
  return (
    <div>
      <GroupTitle title='309' setVisible={setVisible} searchPupil={searchPupil} callBack={callBack}/>
      <div className={cl.listContainer}>

      {SearchedPupils.map(pupil =>
          <ListPerson key={pupil.id}>{pupil.id}. {pupil.name} <img src={pupil.src} className={cl.listimage}/></ListPerson>
          )}
    
    </div>
  </div>
  )
}