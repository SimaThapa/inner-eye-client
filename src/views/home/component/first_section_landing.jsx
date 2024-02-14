import React from 'react'
import YogaImage from '../../../assets/images/yoga.png'
import { Button ,Box} from '@mui/material'
import OgrangeDivider from 'src/components/ui/oragne.divider';

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
    
        <p> INNER EYE </p>
      </div>


      <p className='responsive_fontsize20'
        >
            Nestled in the lap of the Himalayas in Nepal, Inner Eye is not just a retreat; 
            it's a sanctuary for the mind, body, and spirit. 
            Our personalized packages cater to your unique needs, offering a blend of yoga, meditation, sound healing, breath work, naval treatment, psychosocial counseling, spiritual counseling, and past life regression.
            At Inner Eye, our commitment goes beyond providing a retreat experience.
            We empower you to integrate wellness into your everyday life. Join us on this transformative journey, and let the Inner Eye guide you to a life of balance, clarity, and inner harmony.
      </p>
 </Box>     
);
const image=(
<Box>
       <img src={YogaImage} alt="yoga"  style={{marginTop:"30px"}}/>
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
  backgroundColor:"#F3ECF1",
  flexDirection:{sx:'column-reverse', md:"row"}
  
}}> 

{/* mobile view */}

{/* image and description div */}
 <div style={
      {
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
        
      }}>
    <Box sx={{ display: { xs: "flex", md: "none" },
              flexDirection:"column"
            }}
        >


      {/* left side */}
      <Box>

             {image}

      </Box>

      <div style={{ 
              maxWidth:"40rem", 
              width :"100%",
              textAlign:"center",
              
         }}>
         <Box>   
          <Box sx={{
             display: { xs: "flex", md: "flex" },
             flexDirection:"column",
             marginTop:"20px"
          }}>
            {description}

            <Button  variant='contained'  sx={{
            backgroundColor:"secondary.secondary_600",
            opacity:"0.8",
            color:"white",
            // & represents root element
            "&:hover":{
              backgroundColor:"Black"
            },
           
          }}>
                About Us
          
        </Button>  
          </Box>
             

         
      </Box>   
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
             marginTop:"150px"
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
            alignItems:"center"

            
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
