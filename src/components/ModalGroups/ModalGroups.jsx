import React, { useState } from 'react'
import classes from './ModalGroups.module.scss'
import { Button } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'
import { useDispatch, useSelector } from 'react-redux'
import { setModalGroupsFalse } from '../store/WindowStates'

export default function ModalGroups({children}) {  
  const dispatch = useDispatch()
  const modalGroups = useSelector(state => state.modalGroups.state)
  return (
    <CSSTransition in={modalGroups} timeout={500} classNames='attractive' mountOnEnter unmountOnExit>
        <div className={classes.modal} onClick={() => dispatch(setModalGroupsFalse())}>
        <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}> 
            {children}
        </div>
    </div>
    </CSSTransition>
  )
}
