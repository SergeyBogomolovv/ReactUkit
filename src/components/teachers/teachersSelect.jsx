import React from 'react'
import cl from './teachers.module.scss'

export default function TeachersSelect({options, value, onChange}) {
  return (
        <select value={value} onChange={e => onChange(e.target.value)} className={cl.selector}>
                {options.map(option => <option value={option.value} key={option.value}>{option.name}</option>)}
        </select>
  )
}
