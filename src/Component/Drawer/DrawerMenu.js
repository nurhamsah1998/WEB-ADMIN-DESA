import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import supabase from "../../Hooks/supabase";
import Toolbar from "@mui/material/Toolbar";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { blue, green, grey, red } from "@mui/material/colors";
import { NavigationMenu } from "./MenuNavigation";
import useGetData from "../../Hooks/useGetData";

const drawerWidth = 340;

function DrawerMenu({ children, vicibility = true }) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { items, isLoading } = useGetData({
    module: "USER_DEVELOPMENT",
  });
  const USER = items?.find((item) => item.user_id === supabase.auth.user()?.id);
  const drawer = (
    <Box sx={{ bgcolor: "#1BC5BD", height: "100vh" }}>
      <Toolbar sx={{ bgcolor: "#fff", }}>
        <Box sx={{ display: "flex" }}>
          <Typography fontWeight={600} variant="h5" color={green[500]}>
            Web
          </Typography>
          <Typography fontWeight={600} variant="h5" color={grey[800]}>
            Desa
          </Typography>
        </Box>
      </Toolbar>
      <List sx={{ mx: 2 }}>
        <Typography
          ml={2}
          mt={2}
          mb={2}
          fontWeight={500}
          color="#fff"
          variant="h6"
        >
          Menu
        </Typography>
        {NavigationMenu.map((text, index) => {
          return (
            <ListItem
              key={index}
              sx={{
                bgcolor: text.path.includes(location.pathname) ? grey[100] : "",
                borderRadius: 2,
              }}
              disablePadding
            >
              <ListItemButton
                onClick={() => {
                  if (text.path === "?log-out") {
                    localStorage.clear();
                    window.location.reload();
                  } else {
                    navigate(text.path);
                    setMobileOpen(!mobileOpen);
                  }
                }}
              >
                <ListItemIcon sx={{ color: text.path.includes(location.pathname)? text.color :'#fff' }}>
                  {text.icon}
                </ListItemIcon>
                <Box>
                  <ListItemText
                    sx={{
                      color: text.path.includes(location.pathname)
                        ? "#1BC5BD"
                        : "#fff",
                    }}
                    primary={text.label}
                  />
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: text.path.includes(location.pathname)
                        ? "#1BC5BD"
                        : "#fff",
                    }}
                  >
                    {text.tag}
                  </Typography>
                </Box>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#fff",
          boxShadow: '0px 0px 4px black',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: vicibility ? "block" : "none",
          
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: green[500], mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", md: "block", lg: "block", xl: "block" },
              }}
              fontWeight={600}
              noWrap
              component="div"
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <span>
                  <span style={{ color: green[500] }}>Web</span>
                  <span style={{ color: grey[800] }}>DESA</span>
                  <span style={{ color: grey[800] }}> | </span>
                </span>
                <span
                  style={{
                    color: grey[800],
                    fontSize: "15px",
                    marginLeft: "5px",
                  }}
                >
                  Membangun Negri Demi Sesuap Nasi
                </span>
              </span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "block", md: "none", lg: "none", xl: "none" },
              }}
              fontWeight={600}
              noWrap
              component="div"
            >
              <span style={{ display: "flex" }}>
                <span>
                  <span style={{ color: green[500] }}>Web</span>
                  <span style={{ color: grey[800] }}>DESA</span>
                </span>
              </span>
            </Typography>
            <Typography sx={{ color: grey[800] }}>
              {USER?.name || "--Not-Set--"}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          display: vicibility ? "block" : "none",
          
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
       
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: vicibility ? { xs: 1, md: 3 } : 0,
          bgcolor: grey[100],
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "100vh",
        }}
      >
        {vicibility ? <Toolbar /> : null}
        {children}
      </Box>
    </Box>
  );
}

DrawerMenu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerMenu;
