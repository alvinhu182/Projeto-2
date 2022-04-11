import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";

export function Header () {
    return (
      <header>
        <Navbar expand='md' className='main-navbar'>
          <Container>
            <Navbar.Brand as={Link} to='/'>
              <img src="/assets/img/logo-ggeasy.jpg" alt='gg easy' width={50} height={50} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-header' />
            <Navbar.Collapse id='navbar-header'>
              <Nav className='ms-auto'>
                <Nav.Link as={Link} to='/' >Home</Nav.Link>
                <Nav.Link as={Link} to='/cursos'>Cursos</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }