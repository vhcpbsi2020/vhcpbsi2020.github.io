import styled from "styled-components";

export const Header = styled.div`
  grid-area: Header;
  background-image: url("https://thumbor.novaescola.org.br/5EHOkYR12kVcwj5FqiPFDxxp__E=/nova-escola-producao.s3.amazonaws.com/ArEzV2bNPWJEYvrb7v2wwxQTddMYZmrVknxnkyd9uu2Ar2DSBCBnuXqd9Pd3/gettyimages-1366791542.jpg");
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
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: space-around;
`;
