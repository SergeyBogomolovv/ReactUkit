import React, { useMemo, useState } from 'react'
import cl from './Groups.module.scss'
import ListPerson from './ListPerson'
import { CloseButton } from 'react-bootstrap'
import GroupTitle from './GroupTitle'
import NotFound from '../alert/alert'

export default function List309({setVisible}) {
  const [pupil, setPupil] = useState([
    {id: 1, name: 'Никитеич', src: './pngs/NIKITEICH.png'},
    {id: 2, name: 'Никитеич2', src: './pngs/NIKITEICH.png'},
    {id: 3, name: 'Никитеич3', src: './pngs/NIKITEICH.png'}
  ])
  const [searchPupil, setSearchPupil] = useState('') //Аналог searchQuery

  const SearchedPupils = useMemo(() => {
    return pupil.filter(post => post.name.includes(searchPupil))
  }, [searchPupil, pupil])

  const callBack = e => setSearchPupil(e.target.value)

  if (SearchedPupils.length === 0) {
    return (
      <>
        <GroupTitle title='309' setVisible={setVisible} searchPupil={searchPupil} callBack={callBack}/>
        <NotFound heading={'Извините, ученик ' + searchPupil + ' не найден'} text="Проверьте правильность написания имени и существует ли ученик в этой группе"/>
      </>
    )
  }

  return (
    <>
      <GroupTitle title='309' setVisible={setVisible} searchPupil={searchPupil} callBack={callBack}/>
      <div className={cl.contentContainer}>
        {SearchedPupils.map(pupil =>
          <ListPerson key={pupil.id}>{pupil.id}. {pupil.name} <img src={pupil.src} className={[cl.listimage, 'siteImage'].join(' ')}/></ListPerson>
          )}
      </div>
      
    </>
  )
}