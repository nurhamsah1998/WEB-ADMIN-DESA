import React from "react";
import { capitalFirstLetter, menu } from "../utils";
import {
  Avatar,
  Box,
  IconButton,
  Link,
  Typography,
  Tooltip,
  Menu,
  ListItemIcon,
  Divider,
  MenuItem,
  AppBar,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import LeftDrawer from "./Drawer/LeftDrawer";
import "../App.css";
import { Help, HelpOutline, Logout, Notifications, NotificationsNoneOutlined, Settings } from "@mui/icons-material";

export default function Appbar() {
  //state & context
  const [anchorEl, setAnchorEl] = React.useState(null);

  //variable
  const navigate = useNavigate();
  const location = useLocation();
  const open = Boolean(anchorEl);
  const dataStorage = localStorage.getItem("user-web-desa");
  const user = JSON.parse(dataStorage);

  const name = user?.map((v) => {
    return v.name;
  });

  //function
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/auth/login");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(45deg, rgba(8,70,67,1) 0%, rgba(60,221,213,1) 0%, rgba(27,197,189,1) 100%)",
        alignItems: "center",
        padding: { xs: 1, sm: 4 },
        maxHeight: { xs: "80px", sm: "120px" },
        boxShadow: "none",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" maxWidth="lg">
        <Box>
          <Box display={{ xs: "flex", sm: "none" }} gap={{ xs: 1, md: 3 }} sx={{ cursor: "pointer" }}>
            <LeftDrawer />
          </Box>
          <Box display={{ xs: "none", sm: "flex" }} gap={{ xs: 1, md: 3 }} sx={{ cursor: "pointer" }}>
            {menu.map((item, index) => {
              return (
                <Link
                  className="navlink"
                  onClick={() => navigate(item.path)}
                  underline="none"
                  color={location.pathname === item.path ? "white" : "paleturquoise"}
                  fontSize={{ xs: 9, sm: 14, md: 18 }}
                  fontWeight="700"
                  key={index}
                >
                  {item.title}
                </Link>
              );
            })}
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Box display="flex" sx={{ marginRight: { xs: "2px", sm: 1 } }}>
            <Tooltip title="notifikasi">
              <IconButton>
                <NotificationsNoneOutlined fontSize="medium" sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Bantuan">
              <IconButton>
                <HelpOutline fontSize="medium" sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </Box>
          <Box textAlign="-webkit-center">
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar src="../../Assets/atta.jpg" sx={{ width: 40, height: 40 }} />
              </IconButton>
            </Tooltip>

            {/* <========= menu ==========> */}

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <Avatar />
                <Typography>user</Typography>
                {/* {capitalFirstLetter(name || "user")} */}
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Pengaturan
              </MenuItem>
              <MenuItem onClick={handleLogOut}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Keluar
              </MenuItem>
            </Menu>

            {/* <========= menu ==========> */}
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
}
