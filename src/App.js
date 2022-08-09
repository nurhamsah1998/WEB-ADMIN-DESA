import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { blue } from "@mui/material/colors";
import DrawerMenu from "./Component/Drawer/DrawerMenu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DrawerAppBar from "./Component/Drawer/DrawerMenu";
import Router from "./router";

function App() {
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
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <DrawerMenu>
          <Router />
        </DrawerMenu>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
