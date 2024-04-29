import styled from "styled-components";
import { Carousel } from "antd";

export const StyledH1Title = styled.h1`
  font-size: clamp(24px, 4vw,40px);
  font-weight: 500;
  color: #506635;
`;

export const StyledCarousel = styled(Carousel)`
  height: 100%;

  > .slick-dots li button {
    background: #506635;
  }
  > .slick-dots li.slick-active button {
    background: #506635; // Altere para a cor desejada
  }
`;

export const Header = styled.div`
  grid-area: Header;
  background-image: url("https://amazoniareal.com.br/wp-content/uploads/2023/01/MADEIRA-ILEGAL-DESMATAMENTO-AMAZONIA-FOTO-GREENPEACE-3a-e1672695537381.jpg");
  background-size: cover;
  background-position: 30% 40%;
  width: 100%;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: multiply;
  align-items: center;
  display: flex;
`;

export const Container = styled.div`
  margin: 30px;
  gap: 0px 0px;
  height: 100%;
  grid-template-areas:
    "Header Header Header"
    "Left Main Rigth"
    ". . .";
`;

export const Main = styled.div`
  height: 100%;
`;
