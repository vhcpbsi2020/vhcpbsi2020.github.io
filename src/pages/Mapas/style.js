import styled from "styled-components";

export const Header = styled.div`
  grid-area: Header;
  background-image: url("https://amazonia.exame.com/wp-content/uploads/2021/12/GettyImages-137578327-scaled.jpg");
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



export const Main = styled.div`
  /* grid-area: Main; */
`;
