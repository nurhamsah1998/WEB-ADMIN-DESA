import React from "react";
import { blue } from "@mui/material/colors";
import DrawerMenu from "./Component/Drawer/DrawerMenu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import Router from "./router";

function App() {
  const location = useLocation();
  const theme = createTheme({
    palette: {
      primary: {
        main: blue[600],
      },
    },
    typography: {
      fontFamily: "Poppins",
      fontSize: 15,
      fontWeightMedium: 200,
      fontWeightLight: 200,
      fontWeightRegular: 300,
      fontWeightBold: 900,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
            "&:hover": {
              background: "",
            },
          },
        },
      },
    },
  });
  const isShow = true;
  const isNotShow = false;
  const isVicibility = location.pathname.includes("/web-desa")
    ? isShow
    : location.pathname.includes("/auth") && isNotShow;
  console.log(isVicibility);
  return (
    <ThemeProvider theme={theme}>
      <DrawerMenu vicibility={isVicibility}>
        <Router />
      </DrawerMenu>
    </ThemeProvider>
  );
}

export default App;
