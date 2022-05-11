import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LayoutPortal } from "../../components/LayoutPortal";
import { UpsertCourseForm } from "../../components/UpsertCourseForm";
import { createCourse } from "../../services/Courses.service";


export function AdminAddCourseView () {
    const navigate = useNavigate()
    const handleSubmit = async (formData) => {
        try {
            await createCourse(formData)
            toast.success('Aula cadastrada com sucesso')
            navigate('/portal/cursos')
        } catch {
            toast.error('Falha ao cadastrar aula. Tente novamente.')
        }
    }
    return (
        <LayoutPortal>
            <h1 className="mt-4">Nova aula</h1>
            <UpsertCourseForm onSubmit={handleSubmit} />
        </LayoutPortal>
    )
}