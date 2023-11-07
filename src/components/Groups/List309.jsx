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

  const [sort, setSort] = useState('') //Аналог selectedSort
  const [searchPupil, setSearchPupil] = useState('') //Аналог searchQuery



  const sortedPupils = useMemo(() => {
    if(sort) {
      return [...pupil309].sort((a,b) => a[setSort].localeCompare(b[setSort]))
    }
    return pupil309
  }, [sort, pupil309]) 

  const sortedAndSearchedPupils = useMemo(() => {
    return sortedPupils.filter(post => post.name.toLowerCase().includes(searchPupil))
  }, [searchPupil, sortedPupils])

  

  const callBack = e => setSearchPupil(e.target.value)
  return (
    <div>
      <GroupTitle title='309' setVisible={setVisible} searchPupil={searchPupil} callBack={callBack}/>
      <div className={cl.listContainer}>

      {sortedAndSearchedPupils.map(pupil =>
          <ListPerson key={pupil.id}>{pupil.id}. {pupil.name} <img src={pupil.src} className={cl.listimage}/></ListPerson>
          )}
    
    </div>
  </div>
  )
}