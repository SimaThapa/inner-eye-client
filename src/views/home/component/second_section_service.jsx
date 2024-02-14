import React from 'react'
import { Box, Typography,Button} from '@mui/material'
import OrangeDivider from "src/components/ui/oragne.divider"
import ServiceCard from './service.card'


function SecondScetionService() {
  return (
    
    // first div
   <Box >
   
      {/* second div */}
      <Box sx={{
               display:"flex", 
               flexDirection:"column",
               justifyContent:"center",
               alignItems:"center"
          }}>
         <OrangeDivider>
              <Typography style={{
                      fontSize:"13px",
                      letterSpacing:"4px",
                      color:"secondary.secondary_600",
                      fontFamily:"arial"}}>Best services</Typography>
              </OrangeDivider>
              <Typography className='responsive_fontsize32' 
                          sx={{color:"secondary.secondary_400",
                          fontFamily:"Times New Roman",
                          fontWeight:"bold",
                          letterSpacing:"0.25rem",
                          lineHeight:"42px",
                          
                          }} >
                 services
                </Typography>
       </Box>

          {/* card section       */}
            
            <Box sx={{
              display:"flex",
              
              }}>
                <ServiceCard/>

                </Box>

         
           <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <Button variant="outlined" sx={{
                   color:"black",
                   borderColor:"secondary.main",
                   textTransform:"capitalize",
                   fontWeight:"300",
                   margin:"30px",
                   borderRadius:"0px"
           }}>
               Registration
           </Button>
           <Button variant="outlined" sx={{
                   color:"black",
                   borderColor:"secondary.main",
                   textTransform:"capitalize",
                   fontWeight:"300",
                   borderRadius:"0px"
           }}>
               Free Ebook
            </Button>
           </Box>
      </Box>


                              
                          
  
    
  )
}

export default SecondScetionService
