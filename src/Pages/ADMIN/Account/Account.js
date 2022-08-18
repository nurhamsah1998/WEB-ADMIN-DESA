import React from "react";
import { Box, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import useGetBy from "../../../Hooks/useGetBy";
import MutationUpdate from "../../../Hooks/Mutation/MutationUpdate";
import TableComponen from "../../../Component/TableComponen";
import TransitionsModal from "../../../Component/TransitionsModal";

export const Account = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [btn, setBtn] = React.useState({ index: 0, value: "" });
  const tableHead = [
    {
      id: "name",
      label: "Nama",
    },
    {
      id: "is_verified",
      label: "Status",
    },
  ];

  const { items } = useGetBy({
    module: "USER_DEVELOPMENT",
    filter: "village_id",
    filterby: localStorage.getItem("village-id"),
  });
  const { mutation } = MutationUpdate({
    module: "USER_DEVELOPMENT",
    successMessage: `status ${data.name} berhasil diubah`,
    errorMessage: `status ${data.name} gagal diubah`,
  });
  const y = [
    {
      id: "awaiting",
      label: "Menunggu",
      x: 0,
    },
    {
      id: "denied",
      label: "Ditolak",
      x: 1,
    },
    {
      id: "accepted",
      label: "Diterima",
      x: 2,
    },
  ];
  const verify = (prop) => {
    const x = y.find((i) => i.id === prop);
    return x?.label;
  };
  const dataRebuild = items
    ?.filter((i) => i?.is_admin === false)
    ?.map((i) => ({ ...i, is_verified: verify(i?.is_verified) }));

  const handleClick = (item) => {
    const x = y.find((i) => i.label === item.is_verified);
    setData(item);
    setBtn((i) => ({ index: x?.x, value: item }));
    navigate("?confirm");
  };
  const handleSubmit = () => {
    const body = { ...data, is_verified: btn.value };
    mutation.mutate(body);
    navigate(-1);
    setBtn({ index: 0, value: "" });
  };
  return (
    <Box>
      <TransitionsModal
        title="Konfirmasi Akun"
        handleSubmit={handleSubmit}
        handleClose={() => navigate(-1)}
        open={location.search.includes("?confirm")}
      >
        <Box sx={{ mb: 2 }}>{data.name}</Box>
        <Box sx={{ display: "flex", gap: 3 }}>
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
        <TableComponen
          tableHead={tableHead}
          btnLabel="konfirmasi"
          handleClickReply={handleClick}
          tableBody={dataRebuild}
        />
      </Box>
    </Box>
  );
};
