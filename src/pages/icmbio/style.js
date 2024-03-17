import styled from "styled-components";

export const Header = styled.div`
  grid-area: Header;
  background-image: url("https://th.bing.com/th/id/R.61699520a2a1a5d13a7ed49ccf7651dc?rik=caTAzANj51owcA&riu=http%3a%2f%2fadmin.folhadirigida.com.br%2ffilemanager%2ffiles%2fnoticias%2fFotos-2023%2ficmbio-2023-brigadista.jpg&ehk=YswfVfrET521S47Alkut1igsSbuM5Px7JORW9i9dQfM%3d&risl=&pid=ImgRaw&r=0");
  background-size: cover;
  background-position: 10% 25%;
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