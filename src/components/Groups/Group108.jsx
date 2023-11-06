import React from 'react'
import cl from './Group108.module.css'
import BasicExample from '../Cards/card'
import List108 from './List108'

export default function Group108({visible, setVisible}) {
  const rootClasses = [cl.Container]
  if(visible === true) {
    rootClasses.push(cl.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.ContainerContent} onClick={(e) => e.stopPropagation()}>
      <List108/>
      </div>
    </div>
  )
}
