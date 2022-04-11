import { Button, Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import Footer from "../../components/Layout/footer";
import {Link} from "react-router-dom";

export function HomeView (){
    return (
    <Layout>
      
        <Container>
          <div className='shadow border p-4 p-md-5 my-3 banner-home d-md-flex align-items-center'>
              <h1>Bem vindo ao gg easy</h1>
                <p>treta</p>
                <p> venha aprender com a gente</p>
                <Button as={Link} to="/cursos">aulas</Button>
        <div>
          <img src="/assets/img/banner-ggeasy.png" alt='ggeasy' width ={626} height={391} className='img-fluid'/>
        
          </div>
         </div>
      <p>Conteudo</p>
      </Container>
      <main>
      </main>
      <Footer/>
      </Layout>
  
    )
  }