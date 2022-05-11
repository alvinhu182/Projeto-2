import { Container, Nav, Navbar  } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import styled from 'styled-components'
import { selectIsUserLoggedIn } from "../../Store/User/User.selectors";

export function Header () {
 const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
    return (
      <header>
        <NavbarStyled expand='md' className='main-navbar'>
          <Container>
            <Navbar.Brand as={Link} to='/'>
              <img src="/assets/img/logo-ggeasy.jpg" alt='gg easy' width={50} height={50} />
            </Navbar.Brand>
            <NavbarToggleStyled aria-controls='navbar-header' />
            <Navbar.Collapse id='navbar-header'>
              <Nav className='ms-auto'>
                <NavLinkStyled forwardedAs = {Link} to='/' >Home</NavLinkStyled>
                <NavLinkStyled forwardedAs = {Link} to='/cursos'>Cursos</NavLinkStyled>
                {isUserLoggedIn ?   (
                <NavLinkStyled forwardedAs = {Link} to='/portal'>Acessar portal</NavLinkStyled>
                ) : (
                  <NavLinkStyled forwardedAs = {Link} to='/portal/login'>Login</NavLinkStyled>
                )}
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </NavbarStyled>
      </header>
    )
  }

  const NavbarStyled = styled(Navbar)`
  background-color: black;
  `
  const NavbarToggleStyled = styled (NavbarToggle)`
    background: whitesmoke;
    border: none;
  `
  const NavLinkStyled = styled (Nav.Link)`
    background-color: whitesmoke;
    border-radius: 3px;
    text-align: center;
    margin: 5px 5px;
    box-shadow: 2px 2px 2px rgba(42, 69, 136, 0.3);
  `
