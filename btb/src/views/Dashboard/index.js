import { Alert } from "react-bootstrap";
import { LayoutPortal } from "../../components/LayoutPortal";

export function DashboardView () {
    return (
   <LayoutPortal>
        <h1 className="mt-4">Bem vindo lolzeiro </h1>
        <p>utilize o menu para gerenciar os dados do site</p>
        <Alert variant="info">Você receberá as instruções do curso por e=mail</Alert>
    </LayoutPortal>
    )
}