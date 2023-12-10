import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setAbitsTrue, setFirstOtdelFalse, setFirstOtdelTrue, setSecondOtdelFalse, setSecondOtdelTrue, setThirdOtdelFalse, setThirdOtdelTrue } from './store/WindowStates';

function Header() {

  const dispatch = useDispatch()
  
  const closeOtdeleniya = () => {
    dispatch(setFirstOtdelFalse())
    dispatch(setSecondOtdelFalse())
    dispatch(setThirdOtdelFalse())
  }

  return (
      <Navbar expand="lg" variant='dark' bg='dark'>
        <Container>
          <Navbar.Brand onClick={() => {
            closeOtdeleniya()
            localStorage.setItem('abits', JSON.stringify([]))
            alert('Кэш сброшен')
          }} style={{cursor: 'pointer'}}>УниКИТ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://www.mgkit.ru/">Официальный сайт</Nav.Link>
              <Nav.Link href="https://vk.com/s.bogomolov0">Кто делал</Nav.Link>
              <Nav.Link onClick={() => {
                dispatch(setAbitsTrue())
                closeOtdeleniya()
                }}>Список поступающих</Nav.Link>
              <NavDropdown title="Отделения" id="dark-nav-dropdown" data-bs-theme="dark">
                <NavDropdown.Item onClick={() => {
                  closeOtdeleniya()
                  dispatch(setFirstOtdelTrue())
                }}>Отделение 1</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                  closeOtdeleniya()
                  dispatch(setSecondOtdelTrue())
                  }}>Отделение 2</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                  closeOtdeleniya()
                  dispatch(setThirdOtdelTrue())
                  }}>Отделение 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;