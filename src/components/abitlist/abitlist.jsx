import React, { useState } from 'react'
import AbitHeader from './abitHeader'
import cl from './abitlist.module.css'
import Abit from './abit'
import { useMemo } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function Abitlist({visible, setVisible, abiturients}) {
    const rootClasses = [cl.Container]
    if(visible === true) {
        rootClasses.push(cl.active)
    }

    abiturients.sort((a,b) => a.ball - b.ball)
    abiturients.reverse()

    const [searchAbit, setSearchAbit] = useState('')

    const SearchedAbiturients = useMemo(() => {
      return abiturients.filter(abit => abit.name.includes(searchAbit))
    }, [searchAbit, abiturients])

  return (
    <div className={rootClasses.join(' ')}>
      <AbitHeader setVisible={setVisible} search={searchAbit} setSearch={setSearchAbit}/>
      <TransitionGroup component='Abit' className={cl.contentContainer}>
        {SearchedAbiturients.map(abit => 
        <CSSTransition key={abit.name} timeout={500} classNames='card' mountOnEnter unmountOnExit>
          <Abit abit={abit} key={abit.name} index={abiturients.indexOf(abit) + 1} className='card'/>
        </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}

