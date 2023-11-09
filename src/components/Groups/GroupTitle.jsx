import React, { useState } from 'react'
import cl from './Group108.module.css'
import { CloseButton, Form } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function GroupTitle({title, setVisible, searchPupil, callBack}) {

  return (
     <Navbar expand="lg" className={[cl.Navbar, "bg-body-tertiary"].join(' ')} variant='dark' bg='dark'>
     <Container as='div' className={cl.NavContainer}>
         <Navbar.Brand>Группа № {title}</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
         <Nav className={[cl.NavContainer, 'me-auto'].join(' ')}>
          <Form.Control type="text"  placeholder="Поиск по имени" value={searchPupil} onChange={callBack}/>
          <CloseButton variant='white'className={cl.closeBtn} onClick={() => setVisible(false)}/>
         </Nav>
         </Navbar.Collapse>
     </Container>
 </Navbar>
  )
}
