import { Button, Form } from "react-bootstrap"
import { useState } from "react"

const emptyFormData = {
    name: '',
    coach:'',
    description:'',
    shortDescription:'',
    pathname:''
}
export function UpsertCourseForm ({initialValue = emptyFormData, buttonLabel = 'Cadastrar', onSubmit}) {
    const [formData, setFormData] = useState(initialValue)
    const handleChange = (event) =>{
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
       
    }
    const handleSubmit = (event) => {
         event.preventDefault()
         onSubmit(formData)
        
    }
    
    return (
       
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="course-name">
                <Form.Label className="mb-0">Nome</Form.Label>
                <Form.Control
                    placeholder="Nome da aula"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="course-coach">
                <Form.Label className="mb-0">Coach</Form.Label>
                <Form.Control
                    placeholder="Nome do Coach"
                    name="coach"
                    value={formData.coach}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="course-description">
                <Form.Label className="mb-0">Descrição</Form.Label>
                <Form.Control
                    placeholder="Descrição da aula"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    as='textarea'
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="course-shortDescription">
                <Form.Label className="mb-0">Descrição Curta</Form.Label>
                <Form.Control
                    placeholder="Pequena descrição da aula"
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleChange}
                    required
                    as='textarea'
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="course-pathname">
                <Form.Label className="mb-0">Imagem</Form.Label>
                <Form.Control
                    placeholder="Imagem da aula"
                    name="pathname"
                    value={formData.pathname}
                    onChange={handleChange}
                    required
                />
                <Form.Text>Cole aqui o link da imagem hospedada no <a href="https://cloudinary.com" target='_blank' rel="noreferrer">Cloudinary </a>.</Form.Text>
            </Form.Group>
 
            <Button type="submit" >{buttonLabel} </Button>
        </Form>
        
        
       
       
    )
}
