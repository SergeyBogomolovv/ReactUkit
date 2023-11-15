import React from 'react'
import { Card } from 'react-bootstrap'
import cl from './teachers.module.css'
import { CSSTransition } from 'react-transition-group'

export default function TeachersCard({array, className}) {
  return (
      <Card bg='dark' text='white' border='secondary' className={[cl.Card, className].join(' ')}>
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
