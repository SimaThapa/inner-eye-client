import React from 'react'
import { Box, Typography,Button} from '@mui/material'
import AboutPic  from 'src/assets/images/aboutus.png'
import OgrangeDivider from 'src/components/ui/oragne.divider'

function AboutUsSection() {
  return (
    <div>
        <Box 
             sx={{
                    display:"flex",
                    justifyContent:'center',
                    alignItems:"center",
                    flexDirection:{xs:"column",md:"row"}}}>
            {/* left container */}
            <Box 
                sx={{
                    maxWidth:{xs:"250PX",md:"50%"}, 
                    width:"100%",

                }}
            >

                <img src={AboutPic}/>

            </Box>

            {/* right container */}
           
            <Box sx={{maxWidth:{xs:"100%",md:"50%"}, width:"100%"}}>
                <OgrangeDivider>
                {/* by default Typography is p tag */}
                    <Typography  variant='h3' 
                         sx={{color:"secondary.main",  fontWeight:"bold",fontFamily:"Times New Roman"}} className='responsive_fontsize32'
                    >
                        About Us
                    </Typography>
                </OgrangeDivider>  
                     
                <Box sx={{py:"1.5rem"}}>
                <Typography  variant='h3' 
                         sx={{color:"black",  fontWeight:"bold",fontFamily:"Times New Roman"}} className='responsive_fontsize26'
                    >

                        Ms .Swpana Sum
                        
                        
                    </Typography>

                    <Typography  variant='h3' 
                         sx={{color:"black",  fontWeight:"bold",fontFamily:"Times New Roman"}} className='responsive_fontsize26'
                    >
                        
                      </Typography>
                    <Typography  variant='h3' 
                         sx={{color:"black",  fontWeight:"bold",fontFamily:"Times New Roman"}} className='responsive_fontsize26'
                    >

                        Founder  / CEO
                    </Typography>
                    <Box className='responsive_fontsize16'>
                        Dedicated to the art of holistic healing, Ms. Swapna Sum stands at the helm of Inner Eye as both a visionary leader and a compassionate healer. Certified as a meditation facilitator, yoga trainer, therapist, psycho-social counselor, hypnotherapist, and a certified Tibetan/Vedic sound healing therapist, Ms. Swapna's journey into holistic wellness is deeply personal.

                        As a survivor of trauma, depression, and anxiety, Ms. Swapna found solace and transformation through holistic healing practices. Fueled by her own experiences, she embarked on a path of rigorous research, continuous learning, and professional development. Today, she seamlessly blends her expertise to offer seekers a comprehensive approach to wellness. .......
                    </Box>
                    </Box>
                    <Button variant="outlined" 
                             sx={{borderRadius:"0",
                                   color:"black",
                                   borderColor:"secondary.main",
                                   "&:hoover":{
                                    borderColor:"secondary.main"
                                   },
                                   marginTop:"15px"
                            }}
                    >
                        Read More
                    </Button>    
            </Box>
        </Box>
    </div>
  )
}

export default AboutUsSection
