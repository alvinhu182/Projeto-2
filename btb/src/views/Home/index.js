import { Button, Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function HomeView() {
  return (
    <Layout>
      <Container className="centerContent">
        <BannerHome className="shadow border p-4 p-md-5 my-3  d-md-flex align-items-center">
          <h1 className="m-3">Bem vindo ao gg easy</h1>

          <div>
            <a href="http://twitch.tv/alvinhu182" target="_blank">
              <img
                src="/assets/img/banner-ggeasy.png"
                alt="ggeasy"
                width={626}
                height={391}
                className="img-fluid"
              />
            </a>
          </div>
        </BannerHome>
        <p>
          O portal de games, que te ensina a jogar competitivamente, venha ser o
          melhor!
        </p>
        <Button className="m-3 text-center" as={Link} to="/cursos">
          Cursos
        </Button>
      </Container>
      <main></main>
    </Layout>
  );
}

const BannerHome = styled.div`
  & h1 {
    color: black;
  }
  & p {
    font-size: 1.125rem;
  }
  & > div {
    flex: 1;
  }
`;
