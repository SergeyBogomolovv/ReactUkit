import React from 'react'
import cl from './Group108.module.css'

export default function ListPerson({children}) {
  return (
    <div className={cl.Person}>
      {children}
    </div>
  )
}
