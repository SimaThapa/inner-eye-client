import React from 'react'
import{Box,TextField,Grid,Button} from '@mui/material'

function FreeEbookForm() {
  return (
    <div>
      <Box sx={{color:"secondary.main",
                display:"flex",
                flexDirection:"column",
                justifyContent:'center',
                alignItems:"center",
                margin:"16px",
               }}>
        <p className='responsive_fontsize18' 
            style={{fontWeight:"600",
                    marginBottom:"7px"
                    }}
        >
                INNER EYE
        </p>
        <p className='responsive_fontsize14' 
            sx={{color:"#6A1067", 
                fontWeight:"300",
                fontFamily:"Roboto Serif",
                marginBottom:"31px"
                
            }}
        >
                    Request for free Ebook
        </p>
        </Box>
        {/* form start */}
        <Box>
            <form style={{display:"flex",flexDirection:"column"}}> 
             <Grid
                container
                rowSpacing={4}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{display:"flex",flexDirection:"column"}}
              >
              <Grid  item xs={6} md={8} sx={{
                display: "flex",
                justifyContent: "center",
              }}>
                    <TextField
                        fullWidth
                        type="text"
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                        size="small"
                        sx={{ maxWidth: { xs: "100%", md: "14rem" ,     textAlign:"center"} }}
                    />
                </Grid>
                <Grid  item xs={6} md={8}>
                    <TextField
                        fullWidth
                        type="number"
                        id="outlined-basic"
                        label="Mobile Number"
                        variant="outlined"
                        sx={{ maxWidth: { xs: "100%", md: "14rem" ,textAlign:"center"} }}
                        size="small"
                    />
                </Grid>
                <Grid  item xs={6} md={8}>
                    <TextField
                        fullWidth
                        type="email"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        sx={{ maxWidth: { xs: "100%", md: "14rem",textAlign:"center" } }}
                        size="small"
                    />
                </Grid>
                <Grid item xs={12}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                    }}>
                     <Button
                        variant="contained"
                        sx={{ backgroundColor: "secondary.main", color: "white" }}
                     >
                             Register
                    </Button>
              </Grid>
              </Grid>  
            </form>
        </Box>

      
    </div>
  )
}

export default FreeEbookForm
