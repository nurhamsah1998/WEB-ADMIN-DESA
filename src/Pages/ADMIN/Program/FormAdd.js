import React from "react";
import { Form } from "formik";
import { TextField, Box, Typography } from "@mui/material";

function FormAdd({ getFieldProps }) {
  return (
    <Form>
      {[
        {
          name: "image",
          label: "gambar",
          placeholder: "gambar",
        },
        {
          name: "title",
          label: "judul",
          placeholder: "judul",
        },
        {
          name: "desc",
          label: "diskripsi",
          placeholder: "diskripsi",
        },
      ].map((item, index) => (
        <Box key={index}>
          <Typography sx={{ textTransform: "capitalize" }}>
            {item.label}
          </Typography>
          <TextField
            {...getFieldProps(item.name)}
            fullWidth
            sx={{ mb: 2 }}
            placeholder={item.placeholder}
          />
        </Box>
      ))}
      <button type="submit" style={{ display: "none" }}>
        {null}
      </button>
    </Form>
  );
}

export default FormAdd;
