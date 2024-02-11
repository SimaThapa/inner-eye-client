import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f3ecf1", 
    },
    secondary: {
      main: "#743d72",
      secondary_300:"#eeeeee",
      secondary_400:"#480765",
      secondary_600:"#6a1067" // BLACK COLOR
    },
    tertiary: {
      main: "#045307", // GREEN COLOR
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Roboto serif",
  },
});

export default theme;