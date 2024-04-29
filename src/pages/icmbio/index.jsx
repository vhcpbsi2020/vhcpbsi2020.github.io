import "./style.css";
import React from "react";
import { Header, Container, Main } from "./style";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import { Button, Divider, Flex } from "antd";

const styleButton = {
  backgroundColor: "#506635",
  height: 47,
  fontSize: 15,
  fontWeight: 400,
  borderRadius: 16,
};

function PageIcmbio() {
  return (
    <>
      <Header>
        <div className="entrance-animation">
          <h1 style={{ display: "flex", alignItems: "center" }}>
            ICMBIO
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
              href="https://www.gov.br/icmbio/pt-br/servicos/servicos-do-icmbio-no-gov.br/autorizacoes"
              target="_blank"
            >
              <Button type="primary" danger style={styleButton}>
                Autorizações
              </Button>
            </a>
            <a
              href="https://www.gov.br/icmbio/pt-br/servicos/servicos-do-icmbio-no-gov.br/compensacao-de-reserva-legal"
              target="_blank"
            >
              <Button danger type="primary" style={styleButton}>
                Compesação de reserva Legal
              </Button>
            </a>
            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiZjQ5OTE1NzctMzlhZC00M2FiLTllYjktYjdlMjlkNzZlMjgxIiwidCI6ImMxNGUyYjU2LWM1YmMtNDNiZC1hZDljLTQwOGNmNmNjMzU2MCJ9&pageName=ReportSection"
              target="_blank"
            >
              <Button type="primary" style={styleButton}>
                Programa intergridade ICMbio
              </Button>
            </a>
            <a
              href="https://www.gov.br/icmbio/pt-br/servicos/servicos-do-icmbio-no-gov.br/crie-sua-rppn"
              target="_blank"
            >
              <Button type="primary" style={styleButton}>
                Criação de RPPN
              </Button>
            </a>
          </Flex>
          <Divider style={{backgroundColor: '#b6b6b6'}}/>
        </Main>
      </Container>
    </>
  );
}
export default PageIcmbio;
