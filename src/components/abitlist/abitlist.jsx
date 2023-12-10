import React, { useState } from 'react'
import AbitHeader from './abitHeader'
import cl from './abitlist.module.scss'
import Abit from './abit'
import { useMemo } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import NotFound from '../alert/alert'

export default function Abitlist({}) {
    const abiturients = JSON.parse(localStorage.getItem('abits'))
    abiturients.sort((a,b) => a.ball - b.ball)
    abiturients.reverse()
    

    const [searchAbit, setSearchAbit] = useState('')

    const SearchedAbiturients = useMemo(() => {
      return abiturients.filter(abit => abit.name.includes(searchAbit))
    }, [searchAbit, abiturients])
    
    if (SearchedAbiturients.length === 0) {
      return(<>
              <AbitHeader search={searchAbit} setSearch={setSearchAbit}/>
              <NotFound heading='Извините, абитуриенты не найдены' text='Проблема может быть в том, что вы не правильно ввели имя, такого абитуриента не существует, или в наш колледж еще никто не подал документы'/>
             </>
    ) 
    }

    return (
      <>
        <AbitHeader search={searchAbit} setSearch={setSearchAbit}/>
        <TransitionGroup className={cl.contentContainer}>
          {SearchedAbiturients.map(abit => 
          <CSSTransition key={abit.name} timeout={500} classNames='card' mountOnEnter unmountOnExit>
            <Abit abit={abit} key={abit.name} index={abiturients.indexOf(abit) + 1} className='card'/>
          </CSSTransition>
          )}
        </TransitionGroup>
      </>
    )
}

