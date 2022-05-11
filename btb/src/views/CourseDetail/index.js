import { useCallback, useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { NotFoundView } from "../NotFound";
import { InscriptionForm } from "./InscriptionForm";
import { Inscriptions } from "./Inscription";
import { getCourseById } from "../../services/Courses.service";
import styled from "styled-components";

export function CourseDetailView () {
  const { id } = useParams()
  const [course, setCourse] = useState()
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState()
  const fetchCourse = useCallback(async () => {
    try {
   const data = await getCourseById(id)
      
    
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
      <ContainerStyled >
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
      </ContainerStyled>
    </Layout>
  )
}

const ContainerStyled = styled (Container)`

    max-width: 900px;

`