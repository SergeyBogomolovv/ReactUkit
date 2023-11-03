import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
      <Navbar expand="lg" variant='dark' bg='dark'>
        <Container>
          <Navbar.Brand href="#home">УниКИТ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://www.mgkit.ru/">Официальный сайт</Nav.Link>
              <Nav.Link href="https://vk.com/s.bogomolov0">Кто делал</Nav.Link>
              <Nav.Link href="https://vk.com/s.bogomolov0">Профиль</Nav.Link>
              <NavDropdown title="Отделения" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Отделение 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Отделение 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Отделение 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;