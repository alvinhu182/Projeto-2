import { Container } from "react-bootstrap"
import styled from "styled-components"
import { AuthForm } from "../../components/AuthForm"

export function LoginView (){
    return (
        <Background className="bg-dark d-flex j">
            <Container className="bg-white rounded p-3 p-md-5">
                <AuthForm />
            </Container>
        </Background>
        
    )
}

const Background = styled.main`
background: linear-gradient(180deg, #35ade2 0%, #7bc8ea 100%);
display:flex;
justify-content: center;
align-items: center;
padding: 16px
`