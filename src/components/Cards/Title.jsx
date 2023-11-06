import React from 'react'
import cl from './Cards.module.css'

export default function Title({children}) {
  return (
    <h1 className={cl.Kits}>
      {children}
    </h1>
  )
}
