import React from 'react'
import { Box, Typography } from '@mui/material'

function AchievementCard({title,total}) {
  return (
    <Box sx={{
        maxWidth:"150px",
        width:"100%",
        height:"160px",
        backgroundColor:"#ffffff",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        boxShadow:"1px 4px 4px 0px #00000040",
        borderRadius:"2px"
        
        }}>
     <Box sx={{textAlign:"center"}}>       
        <Typography className='responsive_fontsize20'
                    sx={{
                        fontWeight:"600",
                        letterSpacing:"3px"
                    }}
        >
            {total}+                            
        </Typography>

        <Typography  className='responsive_fontsize20'
                    sx={{
                        fontWeight:"600",
                        letterSpacing:"3px"
                    }}
        >
            {title}+                            
        </Typography>
      </Box> 
    </Box>
  )
}

export default AchievementCard
