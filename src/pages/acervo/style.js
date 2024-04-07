import styled from "styled-components";

export const Header = styled.div`
  grid-area: Header;
  background-image: url("https://farm66.staticflickr.com/65535/48746483611_2181c3850d_o.jpg");
  background-size: cover;
  background-position: 30% 100%;
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
  height: 1200px;
`;
