import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import { getStorage, saveStorage } from "../../../utils";
import supabase from "../../../Hooks/supabase";

function Verified() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const checkData = async () => {
      const user = await getStorage("status");
      const { data } = await supabase.from("USER_DEVELOPMENT").select("*").eq("user_id", user[0]?.user_id);
      if (data[0]?.is_verified === "accepted") {
        saveStorage("user-web-desa", data);
        saveStorage("is-admin", data[0]?.is_admin);
        saveStorage("village-id", data[0]?.village_id);
        navigate("/");
      } else if (data[0]?.is_verified === "denied") {
        navigate("/web-desa/user/denied");
      } else {
        console.log("sabar yaaa");
      }
    };
    checkData();
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "#1BC5BD",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ m: 2 }}>
        <Box
          sx={{
            display: { sm: "grid", xs: "grid", lg: "flex", xl: "flex" },
            alignItems: "center",
            textAlign: { xs: "center", sm: "center", xl: "left", lg: "left" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", xl: 180, lg: 180 },
              mb: { xs: 14, sm: 14, xl: 0, lg: 0 },
            }}
          >
            <GppMaybeIcon sx={{ scale: "10" }} color="secondary" />
          </Box>
          <Box sx={{ width: "100%", mt: 2 }}>
            <Typography variant="h4" fontWeight={600} color="#fff">
              Akun anda dalam tahap pengecekan oleh perangkat desa
            </Typography>
            <Typography variant="h6" mb={3} color="#fff">
              selalu cek secara berkala. waktu paling lama 2x jam kerja
            </Typography>
            <LinearProgress sx={{ height: 15, borderRadius: "12px" }} color="warning" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Verified;
