import React from 'react'
import List306 from './List306'
import cl from './Group108.module.css'

export default function Group306({visible, setVisible}) {
    const rootClasses = [cl.Container]

    if(visible === true) {
        rootClasses.push(cl.active)
    }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.ContainerContent} onClick={(e) => e.stopPropagation()}>
      <List306/>
      </div>
    </div>
  )
}
