import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function NoticasCard(props){
    return(

<Card sx={{ maxWidth: 300 }}>
  <CardActionArea>
    <CardMedia
      component="img"
      height="140"
      image={props.imagem}
      alt='img'
      
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {props.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.description}
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>
    );
}

export default NoticasCard;


