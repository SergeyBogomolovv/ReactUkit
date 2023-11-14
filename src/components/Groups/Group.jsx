import React, { useState } from 'react'
import List306 from './List306'
import cl from './Group108.module.css'

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
