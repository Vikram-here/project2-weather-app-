 import Card from '@mui/material/Card';
 import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
 import Typography from '@mui/material/Typography';
import "./info.css"
 
export default function  Info({info}){
 
      
    return(
      <div className='infoBox'>
        <div className="container">
   <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"

        image="https://i.pinimg.com/736x/27/e5/0c/27e50c6c473011f2c8d43e015aef8589.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
         </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           <div>TEMPERATURE- {info.temp}&deg;</div>
            <div>MAX_TEMP- {info.maxtemp}&deg;</div> 
           <div>MIN_TEMP- {info.mintemp}&deg;</div>
           <div>HUMIDITY- {info.humidity}&deg;</div>
           <div>WEATHER- {info.weather}</div>
            

        </Typography>
      </CardContent>
       
    </Card>
    </div>
    </div>
        
    );
}