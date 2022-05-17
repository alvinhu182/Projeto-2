import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { LayoutPortal } from "../../components/LayoutPortal"
import { Loading } from "../../components/Loading"
import { PortalHeader } from "../../components/PortalHeader"
import { getCourses } from "../../services/Courses.service"
import { TableCourses } from "./TableCourses"

export function AdminCoursesView (){
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchCourses = async () => {
        try {
            const data = await getCourses()
            setCourses(data)

        } catch {
             toast.error('Falha ao buscar aulas. Recarregue a página.')
        }
        setLoading(false)
     }
    useEffect(() => {
       
        fetchCourses()
    }, [])
    return (
        <LayoutPortal>
            <PortalHeader
                title= 'Aulas cadastradas'
                buttonText='Nova Aula'
                buttonLink='/portal/cursos/cadastro'
            />
            {loading && <Loading />}
            <TableCourses courses={courses} onDeleteCourse={fetchCourses} />
        </LayoutPortal>
    )
}