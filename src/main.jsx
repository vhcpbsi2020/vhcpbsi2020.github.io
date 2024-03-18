import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Link } from "react-router-dom";
import MainRoutes from "./routes";
import { Layout, Menu } from "antd";

import logo from "./assets/NEW_LOGO_OMBA.png";

const { Header, Content, Footer } = Layout;

function getItem(label, key, path) {
  return (
    <Menu.Item key={key}>
      <Link to={path}>{label}</Link>
    </Menu.Item>
  );
}

function getItemSub(title, key, title1, title2, sub1, sub2) {
  return (
    <Menu.Item key={key}>
      <Menu.SubMenu title={title} key={`${title}-submenu`}>
        <Menu.Item key={`${title}-submenu`} style={{backgroundColor: '#506635', fontWeight: 300}}>
          <Link to={sub1}>{title1}</Link>
        </Menu.Item>
        <Menu.Item key={`${title}-submenu`} style={{backgroundColor: '#506635', fontWeight: 300}}>
          <Link to={sub2}>{title2}</Link>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu.Item>
  );
}


const items = [
  getItem("Home", "1", "/"),
  getItem("Acervo Florestal", "2", "/acervo"),
  getItem("Quem somos?", "3", "/QuemSomos"),
  getItem("Estatisticas", "5", "/estatisticas"),
  getItem("Mapas Interativos", "6", "/mapas"),
  getItemSub("Orgãos Fiscais", "4", 'IBAMA', "ICMBIO", "/ibama", "/icmbio"),
];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Layout>
      <Header
        className="sticky-menu"
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#506635",
          height: 90,
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{
            flex: 1,
            minWidth: 0,
            backgroundColor: "#506635",
            fontWeight: 600,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="logo">
            <Link to={'/'}>
              <img
                src={logo}
                alt="logo"
                style={{ width: 180, marginRight: 30 }}
              />
            </Link>
          </div>
          {items}
        </Menu>
      </Header>
      <Content
        style={{ marginTop: 60, display: "block", justifyContent: "center" }}
      >
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
