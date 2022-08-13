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

function TableComponen({ tableHead, tableBody, isImage, handleClickReply }) {
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
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Box>
                        <img
                          width="90px"
                          style={{ borderRadius: "12px" }}
                          src={body.image}
                        />
                      </Box>
                      <Box>
                        <Typography textTransform="capitalize" fontWeight={600}>
                          {body[head.id]}
                        </Typography>
                        <Typography fontSize={14} color={grey[500]}>
                          NIK : {body.nik}
                        </Typography>
                      </Box>
                    </Box>
                  ) : head.isGrid ? (
                    <Box>
                      <Typography textTransform="capitalize" fontWeight={600}>
                        {body[head.id]}
                      </Typography>
                      <Typography fontSize={14} color={grey[500]}>
                        {body.status}
                      </Typography>
                    </Box>
                  ) : (
                    body[head.id]
                  )}
                </TableCell>
              ))}
              <TableCell sx={{ border: "none" }}>
                <Button
                  onClick={() => handleClickReply(body)}
                  variant="contained"
                >
                  balas
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default TableComponen;
