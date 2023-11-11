import React from 'react'
import AbitHeader from './abitHeader'
import cl from './abitlist.module.css'
import Abit from './abit'

export default function Abitlist({visible, setVisible, abiturients}) {
    const rootClasses = [cl.Container]
    if(visible === true) {
        rootClasses.push(cl.active)
    }
  return (
    <div className={rootClasses.join(' ')}>
      <AbitHeader setVisible={setVisible}/>
      <div className={cl.contentContainer}>
        {abiturients.map(abit => <Abit abit={abit} key={abit.name} index={abiturients.indexOf(abit) + 1}/>)}
      </div>
    </div>
  )
}

