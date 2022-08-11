import React, { useEffect } from "react";
import { blue, grey } from "@mui/material/colors";
import DrawerMenu from "./Component/Drawer/DrawerMenu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Router from "./router";
import UserRouter from "./userRouter";

function App() {
  const location = useLocation();
  const theme = createTheme({
    palette: {
      primary: {
        main: blue[600],
      },
      secondary: {
        main: grey[100],
      },
    },
    typography: {
      fontFamily: "Poppins",
      fontSize: 15,
      fontWeightMedium: 400,
      fontWeightLight: 400,
      fontWeightRegular: 400,
      fontWeightBold: 900,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
            "&:hover": {
              boxShadow: "none",
            },
            boxShadow: "none",
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

  const navigate = useNavigate();
  const isUser = location.pathname.includes("/web-desa/user");
  const isAdmin = localStorage.getItem("is-admin");

  useEffect(() => {
    const getToken = localStorage.getItem("supabase.auth.token");
    if (getToken) {
      console.log("ayoyoo");
    }
    if (!getToken) {
      navigate("/auth/login");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {isAdmin === "true" ? (
        <DrawerMenu vicibility={isVicibility && !isUser}>
          <Router admin={true} />
        </DrawerMenu>
      ) : (
        <DrawerMenu vicibility={isVicibility && !isUser}>
          <Router admin={false} />
        </DrawerMenu>
      )}
    </ThemeProvider>
  );
}

export default App;
