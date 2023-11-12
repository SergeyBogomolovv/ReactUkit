import React from 'react'
import cl from './abitlist.module.css'
import { CloseButton, Container, Form, Nav, Navbar } from 'react-bootstrap'

export default function AbitHeader({setVisible, search, setSearch}) {
  return (
    <Navbar expand="lg" className={[cl.Navbar, "bg-body-tertiary"].join(' ')} variant='dark' bg='dark'>
        <Container as='div' className={cl.NavContainer}>
            <Navbar.Brand>Список абитуриентов</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={[cl.NavContainer, 'me-auto'].join(' ')}>
                <Form.Control type="text"  placeholder="Поиск по имени" value={search} onChange={e => setSearch(e.target.value)}/>
                <CloseButton variant='white'className={cl.closeBtn} onClick={() => setVisible(false)}/>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}