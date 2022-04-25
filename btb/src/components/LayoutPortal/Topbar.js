import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

export function Topbar ({onOpen}){
    return (
        <Navbar bg ='light' expand = 'lg'>
            <Container fluid>
                <Navbar.Toggle onClick={onOpen} />
                <Nav className="ms-auto">
                    <Dropdown align='end'>
                        <Dropdown.Toggle variant = 'light'>lolzeiro</Dropdown.Toggle>
                            <MenuStylled>
                                <Dropdown.Item>Sair</Dropdown.Item>
                            </MenuStylled>
                    </Dropdown>
                </Nav>
            </Container>  
        </Navbar>
    )
}
const MenuStylled = styled(Dropdown.Menu)`
position: absolute !important;
`