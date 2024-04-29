import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Header, Container, Main } from "./style";
import ArchiveIcon from "@mui/icons-material/Archive";

import "./style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { StyledH1Title } from "../Home/style";

function PageAcervo() {
  const data = [
    {
      id: "1",
      image: "src/pages/acervo/Texto do seu parágrafo/1.png",
      link: "https://lpf.florestal.gov.br/pt-br/?option=com_madeirasbrasileiras&view=especieestudada&especieestudadaid=51",
    },
    {
      id: "2",
      image: "src/pages/acervo/Texto do seu parágrafo/2.png",
      link: "https://lpf.florestal.gov.br/pt-br/?option=com_madeirasbrasileiras&view=especieestudada&especieestudadaid=92",
    },
    {
      id: "3",
      image: "src/pages/acervo/Texto do seu parágrafo/3.png",
      link: "https://lpf.florestal.gov.br/pt-br/?option=com_madeirasbrasileiras&view=especieestudada&especieestudadaid=89",
    },
    {
      id: "4",
      image: "src/pages/acervo/Texto do seu parágrafo/4.png",
      link: "https://lpf.florestal.gov.br/pt-br/?option=com_madeirasbrasileiras&view=especieestudada&especieestudadaid=116",
    },
    {
      id: "5",
      image: "src/pages/acervo/Texto do seu parágrafo/5.png",
      link: "https://lpf.florestal.gov.br/pt-br/?option=com_madeirasbrasileiras&view=especieestudada&especieestudadaid=245",
    },
    {
      id: "6",
      image: "src/pages/acervo/Texto do seu parágrafo/6.png",
      link: "https://lpf.florestal.gov.br/pt-br/?option=com_madeirasbrasileiras&view=especieestudada&especieestudadaid=123",
    },
    {
      id: "7",
      image: "src/pages/acervo/Texto do seu parágrafo/7.png",
      link: "https://lpf.florestal.gov.br/pt-br/?option=com_madeirasbrasileiras&view=especieestudada&especieestudadaid=150",
    },
    {
      id: "8",
      image: "src/pages/acervo/Texto do seu parágrafo/8.png",
      link: "https://lpf.florestal.gov.br/pt-br/?option=com_madeirasbrasileiras&view=especieestudada&especieestudadaid=242",
    },
    {
      id: "9",
      image: "src/pages/acervo/Texto do seu parágrafo/9.png",
      link: "https://lpf.florestal.gov.br/pt-br/?option=com_madeirasbrasileiras&view=especieestudada&especieestudadaid=111",
    },
    {
      id: "10",
      image: "src/pages/acervo/Texto do seu parágrafo/10.png",
      link: "https://lpf.florestal.gov.br/pt-br/?option=com_madeirasbrasileiras&view=especieestudada&especieestudadaid=24",
    },
    {
      id: "11",
      image: "src/pages/acervo/Texto do seu parágrafo/11.png",
      link: "https://lpf.florestal.gov.br/pt-br/?option=com_madeirasbrasileiras&view=especieestudada&especieestudadaid=55",
    },
    {
      id: "12",
      image: "src/pages/acervo/Texto do seu parágrafo/12.png",
      link: "https://lpf.florestal.gov.br/pt-br/?option=com_madeirasbrasileiras&view=especieestudada&especieestudadaid=80",
    },
    {
      id: "13",
      image: "src/pages/acervo/Texto do seu parágrafo/13.png",
      link: "https://lpf.florestal.gov.br/pt-br/?option=com_madeirasbrasileiras&view=especieestudada&especieestudadaid=157",
    },
    {
      id: "14",
      image: "src/pages/acervo/Texto do seu parágrafo/14.png",
      link: "https://lpf.florestal.gov.br/pt-br/?option=com_madeirasbrasileiras&view=especieestudada&especieestudadaid=17",
    },
    {
      id: "15",
      image: "src/pages/acervo/Texto do seu parágrafo/15.png",
      link: "https://lpf.florestal.gov.br/pt-br/?option=com_madeirasbrasileiras&view=especieestudada&especieestudadaid=60",
    },
    {
      id: "16",
      image: "src/pages/acervo/Texto do seu parágrafo/16.png",
      link: "https://lpf.florestal.gov.br/pt-br/?option=com_madeirasbrasileiras&view=especieestudada&especieestudadaid=127",
    },
  ];

  return (
    <>
      <Header>
        <div className="entrance-animation">
          <div>
            Acervo Florestal
            <ArchiveIcon style={{ fontSize: 120 }} />
          </div>
        </div>
      </Header>
      <Container>

      <div>
        <StyledH1Title>O que é?</StyledH1Title>
        <p style={{textAlign: 'justify', fontWeight:200 }}>Na região do Baixo Amazonas, um acervo florestal é de extrema importância. Esta região é conhecida pela sua rica biodiversidade e pelos seus vastos recursos florestais. O acervo florestal ajuda a documentar e preservar este patrimônio natural, fornecendo informações valiosas para pesquisadores, conservacionistas e tomadores de decisão.

Além disso, o acervo florestal desempenha um papel crucial na promoção do manejo florestal sustentável. Ao fornecer informações detalhadas sobre as espécies de madeira exploradas na região, ele pode ajudar a garantir que a exploração madeireira seja realizada de uma maneira que preserve a saúde e a vitalidade das florestas para as gerações futuras.</p>
      </div>


        <Main>
          <StyledH1Title>Principais Especies Exploradas</StyledH1Title>

          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            style={{ marginBottom: 5 }}
          >
            {data.map(
              (item, index) =>
                index % 2 === 0 && (
                  <SwiperSlide
                    key={item.id}
                    className="flex-container"
                    style={{
                      padding: 30,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 7,
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 7,
                      }}
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: 10,
                        }}
                      >
                        <img
                          src={data[index].image}
                          alt="Slide"
                          className="slide-item"
                          style={{
                            width: 400,
                            height: 300,
                            display: "block",
                            margin: "auto",
                          }}
                        />
                      </a>

                      {data[index + 1] && (
                        <a
                          href={data[index + 1].link}
                          target="_blank"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 7,
                          }}
                        >
                          <img
                            src={data[index + 1].image}
                            alt="Slide"
                            className="slide-item"
                            style={{
                              width: 400,
                              height: 300,
                              display: "block",
                              margin: "auto",
                            }}
                          />
                        </a>
                      )}
                    </div>
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </Main>
      </Container>
    </>
  );
}
export default PageAcervo;
