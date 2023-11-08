import React, { useState } from 'react'
import cl from './teachers.module.css'
import { CloseButton } from 'react-bootstrap'
import TeachersCard from './teachersCard'
import { useMemo } from 'react'

export default function Teachers({visible, setVisible}) {
    const [teachers, setTeachers] = useState([
        {name: "Вонючая Куропатка", img: "./pngs/kuropatka.png", description: "Вонючая куропаткина сделала лопаткина"},
        {name: "Вонючая ЕЩЕ", img: "./pngs/kuropatka.png", description: "Вонючая куропаткина ТЕСТИРУЕТ лопаткина"},
        {name: "Вонючая ЛОПАТКА", img: "./pngs/kuropatka.png", description: "Вонючая куропаткина сделала лопаткина"},
        {name: "Вонючая Куропатка", img: "./pngs/kuropatka.png", description: "Вонючая куропаткина сделала лопаткина"},
        {name: "Вонючая ГЛУСИ", img: "./pngs/kuropatka.png", description: "Вонючая куропаткина сделала лопаткина"},
        {name: "Вонючая ГНУТИВ", img: "./pngs/kuropatka.png", description: "Вонючая куропаткина сделала лопаткина"},
        {name: "Вонючая Тестируем", img: "./pngs/kuropatka.png", description: "Вонючая куропаткина сделала лопаткина"},
    ])

    const rootClasses = [cl.Container]
    if(visible === true) {
    rootClasses.push(cl.active)
    }

    const [sort, setSort] = useState('')
    const [searchTeacher, setSearchTeacher] = useState('')

    const sortedTeachers = useMemo(() => {
        if(sort) {
          return [...teachers].sort((a,b) => a[setSort].localeCompare(b[setSort]))
        }
        return teachers
      }, [sort, teachers]) 
    
      const sortedAndSearchedTeachers = useMemo(() => {
        return sortedTeachers.filter(post => post.name.includes(searchTeacher))
      }, [searchTeacher, sortedTeachers])

  return (
    <div className={rootClasses.join(' ')}>
        <div className={cl.header}>
            <div className={cl.title}>Преподаватели</div>
            <input type="text" className={cl.search} placeholder="Поиск по имени" value={searchTeacher} onChange={e => setSearchTeacher(e.target.value)}/>
            <CloseButton variant='white'className={cl.closeBtn} onClick={() => setVisible(false)}/>
        </div>

        <div className={cl.contentContainer}>
            {sortedAndSearchedTeachers.map(teachers => 
                <TeachersCard array={teachers}/>
                )}
        </div>
    </div>
  )
}
