import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import TableComponen from "../../../Component/TableComponen";
import { grey } from "@mui/material/colors";
import { Notif } from "../../../Hooks/useContextNotification";

function Complain() {
  const { setNotif } = useContext(Notif);
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
      id: "comment",
      label: "Komentar",
    },
  ];
  const tableBody = [
    {
      profile: "Marpingah komboran",
      nik: 345345345,
      image:
        "https://images.pexels.com/photos/1608113/pexels-photo-1608113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      comment: '"testing comment"',
      status: "ngaktip",
      program: "PKH",
    },
    {
      profile: "yu siti bakol astor",
      nik: 7456456465,
      image:
        "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      comment: '"testing comment"',
      status: "ngaktip",
      program: "Bantuan",
    },
    {
      profile: "pangat tembel ban",
      nik: 67868786,
      image:
        "https://images.pexels.com/photos/3974749/pexels-photo-3974749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      comment: '"testing comment"',
      status: "ngaktip",
      program: "Pelayanan",
    },
    {
      profile: "pak yatim angkrang",
      nik: 532234558,
      image:
        "https://images.pexels.com/photos/3781984/pexels-photo-3781984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      comment: '"testing comment"',
      status: "ngaktip",
      program: "Emergency",
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
        <TableComponen
          tableHead={tableHead}
          handleClickReply={handleClickReply}
          tableBody={tableBody}
        />
      </Box>
    </Box>
  );
}

export default Complain;
