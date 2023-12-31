import ListGroup from 'react-bootstrap/ListGroup';
import cl from './Groups.module.scss'
import ListPerson from './ListPerson';
import { Button, CloseButton, Image } from 'react-bootstrap';
import { useState } from 'react';
import GroupTitle from './GroupTitle';
import { useMemo } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NotFound from '../alert/alert';

export default function List108() {
  const [pupil, setPupil] = useState([
    {id: 1, name: 'Богомолов Сергей', src: './pngs/Grekich.png'},
    {id: 2, name: 'Уфаркина Мария', src: './pngs/masha.png'},
    {id: 3, name: 'Гуламадзода Акмал', src: './pngs/GULAMADZODICH.png'},
    {id: 4, name: 'Парфенов Ярослав', src: './pngs/yarik.png'},
    {id: 5, name: 'Шарипова Амина', src: './pngs/amina.png'},
    {id: 6, name: 'Шмаков Артем', src: './pngs/artem.png'},
    {id: 7, name: 'Безденежных Егор', src: './pngs/egorb.png'},
    {id: 8, name: 'Гришина Ксения', src: './pngs/ksenia.png'},
    {id: 9, name: 'Ермолов Егор', src: './pngs/ermolov.png'},
    {id: 10, name: 'Чекунов Георгий', src: './pngs/georgiy.png'},
    {id: 11, name: 'Чигасов Тихон', src: './pngs/tixon.png'},
    {id: 12, name: 'Кузьменков Антон', src: './pngs/anton.png'},
    {id: 13, name: 'Анисимов Михаил', src: './pngs/miha.png'},
    {id: 14, name: 'Афанасьева Екатерина', src: './pngs/katya.png'},
    {id: 15, name: 'Тробова Шукуфа', src: './pngs/shukufa.png'},
    {id: 16, name: 'Юсупова Ситора', src: './pngs/citora.png'},
    {id: 17, name: 'Иванова Арина', src: './pngs/arina.png'},
    {id: 18, name: 'Кострова Александра', src: './pngs/sasha.png'},
    {id: 19, name: 'Гавар Сурадж', src: './pngs/sorodich.png'},
    {id: 20, name: 'Китин Матвей', src: './pngs/matvey.png'},
    
  ])
  const [searchPupil, setSearchPupil] = useState('')

  const SearchedPupils = useMemo(() => {
    return pupil.filter(post => post.name.includes(searchPupil))
  }, [searchPupil, pupil])

  const callBack = e => setSearchPupil(e.target.value)

  if (SearchedPupils.length === 0) {
    return (
      <>
        <GroupTitle title='108' searchPupil={searchPupil} callBack={callBack}/>
        <NotFound heading={'Извините, ученик ' + searchPupil + ' не найден'} text="Проверьте правильность написания имени и существует ли ученик в этой группе"/>
      </>
    )
  }

  return (
    <>
      <GroupTitle title='108' searchPupil={searchPupil} callBack={callBack}/>
      <TransitionGroup className={cl.contentContainer}>
        {SearchedPupils.map(pupil =>
        <CSSTransition key={pupil.id} timeout={500} classNames='card' mountOnEnter unmountOnExit>
          <ListPerson key={pupil.id} className='card'>{pupil.id}. {pupil.name} <img src={pupil.src} className={[cl.listimage, 'siteImage'].join(' ')}/></ListPerson>
        </CSSTransition>
            )}
      </TransitionGroup>
  </>
  )
}