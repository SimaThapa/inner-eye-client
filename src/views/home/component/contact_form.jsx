import React from 'react'
import {Typography,TextField,Button } from '@mui/material'

function ContactForm() {
  return (
    
        <>
           <Typography variant='h5' className='responsive_fontsize20'
                        sx={{fontWeight:"bold"}}
             >
                Feel Free To Contact Us
             </Typography> 
             <TextField 
                id="outlined-basic" 
                label="FullName" 
                variant="outlined"
                size='small' 
            /> 
            <TextField 
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                size='small' 
            /> 
            <Button variant="contained" 
                     sx={{
                        backgroundColor:"secondary.secondary_600",
                        color:"white",
                        mt:"0.5rem",
                        "&:hoover":{
                            backgroundColor:"secondary.main"
                        }
                    }}
            >
                Enquiry
            </Button>
              
        </>                                    
      
    
  )
}

export default ContactForm
