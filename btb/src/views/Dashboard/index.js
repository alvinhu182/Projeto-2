import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LayoutPortal } from "../../components/LayoutPortal";
import { selectUser } from "../../Store/User/User.selectors";

export function DashboardView () {
  const user =  useSelector(selectUser)
    return (
   <LayoutPortal>
        <h1 className="mt-4">Bem vindo {user.name} </h1>
        {user.type === 1 ? (
             <p>utilize o menu para gerenciar os dados do site</p>
        ) : (
        <Alert variant="info">Você receberá as instruções do curso por e=mail</Alert>
        )}
       
        
    </LayoutPortal>
    )
}