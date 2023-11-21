import React, { useState } from 'react'
import cl from './Groups.module.scss'
import { CloseButton, Form } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { setGroup108False, setGroup306False, setGroup309False } from '../store/WindowStates';

export default function GroupTitle({title, searchPupil, callBack}) {
  const dispatch = useDispatch()
  const closeGroup = () => {
    dispatch(setGroup306False())
    dispatch(setGroup108False())
    dispatch(setGroup309False())
  }

  return (
     <Navbar expand="lg" className={[cl.Navbar, "bg-body-tertiary"].join(' ')} variant='dark' bg='dark'>
     <Container as='div' className={cl.NavContainer}>
         <Navbar.Brand>Группа № {title}</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
         <Nav className={[cl.NavContainer, 'me-auto'].join(' ')}>
          <Form.Control type="text"  placeholder="Поиск по имени" value={searchPupil} onChange={callBack}/>
          <CloseButton variant='white'className={cl.closeBtn} onClick={() => closeGroup()}/>
         </Nav>
         </Navbar.Collapse>
     </Container>
 </Navbar>
  )
}
