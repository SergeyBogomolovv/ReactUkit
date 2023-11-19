import React from 'react'
import { Button } from 'react-bootstrap'
import cl from './Main.module.scss'

export default function InfoButtons({children}) {
  return (
    <div className={cl.buttonsContainer}>
      {children}
    </div>
  )
}
