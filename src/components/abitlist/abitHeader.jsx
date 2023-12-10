import React from 'react'
import cl from './abitlist.module.scss'
import { Button, CloseButton, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setAbitsFalse, setAbitsTrue } from '../store/WindowStates'

export default function AbitHeader({search, setSearch}) {
  const dispatch = useDispatch()
  return (
    <Navbar expand="lg" className={[cl.Navbar, "bg-body-tertiary"].join(' ')} variant='dark' bg='dark'>
        <Container as='div' className={cl.NavContainer}>
            <Navbar.Brand>Список абитуриентов</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={[cl.NavContainer, 'me-auto'].join(' ')}>
                <Form.Control type="text"  placeholder="Поиск по имени" value={search} onChange={e => setSearch(e.target.value)}/>
                <CloseButton variant='white'className={cl.closeBtn} onClick={() => dispatch(setAbitsFalse())}/>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}