import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { green, grey } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import { NavigationMenu } from "./MenuNavigation";
import { Button, TextField } from "@mui/material";

const drawerWidth = 340;

function DrawerMenu({ children, vicibility = true }) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <TextField
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: grey[400], mr: 1 }} />,
            }}
            fullWidth
            size="small"
          />
          <Button
            color="secondary"
            variant="contained"
            sx={{ color: grey[400], minHeight: 0, minWidth: 0 }}
          >
            <PersonIcon />
          </Button>
        </Box>
      </Toolbar>

      <List sx={{ mx: 2 }}>
        <Typography ml={2} mt={4} mb={2} fontWeight={500} variant="h6">
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
                  navigate(text.path);
                  setMobileOpen(!mobileOpen);
                }}
              >
                <ListItemIcon sx={{ color: text.color }}>
                  {text.icon}
                </ListItemIcon>
                <Box>
                  <ListItemText primary={text.label} />
                  <Typography sx={{ fontSize: 12 }}>{text.tag}</Typography>
                </Box>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#fff",
          boxShadow: "none",
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
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" fontWeight={600} noWrap component="div">
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
          p: vicibility ? 3 : 0,
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
