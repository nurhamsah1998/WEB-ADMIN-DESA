import React from "react";
import { Box, Typography } from "@mui/material";
import TableComponen from "../../../Component/TableComponen";
import { grey } from "@mui/material/colors";

function Complain() {
  const tableHead = [
    {
      id: "profile",
      label: "Profile",
      isImage: true,
    },
    {
      id: "program",
      label: "Program terakhir",
    },
    {
      id: "comment",
      label: "Komentar",
    },
  ];
  const tableBody = [
    {
      profile: "nurhasmah",
      nik: 345345345,
      comment: '"testing comment"',
      program: "PKH",
    },
    {
      profile: "hamsah",
      comment: '"testing comment"',
      program: "Bantuan",
    },
    {
      profile: "minyak",
      comment: '"testing comment"',
      program: "Pelayanan",
    },
    {
      profile: "guulo",
      comment: '"testing comment"',
      program: "Emergency",
    },
  ];
  return (
    <Box>
      <Box>
        <Typography>Akun terdaftar</Typography>
        <Typography color={grey[400]} mt={2}>
          100 akun telah terdaftar
        </Typography>
      </Box>
      <Box mt={1}>
        <TableComponen tableHead={tableHead} tableBody={tableBody} />
      </Box>
    </Box>
  );
}

export default Complain;
