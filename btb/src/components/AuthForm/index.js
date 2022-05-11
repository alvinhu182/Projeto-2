import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export function AuthForm ({redirectAfterLogin = true}){
    return (
        <Row>
            <Col xv={12} lg ='auto' className="flex-fill">
                <LoginForm redirectAfterLogin={redirectAfterLogin}/>
            </Col>
            <Divider xv={12}lg ='auto'>
             ou
            </Divider>
            <Col xv={12}lg ='auto' className="flex-fill">
             <RegisterForm redirectAfterLogin={redirectAfterLogin}/>
            </Col>
        </Row>
    )
}

const Divider = styled(Col)`
text-align: center;
padding: 16px 0;
:before, :after{
    content: '';
    width: 30px;
    height: 1px;
    background-color: aliceblue;
    display: inline-block;
    vertical-align: middle;
    margin: 0 8px;

}
@media (min-width: 992px){
    padding-left: 42px;
    padding-right: 42px;
    align-self: center;
    :before,
    :after{
        display: none;
    }
}

`