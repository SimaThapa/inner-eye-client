import React from 'react'
import { Box, Typography } from '@mui/material'

function Footer() {
  return (
    <Box 
        sx={{
            display:"flex",
            backgroundColor:"white",
            justifyContent:"space-around",
            height:"100px",
            textAlign:"center",
            alignItems:"center"
            }}>
          <Typography className='responsive_fontsize16'>
            Terms and Conditions
          </Typography>
          <Typography className='responsive_fontsize16'>
            Copyright@{new Date().getFullYear()}
          </Typography>
          <Typography className='responsive_fontsize16'>
            Developed By @BM 
          </Typography>
    </Box>
  )
}

export default Footer
