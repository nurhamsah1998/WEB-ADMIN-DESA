import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { grey, green } from "@mui/material/colors";
import ListItemButton from "@mui/material/ListItemButton";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import supabase from "../../../Hooks/supabase";

function LoginForm() {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  return (
    <Box sx={{ width: "100%", mt: 20 }}>
      <Box
        sx={{
          width: { xs: "90%", sm: "50%", lg: "70%", xl: "70%" },
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: { xs: "grid", sm: "grid", lg: "flex", xl: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4" fontWeight={600} noWrap component="div">
            <span style={{ display: "flex", alignItems: "center" }}>
              <span>
                <span style={{ color: green[500] }}>Web</span>
                <span style={{ color: grey[800] }}>DESA</span>
              </span>
            </span>
          </Typography>
          <Typography>
            Website Resmi <span style={{ color: green[500] }}>Web</span>
            <span style={{ color: grey[800] }}>DESA</span>
          </Typography>
        </Box>
        <Typography
          mt={"74px"}
          variant="h4"
          textAlign={"center"}
          fontWeight={700}
        >
          Selamat Datang
        </Typography>
        <Box mt={10}>
          <Typography variant="h6" fontWeight={400}>
            Masuk ke anda
          </Typography>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (values) => {
              let { user, error } = await supabase.auth.signIn({
                ...values,
              });
              if (!error) {
                window.location.reload();
              }
              if (error) {
                alert("AYOYO, APA SUDAH MACAM!!!!");
              }
            }}
          >
            {({ getFieldProps }) => (
              <Form>
                <Box>
                  {[
                    { name: "email", placeholder: "email", type: "email" },
                    {
                      name: "password",
                      placeholder: "password",
                      type: show ? "text" : "password",
                      icon: show ? (
                        <ListItemButton onClick={() => setShow(!show)}>
                          <VisibilityIcon />
                        </ListItemButton>
                      ) : (
                        <ListItemButton onClick={() => setShow(!show)}>
                          <VisibilityOffIcon />
                        </ListItemButton>
                      ),
                    },
                  ].map((item, index) => (
                    <Box key={index} sx={{ mt: 3 }}>
                      <TextField
                        InputProps={{ endAdornment: item.icon }}
                        fullWidth
                        type={item.type}
                        {...getFieldProps(item.name)}
                        label={item.placeholder}
                      />
                    </Box>
                  ))}
                  <Button
                    type="submit"
                    sx={{ mt: 3 }}
                    variant="contained"
                    fullWidth
                  >
                    Masuk
                  </Button>
                  <Box mt={3}>
                    <Typography textAlign="center">
                      Belum punya akun ?{" "}
                      <Link
                        underline="none"
                        sx={{ cursor: "pointer", ml: 1 }}
                        to="/auth/register"
                        onClick={() => navigate("/auth/register")}
                      >
                        Daftar
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginForm;
