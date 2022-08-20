import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import TableComponen from "../../../Component/TableComponen";
import { grey } from "@mui/material/colors";
import { Notif } from "../../../Hooks/useContextNotification";
import useGetData from "../../../Hooks/useGetData";
import Loading from "../../../Component/Loading";

function Complain() {
  const { setNotif } = useContext(Notif);
  const { items, isLoading } = useGetData({
    module: "USER_COMPLAINS",
    select: `*,user_development_id:user_development_id(*)`,
  });

  const itemRebuild = items?.map((i) => ({
    ...i,
    profile: i?.user_development_id?.name,
    nik: i?.user_development_id?.nik,
    program: "kukang",
    message: `"${i?.message}"`,
  }));

  console.log(itemRebuild);

  const tableHead = [
    {
      id: "profile",
      label: "Profile",
      isImage: true,
    },
    {
      id: "program",
      label: "Program terakhir",
      isGrid: true,
    },
    {
      id: "message",
      label: "Komentar",
    },
  ];
  const handleClickReply = (i) => {
    setNotif((e) => ({
      ...e,
      v: true,
      message: i?.profile,
      variant: "info",
    }));
  };
  return (
    <Box>
      <Box>
        <Typography>Akun terdaftar</Typography>
        <Typography color={grey[400]} mt={2}>
          100 akun telah terdaftar
        </Typography>
      </Box>
      <Box mt={1}>
        {isLoading ? (
          <Loading />
        ) : (
          <TableComponen
            tableHead={tableHead}
            handleClickReply={handleClickReply}
            tableBody={itemRebuild}
          />
        )}
      </Box>
    </Box>
  );
}

export default Complain;
