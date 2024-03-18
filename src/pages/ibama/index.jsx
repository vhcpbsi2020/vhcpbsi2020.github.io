import "./style.css";
import { Button, Divider, Flex } from "antd";
import { Header, Container, Main } from "./style";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MapaOrgaosIbama from "../../components/ComponentMapaOrgaos";

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
          <Divider style={{ backgroundColor: "#b6b6b6" }} />
          <div>
            <h1
              style={{
                color: "#506635",
                fontSize: 55,
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              Unidades
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: 'center',
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <MapaOrgaosIbama />
            <div style={{fontWeight:400}}>
              <h3>Superintendência de RIO BRANCO</h3>
              <h3>Unidade Técnica Nível I de Brasiléia</h3>
              <h3>Unidade Técnica Nível I de Cruzeiro do Sul</h3>
              <h3>Gerência Executiva de Humaitá</h3>
              <h3>Superintendência de MANAUS</h3>
              <h3>Unidade Técnica Nível I de Parintins</h3>
              <h3>Unidade Técnica Nível I de Tabatinga</h3>
              <h3>Superintendência de MACAPA</h3>
              <h3>Unidade Técnica Nível I de Oiapoque</h3>
              <h3>Gerência Executiva de IMPERATRIZ</h3>
              <h3>Superintendência de SAO LUIS</h3>
              <h3>Unidade Técnica Nível I de Santa Inês</h3>
              <h3>Gerência Executiva de Barra do Garças</h3>
              <h3>Gerência Executiva de JUINA</h3>
              <h3>Gerência Executiva de SINOP</h3>
              <h3>Superintendência de CUIABA</h3>
              <h3>Unidade Técnica Nível I de Alta Floresta</h3>
              <h3>Base Avançada de Novo Progresso</h3>
              <h3>Gerência Executiva de MARABA</h3>
              <h3>Gerência Executiva de SANTAREM</h3>
              <h3>Superintendência de BELEM</h3>
              <h3>Unidade Técnica Nível I de Altamira</h3>
              <h3>Gerência Executiva de JI-PARANA</h3>
              <h3>Superintendência de PORTO VELHO</h3>
              <h3>Unidade Técnica Nível I de Guajará Mirim</h3>
              <h3>Unidade Técnica Nível I de Vilhena</h3>
              <h3>Pacaraima Unidade Técnica Nível 1</h3>
              <h3>Superintendência de BOA VISTA</h3>
              <h3>Superintendência de PALMAS</h3>
              <h3>Unidade Técnica Nível I de Araguaína</h3>
            </div>
          </div>
        </Main>
      </Container>
    </>
  );
}
export default PageIbama;
