import React from 'react'
import YogaImage from '../../../assets/images/yoga.png'
import { Button ,Box,Typography} from '@mui/material'

function FirstSectionLanding() {
return (
<Box sx={{
  paddingLeft:"70px",
  paddingRight:"70px"
  
}}>  
 <div style={
      {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        // left:"70px",
        // right:"70px",
        // top:"10px"


    }}>

      {/* left side */}
      <div style={{ 
              maxWidth:"40rem", 
              width :"100%",
              textAlign:"center",
              height: "231px",
              top: "201px",
              left:" 1px",
              marginRight:"30px",
             

            }}>
              <div style={{
                      textAlign:"center",
                      fontWeight:"bold",
                      fontSize:"30px",
                      color:"#480765",
                      fontStyle:"Roboto Serif"

                }}>
                    INNER EYE
               </div>


            <div style={{
                          
                         
                 }}>
                <Typography variant="subtitle1" gutterBottom sx={{
                           fontFamily: "Roboto Serif",
                           fontSize: "20px",
                           fontWeight: "200",
                           width:"100%",
                           border:"2px solid black"
                           }}>
                            Nestled in the lap of the Himalayas in Nepal, Inner Eye is not just a retreat; 
                            it's a sanctuary for the mind, body, and spirit. 
                            Our personalized packages cater to your unique needs, offering a blend of yoga, meditation, sound healing, breath work, naval treatment, psychosocial counseling, spiritual counseling, and past life regression.
                            At Inner Eye, our commitment goes beyond providing a retreat experience.
                            We empower you to integrate wellness into your everyday life. Join us on this transformative journey, and let the Inner Eye guide you to a life of balance, clarity, and inner harmony.
                    </Typography>  
             </div>  
     <Button  variant='contained'  sx={{
        backgroundColor:"secondary.secondary_600",
        opacity:"0.8",
        color:"white",

        // & represents root element
        "&:hover":{
          backgroundColor:"Black"
        },
        marginTop:"20px"
        
      }}> About Us</Button>  
   </div>


      {/* image side */}
      <div>
       <img src={YogaImage} alt="yoga"  style={{maxHeight:"530px", marginTop:"30px"}}/>
       <Box sx={{
              width: "728px",
              fontFamily: "Roboto Serif",
              fontSize: "32px",
              fontStyle: "italic",
              fontWeight:" 700",
              lineHeight:" 37px",
              letterSpacing: "0em",
              textAlign: "left",
              color:"#510C4F",
              // boxShadow:"2px 4px  0px 0px #000000"

         }}>
      "Nested in the lap of the Himalayas in Nepal"
    </Box>
    </div>
   
    
  </div>
  
</Box>  
 
  )
}

export default FirstSectionLanding
