import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import '../App.css';


function ProductCard() {
  return (
    <div className='services'>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="/digital.png"
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         Business Portal Development
         </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         At Namrata Universal, we offer mobile-compliant Business Portal Development services leveraging a plethora of frameworks including Drupal, WordPress, Magento, AngularJS and much more.
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card> 
   <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="/web1.png"
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         Mobile Application Development
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
         image="/web2.png"
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         Website Development

         </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         We create websites that appeal to your sense of style, with intuitive layouts and navigation. We also ensure that your website is a search engine friendly so that it attracts customers and sales.


         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>
   <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="/web2.png"
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         Digital Marketing

         </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Digital marketing connect customers using internet and many types of digital platform such as: Search Engines, Websites, Social Media Marketing, Email Marketing, Mobile apps, Text messaging and Online promoting.


         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>
   </div>
   
   )
}

export default ProductCard;
