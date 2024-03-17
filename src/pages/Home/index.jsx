import "./style.css";
import { Header, Container, Left, Rigth, Main } from "./style";
import NoticasCard from "../../components/cardsNoticias";
import { Carousel } from "antd";

function Home() {
  return (
    <>
    <Header>
        <div className="entrance-animation">
          <h1>+ INFORMAÇÕES RELEVANTES</h1>
          <h1>+ MAPAS</h1>
          <h1>+ GRÁFICOS</h1>
          <p>Tudo em um só lugar!</p>
        </div>
      </Header>

<Container>
      <Left></Left>
      <Rigth></Rigth>

      <Main>
        <section>
          <Carousel autoplay style={{ backgroundColor: "#506635", height:490, borderRadius: 20, paddingTop: 20}}>
            <section >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                }}
              >
                <NoticasCard
                  imagem={
                    "https://www.rbsdirect.com.br/filestore/2/4/5/1/3/9/4_acd9deeffac3871/4931542_bcccdda05a9fce0.jpg?w=800&h=535"
                  }
                  title={
                    "STF decide que governo deve realizar ações para proteção ao meio ambiente na Amazônia"
                  }
                  description={
                    "Executivo terá de apresentar plano para fiscalização e de combate a crimes ambientais, além de adotar medidas para reduzir o desmatamento"
                  }
                />
                <NoticasCard
                  imagem={
                    "https://www.rbsdirect.com.br/filestore/2/4/5/1/3/9/4_acd9deeffac3871/4931542_bcccdda05a9fce0.jpg?w=800&h=535"
                  }
                  title={
                    "STF decide que governo deve realizar ações para proteção ao meio ambiente na Amazônia"
                  }
                  description={
                    "Executivo terá de apresentar plano para fiscalização e de combate a crimes ambientais, além de adotar medidas para reduzir o desmatamento"
                  }
                />
                <NoticasCard
                  imagem={
                    "https://www.rbsdirect.com.br/filestore/2/4/5/1/3/9/4_acd9deeffac3871/4931542_bcccdda05a9fce0.jpg?w=800&h=535"
                  }
                  title={
                    "STF decide que governo deve realizar ações para proteção ao meio ambiente na Amazônia"
                  }
                  description={
                    "Executivo terá de apresentar plano para fiscalização e de combate a crimes ambientais, além de adotar medidas para reduzir o desmatamento"
                  }
                />
                <NoticasCard
                  imagem={
                    "https://www.rbsdirect.com.br/filestore/2/4/5/1/3/9/4_acd9deeffac3871/4931542_bcccdda05a9fce0.jpg?w=800&h=535"
                  }
                  title={
                    "STF decide que governo deve realizar ações para proteção ao meio ambiente na Amazônia"
                  }
                  description={
                    "Executivo terá de apresentar plano para fiscalização e de combate a crimes ambientais, além de adotar medidas para reduzir o desmatamento"
                  }
                />
              </div>
            </section>

            <section>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                }}
              >
                <NoticasCard
                  imagem={
                    "https://www.rbsdirect.com.br/filestore/2/4/5/1/3/9/4_acd9deeffac3871/4931542_bcccdda05a9fce0.jpg?w=800&h=535"
                  }
                  title={
                    "STF decide que governo deve realizar ações para proteção ao meio ambiente na Amazônia"
                  }
                  description={
                    "Executivo terá de apresentar plano para fiscalização e de combate a crimes ambientais, além de adotar medidas para reduzir o desmatamento"
                  }
                />
                <NoticasCard
                  imagem={
                    "https://www.rbsdirect.com.br/filestore/2/4/5/1/3/9/4_acd9deeffac3871/4931542_bcccdda05a9fce0.jpg?w=800&h=535"
                  }
                  title={
                    "STF decide que governo deve realizar ações para proteção ao meio ambiente na Amazônia"
                  }
                  description={
                    "Executivo terá de apresentar plano para fiscalização e de combate a crimes ambientais, além de adotar medidas para reduzir o desmatamento"
                  }
                />
                <NoticasCard
                  imagem={
                    "https://www.rbsdirect.com.br/filestore/2/4/5/1/3/9/4_acd9deeffac3871/4931542_bcccdda05a9fce0.jpg?w=800&h=535"
                  }
                  title={
                    "STF decide que governo deve realizar ações para proteção ao meio ambiente na Amazônia"
                  }
                  description={
                    "Executivo terá de apresentar plano para fiscalização e de combate a crimes ambientais, além de adotar medidas para reduzir o desmatamento"
                  }
                />
                <NoticasCard
                  imagem={
                    "https://www.rbsdirect.com.br/filestore/2/4/5/1/3/9/4_acd9deeffac3871/4931542_bcccdda05a9fce0.jpg?w=800&h=535"
                  }
                  title={
                    "STF decide que governo deve realizar ações para proteção ao meio ambiente na Amazônia"
                  }
                  description={
                    "Executivo terá de apresentar plano para fiscalização e de combate a crimes ambientais, além de adotar medidas para reduzir o desmatamento"
                  }
                />
              </div>
            </section>
          </Carousel>
        </section>
      </Main>
    </Container>
    </>
  );
}

export default Home;
