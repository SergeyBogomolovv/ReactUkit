import React from 'react'
import { Button } from 'react-bootstrap'

export default function InfoButtons() {
  return (
    <div className='buttonsContainer'>
      <Button variant="secondary">Приказы о зачислении</Button>
      <Button variant="secondary">Дни открытых дверей</Button>
      <Button variant="secondary">Список групп</Button>
    </div>
  )
}
