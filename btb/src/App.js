import {Button, Container, Nav, Navbar}from 'react-bootstrap'
import Logo from './assets/img/logo-ggeasy.png'
import Banner from './assets/img/Baner-ggeasy.jpg'

function Header () {
  return (
    <header>
      <Navbar expand='md' className='main-navbar'>
        <Container>
          <Navbar.Brand href='/'>
            <img src={Logo} alt='gg easy' width={181} height={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-header' />
          <Navbar.Collapse id='navbar-header'>
            <Nav className='ms-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/cursos'>Cursos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
function Footer(){
  return(
    <footer className='footer text-center text-white py-2'>
      <p className='m-0 mt-4'>aprenda como é fácil jogar bem sem muita dificuldade</p>
    </footer>
  )
}

function HomeView (){
  return (
  <>
  <Header/>
    <main>
      <Container>
        <div className='shadow border p-4 my-3 banner-home'>
            <h1>Bem vindo ao gg easy</h1>
              <p>treta</p>
              <p> venha aprender com a gente</p>
              <Button>aulas</Button>
            <img src={Banner} alt='ggeasy' width ={626} height={391} className='img-fluid'/>
        </div>
    <p>Conteudo</p>
    </Container>
    </main>
    <Footer/>
  </>
  )
}

function App(){
  return <HomeView/>;
}



export default App;
