import React, { useContext } from "react";
import {
  Box,
  Checkbox,
  TextField,
  Typography,
  Link,
  Autocomplete,
} from "@mui/material";
import { grey, green } from "@mui/material/colors";
import ListItemButton from "@mui/material/ListItemButton";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Formik, Form } from "formik";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import supabase from "../../../Hooks/supabase";
import LoadingButton from "../../../Component/LoadingButton";
import Notification from "../../../Component/Notification";
import { Notif } from "../../../Hooks/useContextNotification";

function RegisterForm() {
  const { setNotif } = useContext(Notif);
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [dataFetch, setDataFetch] = React.useState([]);
  const getData = async () => {
    const { data } = await supabase.from("VILLAGE").select("*");
    setDataFetch(data);
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
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
        <Box>
          <Typography variant="h6" fontWeight={400}>
            Daftarkan akun anda
          </Typography>
          <Formik
            initialValues={{
              name: "",
              nik: "",
              email: "",
              password: "",
              village_id: "",
            }}
            onSubmit={async (values) => {
              setLoading(true);
              if (
                values.email?.length <= 0 ||
                values.name?.length <= 0 ||
                values.nik?.length <= 0 ||
                values.password?.length <= 0
              ) {
                setNotif((e) => ({
                  ...e,
                  v: true,
                  message: "semua form wajib diisi",
                  variant: "error",
                }));
                setLoading(false);
                return;
              }
              const { user, error } = await supabase.auth.signUp({
                ...values,
              });
              const passwordError = error?.message?.includes("characters");
              const emailError = error?.message?.includes("email");
              const emailExist = error?.message?.includes("already ");
              if (passwordError) {
                setNotif((e) => ({
                  ...e,
                  v: true,
                  message: "minimal password 8 karakter",
                  variant: "error",
                }));
                setLoading(false);
                return;
              } else if (emailError) {
                setNotif((e) => ({
                  ...e,
                  v: true,
                  message: "masukkan email yang valid",
                  variant: "error",
                }));
                setLoading(false);
                return;
              } else if (emailExist) {
                setNotif((e) => ({
                  ...e,
                  v: true,
                  message:
                    "sepertinya email sudah terdaftar. coba masukkan emal lain.",
                  variant: "error",
                }));
                setLoading(false);
                return;
              }
              if (user) {
                setLoading(true);
                setTimeout(async () => {
                  const USER_ID = supabase?.auth.user();
                  console.log(USER_ID?.id);
                  const { data, error } = await supabase
                    .from("USER_DEVELOPMENT")
                    .insert([
                      {
                        user_id: USER_ID?.id,
                        name: values?.name,
                        nik: values?.nik,
                        is_admin: false,
                        village_id: values?.village_id,
                      },
                    ]);
                  setLoading(false);
                  if (error) {
                    setLoading(false);
                    console.log(error?.message);
                  } else {
                    setLoading(true);
                    setNotif((e) => ({
                      ...e,
                      v: true,
                      message:
                        "alkhamdulillah register berhasil brader. mohon ditunggu. . .",
                      variant: "success",
                    }));
                    setTimeout(() => {
                      setLoading(false);
                      navigate("/auth/login");
                    }, 4000);
                  }
                }, 1000);
              }
            }}
          >
            {({ values, getFieldProps, setFieldValue }) => (
              <Form>
                <Box>
                  {[
                    { name: "name", placeholder: "nama", type: "text" },
                    {
                      name: "email",
                      placeholder: "alamat email",
                      type: "email",
                    },
                    { name: "nik", placeholder: "NIK", type: "number" },
                    {
                      name: "address",
                      placeholder: "desa",
                      isAutoComplete: true,
                    },

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
                  ].map((item, index) => {
                    if (item.isAutoComplete) {
                      return (
                        <Autocomplete
                          key={index}
                          disablePortal
                          getOptionLabel={(dataFetch) => dataFetch?.ds || ""}
                          options={dataFetch || []}
                          fullWidth
                          sx={{ mt: 3 }}
                          onChange={(e, i) => {
                            setFieldValue("village_id", i?.id);
                          }}
                          renderInput={(params) => (
                            <TextField {...params} label="pilih desa" />
                          )}
                        />
                      );
                    }
                    return (
                      <Box key={index} sx={{ mt: 3 }}>
                        <TextField
                          InputProps={{ endAdornment: item.icon }}
                          fullWidth
                          type={item.type}
                          {...getFieldProps(item.name)}
                          label={item.placeholder}
                        />
                      </Box>
                    );
                  })}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox />
                    <Typography fontSize={14}>
                      Dengan menyetujui syarat , ketentuan dan kebijakan yang
                      berlaku
                    </Typography>
                  </Box>

                  <LoadingButton
                    fullWidth
                    isLoading={loading}
                    sx={{ mt: 3 }}
                    variant="contained"
                    type="submit"
                    title="Daftar"
                  />
                  <Box mt={3}>
                    <Typography textAlign="center">
                      Sudah punya akun ?{" "}
                      <Link
                        underline="none"
                        sx={{ cursor: "pointer", ml: 1 }}
                        to="/auth/login"
                        onClick={() => navigate("/auth/login")}
                      >
                        Masuk
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

export default RegisterForm;
