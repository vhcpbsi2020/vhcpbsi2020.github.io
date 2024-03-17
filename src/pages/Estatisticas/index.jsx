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
    value: "agosto21-julho22",
    label: "Agosto 2021 a Julho 2022",
  },
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
  {
    value: "2016-2017",
    label: "2016 a 2017",
  },
  {
    value: "2015-2016",
    label: "2015 a 2016",
  },
  {
    value: "2011-2012",
    label: "2011 a 2012",
  },
  {
    value: "2010-2011",
    label: "2010 a 2011",
  },
  {
    value: "2009",
    label: "2009",
  }
];

function PageMapa() {
  const [periodo, setPeriodo] = useState("agosto21-julho22");

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
            Exploração Madeireira
          </h1>

          {periodo == "agosto21-julho22" || periodo == undefined ? (
            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
                color: "#506635",
              }}
            >
              Agosto de 2021 a Julho de 2022 <CalendarMonthIcon />
            </p>
          ) : periodo == "agosto20-julho21" ? (
            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
                color: "#506635",
              }}
            >
              Agosto de 2020 a Julho de 2021 <CalendarMonthIcon />
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
              Agosto de 2019 a Julho de 2020 <CalendarMonthIcon />
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
          ) : periodo == "2016-2017" ? (
            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
                color: "#506635"
              }}
            >
              Estado do Pará 2016-2017 <CalendarMonthIcon />
            </p>
          ) : periodo == "2015-2016" ? (
            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
                color: "#506635"
              }}
            >
              Estado do Pará 2015-2016 <CalendarMonthIcon />
            </p>
          ) : periodo == "2011-2012" ? (
            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
                color: "#506635"
              }}
            >
              2011-2012 <CalendarMonthIcon />
            </p>
          ) : periodo == "2010-2011" ? (
            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
                color: "#506635"
              }}
            >
              2010-2011 <CalendarMonthIcon />
            </p>
          ) : periodo == "2009" ? (
            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
                color: "#506635"
              }}
            >
              2009 <CalendarMonthIcon />
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
            defaultValue="agosto21-julho22"
            style={{ width: 220, marginLeft: 8 }}
          />
        </div>
        <Divider />
        <Main>
          {periodo == "agosto21-julho22" || periodo == undefined ? (
            <>
              <CardEstatistica 
                image="https://imazon.org.br/wp-content/uploads/2023/12/Inf_SIMEX_AMAZONIA_2022_PT_A4-1536x1086.jpg"
                title={"Mapeamento da Exploração na Amazônia"}
              />
              <CardEstatistica 
                image="https://imazon.org.br/wp-content/uploads/2024/01/Inf_SIMEX_ACRE_2022_PT_A5-1024x724.jpg"
                title={"Mapeamento da Exploração no Estado do Acre"}
              />
              <CardEstatistica 
                image="https://imazon.org.br/wp-content/uploads/2023/12/Inf_SIMEX_AMAZONAS_2022_PT_A4-1536x1086.jpg"
                title={"Mapeamento da Exploração no Estado do Amazonas"}
              />
              <CardEstatistica 
                image="https://imazon.org.br/wp-content/uploads/2024/01/Inf_SIMEX_MATOGROSSO_2022_PT_A4-1024x724.jpg"
                title={"Mapeamento da Exploração no Estado do Mato Grosso"}
              />
              <CardEstatistica 
                image="https://imazon.org.br/wp-content/uploads/2023/12/Inf_SIMEX_PARA_2022_PT_A4-1536x1086.jpg"
                title={"Mapeamento da Exploração no Estado do Pará"}
              />
              <CardEstatistica 
                image="https://imazon.org.br/wp-content/uploads/2024/01/Inf_SIMEX_RONDONIA_2022_PT_A4-1024x724.jpg"
                title={"Mapeamento da Exploração no Estado de Rondônia"}
              />
              <CardEstatistica 
                image="https://imazon.org.br/wp-content/uploads/2024/01/Inf_SIMEX_RORAIMA_2022_PT_A4-1024x724.jpg"
                title={"Mapeamento da Exploração no Estadado de Roraima"}
              />
            </>
          ) : periodo == "agosto20-julho21" ? (
              <>
              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2022/09/Simex-Amazonia-Agosto-2021-a-Julho-2021-IMAGEM-scaled.jpg"
                title={"Mapeamento da Exploração na Amazônia"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2022/09/Infografico_SIMEX_ACRE_ag2020_jul2021_A4-1-scaled.jpg"
                title={"Mapeamento da Exploração no Estado do Acre"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2022/09/Simex-Amazonas-Agosto-2021-a-Julho-2021-IMAGEM-scaled.jpg"
                title={"Mapeamento da Exploração no Estado do Amazonas"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2022/09/Simex-Mato-Grosso-Agosto-2021-a-Julho-2021-IMAGEM-1536x1086.jpg"
                title={"Mapeamento da Exploração no Estadod do Mato Grosso"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2022/09/Simex-Agosto-2020-a-Julho-2021-1536x1086.jpg"
                title={"Mapeamento da Exploração no Estado do Pará"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2022/09/Simex-Rondonia-Agosto-2021-a-Julho-2021-IMAGEM-1536x1086.jpg"
                title={"Mapeamento da Exploração no Estado de Rondônia"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2022/09/Simex-RR-2022-1536x1037.png"
                title={"Mapeamento da Exploração no Estado de Roraima"}
              />
              </>
          ) : periodo == "agosto19-julho20" ? (
            <>
              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2021/09/Simex_Amazonia_2022-1536x1086.jpg"
                title={"Mapeamento da Exploração na Amazônia"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2022/04/Simex-Acre-Agosto-de-2019-a-Julho-de-2020.png"
                title={"Mapeamento da Exploração no Estado do Acre"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2021/10/Simex_AM_Agosto2019-Julho2020.png"
                title={"Mapeamento da Exploração no Estado do Amazonas"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2021/10/Simex_MT_Agosto2019-Julho2020.jpg"
                title={"Mapeamento da Exploração no Estado do Mato Grosso"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2021/09/Simex_Para_2019-2020.jpeg"
                title={"Mapeamento da Exploração no Estado do Pará"}
              />
              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2021/10/Simex_Rondonia_Agosto2019-Julho2020_Errata-1536x1086.jpg"
                title={"Mapeamento da Exploração no Estado de Rondônia"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2021/10/Simex_Roraima_Agosto2019-Julho2020.jpg"
                title={"Mapeamento da Exploração no Estado de Roraima"}
              />

              <CardEstatistica
                image="https://imazon.org.br/wp-content/uploads/2021/09/Simex_AP_Agosto2019-Julho2020.png"
                title={"Mapeamento da Exploração no Estado do Amapá"}
              />
            </>
          ) : periodo == "2018-2019" ? (
            <>
            <CardEstatistica
              image="https://imazon.org.br/wp-content/uploads/2021/05/Infografico_SIMEX_2018_2019_A5-1-1536x1086.jpg"
              title={"Mapeamento da Exploração no Estado do Pará"}
            />
            </>
          ) : periodo == "2017-2018" ? (
            <>
            <CardEstatistica 
              image="https://imazon.org.br/wp-content/uploads/2020/04/SIMEX_madeira_2017-2018.jpg"
              title={"Mapeamento da Exploração no Estado do Pará"}
            />
            </>
          ) : periodo == "2016-2017" ? (
            <>
            <CardEstatistica 
              image="https://imazon.org.br/wp-content/uploads/2019/03/infograficosimex2016-2017.jpg"
              title={"Mapeamento da Exploração no Estado do Pará"}
            />
            </>
          ) : periodo == "2015-2016" ? (
            <>
            <CardEstatistica
              image="https://imazon.org.br//wp-content/uploads/2017/11/Infografico-Simex-Par%C3%A1-2015-20161.jpg"
              title={"Mapeamento da Exploração no Estado do Pará"}
            />
            </>
          ) : periodo == "2011-2012" ? (
            <>
            <CardEstatistica 
              image="https://imazon.org.br/wp-content/uploads/2014/05/image-300x247.png"
              title={"Mapeamento da Exploração no Estado do Mato Grosso"}
            />
            <CardEstatistica 
              image="https://imazon.org.br/wp-content/uploads/2014/05/image1-300x248.png"
              title={"Mapeamento da Exploração no Estado do Pará"}
            />
            <CardEstatistica 
              image="https://imazon.org.br//wp-content/uploads/2014/05/sul_amazonia_agosto_2011.jpg"
              title={"Florestal do Sul do Amazonas (Agosto de 2011 a Janeiro de 2012)"}
            />
             <CardEstatistica 
              image="https://imazon.org.br//wp-content/uploads/2014/05/amazonia_legal_maio_2008.png"
              title={"Florestal Amazônia Legal (Maio de 2011)"}
            />
            </>
          ) : periodo == "2010-2011" ? (
            <>
            <CardEstatistica 
              image="https://imazon.org.br/wp-content/uploads/2014/05/boletim_transparencia_manejo_florestal_estado_do_para_2010_e_2011g-300x240.jpg"
              title={"Mapeamento da Exploração no Estado do Pará"}
            />
            <CardEstatistica 
              image="https://imazon.org.br/wp-content/uploads/2014/05/boletim_transparencia_manejo_florestal_do_mato_grosso_2010_2011g-300x243.png"
              title={"Mapeamento da Exploração no Estado do Mato Grosso"}
            />
            </>
          ) : periodo == "2009" ? (
            <>
            <CardEstatistica 
              image="https://imazon.org.br//wp-content/uploads/2014/05/amazonia_legal_setembro.jpg"
              title={"Florestal Amazônia Legal (Novembro de 2009)"}
            />
            <CardEstatistica 
              image="https://imazon.org.br//wp-content/uploads/2014/05/amazonia_legal_maio_2008.png"
              title={"Florestal Amazônia Legal (Março e Abril de 2009)"}
            />
            <CardEstatistica 
              image="https://imazon.org.br//wp-content/uploads/2014/05/amazonia_legal_maio_2008.png"
              title={"Florestal Amazônia Legal (Maio de 2009)"}
            />
            </>
          ) : (
            <p>..nodata</p>
          )}
        </Main>
        <Divider />
        <div style={{ marginTop: 20 }}>
          <h1 style={{ fontSize: 'clamp(12px, 4vw, 45px)', fontWeight: 600, textAlign: "center" }}>
            Mapeamento de Estradas na Amazonia Legal
          </h1>
        </div>
        <PageEstrada/>
      </Container>
    </>
  );
}
export default PageMapa;
