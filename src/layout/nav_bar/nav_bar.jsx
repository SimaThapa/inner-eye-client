import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

// ICONS IMPORT
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

// ASSETS IMPORT
import logo from "../../assets/logo/inner-eye-logo.png";

const navItems = [
  "Home",
  "About",
  "Services",
  "Podcast",
  "Gallery",
  "Blogs",
  "Events",
  "Contact Us",
];

function NavBar() {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  function toggleMobileDrawer() {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  }
  const renderLogo = (
    <img src={logo} alt="Inner Eye" style={{ width: "100%", height: "100%" }} />
  );

  const renderItems = (
    <>
      {navItems?.map((item, index) => (
        <Typography key={index}>{item}</Typography>
      ))}
    </>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar disableGutters 
         className="apply-maxwidth"
         sx={{py:"0",width:"100%"}}>
        {/* START MOBILE VIEW */}

        <Box sx={{ display: { xs: "flex", md: "none" } }}>{renderLogo}</Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={toggleMobileDrawer}
          >
            <MenuIcon />
    
    
          </IconButton>
        </Box>

        {/* END MOBILE VIEW  */}

        {/* START DESKTOP VIEW */}
        <Box
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            display: { xs: "none", md: "flex" }
          }}
        >
          <Box>{renderLogo}</Box>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
            }}
          >
            {renderItems}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                borderLeftWidth: 1.5,
                borderColor: "#232323",
                height: "25px",
              }}
            />
            <Box sx={{ mx: "0.2rem", display: "flex", alignItems: "center"  }}>
              <InstagramIcon sx={{color:"orange"}}  />
              <FacebookIcon sx={{color:"blue"}}/>
              <YouTubeIcon sx={{color:"#FA0505"}} />
              <LinkedInIcon sx={{color:"#78A1DE"}}/>
              <PinterestIcon sx={{color:"red"}} />
            </Box>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                borderLeftWidth: 1.5,
                borderColor: "#232323",
                height: "25px",
              }}
            />
          </Box>
        </Box>
        {/* END DESKTOP VIEW */}
      </Toolbar>

      <Drawer
        anchor="top"
        open={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
      >
        {renderItems}
      </Drawer>
    </AppBar>
  );
}
export default NavBar;
