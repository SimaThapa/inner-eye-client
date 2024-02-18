// import { useState } from "react";
import { useState } from "react";
import React  from "react";

import {
  Box,
  Typography,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Button,
  Grid,
} from "@mui/material";
import { ContactSupportOutlined } from "@mui/icons-material";

function RegistrationFormPopup() {
  const[name,setName]=useState("");
  const [gender,setGender]=useState("");
  const[age,setAge]=useState("");
  const[email,setEmail]=useState("");
  const[address,setAddress]=useState("");
  const[phoneNumber,setPhoneNumber]=useState("");
  const[occupation,setOccupation]=useState("");
  const[medicalHistory,setMedicalHistory]=useState("");
  const[packageType,setPackageType]=useState("");
  const[affiliations,setAffiliations]=useState("");
  const[teamSize,setTeamSize]=useState("single");
  const[memberNumber,setMemberNumber]=useState("");
  const[isTermsChecked,setIsTermsChecked]=useState("");
  
  const handleSubmit=(e)=>{
    e.preventDefault(); //prevent page from refresh
    
    const data={
      name,
      gender,
      age,
      email,
      phoneNumber,
      occupation,
      medicalHistory,
      packageType,
      affiliations,
      teamSize,
      memberNumber,
      isTermsChecked
    };
     console.log("data",name,gender,age,email,phoneNumber,occupation,medicalHistory,packageType,affiliations,teamSize,memberNumber,isTermsChecked);

  }
 


  return (
    <div>
      {/* Heading */}
      <Box
        sx={{
          textAlign:"center"
        }}
      >
        <Box>
          <Typography
            className="responsive__fontsize18"
            sx={{
              fontWeight: "600",
              lineHeight: "21px",
              color: "secondary.secondary_600",
              textTransform: "uppercase",
            }}
          >
            Inner Eye
          </Typography>
          <Typography
            sx={{
              fontWeight: "300",
              color: "secondary.secondary_600",
              mt: "7px",
            }}
            className="responsive__fontsize14"
          >
            Registration Form
          </Typography>
        </Box>
       
      </Box>
      {/* Actual Form */}
      <Box sx={{ mt: "1rem" }}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                variant="outlined"
                size="small"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                
              >
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  onChange={(e)=>setGender(e.target.value)}
                  label="Gender"

                  // onChange={handleChange}
                >
                  <MenuItem value="">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="others">Others</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                id="outlined-basic"
                label="Age"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
                variant="outlined"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="email"
                id="outlined-basic"
                label="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                variant="outlined"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="text"
                id="outlined-basic"
                label="Address"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                variant="outlined"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                size="small"
              />{" "}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
                size="small"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
              />{" "}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Occupation"
                variant="outlined"
                value={occupation}
                onChange={(e)=>setOccupation(e.target.value)}
                size="small"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
              />{" "}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Medical History"
                variant="outlined"
                value={medicalHistory}
                onChange={(e)=>setMedicalHistory(e.target.value)}
                size="small"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
              />{" "}
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
              >
                <InputLabel id="demo-simple-select-label">
                  Package Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={packageType}
                onChange={(e)=>setPackageType(e.target.value)}
                  // value={age}
                  label="Package Type"
                  // onChange={handleChange}
                >
                  <MenuItem value="basic">Basic</MenuItem>
                  <MenuItem value="standard">Standard</MenuItem>
                  <MenuItem value="premium">Premium</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Any other affilations"
                variant="outlined"
                value={affiliations}
                onChange={(e)=>setAffiliations(e.target.value)}
                size="small"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
              />{" "}
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  // Console.log("data",name,gender.age);
                  value={teamSize}
                  onChange={(e)=>setTeamSize(e.target.value)}

                >
                  <FormControlLabel
                    value="single"
                    control={<Radio />}
                    label="Single"
                  />
                  <FormControlLabel
                    value="group"
                    control={<Radio />}
                    label="Group"
                  />
                </RadioGroup>
              </FormControl>{" "}
            </Grid>

            {teamSize=='group'&&
            (
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Enter Member Number"
                  variant="outlined"
                  value={memberNumber}
                  onChange={(e)=>setMemberNumber(e.target.value)}
                  size="small"
                  sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                />{" "}
              </Grid>

            )
           }
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="I hereby agree to the present and future terms & conditions of inner eye pvt.ltd"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                type="submit"
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
  );
}

export default RegistrationFormPopup;
