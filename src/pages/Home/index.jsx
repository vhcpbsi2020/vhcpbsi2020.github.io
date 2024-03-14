import "./style.css";

import { Carousel, Card } from "antd";
import imgTopo from "../../assets/OMBA_TOPO.png";
import CarrouselFeed from "../../components/carrousel";

const cardImgStyle = {
  width: "340px",
};

const cardStyle = {
  fontSize: 12,
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
};

const { Meta } = Card;

function Home() {
  return (
    <>
      <section className="layout-carousel">
        <img src={imgTopo} alt="" />

        
          <div className="my-div">

            <div className="entrance-animation">
              <h1 >+ INFORMAÇÕES RELEVANTES</h1>
              <h1 >+ MAPAS</h1>
              <h1 >+ GRÁFICOS</h1>
              <p>Tudo em um só lugar!</p>
            </div>
          
          </div>

      </section>

      

      <section className="layout-content">
        <h1>Noticias</h1>

        <Carousel autoplay style={{ height: 215 }}>
          <div
            style={{
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              display: "grid",
            }}
          >
            <a
              href="https://observatoriomfcf.org.br/noticias/para-o-estado-que-mais-desmata-na-amazonia"
              target="_blank"
            >
              <Card
                hoverable
                style={cardStyle}
                cover={
                  <img
                    style={cardImgStyle}
                    alt="example"
                    src="https://observatoriomfcf.org.br/wp-content/uploads/2021/04/image_processing20210402-29999-4j7xha.jpeg"
                  />
                }
              >
                <Meta
                  style={{ fontSize: 20 }}
                  title="Pará, o estado que mais desmata na Amazônia2"
                  description="observatoriomfcf.org.br"
                />
              </Card>
            </a>
          </div>

          <div>
            <a
              href="https://deolhonosruralistas.com.br/2021/05/05/madeireiros-pressionam-comunidades-a-apoiar-extracao-de-madeira-em-resex-diz-sindicato/"
              target="_blank"
            >
              <Card
                hoverable
                style={cardStyle}
                cover={
                  <img
                    style={{ width: 286 }}
                    alt="example"
                    src="https://deolhonosruralistas.com.br/wp-content/uploads/2021/05/ATL-6897.jpg"
                  />
                }
              >
                <Meta
                  style={{ fontSize: 20 }}
                  title="Madeireiros pressionam comunidades a apoiar extração de madeira em Resex, diz sindicato"
                  description="deolhonosruralistas.com.br"
                />
              </Card>
            </a>
          </div>
        </Carousel>

        <div className="div-noticias"></div>

        <div>
          
        </div>
      </section>

      <CarrouselFeed nome={"Artigos"} />
    </>
  );
}

export default Home;
