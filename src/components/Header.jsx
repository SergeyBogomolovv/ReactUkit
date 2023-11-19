import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header({setVisible, setFirstOtdelenie, setSecondOtdelenie, setThirdOtdelenie}) {
  return (
      <Navbar expand="lg" variant='dark' bg='dark'>
        <Container>
          <Navbar.Brand onClick={() => {
            setFirstOtdelenie(false)
            setSecondOtdelenie(false)
            setThirdOtdelenie(false)
          }} style={{cursor: 'pointer'}}>УниКИТ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://www.mgkit.ru/">Официальный сайт</Nav.Link>
              <Nav.Link href="https://vk.com/s.bogomolov0">Кто делал</Nav.Link>
              <Nav.Link onClick={() => {
                setVisible(true)
                setFirstOtdelenie(false)
                setSecondOtdelenie(false)
                setThirdOtdelenie(false)
                }}>Список поступающих</Nav.Link>
              <NavDropdown title="Отделения" id="dark-nav-dropdown" data-bs-theme="dark">
                <NavDropdown.Item onClick={() => {
                  setFirstOtdelenie(true)
                  setSecondOtdelenie(false)
                  setThirdOtdelenie(false)
                }}>Отделение 1</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                  setSecondOtdelenie(true)
                  setFirstOtdelenie(false)
                  setThirdOtdelenie(false)
                  }}>Отделение 2</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                  setThirdOtdelenie(true)
                  setFirstOtdelenie(false)
                  setSecondOtdelenie(false)
                  }}>Отделение 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;