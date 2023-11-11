import React, { useRef, useState } from 'react'
import cl from './documents.module.css'

export default function Testdoc({visible, setVisible}) {
    const [name, setName] = useState('')
    const [surName, setSurName] = useState('')
    const [arr, setArr] = useState([{name: "Василий", surname: "Гришанов"}])

    const rootClasses = [cl.Container]
    if(visible === true) {
        rootClasses.push(cl.active)
    }

    const addNew = () => {
      setArr([...arr, {name: name, surname: surName}])
    }

    const clear = () => {
      setName('')
      setSurName('')
    }

    const nameValue = useRef(null)
    const surNameValue = useRef(null)

  return (
    <div className={rootClasses}>
        <input type="text" placeholder='Имя' value={name} onChange={e => setName(e.target.value)} ref={nameValue}/>
        <input type="text" placeholder='Фамилия'value={surName} onChange={e => setSurName(e.target.value)} ref={surNameValue}/>
        <button onClick={() => setVisible(false)}>Закрыть</button>
        <button onClick={() => console.log(arr)}>Лог</button>
        <button onClick={addNew}>Добавить</button>
        <button onClick={clear}>Очистить</button>
    </div>
  )
}
