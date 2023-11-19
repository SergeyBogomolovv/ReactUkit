import React from 'react'
import { Alert } from 'react-bootstrap'

export default function NotFound({heading, text}) {
  return (
      <Alert variant="danger">
        <Alert.Heading>{heading}</Alert.Heading>
        <p>
          {text}
        </p>
      </Alert>
  )
}