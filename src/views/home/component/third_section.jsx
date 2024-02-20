import React from 'react'
import { Box, Typography} from '@mui/material'
import OrangeDivider from "src/components/ui/oragne.divider"
import PodcastCard from "src/cards/podcast_card" 



// const Transition = React.forwardRef(function Transition(props, ref) {

//         return <Slide direction="up" ref={ref} {...props} />;
//       });


function ThirdSectionPodcast() {

  return (
    
    // first div
   <Box >
       
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
                      fontFamily:"arial"}}>Mental health, spirituality & holistic healing
                </Typography>
        </OrangeDivider>
              <Typography className='responsive_fontsize32' 
                          sx={{color:"secondary.secondary_400",
                          fontFamily:"Times New Roman",
                          fontWeight:"bold",
                          letterSpacing:"0.25rem",
                          lineHeight:"42px",
                          
                        }}
                >
                              Podcast
                </Typography>
       </Box>

          {/* card section       */}
            
            <Box>
                <PodcastCard/>

                </Box>

         
         
    </Box>


                              
 )
}

export default ThirdSectionPodcast
