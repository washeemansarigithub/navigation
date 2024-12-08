import '../App.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
export default function Team(){
    return(
       <> <div className='Team'>
            <h1>Main Team of Namrata Universal</h1>
            <p >Our main team comprises passionate individuals from various backgrounds. From creative designers to meticulous engineers and skilled marketers, we work together synergistically to deliver innovative solutions that exceed expectations.</p>
        </div>
        <div className="team">
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="./Bk.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Brajesh Kumar Jaiswal
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Co-Founder
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="./CEO.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Preeti
           
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            CEO & Founder
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="./CO.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Saurabh Mahawar
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Co-Founder
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
      </> 

    )
    
}