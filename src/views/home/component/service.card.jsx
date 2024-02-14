import React from 'react'
import { Card,Typography,CardContent,CardActions,Button } from '@mui/material';

function ServiceCard() {
 return (
   <Card sx={{ maxWidth: 275,height:230  ,backgroundColor:"secondary.main", padding:" 24px"}}>
   <CardContent >
   <Typography sx={{ fontWeight:"600",color:"#ffffff"}} className='responsive_fontsize20' color="text.secondary" gutterBottom >
      Sound Healing
    </Typography>
   
  <Typography sx={{ fontWeight:300,color:"#ffffff" ,letter:"0.25px",fontFamily:"Roboto serif"}} color="text.secondary"  className='responsive_fontsize14'>
  Lorem ipsum dolor sit amet dolor sit bdsa 
  Lorem ipsum dolor sit amet dolor sit bdsa 
  Lorem ipsum dolor sit amet dolor sit bdsa 
  </Typography>
 
 </CardContent>
 
 </Card>
  );
}


export default ServiceCard
