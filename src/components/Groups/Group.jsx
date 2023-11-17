import React, { useState } from 'react'
import List306 from './List306'
import cl from './Groups.module.scss'

export default function Group({visible, setVisible, children}) {
    const rootClasses = [cl.Container]
    if(visible === true) {
        rootClasses.push(cl.active)
    }
  return (
    <div className={rootClasses.join(' ')} >
          {children}
    </div>
  )
}
