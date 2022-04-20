import { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { CardCourse } from "../../components/CardCourse";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { getCourses } from "../../services/Courses.service";



export function CoursesView (){
   const [courses, setCourses] = useState([])
   const [loading, setLoading] = useState(true)
   const [errorMsg, SeterrorMsg] = useState()
    useEffect(() => {
        const fetchCourses = async () => {
        try {
         const data = await getCourses()
         setCourses(data)
        } catch {
            SeterrorMsg('deu ruim amigão, aperta f5 ai')
        }
        setLoading(false)
    }
    fetchCourses()
}, [])
    return (
        <Layout>
            <Container classname="centerContent">
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