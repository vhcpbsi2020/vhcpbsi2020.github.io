import "./style.css";
import { Carousel, Card } from "antd";

const cardStyle = {
  fontSize: 12,
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  color: "red",
};

const { Meta } = Card;

function CarrouselFeed(nome) {
  return (
    <>
      <section className="layout-content">
        <h1 style={{fontWeight: 600}}>{nome}</h1>

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
              href="https://www.scielo.br/j/rarv/a/4GGQmg7ChK5D46D9mbhhW8h/"
              target="_blank"
            >
              <Card
                hoverable
                style={cardStyle}
                cover={
                  <img
                    style={{ width: 210 }}
                    alt="example"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/SciELO_logo.svg/258px-SciELO_logo.svg.png"
                  />
                }
              >
                <Card.Meta
                  title="O valor econômico da extração manejada de madeira no baixo Amazonas, estado do Pará"
                  description="www.scielo.br"
                  style={{fontSize: 20 }}
                />
              </Card>
            </a>
          </div>

          <div>
            <a
              href="https://www.scielo.br/j/cflo/a/LSxLxnDQjjnyfYFbTqQwdwJ/"
              target="_blank"
            >
              <Card
                hoverable
                style={cardStyle}
                cover={
                  <img
                    style={{ width: 210 }}
                    alt="example"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/SciELO_logo.svg/258px-SciELO_logo.svg.png"
                  />
                }
              >
                <Meta
                style={{fontSize: 20 }}
                  title="Da ilegalidade à certificação florestal: estudo de caso do manejo florestal comunitário no Baixo Amazonas"
                  description="www.scielo.br"
                />
              </Card>
            </a>
          </div>
        </Carousel>
      </section>
      ;
    </>
  );
}

export default CarrouselFeed;
