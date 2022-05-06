import { useState } from "react";
import { Button, Form } from "react-bootstrap";


export function RegisterForm () {
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        password:''
    })
     const handleChange = (event) => {
        setFormData ({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        

    }
    return (
        <Form onSubmit={handleSubmit}>
        <p className="h4"> Cadastre-se   </p>
        <Form.Group controlId="register-name" className="mb-3">
          <Form.Label className="m-0">Nome</Form.Label>
          <Form.Control
            placeholder="Informe seu nome"
             value={formData.name}
             onChange={handleChange}
            name="name"
            required
          />
        </Form.Group>
        <Form.Group controlId="register-password" className="mb-3">
          <Form.Label className="m-0">senha</Form.Label>
          <Form.Control
            type='password'
            placeholder="senha"
             value={formData.password}
             onChange={handleChange}
            name="password"
            required
          />
        </Form.Group>
        <Button className="m-2"  type='submit'>Cadastrar</Button>
        </Form>
    )
}