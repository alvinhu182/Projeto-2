import { useState } from "react"
import {  Button  } from "react-bootstrap"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import { createInscription } from "../../services/Inscriptions.service"
import { selectUser} from "../../Store/User/User.selectors"
import { AuthForm } from "../../components/AuthForm"


export function InscriptionForm ({ courseId, onRegister }) {
  const user = useSelector(selectUser)
  const [isSubmiting, setIsSubmiting] = useState(false)
  const handleInscription = async () => {
    try {
      setIsSubmiting(true)
      await createInscription({
        name: user.userName,
        email: user.userEmail,
        courseId: parseInt(courseId),
        userId: user.id
      })
   
      toast.success('Inscrito com sucesso')
      onRegister()
    } catch (err) {
      console.error(err)
      toast.error('Falha ao fazer inscrição. Tente novamente.')
    }
    setIsSubmiting(false)
  }
  return (
    <>
      <h2>Se inscreva aqui</h2>
      {user ? (
        <Button onClick={handleInscription} disabled ={isSubmiting}>Inscrever</Button>
      ) : (
        <>
        <p>Faça login ou crie uma conta abaixo para se inscrever no site </p>
        <AuthForm redirectAfterLogin={false} />
        </>
      )}
    </>
  )
}



