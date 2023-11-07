import React, { useState } from 'react'
import cl from './Group108.module.css'
import { CloseButton, Form } from 'react-bootstrap'

export default function GroupTitle({title, setVisible, searchPupil, callBack}) {

  return (
    <div className={cl.title}>
        Группа № {title}
        <Form.Control type="text" className='' placeholder="Поиск по имени" value={searchPupil} onChange={callBack}/>
        <CloseButton variant='white'className={cl.closeBtn} onClick={() => setVisible(false)}/>
    </div>
  )
}
