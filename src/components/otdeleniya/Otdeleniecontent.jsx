import React from 'react'
import cl from './oteleniya.module.scss'
import { Image } from 'react-bootstrap'

export default function Otdeleniecontent({number, image, name, phone, email}) {
  return (
    <>
      <div className={cl.heading}>Отделение {number}</div>
        <div className={cl.content}>
          <Image src={image} rounded className={cl.image}/>
          <div className={cl.Name}>{name}</div>
          <div className={[cl.text, cl.email].join(' ')}>Эл. почта: {email}</div>
          <div className={[cl.text, cl.phone].join(' ')}>Телефон: {phone}</div>
        </div>
    </>
  )
}
