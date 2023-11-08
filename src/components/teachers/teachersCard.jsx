import React from 'react'
import { Card } from 'react-bootstrap'

export default function TeachersCard({array}) {
  return (
    <Card bg='dark' text='white' border='secondary'>
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
