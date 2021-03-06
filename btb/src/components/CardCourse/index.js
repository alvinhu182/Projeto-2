import { Button, Card, } from "react-bootstrap";
import {Link} from "react-router-dom";
export function CardCourse ({course}){
   
    return (
        
        <Card className='text-center shadow h-100 m-2'>
        <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title as='h2' className="h5">{course.name}</Card.Title>
            <Card.Text>{course.shortDescription}</Card.Text>
                <img className="carta-img" src={course.pathname} alt=''/>
            <Button as={Link} to={`/cursos/${course.id} `}className='mt-auto'>Ver mais</Button>
        </Card.Body>
        </Card>
    )
}