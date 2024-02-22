import React from 'react'
import { Card,Typography,CardContent } from '@mui/material';

function ServiceCard({item}) {
 return (
   <Card sx={{ maxWidth:355,height:230  ,backgroundColor:"secondary.main", padding:" 24px",margin:"20px"}}>
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
