import { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { CardCourse } from "../../components/CardCourse";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";



export function CoursesView (){
   const [courses, setCourses] = useState([])
   const [loading, setLoading] = useState(true)
   const [errorMsg, SeterrorMsg] = useState()
    useEffect(() => {
        fetch('http://localhost:3001/courses')
            .then((response) =>response.json()) 
            .then((data) => {
                setCourses(data)
                setLoading(false)
                .catch(() =>{
                    SeterrorMsg('Falha ao buscar cursos. Por favor Recarregue a pagina')
                    
                })
                .finally(() =>{
                    setLoading(false)
                })
            })
}, [])
    return (
        <Layout>
            <Container>
                <h1 className="text-center mt-4">Cursos</h1>
                {loading && (
                <Loading />
                )}
                {errorMsg &&(
                    <Alert variant='danger'>{errorMsg} </Alert>
                )}
                <Row>
                {courses.map(course => (
                   
                        <Col key={course.id} className='mb-4' xs={6} md={4} lg={3}>
                        <CardCourse course={course} />
                        </Col>
                    ))}
                </Row>   
            </Container>
        </Layout>
    )
}