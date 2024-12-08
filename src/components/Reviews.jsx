import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import '../App.css';
export default function Reviews(){
    return (

        <div className='reviews'> <h1>Reviews</h1>
          <div className='services'>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="/Amit.png"
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
        Amit Tammang
         </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, autem.
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card> 
   <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="/Mamta.png"
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
      Mamta
         </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         We have designed and developed Android apps in categories, and productivity, shopping, social messaging, gaming and entertainment, news and publishing and so on.
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>
   <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="/Premlata.png"
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         Premlata

         </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, eveniet!


         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>
   <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="/suraj.png"
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
        Suraj

         </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, fugiat?


         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>
   </div>
        </div>
    )
}