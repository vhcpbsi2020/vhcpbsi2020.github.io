import "./style.css";
import { Button, Divider, Flex } from "antd";
import { Header, Container, Main } from "./style";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MapaOrgaos from "../../components/ComponentMapaOrgaos";

const styleButton = {
  backgroundColor: "#506635",
  height: 47,
  fontSize: 15,
  fontWeight: 400,
  borderRadius: 16,
};

function PageIbama() {
  return (
    <>
      <Header>
        <div className="entrance-animation">
          <h1 style={{ display: "flex", alignItems: "center" }}>
            IBAMA
            <AccountBalanceIcon style={{ fontSize: 120 }} />
          </h1>
        </div>
      </Header>

      <Container>
        <Main>
          <div>
            <h1
              style={{
                color: "#506635",
                fontSize: 55,
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              Serviços
            </h1>
          </div>

          <Flex
            wrap="wrap"
            gap="small"
            className="site-button-ghost-wrapper"
            style={{ justifyContent: "center" }}
          >
            <a
              href="https://servicos.ibama.gov.br/licenciamento/consulta_rel_licencia_por_periodo.php"
              target="_blank"
            >
              <Button type="primary" danger style={styleButton}>
                Licenciamento por período
              </Button>
            </a>
            <a
              href="https://servicos.ibama.gov.br/licenciamento/consulta_rel_licencia_por_ano.php"
              target="_blank"
            >
              <Button danger type="primary" style={styleButton}>
                Licenciamento por ano
              </Button>
            </a>
            <a
              href="https://www.gov.br/ibama/pt-br/servicos/registros/flora-e-madeira/registro-de-produtos-preservativos-de-madeiras#procedimentos"
              target="_blank"
            >
              <Button type="primary" style={styleButton}>
                Certificados
              </Button>
            </a>
            <a
              href="https://www.gov.br/ibama/pt-br/canais_atendimento/fale-conosco"
              target="_blank"
            >
              <Button type="primary" style={styleButton}>
                Contatos
              </Button>
            </a>
          </Flex>
          <Divider style={{backgroundColor: '#b6b6b6'}}/>
          <MapaOrgaos/>
        </Main>
      </Container>
    </>
  );
}
export default PageIbama;
