import React, { useState } from 'react'
import { Box, Typography,Button,Dialog,DialogContent,Slide} from '@mui/material'
import OrangeDivider from "src/components/ui/oragne.divider"
import ServiceList from './servicelist'
import RegistrationForm from './registrationFormPopup'

const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });


function SecondScetionService() {
        const[openRegistrationDialog,setOpenRegistrationDialog]=useState(false);
        const[openFreeEbookDialog,setFreeEbookDialog]=useState(false)
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
            
            <Box>
                <ServiceList/>

                </Box>

         
           <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <Button variant="outlined"
             onClick={()=>setOpenRegistrationDialog(true)}
                 sx={{
                   color:"black",
                   borderColor:"secondary.main",
                   textTransform:"capitalize",
                   fontWeight:"300",
                   margin:"30px",
                   borderRadius:"0px"
           }}
           >
               Registration
           </Button>
           <Button variant="outlined" 
             onClick={()=>setFreeEbookDialog(true)}
              sx={{
                   color:"black",
                   borderColor:"secondary.main",
                   textTransform:"capitalize",
                   fontWeight:"300",
                   borderRadius:"0px",
                   
           }}>
               Free Ebook
            </Button>
           </Box>


           {/* Registration Dialog */}
           <Dialog
                open={openRegistrationDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={()=>setOpenRegistrationDialog(false)}
                aria-describedby="alert-dialog-slide-description"
                maxWidth="sm"
                fullWidth


              >
               
                <DialogContent>
                   <RegistrationForm/>
                </DialogContent>
                
              
      </Dialog>

      {/* FreeEbook Dialog */}
      <Dialog
                open={openFreeEbookDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={()=>setFreeEbookDialog(false)}
                aria-describedby="alert-dialog-slide-description"
              >
               
                <DialogContent>
                  <h1>FreeEbook</h1>
                </DialogContent>
                
              
      </Dialog>

      </Box>


                              
                          
  
    
  )
}

export default SecondScetionService
