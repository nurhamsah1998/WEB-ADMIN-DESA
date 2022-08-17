import React from "react";
import { capitalFirstLetter, menu } from "../utils";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Typography,
  Tooltip,
  Menu,
  ListItemIcon,
  Divider,
  MenuItem,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import LeftDrawer from "./Drawer/LeftDrawer";
import Text from "./Text";
import "../App.css";
import { Logout, Settings } from "@mui/icons-material";

function Hero() {
  //state & context
  const [anchorEl, setAnchorEl] = React.useState(null);

  //variable
  const navigate = useNavigate();
  const location = useLocation();
  const open = Boolean(anchorEl);
  const dataStorage = localStorage.getItem("user-web-desa");
  const user = JSON.parse(dataStorage);

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

  //component
  const Menus = () => {
    return (
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
          <Avatar /> Profil
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
    );
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${"/Assets/bg-home.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: { xs: 2, sm: 10, md: 10, lg: 10 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box
            display={{ xs: "flex", sm: "none" }}
            gap={{ xs: 1, md: 3 }}
            marginBottom={{ xs: 4, sm: 8, md: 10 }}
            sx={{ cursor: "pointer" }}
          >
            <LeftDrawer />
          </Box>
          <Box
            display={{ xs: "none", sm: "flex" }}
            gap={{ xs: 1, md: 3 }}
            marginBottom={{ xs: 4, sm: 8, md: 10 }}
            sx={{ cursor: "pointer" }}
          >
            {menu.map((item, index) => {
              return (
                <Link
                  className="navlink"
                  onClick={() => navigate(item.path)}
                  underline="none"
                  color={location.pathname === item.path ? "#ffc800" : "white"}
                  fontSize={{ xs: 9, sm: 14, md: 18 }}
                  fontWeight="700"
                  key={index}
                >
                  {item.title}
                </Link>
              );
            })}
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
                <Avatar sx={{ width: 36, height: 36 }} />
              </IconButton>
            </Tooltip>
            <Text paragraf color="white">
              {capitalFirstLetter(user[0]?.name)}
            </Text>
          </Box>
          <Menus />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              fontSize={{ xs: 20, sm: 40 }}
              fontWeight="700"
              color="white"
            >
              Desa Bajulan,kecamatan Rembang
            </Typography>
            <Text paragraf sx={{ marginTop: { xs: 2, sm: 4 } }}>
              Trabalhamos com as tecnologias mais atuais e oferecemos as
              melhores soluções para o seu negócio.
            </Text>

            <Button
              variant="contained"
              size="small"
              sx={{ marginTop: { xs: 2, sm: 4 } }}
            >
              Blog
            </Button>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box
              component="img"
              sx={{
                maxWidth: { xs: 250, sm: 400, md: 450 },
              }}
              alt="image"
              src="../../Assets/img-home.png"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Hero;
