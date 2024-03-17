import styled from "styled-components";

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
  grid-template-areas:
    "Header Header Header"
    "Left Main Rigth"
    ". . .";
`;

export const Left = styled.div`
  grid-area: Left;
`;

export const Rigth = styled.div`
  grid-area: Rigth;
`;

export const Main = styled.div`
  /* grid-area: Main; */
`;
