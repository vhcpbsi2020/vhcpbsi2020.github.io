import "./style.css";
import { Header, Container, Main } from "./style";
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
        <Main>
          <section>
            <Carousel
              autoplay
              style={{ height: 490, borderRadius: 20, paddingTop: 20 }}
            >
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
                      "STF decide que governo deve realizar ações para proteção ao meio ambiente na Amazônia."
                    }
                    description={
                      "Executivo terá de apresentar plano para fiscalização e de combate a crimes ambientais, além de adotar medidas para reduzir o desmatamento."
                    }
                  />

                  <NoticasCard
                    url={
                      "https://www.cnnbrasil.com.br/nacional/desmatamento-na-amazonia-em-2023-e-o-menor-registrado-desde-2018-diz-imazon/"
                    }
                    imagem={
                      "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/Reuters_Direct_Media/BrazilOnlineReportTopNews/tagreuters.com2023binary_LYNXMPEJBA0L9-FILEDIMAGE.jpg?w=350&h=195&crop=1"
                    }
                    title={
                      "Desmatamento na Amazônia em 2023 é o menor registrado desde 2018, diz Imazon."
                    }
                    description={
                      "Monitoramento mostra uma queda de 62% na destruição em relação a 2022. "
                    }
                  />

                  <NoticasCard
                    url={
                      "https://www.cnnbrasil.com.br/nacional/narcotrafico-e-crimes-ambientais-os-novos-e-velhos-desafios-da-amazonia-legal/"
                    }
                    imagem={
                      "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/06/GettyImages-803571810.jpg?w=1220&h=674&crop=1"
                    }
                    title={
                      "Narcotráfico e crimes ambientais, os novos e velhos desafios da Amazônia Legal "
                    }
                    description={
                      "Estudo mapeou ao menos 22 facções criminosas atuantes na região, em pelo menos 178 dos 772 municípios; localidades concentram quase 58% da população total da Amazônia "
                    }
                  />
                  <NoticasCard
                    url={
                      "https://www.camara.leg.br/noticias/1021620-comissao-debate-os-impactos-da-regularizacao"
                    }
                    imagem={
                      "https://www.camara.leg.br/midias/image/2023/12/vac-abr1711235244-768x512.jpg"
                    }
                    title={
                      "Comissão debate os impactos da regularização fundiária no desenvolvimento da Amazônia Legal"
                    }
                    description={
                      "A Comissão de Integração Nacional da Câmara dos Deputados ouve nesta terça-feira (5) o presidente do Incra, Cesar Fernando Schiavon Aldrighi, sobre a regularização fundiária."
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
                    url={
                      "https://saibajanews.com.br/brasil/petrobras/2024/03/15/petrobras-e-consorcio-amazonia-legal-formarao-grupo-de-trabalho-com-foco-em-acoes-de-sustentabilidade-na-margem-equatorial/"
                    }
                    imagem={
                      "https://saibajanews.com.br/wp-content/uploads/2024/03/Jean-Paul-no-Maranhao-860x846.webp"
                    }
                    title={
                      "Petrobras e Consórcio Amazônia Legal formarão grupo de trabalho."
                    }
                    description={
                      "Jean Paul Prates e governadores da região se reuniram em São Luís, Maranhão."
                    }
                  />
                  <NoticasCard
                    url={
                      "https://www.camara.leg.br/noticias/1014609-camara-aprova-projeto-que-facilita-regularizacao-de-terras-na-amazonia-legal/"
                    }
                    imagem={
                      "https://www.camara.leg.br/midias/image/2023/11/img20231107213704048-768x473.jpg"
                    }
                    title={
                      "Câmara aprova projeto que facilita regularização de terras na Amazônia Legal."
                    }
                    description={
                      "Proposta retorna ao Senado para nova votação."
                    }
                  />
                  <NoticasCard
                    url={
                      "https://www.cnnbrasil.com.br/nacional/policiais-da-amazonia-tem-de-patrulhar-area-quatro-vezes-maior-que-profissionais-do-resto-do-pais/"
                    }
                    imagem={
                      "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/06/WhatsApp-Image-2022-06-07-at-14.06.00.jpeg?w=1220&h=674&crop=1"
                    }
                    title={
                      "Policiais da Amazônia têm de patrulhar área quatro vezes maior que profissionais do resto do país."
                    }
                    description={
                      "Média nos nove estados da região é de 83 km², enquanto policiais militares brasileiros patrulham, em média, 21 km²; cada quilômetro quadrado equivale aproximadamente a 100 campos de futebol."
                    }
                  />
                  <NoticasCard
                    url={
                      "https://www.cnnbrasil.com.br/nacional/startup-ambiental-brasileira-promete-restaurar-um-milhao-de-hectares-de-florestas/"
                    }
                    imagem={
                      "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/03/floresta-amazonica-brasil.jpg?w=1220&h=674&crop=1"
                    }
                    title={
                      "Startup ambiental brasileira promete restaurar um milhão de hectares de florestas."
                    }
                    description={
                      "Empresa re.green, que se propõe a trabalhar em larga escala e buscar lucro na recuperação de áreas degradadas, participou da The Climate Week e do Brazilian Climate Summit, em Nova York."
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
