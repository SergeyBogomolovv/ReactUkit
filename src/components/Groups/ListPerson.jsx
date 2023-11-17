import React from 'react'
import cl from './Groups.module.scss'

export default function ListPerson({children}) {
  return (
    <div className={cl.Person}>
      {children}
    </div>
  )
}
