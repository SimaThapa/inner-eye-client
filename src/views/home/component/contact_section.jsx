import React from 'react'
import { Box, IconButton, Typography ,TextField,Button} from '@mui/material'
import AchievementCard from "src/cards/achievementCard"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactForm from './contact_form';


function ContactSection() {
  return (
    <div style={{backgroundColor:"secondary.main"}}>
        {/* main section */}
      <Box 
        sx={{
            display:"flex",
            gap:"2rem",
            flexDirection:{xs:"column",md:"row"}
        }}
      >
           {/* left section */}
          <Box 
            sx={{maxWidth:{xs:"100%",md:"60%"},width:"100%",textAlign:"center"}}
          > 
           <Box>
               <Typography  className='responsive_fontsize20'
               sx={{              
                color:"secondary.secondary_400",fontWeight:"600",textTransform:"uppercase",letterSpacing:"3px",mb:"23px"}}
            >
                Inner Eye
               </Typography>
               <Typography className='responsive_fontsize14'>
                    Nestled in the lap of the Himalayas in Nepal, Inner Eye is not just a retreat; it's a sanctuary for the mind, body, and spirit. Our personalized packages cater to your unique needs, offering a blend of yoga, meditation, sound healing, breathwork, naval treatment, psychosocial counseling, spiritual counseling, and past life regression.
                    At Inner Eye, our commitment goes beyond providing a retreat experience. We empower you to integrate wellness into your everyday life. Join us on this transformative journey, and let the Inner Eye guide you to a life of balance, clarity, and inner harmony.
               </Typography>
           </Box>
           <Box  >
            <Typography  className='responsive_fontsize24'
                sx={{color:"secondary.secondary_400",fontWeight:"600",textTransform:"uppercase",letterSpacing:"3px",mt:"50px"}}
                >
                   Achievements
            </Typography>
           </Box>
           <Box 
                sx={{
                    display:"flex", 
                    gap:"1.4rem",
                    flexWrap:"wrap",
                    alignItems:"center",
                    justifyContent:"center",
                    mt:"40px"
                }}
            >
              <AchievementCard/>
              <AchievementCard/>
              <AchievementCard/>
           </Box>
     </Box>   
           {/* right section */}
           <Box 
            sx=
            {{  maxWidth:{xs:"100%",md:"40%"} ,
                width:"100%",
                alignItems:"center",
                display:"flex",
                flexDirection:"column",
                gap:"1rem",

            }}
           >
            <Box >
                <Typography variant='h3'  className='responsive_fontsize32'
                            sx={{fontWeight:"700",}}
                >
                    Inner Eye Office
                </Typography>
                <Typography className='responsive_fontsize16'>
                    Lainchaur 26 , Kathmandu, Nepal
                </Typography>
                <Typography className='responsive_fontsize16'>
                    +977-01-456788, +977-9848486743
                </Typography>
                <span style={{display:"flex",alignItems:"center"}}>
                    <WhatsAppIcon sx={{color:"#25D366"}}/>
                    <Typography>
                    +977-9848486743
                    </Typography>

                </span>
            </Box>
            <Box>
                <Typography className='responsive_fontsize18' 
                            sx={{
                                fontWeight:"600",
                                textAlign:"center",
                                mb:"10px"
                            }}
                >
                    Follow Us On
                </Typography>
               
                <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px  rgba(33, 108, 222, 1)"}}
                >
                    <FacebookIcon sx={{color:"blue"}}/>
                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px  rgba(33, 108, 222, 1)"}}
                >
                    <YouTubeIcon sx={{color:"red"}}/>
                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px  rgba(33, 108, 222, 1)"}}
                >
                    <PinterestIcon sx={{color:"#E60023"}}/>

                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px  rgba(33, 108, 222, 1)"}}
                >
                    <InstagramIcon sx={{color:"#405DE6"}}/>
                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px  rgba(33, 108, 222, 1)"}}
                >
                    <LinkedInIcon sx={{color:" #0077b5"}}/>
                </IconButton>
            </Box>
            <Box 
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"0.5rem",
                    boxShadow:" 1px 1px 1px 1px rgba(165, 161, 165, 0.3)",
                    padding:"1.5rem",
                    mt:"3rem"
                }}
            >
             <ContactForm/>
              
              
            </Box>
              
           </Box>
      </Box>
    </div>
  )
}

export default ContactSection
