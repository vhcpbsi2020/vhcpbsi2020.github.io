import { Image, Divider } from "antd";

const PageEstrada = () => {
  return (
    <>
      <div style={{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent:'center'}}>
        <Image
          style={{ width: 600 }}
          src="https://imazon.org.br/wp-content/uploads/2022/08/Territorios.png"
        />
        <Image style={{ width: 800 , justifyItems: 'center'}} src="https://imazon.org.br/wp-content/uploads/2022/08/Territorios2.png" />
      </div>
<Divider/>
      <div style={{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent:'center'}}>
        <Image
          style={{ width: 600 }}
          src="https://imazon.org.br/wp-content/uploads/2022/08/mapa-densidade-estradas-1024x809.png"
        />
        <Image style={{ width: 600 , justifyItems: 'center'}} src="https://imazon.org.br/wp-content/uploads/2022/08/Estados-km-percentual-densidade.png" />
      </div>

    </>
  );
};
export default PageEstrada;
