import { Card, Image} from "antd";
const { Meta } = Card;
function CardEstatistica(props) {
  return (
    <Card
      hoverable
      style={{
        width: 400,
      }}
      cover={
        <Image
          alt="example"
          src={props.image}
        />
      }
    >
      <h1 style={{fontSize: 15, fontWeight: 600}}>{props.title}</h1>
    </Card>
  );
}

export default CardEstatistica;
