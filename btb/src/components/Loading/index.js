import { Spinner } from "react-bootstrap";

export function Loading (){
    return (
        <div>
                <Spinner animation="border"
                 role="status">
                    <span className="visually-hidden"> Carregando... </span>
                </Spinner>
        </div>
    )
}