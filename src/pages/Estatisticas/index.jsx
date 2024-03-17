import "./style.css";
import { Header, Container, Main } from "./style";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import CardEstatistica from "../../components/cardsEstatisticas";
import { Cascader, Divider } from "antd";
import { useState } from "react";
import PageEstrada from "../../components/cardsEstatisticas/PageEstrada";

const options = [
  {
    value: "agosto20-julho21",
    label: "Agosto 2020 a Julho 2021",
  },
  {
    value: "agosto19-julho20",
    label: "Agosto 2019 a Julho 2020",
  },
  {
    value: "2018-2019",
    label: "2018 a 2019",
  },
  {
    value: "2017-2018",
    label: "2017 a 2018",
  },
];

function PageMapa() {
  const [periodo, setPeriodo] = useState("agosto20-julho21");

  const onChange = (value) => {
    setPeriodo(value);
  };

  return (
    <>
      <Header>
        <div className="entrance-animation">
          <h1>
            CENTRAL DE ESTATISTICAS
            <AlignVerticalBottomIcon style={{ fontSize: 120 }} />
          </h1>
        </div>
      </Header>

      <Container>
        <div>
          <h1 style={{ fontSize: 'clamp(19px, 4vw, 60px', fontWeight: 600, textAlign: "center" }}>
            Exploração Madereira
          </h1>

          {periodo == "agosto20-julho21" || periodo == undefined ? (
            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
                color: "#506635",
              }}
            >
              Agosto20-Julho21 <CalendarMonthIcon />
            </p>
          ) : periodo == "agosto19-julho20" ? (
            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
                color: "#506635",
              }}
            >
              Agosto19-Julho20 <CalendarMonthIcon />
            </p>
          ) : periodo == "2018-2019" ? (
            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
                color: "#506635"
              }}
            >
              Estado do Pará 2018-2019 <CalendarMonthIcon />
            </p>
          ) : periodo == "2017-2018" ? (
            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
                color: "#506635"
              }}
            >
              Estado do Pará 2017-2018 <CalendarMonthIcon />
            </p>
          ) : (
            <p></p>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", height: 50 }}>
          <h1 style={{ fontWeight: 400 }}>Periodo:</h1>
          <Cascader
            options={options}
            onChange={onChange}
            placeholder="Selecione um periodo"
            defaultValue="agosto20-julho21"
            style={{ width: 220, marginLeft: 8 }}
          />
        </div>
        <Divider />
        <Main>
          {periodo == "agosto20-julho21" || periodo == undefined ? (
            <>
              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2022/09/Simex-Amazonia-Agosto-2021-a-Julho-2021-IMAGEM-scaled.jpg"
                title={"Mapeamento da exploração na Amazônia"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2022/09/Infografico_SIMEX_ACRE_ag2020_jul2021_A4-1-scaled.jpg"
                title={"Mapeamento da exploração no Acre"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2022/09/Simex-Amazonas-Agosto-2021-a-Julho-2021-IMAGEM-scaled.jpg"
                title={"Mapeamento da exploração no Estado do Amazonas"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2022/09/Simex-Mato-Grosso-Agosto-2021-a-Julho-2021-IMAGEM-1536x1086.jpg"
                title={"Mapeamento da exploração em Mato Grosso"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2022/09/Simex-Agosto-2020-a-Julho-2021-1536x1086.jpg"
                title={"Mapeamento da exploração no Pará"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2022/09/Simex-Rondonia-Agosto-2021-a-Julho-2021-IMAGEM-1536x1086.jpg"
                title={"Mapeamento da exploração em Rondonia"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2022/09/Simex-RR-2022-1536x1037.png"
                title={"Mapeamento da exploração em Roraima"}
              />
            </>
          ) : periodo == "agosto19-julho20" ? (
            <>
              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2021/09/Simex_Amazonia_2022-1536x1086.jpg"
                title={"Mapeamento da exploração na Amazônia"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2022/04/Simex-Acre-Agosto-de-2019-a-Julho-de-2020.png"
                title={"Mapeamento da exploração no Acre"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2021/10/Simex_AM_Agosto2019-Julho2020.png"
                title={"Mapeamento da exploração no Estado do Amazonas"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2021/10/Simex_MT_Agosto2019-Julho2020.jpg"
                title={"Mapeamento da exploração em Mato Grosso"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2021/09/Simex_Para_2019-2020.jpeg"
                title={"Mapeamento da exploração no Pará"}
              />
              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2021/10/Simex_Rondonia_Agosto2019-Julho2020_Errata-1536x1086.jpg"
                title={"Mapeamento da exploração em Rondonia"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2021/10/Simex_Roraima_Agosto2019-Julho2020.jpg"
                title={"Mapeamento da exploração em Roraima"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2021/09/Simex_AP_Agosto2019-Julho2020.png"
                title={"Mapeamento da exploração no Amapá"}
              />
            </>
          ) : periodo == "2018-2019" ? (
            <>
            <CardEstatistica
              image="https://imazon.org.br/wp-content/uploads/2021/05/Infografico_SIMEX_2018_2019_A5-1-1536x1086.jpg"
              title={"Mapeamento da exploração no Pará"}
            />
            </>
          ) : periodo == "2017-2018" ? (
            <>
            <CardEstatistica 
              image="https://imazon.org.br/wp-content/uploads/2020/04/SIMEX_madeira_2017-2018.jpg"
              title={"Mapeamento da exploração no Pará"}
            />
            </>
          ) : (
            <p>..nodata</p>
          )}
        </Main>
        <Divider />
        <div style={{ marginTop: 20 }}>
          <h1 style={{ fontSize: 'clamp(12px, 4vw, 45px)', fontWeight: 600, textAlign: "center" }}>
            Mapeamento de estradas na Amazonia Legal
          </h1>
        </div>
        <PageEstrada/>
      </Container>
    </>
  );
}
export default PageMapa;
