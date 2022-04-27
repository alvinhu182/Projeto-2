import { useState } from "react";
import { Button, Form } from "react-bootstrap";


export function LoginForm () {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
     const handleChange = (event) => {
        setFormData ({
            ...formData,
            [event.traget.name]: event.target.value
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault()

    }
    return (
        <Form onSubmit={handleSubmit}>
        <p className="h4"> Login   </p>
        <Form.Group controlId="login-email" className="mb-3">
          <Form.Label className="m-0">E-mail</Form.Label>
          <Form.Control
            type='email'
            placeholder="exemplo@exemplo.com"
             value={formData.email}
             onChange={handleChange}
            name="email"
            required
          />
        </Form.Group>
        <Form.Group controlId="login-password" className="mb-3">
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
        <Button className="m-2"  type='submit'>Entrar</Button>
        </Form>
    )
}