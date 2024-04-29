import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function NoticasCard(props){
    return(

<div className="flex justify-content center" style={{justifyContent: 'center'}}>
  <a href={props.url} target="_blank">
    <Card sx={{ maxWidth: 300, height: 480 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.imagem}
          alt='img'
          style={{ height:200 }}
        />
        <CardContent>
          <Typography style={{fontSize: 19, fontWeight: 600, color:'#506635'}} gutterBottom variant="h5" component="div">
          {props.title}
          </Typography>
          <Typography style={{textAlign: 'justify'}}variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </a>
</div>
    );
}

export default NoticasCard;


