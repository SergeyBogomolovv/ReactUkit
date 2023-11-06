import React from 'react'
import cl from './Group108.module.css'
import TeachersList from './List309'
import List309 from './List309'

export default function Group309({visible, setVisible}) {
    const rootClasses = [cl.Container]

    if(visible === true) {
        rootClasses.push(cl.active)
    }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.ContainerContent} onClick={(e) => e.stopPropagation()}>
      <List309/>
      </div>
    </div>
  )
}