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
import { CircularProgress } from "@mui/material";
import { blue, green, grey, red } from "@mui/material/colors";
import { NavigationMenu } from "./MenuNavigation";
import useGetBy from "../../Hooks/useGetBy";
import { getStorage } from "../../utils";
import TransitionsModal from "../TransitionsModal";

const drawerWidth = 340;

function DrawerMenu({ children, vicibility = true }) {
  const idVillage = getStorage("village-id");
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { items } = useGetBy({
    module: "VILLAGE",
    select: "*",
    filterby: idVillage,
    filter: "id",
  });
  const drawer = (
    <Box sx={{ bgcolor: "#1BC5BD", height: "100vh" }}>
      <Toolbar sx={{ bgcolor: "#fff" }}>
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
                    navigate("?log-out");
                  } else {
                    navigate(text.path);
                    setMobileOpen(!mobileOpen);
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    color: text.path.includes(location.pathname)
                      ? text.color
                      : "#fff",
                  }}
                >
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
      <TransitionsModal
        title="Apakah anda yakin ingin keluar ?"
        handleSubmit={() => {
          localStorage.clear();
          window.location.reload();
        }}
        open={location.search.includes("?log-out")}
        handleClose={() => navigate(-1)}
      />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#fff",
          boxShadow: "0px 0px 4px black",
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          display: vicibility ? "block" : "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: green[500], mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Typography variant="h5" sx={{ color: grey[800] }}>
              <span style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: green[500], fontWeight: 600 }}>Desa</span>
                <span
                  style={{
                    color: grey[800],
                    textTransform: "capitalize",
                    marginLeft: "10px",
                  }}
                >
                  {items[0]?.ds || <CircularProgress size={25} />}
                </span>
              </span>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
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
            display: { xs: "block", sm: "block", md: "none" },
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
            display: { xs: "none", sm: "none", md: "block" },
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
