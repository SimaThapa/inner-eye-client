import React from 'react'
import { Box, Typography} from '@mui/material'
function SecondScetionService() {
  return (
    // first div
    <div>
      {/* second div */}
        <Box sx={{
                  width:"100%",
                  height: "464px",
                  top: "55px",
                  left: "142px",
                  display:"flex",
                   justifyContent:"center",
                  // alignItems:"center",
                  border:"2px solid black"
                 
          }}>
            <Typography sx={{ fontFamily: "Arial",
                              fontSize:" 13px",
                              fontWeight:"400",
                              lineHeight:"18px",
                              letterSpacing: "4px",
                              textAlign:" center"
                              
                          }}>
                            Best Service
            </Typography>
            <Typography sx={{fontFamily: "Times New Roman",
                            fontSize:" 32px",
                            fontWeight:"700",
                            lineHeight:" 45px",
                            letterSpacing: "0.25px",
                            textAlign:" center",
                            paddingTop:"40px",
                             paddingRight:"200px"
                              
                          }}>
                             Services
            </Typography>
            <Box sx={{
              display:"flex",
              
              }}>
                <Box sx={{
                  height:"100px",
                  width:"100px",
                  backgroundColor:"purple"
                 }}>

                </Box>
                <Box>

                </Box>
                <Box>

                </Box>
            </Box>

                              
                          
        </Box>
    </div>
  )
}

export default SecondScetionService
