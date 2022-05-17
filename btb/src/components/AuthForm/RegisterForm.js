import { useState } from "react";
import { Button, Form, Toast } from "react-bootstrap";
import { createUser } from "../../services/Users.service";
import {useDispatch} from "react-redux";
import {userLogin} from "../../store/User/User.actions";
import { useNavigate } from "react-router-dom";


export function RegisterForm (redirectAfterLogin) {
      const [isSubmiting, setIsSubmiting] = useState(false)
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
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
          setIsSubmiting(true)
         const userData = await  createUser(formData)
         dispatch(userLogin(userData))
         if (redirectAfterLogin){
          navigate('/portal')
        }
        } catch (error) {
          const message = error.message ==='Email already exists'
          ? 'Este e-mail já está em uso.'
          : 'Falha ao fazer cadastro. Tente novamente.'
          Toast.error(message)
          isSubmiting(false)
        }

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
        <Form.Group controlId="register-email" className="mb-3">
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
        <Form.Group controlId="register-password" className="mb-3">
          <Form.Label className="m-0">senha</Form.Label>
          <Form.Control
            type='password'
            placeholder="senha"
             value={formData.password}
             onChange={handleChange}
            name="password"
            required
            minLength={4}
          />
        </Form.Group>
        <Button className="m-2"  type='submit' disabled={isSubmiting}>Cadastrar</Button>
        </Form>
    )
}