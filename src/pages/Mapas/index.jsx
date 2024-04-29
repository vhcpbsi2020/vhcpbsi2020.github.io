import { Divider } from "antd";
import { Header, Container, Main } from "./style";
import RouteIcon from "@mui/icons-material/Route";

function PageMapas() {
  return (
    <>
      <Header>
        <div className="entrance-animation">
          <h1 style={{ display: "flex", alignItems: "center" }}>
            MAPAS INTERATIVOS
            <RouteIcon style={{ fontSize: 120 }} />
          </h1>
        </div>
      </Header>

      <Container>
        <div>
          <h1
            style={{
              fontSize: "clamp(19px, 4vw, 40px",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
              <Divider style={{ backgroundColor: "#b6b6b6" }} />
            Mapa da Evolução do Desmatamento nos Municípios
          </h1>
        </div>
        <Divider />
        <Main>
          <iframe
            src="https://datazoom.shinyapps.io/app_map_dz_munic_prodes/_w_58fb8387/?x=desmatado&filter=2015"
            title="conteudo externo"
            width="100%"
            height="700"
          ></iframe>
        </Main>
      </Container>

      <Container>
        <div>
          <h1
            style={{
              fontSize: "clamp(19px, 4vw, 40px",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
             <Divider style={{ backgroundColor: "#b6b6b6" }} />
            Ranking da Exportação de Produtos Específicos por Município da Amazônia Legal
          </h1>
        </div>
       
        <Main>
          <iframe
            src="https://datazoom.shinyapps.io/app_rk_comex_exp_munic_produtosamz/"
            title="conteudo externo"
            width="100%"
            height="900"
          ></iframe>
        </Main>
      </Container>
    </>
  );
}
export default PageMapas;
