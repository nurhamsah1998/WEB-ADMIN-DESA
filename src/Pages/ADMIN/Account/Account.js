import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import useGetBy from "../../../Hooks/useGetBy";
import MutationUpdate from "../../../Hooks/Mutation/MutationUpdate";
import TableComponen from "../../../Component/TableComponen";
import TransitionsModal from "../../../Component/TransitionsModal";
import { getStorage } from "../../../utils";
import { blue, grey, orange, red } from "@mui/material/colors";
import Loading from "../../../Component/Loading";
/// stackoverflow
/// question : https://stackoverflow.com/questions/17493309/how-do-i-change-the-language-of-moment-js
/// answer by Agu Dondo : https://stackoverflow.com/users/936703/agu-dondo
import moment from "moment";
import "moment/locale/id";
import TableComponentMobile from "../../../Component/TableComponentMobile";
moment.locale("id");
/// stackoverflow

export const Account = () => {
  const idVillage = getStorage("village-id");
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [btn, setBtn] = React.useState({ index: 0, value: "" });
  const tableHead = [
    {
      id: "name",
      label: "Nama",
      isImage: true,
    },
    {
      id: "created_at",
      label: "Tanggal pendaftaran",
    },
    {
      id: "is_verified",
      label: "Status",
      isStatus: true,
    },
  ];

  const { items, isLoading: loadingFetch } = useGetBy({
    module: "USER_DEVELOPMENT",
    filter: "village_id",
    filterby: idVillage,
  });
  const { mutation, isLoading, onSuccess } = MutationUpdate({
    module: "USER_DEVELOPMENT",
    successMessage: `status ${data.name} berhasil diubah`,
    errorMessage: `status ${data.name} gagal diubah`,
  });
  const y = [
    {
      id: "awaiting",
      label: "Menunggu",
      x: 0,
      color: orange[500],
    },
    {
      id: "denied",
      label: "Ditolak",
      x: 1,
      color: red[500],
    },
    {
      id: "accepted",
      label: "Diterima",
      x: 2,
      color: blue[500],
    },
  ];
  const verify = (prop) => {
    const x = y.find((i) => i.id === prop);
    return x?.label;
  };
  const verifyColor = (prop) => {
    const x = y.find((i) => i.id === prop);
    return x?.color;
  };
  const dataRebuild = items
    ?.filter((i) => i?.is_admin === false)
    ?.map((i) => ({
      ...i,
      is_verified: verify(i?.is_verified),
      color: verifyColor(i?.is_verified),
      created_at: moment(i?.created_at).format("LLLL"),
    }));
  const handleClick = (item) => {
    const x = y.find((i) => i.label === item.is_verified);
    setData(item);
    setBtn((i) => ({ index: x?.x, value: item }));
    navigate("?confirm");
  };
  const handleSubmit = () => {
    if (btn.value === "denied") {
      navigate("?denied");
      return false;
    }
    const body = { ...data, is_verified: btn.value };
    delete body.color;
    delete body.created_at;
    mutation.mutate(body);
    setBtn({ index: 0, value: "" });
  };
  const handleClickCell = (item) => {
    const x = y.find((i) => i.label === item.is_verified);
    setData(item);
    setBtn((i) => ({ index: x?.x, value: item }));
    navigate("?confirm");
  };
  const handleSubmitSendMessageDenied = () => {
    const body = { ...data, is_verified: btn.value, denied_message: value };
    delete body.color;
    delete body.created_at;
    mutation.mutate(body);
  };

  return (
    <Box>
      <Typography mb={3} variant="h6" fontWeight={600} color={grey[700]}>
        Daftar akun yang masuk{" "}
      </Typography>
      <TransitionsModal
        isLoading={isLoading}
        title="Apakah anda yakin ingin menolak?"
        handleSubmit={handleSubmitSendMessageDenied}
        handleClose={() => navigate(-2)}
        open={location.search.includes("?denied")}
      >
        <Typography>
          Tulis alasan penolakan. pesan penolakan ini nantinya akan disampaikan
          ke user yang ditolak
        </Typography>
        <TextField
          value={value}
          onChange={(i) => setValue(i.target.value)}
          fullWidth
        />
      </TransitionsModal>
      <TransitionsModal
        isLoading={isLoading}
        title="Konfirmasi Akun"
        handleSubmit={handleSubmit}
        handleClose={() => navigate(-1)}
        open={location.search.includes("?confirm")}
      >
        <Box sx={{ mb: 2 }}>{data.name}</Box>
        <Box sx={{ display: { sm: "grid", md: "flex", lg: "flex" }, gap: 3 }}>
          {[
            {
              value: "awaiting",
              label: "Diperiksa",
              color: "warning",
            },
            {
              value: "denied",
              label: "Ditolak",
              color: "error",
            },
            {
              value: "accepted",
              label: "Diterima",
              color: "primary",
            },
          ].map((item, index) => (
            <Box key={index}>
              <Button
                sx={{ width: "100%" }}
                onClick={() => {
                  setBtn((i) => ({ index: index, value: item.value }));
                }}
                color={item.color}
                variant={index === btn.index ? "contained" : "outlined"}
              >
                {item.label}
              </Button>
            </Box>
          ))}
        </Box>
      </TransitionsModal>
      <Box mt={1}>
        {loadingFetch ? (
          <Loading />
        ) : (
          <Box>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block", lg: "block" },
              }}
            >
              <TableComponen
                emptyTag="sepertinya tidak ada penduduk yang mendaftar."
                tableHead={tableHead}
                btnLabel="konfirmasi"
                handleClickReply={handleClick}
                tableBody={dataRebuild}
              />
            </Box>
            <Box
              sx={{
                display: { xs: "block", sm: "block", md: "none", lg: "none" },
              }}
            >
              <TableComponentMobile
                emptyTag="sepertinya tidak ada penduduk yang mendaftar."
                tableHead={tableHead}
                handleClickReply={handleClick}
                tableBody={dataRebuild}
                handleClickCell={handleClickCell}
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
