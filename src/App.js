import React, { useEffect } from "react";
import { blue, grey, orange, red } from "@mui/material/colors";
import DrawerMenu from "./Component/Drawer/DrawerMenu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Router from "./router";
import { Notif } from "./Hooks/useContextNotification";
import Notification from "./Component/Notification";
import SecureLS from "secure-ls";

function App() {
  const ls = new SecureLS();
  const user = ls.get("status");

  const location = useLocation();
  const theme = createTheme({
    palette: {
      primary: {
        main: blue[600],
      },
      secondary: {
        main: grey[100],
      },
      warning: {
        main: orange[500],
      },
      error: {
        main: red[500],
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

  const [notif, setNotif] = React.useState({
    message: "info",
    variant: "info",
    v: false,
  });

  useEffect(() => {
    const getToken = localStorage.getItem("supabase.auth.token");
    if (getToken) {
      const status = user[0]?.is_verified;
      if (status === "awaiting") {
        navigate("/web-desa/user/awaiting");
      } else if (status === "denied") {
        navigate("/web-desa/user/denied");
      } else {
        console.log("success");
      }
    }
    if (!getToken) {
      navigate("/auth/login");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Notif.Provider value={{ notif, setNotif }}>
        {isAdmin === "true" ? (
          <DrawerMenu vicibility={isVicibility && !isUser}>
            <Router admin={true} />
          </DrawerMenu>
        ) : (
          <Router admin={false} />
        )}
        <Notification message={notif.message} variant={notif.variant} v={notif.v} />
      </Notif.Provider>
    </ThemeProvider>
  );
}

export default App;
