import React from 'react'
import YogaImage from '../../../assets/images/yoga.png'
import { Button } from '@mui/material'

function FirstSectionLanding() {
  return (
    <div style={
      {
        display:"flex",
        justifyContent:"center",
        alignItems:"center"

    }}>

      {/* left side */}
   <div style={{ maxWidth:"40rem", width :"100%", textAlign:"center"}}>
      <div style={{
                textAlign:"center",
                fontWeight:"bold",
                fontSize:"30px",
                color:"#480765",
                fontStyle:"Roboto Serif"

          }}>
               INNER EYE
     </div>
     <div>
         Nestled in the lap of the Himalayas in Nepal, Inner Eye is not just a retreat; it's a sanctuary for the mind, body, and spirit. Our personalized packages cater to your unique needs, offering a blend of yoga, meditation, sound healing, breath work, naval treatment, psychosocial counseling, spiritual counseling, and past life regression.
         At Inner Eye, our commitment goes beyond providing a retreat experience. We empower you to integrate wellness into your everyday life. Join us on this transformative journey, and let the Inner Eye guide you to a life of balance, clarity, and inner harmony.
          
     </div>  
     <Button  variant='contained'  sx={{
        backgroundColor:"secondary.secondary_600",
        opacity:"0.8",
        color:"white",

        // & represents root element
        "&:hover":{
          backgroundColor:"Black"
        },
        
      }}> About Us</Button>  
   </div>


      {/* image side */}
      <div>
       <img src={YogaImage} alt="yoga"  style={{maxHeight:"530px", }}/>
    </div>
    
    </div>
  
 
  )
}

export default FirstSectionLanding
