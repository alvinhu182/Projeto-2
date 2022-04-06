import { Col, Container, Row } from "react-bootstrap";
import { CardCourse } from "../../components/CardCourse";
import { Layout } from "../../components/Layout";

const courses = [
    {
        id:1,
        name: 'gameplay de zed',
        shortDescription: 'aprenda jogar lol',

    },
    {
        id:2,
        name: 'gameplay de akali',
        shortDescription: 'aprenda jogar lol',

    },
    {
        id:3,
        name: 'gameplay de katarina',
        shortDescription: 'aprenda jogar lol',

    },
    {
        id:4,
        name: 'gameplay de Caitlyn',
        shortDescription: 'aprenda jogar lol',

    },
    {
        id:5,
        name: 'gameplay de Diana',
        shortDescription: 'aprenda jogar lol',

    },
    {
        id:6,
        name: 'gameplay de Garen',
        shortDescription: 'aprenda jogar lol',

    }

]

export function CoursesView (){

    return (
        <Layout>
            <Container>
                <h1 className="text-center mt-4">Cursos</h1>
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