import { Instagram, Facebook, Twitter, YouTube } from "@mui/icons-material";
import { Box, Link } from "@mui/material";
import React from "react";
import Text from "./Text";
import { menu } from "../utils";
import { useNavigate, useLocation } from "react-router-dom";

const socialMedia = [
  {
    name: "instagram",
    icon: <Instagram style={{ color: "white" }} />,
    link: "#",
  },
  {
    name: "facebook",
    icon: <Facebook style={{ color: "white" }} />,
    link: "#",
  },
  {
    name: "youtube",
    icon: <YouTube style={{ color: "white" }} />,
    link: "#",
  },
  {
    name: "twiter",
    icon: <Twitter style={{ color: "white" }} />,
    link: "#",
  },
];

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        background:
          "linear-gradient(to right, rgba(27, 197, 189, 0.5), rgba(60, 221, 213, 0.5))",
        display: "grid",
        alignItems: "end",
        backgroundSize: "cover",
      }}
    >
      <Box
        marginX="auto"
        maxWidth="lg"
        padding={{ xs: 2, sm: 10, md: 10, lg: 10 }}
      >
        <Box>
          {menu.map((item, index) => {
            return (
              <Link
                key={index}
                onClick={() => navigate(item.path)}
                underline="none"
                color={location.pathname === item.path ? "#ffc800" : "white"}
                fontWeight="600"
                fontSize={{ xs: 9, sm: 14, md: 18 }}
                sx={{ cursor: "pointer", marginX: 2 }}
              >
                {item.title}
              </Link>
            );
          })}
        </Box>
      </Box>
      <Box padding={{ xs: 2, sm: 10, md: 10, lg: 10 }}>
        <Box
          maxWidth="lg"
          margin="auto"
          marginTop={4}
          paddingTop={2}
          alignItems="center"
          sx={{
            borderTop: 0.5,
            borderColor: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text paragraf color="white">
            <span>&#169;</span> Copyright-2022
          </Text>
          <Box display="flex">
            {socialMedia.map((item, index) => {
              return (
                <Link key={index} margin={1} sx={{ cursor: "pointer" }}>
                  {item.icon}
                </Link>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
