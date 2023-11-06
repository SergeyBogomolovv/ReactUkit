import React, { useState } from 'react'
import classes from './ModalGroups.module.css'
import { Button } from 'react-bootstrap'
import Group108 from '../Groups/Group108'

export default function ModalGroups({children, visible, setVisible}) {  

    const rootClasses = [classes.modal]
    if(visible == true) {
        rootClasses.push(classes.active)
    }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
        <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}> 
            {children}
        </div>
    </div>
  )
}
