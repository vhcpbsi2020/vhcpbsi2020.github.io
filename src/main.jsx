import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Link } from "react-router-dom";
import MainRoutes from "./routes";
import { Layout, Menu } from "antd";
import {
  BookOutlined,
  HomeOutlined,
  AreaChartOutlined,
  FlagOutlined,
} from "@ant-design/icons";
import logo from "./assets/logo.png";

const { Header, Content, Footer } = Layout;

function getItem(label, key, icon, path) {
  return (
    <Menu.Item key={key} icon={icon}>
      <Link to={path}>{label}</Link>
    </Menu.Item>
  );
}

const items = [
  getItem("Home", "1", <HomeOutlined />, "/"),
  getItem("Acervo Florestal", "2", <BookOutlined />, "/NossaHistoria"),
  getItem("Quem somos?", "3", null, "/QuemSomos"),
  getItem("Gráficos", "4", <AreaChartOutlined />, "/graficos"),
  getItem("Mapas", "5", <FlagOutlined />, "/Mapas"),
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Header
        className="sticky-menu"
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#506635",
        }}
      >
        <div className="logo">
          <img src={logo} alt="logo" style={{ width: 85 }} />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{
            flex: 1,
            minWidth: 0,
            backgroundColor: "#506635",
            fontWeight: 600,
          }}
        >
          {items}
        </Menu>
      </Header>
      <Content style={{marginTop: 60, display: 'block', justifyContent: 'center'}}>
        <MainRoutes />
      </Content>

      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#506635",
          color: "#ffff",
          fontWeight: "400",
        }}
      >
        <div>
          <h3>Endereço: </h3>
          <p>
            Rua Exemplo, 123<br></br>Cidade, Estado, CEP
          </p>
        </div>
        <div>
          <h3>Contato:</h3>
          <p>
            Email: exemplo@dominio.com<br></br>Telefone: (00) 12345-6789
          </p>
        </div>
        <div>
          <h3>Redes Sociais</h3>
          <p>
            <a href="https://www.facebook.com/exemplo">Facebook</a>
            <br></br>
            <a href="https://www.twitter.com/exemplo">Twitter</a>
            <br></br>
            <a href="https://www.instagram.com/exemplo">Instagram</a>
          </p>
        </div>
        <p>© 2024 OMBA. Todos os direitos reservados.</p>
      </Footer>
    </Layout>
  </BrowserRouter>
);
