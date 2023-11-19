import React, { useState } from 'react'
import classes from './ModalGroups.module.scss'
import { Button } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'

export default function ModalGroups({children, visible, setVisible}) {  

  return (
    <CSSTransition in={visible} timeout={500} classNames='attractive' mountOnEnter unmountOnExit>
        <div className={classes.modal} onClick={() => setVisible(false)}>
        <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}> 
            {children}
        </div>
    </div>
    </CSSTransition>
  )
}
