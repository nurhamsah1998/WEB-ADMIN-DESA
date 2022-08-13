import React from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";

function TableComponen({ tableHead, tableBody, isImage }) {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: grey[300] }}>
            {tableHead?.map((head, index) => (
              <TableCell
                colSpan={index === tableHead?.length - 1 ? 6 : "false"}
                sx={{ fontWeight: 600, border: "none" }}
                key={index}
              >
                {head.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBody?.map((body, index) => (
            <TableRow key={index}>
              {tableHead?.map((head, index) => (
                <TableCell sx={{ border: "none" }} key={index}>
                  {head.isImage ? (
                    <Box>
                      <Box
                        sx={{ width: "20px", height: "30px", bgcolor: "red" }}
                      ></Box>
                      <Box>
                        <Typography>{body[head.id]}</Typography>
                        <Typography>{body.nik}</Typography>
                      </Box>
                    </Box>
                  ) : (
                    body[head.id]
                  )}
                </TableCell>
              ))}
              <TableCell sx={{ border: "none" }}>
                <Button variant="contained">balas</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default TableComponen;
