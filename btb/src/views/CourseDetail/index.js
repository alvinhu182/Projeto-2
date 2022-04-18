import { useCallback, useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { NotFoundView } from "../NotFound";
import { InscriptionForm } from "./InscriptionForm";
import { Inscriptions } from "./Teste";

export function CourseDetailView () {
  const { id } = useParams()
  const [course, setCourse] = useState()
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState()
  const fetchCourse = useCallback(async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/courses/${id}?_embed=inscriptions`)
      if (!response.ok) {
        throw new Error('Response not ok.')
      }
      const data = await response.json()
      setCourse(data)
      setLoading(false)
    } catch (err) {
      const message = err.message === 'Response not ok.'
        ? '404'
        : 'Falha ao buscar informações do curso. Recarregue a página.'
      setErrorMsg(message)
      setLoading(false)
    }
  }, [id])
  useEffect(() => {
    fetchCourse()
  }, [fetchCourse])
  if (loading) {
    return <Loading />
  }
  if (errorMsg === '404') {
    return <NotFoundView />
  }
  return (
    <Layout>
      <Container className="course-detail-container">
        {errorMsg ? (
          <Alert variant="danger" className="mt-3">{errorMsg}</Alert>
        ) : (
          <>
            <h1 className="text-center mt-4">{course.name}</h1>
            <p><strong>Coach:</strong> {course.coach}</p>
            <p>{course.description}</p>
            <Inscriptions inscriptions={course.inscriptions} />
            <InscriptionForm courseId={id} onRegister={fetchCourse} />
          </>
        )}
      </Container>
    </Layout>
  )
}
