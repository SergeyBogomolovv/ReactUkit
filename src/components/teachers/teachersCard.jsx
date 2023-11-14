import React from 'react'
import { Card } from 'react-bootstrap'
import cl from './teachers.module.css'

export default function TeachersCard({array}) {
  return (
    <Card bg='dark' text='white' border='secondary' className={cl.Card}>
      <Card.Img variant="top" src={array.img} />
      <Card.Body>
        <Card.Title>{array.name}</Card.Title>
        <Card.Text>
          {array.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
