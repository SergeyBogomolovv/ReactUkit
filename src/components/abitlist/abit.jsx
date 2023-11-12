import React from 'react'
import cl from './abitlist.module.css'
import { Card } from 'react-bootstrap'

export default function Abit({abit, index}) {
  return (
    <Card border="secondary" bg='dark' text='white' className={cl.CardCon}>
        <Card.Header>{abit.email}@gmail.com</Card.Header>
        <Card.Body>
          <Card.Title className={cl.CardTitle}>{abit.name}</Card.Title>
          <Card.Text className={cl.CardText}>Средний балл: {abit.ball}</Card.Text>
          <Card.Text className={cl.CardTitle}>Место: {index}</Card.Text>
          <Card.Text className={cl.CardText}>
            Почему должны взять: {abit.input}
          </Card.Text>
        </Card.Body>
      </Card>
  )
}
