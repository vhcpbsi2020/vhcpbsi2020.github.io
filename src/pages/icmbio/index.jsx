import "./style.css";
import React from "react";
import { Button, Flex } from "antd";

const styleButton = {
  backgroundColor: "#506635",
  height: 47,
  fontSize: 23,
  fontWeight: 700,
  borderRadius: 30,
};

function PageIcmbio() {
  return (
    <div className=" div-topo-icmbio"
    style={{
        textAlign: "center",
        fontWeight: 600,
        display: "flex",
        flexDirection: "column",
      }}  >
      <div>
        <h1 style={{ color: "white", fontSize: 50 }}>Serviços: </h1>
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
    </div>
  );
}
export default PageIcmbio;
