import React from 'react'
import YogaImage from '../../../assets/images/yoga.png'
import { Button ,Box,Typography} from '@mui/material'

function FirstSectionLanding() {
const description=(
 <Box> 
        <div style={{
          textAlign:"center",
          fontWeight:"bold",
          fontSize:"30px",
          color:"#480765",
          fontStyle:"Roboto Serif"

      }}>
        INNER EYE
      </div>

      <Typography variant="subtitle1" gutterBottom 
        sx={{
        fontFamily: "Roboto Serif",
        fontSize: "20px",
        fontWeight: "200",
        width:"100%",
        letterSpacing: "0em",
        border:"2px solid black"
      }}
        >
            Nestled in the lap of the Himalayas in Nepal, Inner Eye is not just a retreat; 
            it's a sanctuary for the mind, body, and spirit. 
            Our personalized packages cater to your unique needs, offering a blend of yoga, meditation, sound healing, breath work, naval treatment, psychosocial counseling, spiritual counseling, and past life regression.
            At Inner Eye, our commitment goes beyond providing a retreat experience.
            We empower you to integrate wellness into your everyday life. Join us on this transformative journey, and let the Inner Eye guide you to a life of balance, clarity, and inner harmony.
      </Typography>
 </Box>     
);
const Image=(
<Box>
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
</Box>

);

return (

//main box
<Box sx={{
  paddingLeft:"70px",
  paddingRight:"70px",
  
}}> 
{/* mobile view */}
{/* image and description div */}
 <div style={
      {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        // flexDirection:"column"
        
    }}>
 <Box sx={{ display: { xs: "flex", md: "none" },
        flexDirection:"column"
        }}
        >


      {/* left side */}
      <Box sx={{
       
       
        }}>

             {Image}

      </Box>

      <div style={{ 
              maxWidth:"40rem", 
              width :"100%",
              textAlign:"center",
              height: "231px",
              
         }}>
             
          <Box sx={{
             display: { xs: "flex", md: "flex" },
             flexDirection:"column",
             marginTop:"20px"
          }}>
            {description}
          </Box>
             

         <Button  variant='contained'  sx={{
            backgroundColor:"secondary.secondary_600",
            opacity:"0.8",
            color:"white",
            // & represents root element
            "&:hover":{
              backgroundColor:"Black"
            },
            marginTop:"10px"
            
          }}>
             About Us
          
        </Button>  
      </div>
  </Box> 


    {/* Desktop view */}

    <Box sx={{
      display:"flex",
      flexDirection:"row"
      }}>
    <Box> 
    <Box sx={{
             display: { xs: "none", md: "flex" },
             flexDirection:"column",
             marginTop:"120px"
          }}>
            {description}
    </Box>
     <Button  variant='contained'  sx={{
            backgroundColor:"secondary.secondary_600",
            opacity:"0.8",
            color:"white",
            // & represents root element
            "&:hover":{
                        backgroundColor:"Black"
                      },
            marginTop:"10px",
            display:{xs: "none", md: "flex"},
            
            
          }}>
             About Us
          
    </Button>  
   </Box>    
   <Box sx={{
            display: { xs: "none", md: "flex" },
            flexDirection:"row"
        }}>
             {Image}

    </Box>

  </Box>  
 </div>
  
</Box>  
 
  )
}

export default FirstSectionLanding
